---
sidebar_position: 2
---

# Composable NFTs

This guide explains how to implement composable NFTs using the MVMD standard, enabling modular, combinable digital assets that can be used across metaverse platforms.

## What Are Composable NFTs?

Composable NFTs are assets built from multiple components that can be combined, separated, or reconfigured while maintaining their unique properties. This composability creates several advantages:

- **Enhanced Utility**: Parts can be mixed and matched for greater versatility
- **Resource Efficiency**: Components can be reused across multiple NFTs
- **User Customization**: Owners can personalize their assets
- **Evolutive Capabilities**: NFTs can change over time as components are added or removed

## Basic Composability Structure

To make an NFT composable, define its component structure using the MVMD namespace:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Modular Space Vehicle #42",
  "description": "A customizable space vehicle with interchangeable components.",
  // Standard NFT properties...
  
  "mvmd:components": {
    "isComposable": true,
    "componentType": "parent",
    "componentLayout": "modular",
    "components": [
      {
        "id": "chassis",
        "name": "Vehicle Chassis",
        "description": "The base frame of the space vehicle",
        "required": true,
        "contentUrl": "https://example.com/components/vehicle-chassis.glb"
      },
      {
        "id": "engine",
        "name": "Quantum Engine",
        "description": "Main propulsion system",
        "required": true,
        "contentUrl": "https://example.com/components/quantum-engine.glb",
        "position": [0, -0.5, -2],
        "rotation": [0, 0, 0],
        "scale": [1, 1, 1]
      },
      {
        "id": "wings",
        "name": "Solar Wings",
        "description": "Extendable solar energy collectors",
        "required": false,
        "contentUrl": "https://example.com/components/solar-wings.glb",
        "position": [0, 0, 0],
        "attachmentPoint": "wing-mount"
      },
      {
        "id": "weapons",
        "name": "Defense Lasers",
        "description": "Defensive weapon system",
        "required": false,
        "contentUrl": "https://example.com/components/defense-lasers.glb",
        "position": [0, 0.8, 1.2],
        "maxInstances": 2
      }
    ]
  }
}
```

This structure defines a parent NFT with four components, each with its own properties, positioning data, and requirements.

## Component Types

There are three main component types in the MVMD composability system:

### 1. Parent Component

The parent is the main container that holds child components:

```json
"mvmd:components": {
  "isComposable": true,
  "componentType": "parent",
  "childrenTypes": ["module", "attachment", "accessory"],
  "maxChildren": 20,
  "equipmentSlots": [
    {
      "id": "engine-bay",
      "name": "Engine Bay",
      "accepts": ["engine"],
      "required": true,
      "position": [0, -0.5, -2]
    },
    {
      "id": "left-wing",
      "name": "Left Wing Mount",
      "accepts": ["wing"],
      "required": false,
      "position": [-3, 0, 0],
      "rotation": [0, 0, 0]
    },
    {
      "id": "right-wing",
      "name": "Right Wing Mount",
      "accepts": ["wing"],
      "required": false,
      "position": [3, 0, 0],
      "rotation": [0, 0, 180]
    }
  ]
}
```

### 2. Child Component

Child components are designed to be attached to a parent:

```json
"mvmd:components": {
  "isComposable": true,
  "componentType": "child",
  "compatibleWith": ["space-vehicle", "starship"],
  "attachmentType": "engine",
  "attachmentPoints": ["engine-bay", "auxiliary-power"],
  "properties": {
    "power": 5000,
    "efficiency": 85,
    "fuel": "quantum"
  }
}
```

### 3. Independent Component

Components that can function both independently and as part of a composition:

```json
"mvmd:components": {
  "isComposable": true,
  "componentType": "independent",
  "standaloneFunctionality": true,
  "compatibleWith": ["space-vehicle", "starship", "station"],
  "attachmentType": "module",
  "properties": {
    "function": "energy-generator",
    "output": 2500
  }
}
```

## Attachment Systems

Define how components connect to each other:

### Socket-Based Attachment

```json
"mvmd:attachmentSystem": {
  "type": "socket",
  "sockets": [
    {
      "id": "head-socket",
      "position": [0, 1.8, 0],
      "rotation": [0, 0, 0],
      "accepts": ["helmet", "hat", "mask"],
      "currentlyEquipped": "helmet-42"
    },
    {
      "id": "back-socket",
      "position": [0, 0.5, -0.3],
      "rotation": [0, 0, 0],
      "accepts": ["backpack", "wings", "jetpack"],
      "currentlyEquipped": "jetpack-7"
    }
  ]
}
```

### Slot-Based Attachment

```json
"mvmd:attachmentSystem": {
  "type": "slot",
  "slots": [
    {
      "id": "weapon-slot-1",
      "type": "primary-weapon",
      "contentUrl": "https://example.com/items/laser-rifle.glb",
      "properties": {
        "damage": 45,
        "range": 100,
        "cooldown": 1.5
      }
    },
    {
      "id": "weapon-slot-2",
      "type": "secondary-weapon",
      "contentUrl": "https://example.com/items/plasma-pistol.glb",
      "properties": {
        "damage": 25,
        "range": 50,
        "cooldown": 0.8
      }
    }
  ]
}
```

## Attribute Inheritance and Modification

Define how component attributes affect the parent NFT:

```json
"mvmd:attributeSystem": {
  "inheritFromComponents": true,
  "attributeCalculation": "additive",
  "baseAttributes": {
    "speed": 10,
    "durability": 100,
    "capacity": 500
  },
  "attributeModifiers": [
    {
      "componentId": "engine-type-a",
      "modifies": "speed",
      "operation": "multiply",
      "value": 1.5
    },
    {
      "componentId": "reinforced-chassis",
      "modifies": "durability",
      "operation": "add",
      "value": 150
    },
    {
      "componentId": "cargo-expansion",
      "modifies": "capacity",
      "operation": "add",
      "value": 250
    }
  ]
}
```

## Visual Customization System

Define how components can be visually customized:

```json
"mvmd:customizationSystem": {
  "supportsCustomization": true,
  "customizableComponents": ["chassis", "wings", "weapons"],
  "customizationOptions": [
    {
      "component": "chassis",
      "property": "color",
      "options": [
        {"name": "Stealth Black", "value": "#121212"},
        {"name": "Solar Gold", "value": "#FFD700"},
        {"name": "Nebula Blue", "value": "#0066CC"}
      ]
    },
    {
      "component": "wings",
      "property": "pattern",
      "options": [
        {"name": "Standard", "value": "pattern-001"},
        {"name": "Striped", "value": "pattern-002"},
        {"name": "Squadron", "value": "pattern-003"}
      ],
      "textureMap": "https://example.com/textures/wing-patterns.jpg"
    },
    {
      "component": "weapons",
      "property": "effect",
      "options": [
        {"name": "Red Beam", "value": "effect-red"},
        {"name": "Blue Plasma", "value": "effect-blue"},
        {"name": "Green Pulse", "value": "effect-green"}
      ]
    }
  ]
}
```

## Component States and Animations

Define component states and animations:

```json
"mvmd:componentBehavior": {
  "componentStates": [
    {
      "componentId": "wings",
      "states": [
        {
          "name": "folded",
          "default": true,
          "animation": "wings-fold",
          "properties": {
            "drag": 0.2,
            "energyCollection": 0.0
          }
        },
        {
          "name": "extended",
          "animation": "wings-extend",
          "properties": {
            "drag": 0.8,
            "energyCollection": 1.0
          }
        }
      ]
    },
    {
      "componentId": "engine",
      "states": [
        {
          "name": "off",
          "default": true
        },
        {
          "name": "idle",
          "animation": "engine-idle",
          "properties": {
            "particleEffect": "engine-standby",
            "soundEffect": "engine-hum-low"
          }
        },
        {
          "name": "active",
          "animation": "engine-active",
          "properties": {
            "particleEffect": "engine-thrust",
            "soundEffect": "engine-thrust-full",
            "lightEffect": {
              "color": "#00AAFF",
              "intensity": 3.0,
              "range": 5.0
            }
          }
        }
      ]
    }
  ]
}
```

## Nested Composability

Support for multi-level component hierarchies:

```json
"mvmd:components": {
  "isComposable": true,
  "componentType": "parent",
  "components": [
    {
      "id": "engine-system",
      "name": "Propulsion System",
      "description": "Complete engine assembly",
      "isComposable": true,
      "componentType": "parent",
      "components": [
        {
          "id": "main-thruster",
          "name": "Main Thruster",
          "required": true
        },
        {
          "id": "fuel-system",
          "name": "Fuel Management",
          "required": true
        },
        {
          "id": "cooling-system",
          "name": "Cooling Array",
          "required": true
        },
        {
          "id": "turbo-booster",
          "name": "Turbo Booster",
          "required": false
        }
      ]
    }
  ]
}
```

## Tokenization Models

There are different approaches to tokenizing composable NFTs:

### 1. Single-Token Model

All components are part of a single NFT token:

```json
"mvmd:tokenization": {
  "model": "single-token",
  "componentRepresentation": "internal",
  "contractAddress": "0x1234567890123456789012345678901234567890",
  "tokenId": "42"
}
```

### 2. Multi-Token Model

Each component is a separate NFT token:

```json
"mvmd:tokenization": {
  "model": "multi-token",
  "componentTokens": [
    {
      "componentId": "chassis",
      "contractAddress": "0x1234567890123456789012345678901234567890",
      "tokenId": "42"
    },
    {
      "componentId": "engine",
      "contractAddress": "0x1234567890123456789012345678901234567890",
      "tokenId": "43"
    },
    {
      "componentId": "wings",
      "contractAddress": "0x9876543210987654321098765432109876543210",
      "tokenId": "12"
    }
  ],
  "compositionContract": "0xABCDEF1234567890ABCDEF1234567890ABCDEF12",
  "compositionId": "7"
}
```

### 3. Hybrid Model

Some components are embedded, some are separate tokens:

```json
"mvmd:tokenization": {
  "model": "hybrid",
  "embeddedComponents": ["chassis", "cockpit"],
  "externalComponents": [
    {
      "componentId": "engine",
      "contractAddress": "0x1234567890123456789012345678901234567890",
      "tokenId": "22"
    },
    {
      "componentId": "weapons",
      "contractAddress": "0x9876543210987654321098765432109876543210",
      "tokenId": "15"
    }
  ]
}
```

## Complete Example

Here's a comprehensive example of a composable NFT representing a customizable avatar:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Cyberspace Avatar: Nexus Runner",
  "description": "A fully customizable and composable avatar for the Nexus virtual world. Features interchangeable components, visual customization, and attribute modifiers.",
  "image": "https://example.com/images/nexus-runner.png",
  "contentUrl": "https://example.com/models/nexus-runner-base.glb",
  "encodingFormat": "model/gltf-binary",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "TokenID",
    "value": "NR-1337"
  },
  "creator": {
    "@type": "Person",
    "name": "Nexus Designs",
    "url": "https://nexusdesigns.io"
  },
  
  "external_url": "https://nexusworld.io/avatars/NR-1337",
  "animation_url": "https://example.com/models/nexus-runner-animated.glb",
  "attributes": [
    {
      "trait_type": "Class",
      "value": "Runner"
    },
    {
      "trait_type": "Rarity",
      "value": "Legendary"
    }
  ],
  
  "mvmd:components": {
    "isComposable": true,
    "componentType": "parent",
    "componentLayout": "humanoid",
    "components": [
      {
        "id": "body",
        "name": "Cybernetic Body",
        "description": "The base humanoid frame",
        "required": true,
        "contentUrl": "https://example.com/components/cyber-body.glb",
        "properties": {
          "bodyType": "athletic",
          "baseAttributes": {
            "strength": 10,
            "agility": 15,
            "endurance": 12
          }
        }
      },
      {
        "id": "head",
        "name": "Neural Interface Helmet",
        "description": "Advanced AR/VR neural interface",
        "required": true,
        "contentUrl": "https://example.com/components/neural-helmet.glb",
        "position": [0, 1.7, 0],
        "properties": {
          "perception": 18,
          "hackingBonus": 25
        }
      },
      {
        "id": "arms",
        "name": "Velocity Arms",
        "description": "Enhanced arm prosthetics for improved reaction time",
        "required": true,
        "contentUrl": "https://example.com/components/velocity-arms.glb",
        "position": [0, 1.2, 0],
        "properties": {
          "dexterity": 20,
          "attackSpeed": 15
        }
      },
      {
        "id": "legs",
        "name": "Graviton Legs",
        "description": "Gravity-defying leg enhancements for superior jumping and running",
        "required": true,
        "contentUrl": "https://example.com/components/graviton-legs.glb",
        "position": [0, 0, 0],
        "properties": {
          "speed": 25,
          "jump": 18
        }
      },
      {
        "id": "back-accessory",
        "name": "Neon Wings",
        "description": "Decorative light wings with minimal gliding capability",
        "required": false,
        "contentUrl": "https://example.com/components/neon-wings.glb",
        "position": [0, 1.3, -0.2],
        "properties": {
          "fallDamageReduction": 30,
          "glideTime": 5
        }
      },
      {
        "id": "hand-right",
        "name": "Data Gauntlet",
        "description": "Advanced hacking tool and interface",
        "required": false,
        "contentUrl": "https://example.com/components/data-gauntlet.glb",
        "position": [0.4, 1.0, 0],
        "properties": {
          "hackingSpeed": 30,
          "dataProtection": 25
        }
      }
    ]
  },
  
  "mvmd:attachmentSystem": {
    "type": "socket",
    "sockets": [
      {
        "id": "head-socket",
        "position": [0, 1.8, 0],
        "accepts": ["helmet", "visor", "mask"],
        "currentlyEquipped": "neural-helmet"
      },
      {
        "id": "back-socket",
        "position": [0, 1.3, -0.2],
        "accepts": ["wings", "jetpack", "backpack"],
        "currentlyEquipped": "neon-wings"
      },
      {
        "id": "arm-right-socket",
        "position": [0.4, 1.0, 0],
        "accepts": ["gauntlet", "weapon", "tool"],
        "currentlyEquipped": "data-gauntlet"
      },
      {
        "id": "arm-left-socket",
        "position": [-0.4, 1.0, 0],
        "accepts": ["shield", "scanner", "tool"],
        "currentlyEquipped": null
      }
    ]
  },
  
  "mvmd:attributeSystem": {
    "inheritFromComponents": true,
    "attributeCalculation": "additive",
    "baseAttributes": {
      "strength": 10,
      "agility": 10,
      "endurance": 10,
      "perception": 10,
      "dexterity": 10,
      "speed": 10,
      "jump": 10,
      "hackingSpeed": 10,
      "dataProtection": 10
    },
    "derivedAttributes": [
      {
        "name": "carryCapacity",
        "formula": "strength * 10",
        "description": "Maximum weight the avatar can carry"
      },
      {
        "name": "maxSpeed",
        "formula": "speed * (1 + (agility / 100))",
        "description": "Maximum movement speed"
      },
      {
        "name": "network_defense",
        "formula": "dataProtection + (perception / 2)",
        "description": "Resistance to hacking attempts"
      }
    ]
  },
  
  "mvmd:customizationSystem": {
    "supportsCustomization": true,
    "customizableComponents": ["body", "head", "arms", "legs", "back-accessory"],
    "customizationOptions": [
      {
        "component": "body",
        "property": "primaryColor",
        "options": [
          {"name": "Matte Black", "value": "#121212"},
          {"name": "Chrome Silver", "value": "#C0C0C0"},
          {"name": "Neon Blue", "value": "#00AAFF"}
        ]
      },
      {
        "component": "body",
        "property": "accentColor",
        "options": [
          {"name": "Neon Pink", "value": "#FF00AA"},
          {"name": "Neon Green", "value": "#00FF66"},
          {"name": "Electric Purple", "value": "#AA00FF"}
        ]
      },
      {
        "component": "neon-wings",
        "property": "pattern",
        "options": [
          {"name": "Solid", "value": "pattern-solid"},
          {"name": "Pulse", "value": "pattern-pulse"},
          {"name": "Data Stream", "value": "pattern-data"}
        ]
      },
      {
        "component": "neural-helmet",
        "property": "visorColor",
        "options": [
          {"name": "Red", "value": "#FF0000"},
          {"name": "Blue", "value": "#0000FF"},
          {"name": "Gold", "value": "#FFD700"}
        ]
      }
    ]
  },
  
  "mvmd:componentBehavior": {
    "componentStates": [
      {
        "componentId": "neon-wings",
        "states": [
          {
            "name": "folded",
            "default": true,
            "animation": "wings-fold"
          },
          {
            "name": "extended",
            "animation": "wings-extend",
            "properties": {
              "glideActive": true,
              "lightEffect": {
                "intensity": 1.5,
                "pattern": "pulse"
              }
            }
          }
        ]
      },
      {
        "componentId": "neural-helmet",
        "states": [
          {
            "name": "standby",
            "default": true
          },
          {
            "name": "scanning",
            "animation": "helmet-scan",
            "properties": {
              "perceptionBoost": 5,
              "energyDrain": 2
            }
          },
          {
            "name": "hacking",
            "animation": "helmet-hack",
            "properties": {
              "hackingBoost": 10,
              "energyDrain": 5,
              "visorEffect": "data-stream"
            }
          }
        ]
      }
    ]
  },
  
  "mvmd:assetVariants": {
    "lowPoly": "https://example.com/models/nexus-runner-lowpoly.glb",
    "highPoly": "https://example.com/models/nexus-runner-highpoly.glb",
    "vr": "https://example.com/models/nexus-runner-vr.glb",
    "ar": "https://example.com/models/nexus-runner-ar.usdz"
  },
  
  "mvmd:compatibility": [
    {
      "platform": "Nexus World",
      "specification": "v2.3"
    },
    {
      "platform": "Metaversity",
      "specification": "v1.5"
    },
    {
      "platform": "CyberRealms",
      "specification": "v3.0",
      "constraints": [
        "Limited component animations",
        "Texture resolution reduction"
      ]
    }
  ],
  
  "mvmd:tokenization": {
    "model": "multi-token",
    "componentTokens": [
      {
        "componentId": "body",
        "contractAddress": "0x1234567890123456789012345678901234567890",
        "tokenId": "NR-B-287",
        "chain": "Ethereum"
      },
      {
        "componentId": "head",
        "contractAddress": "0x1234567890123456789012345678901234567890",
        "tokenId": "NR-H-189",
        "chain": "Ethereum"
      },
      {
        "componentId": "back-accessory",
        "contractAddress": "0x9876543210987654321098765432109876543210",
        "tokenId": "NR-W-042",
        "chain": "Ethereum"
      }
    ],
    "compositionContract": "0xABCDEF1234567890ABCDEF1234567890ABCDEF12",
    "compositionId": "NR-C-1337"
  }
}
```

## Best Practices for Composable NFTs

1. **Design for Modularity**: Create clearly defined attachment points and interfaces between components.

2. **Balance Flexibility and Constraints**: Allow creativity but provide constraints to ensure components work together properly.

3. **Define Clear Inheritance Rules**: Establish how component attributes affect the parent NFT's overall properties.

4. **Plan Tokenization Carefully**: Choose a tokenization model that best suits your use case and blockchain considerations.

5. **Validate Component Combinations**: Include validation rules to prevent incompatible combinations.

6. **Document Connection Points**: Clearly define how and where components connect to each other.

7. **Consider Cross-Platform Compatibility**: Design components to work across different metaverse platforms.

8. **Design for Performance**: Optimize component models to minimize performance impacts when multiple components are combined.

9. **Plan for Upgradability**: Consider how your composable system might evolve over time and design with future expansion in mind.

10. **Test Combinations Thoroughly**: Test various component combinations to ensure they work together seamlessly.

## Next Steps

- [Prepare NFT Metadata](prepare-nft-metadata.md) - Review the basics of NFT metadata preparation
- [Add Royalty Information](add-royalty-information.md) - Learn how to implement royalty structures for your NFTs
- [Validate Your Metadata](../basic/validate-metadata.md) - Ensure your composable NFT metadata is correctly structured

