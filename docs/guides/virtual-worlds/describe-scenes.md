---
sidebar_position: 1
---

# Describe Virtual World Scenes

This guide explains how to create metadata for virtual world scenes and environments using MVMD. It covers scene composition, spatial relationships, and interaction properties.

## Essential Properties for Scene Description

Every virtual world scene should include these core properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Place",
  "name": "Forest Clearing",
  "description": "A peaceful forest clearing with ambient sounds and interactive elements. Features a central campfire, surrounding trees, and hidden collectibles.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "SceneID",
    "value": "scene-2024-001"
  },
  "creator": {
    "@type": "Person",
    "name": "Environment Artist",
    "url": "https://example.com/creator"
  },
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/scenes/forest-clearing.usd",
  "encodingFormat": "model/vnd.usd"
}
```

## Scene Composition and Structure

Define the spatial composition and structure of your scene:

```json
"mvmd:sceneComposition": {
  "dimensions": {
    "width": 100,
    "length": 100,
    "height": 30,
    "unit": "meters"
  },
  "scale": "1:1",
  "coordinateSystem": "y-up",
  "origin": [0, 0, 0]
}
```

## Scene Components and Objects

List the key components and objects that make up your scene:

```json
"hasPart": [
  {
    "@type": "CreativeWork",
    "name": "Terrain",
    "contentUrl": "https://example.com/assets/terrain.usd",
    "position": [0, 0, 0],
    "scale": [1, 1, 1]
  },
  {
    "@type": "CreativeWork",
    "name": "Vegetation",
    "contentUrl": "https://example.com/assets/vegetation.usd",
    "position": [0, 0, 0],
    "scale": [1, 1, 1]
  },
  {
    "@type": "CreativeWork",
    "name": "Campfire",
    "contentUrl": "https://example.com/assets/campfire.usd",
    "position": [0, 0.1, 0],
    "scale": [1, 1, 1],
    "potentialAction": {
      "@type": "InteractAction",
      "name": "Light Fire",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "action://light-fire"
      }
    }
  },
  {
    "@type": "CreativeWork",
    "name": "Ambient Wildlife",
    "contentUrl": "https://example.com/assets/wildlife.usd",
    "position": [0, 0, 0],
    "scale": [1, 1, 1]
  }
]
```

## Lighting Information

Describe the lighting setup for your scene:

```json
"mvmd:lighting": {
  "type": "dynamic",
  "timeOfDay": "sunset",
  "sources": [
    {
      "name": "Directional Light",
      "type": "directional",
      "color": "#FFFAEB",
      "intensity": 3.0,
      "direction": [-0.5, -1.0, -0.3]
    },
    {
      "name": "Ambient Light",
      "type": "ambient",
      "color": "#304875",
      "intensity": 0.2
    },
    {
      "name": "Campfire Light",
      "type": "point",
      "color": "#FF7700",
      "intensity": 5.0,
      "position": [0, 1.0, 0],
      "range": 15,
      "castsShadows": true
    }
  ],
  "environmentMap": "https://example.com/textures/forest_sunset_hdri.hdr"
}
```

## Environmental Factors

Include details about the environmental factors of your scene:

```json
"mvmd:environment": {
  "weather": "clear",
  "ambientSound": "https://example.com/audio/forest_ambience.mp3",
  "atmosphericEffects": [
    {
      "type": "fog",
      "density": 0.03,
      "color": "#C0D8FF",
      "startDistance": 50,
      "endDistance": 100
    },
    {
      "type": "particles",
      "name": "Fireflies",
      "density": 0.1,
      "area": [20, 5, 20]
    }
  ],
  "timeControl": {
    "cycleEnabled": true,
    "cycleDuration": 600,
    "startTime": "sunset"
  }
}
```

## Navigation and Boundaries

Define how users can navigate within your scene:

```json
"mvmd:navigation": {
  "walkableSurfaces": [
    {
      "name": "Main Terrain",
      "boundingVolume": "https://example.com/navigation/terrain_navmesh.obj"
    },
    {
      "name": "Bridges",
      "boundingVolume": "https://example.com/navigation/bridges_navmesh.obj"
    }
  ],
  "obstacles": [
    {
      "name": "Trees",
      "boundingVolume": "https://example.com/navigation/trees_colliders.obj"
    },
    {
      "name": "Rocks",
      "boundingVolume": "https://example.com/navigation/rocks_colliders.obj"
    }
  ],
  "spawnPoints": [
    {
      "position": [0, 1, 10],
      "rotation": [0, 180, 0],
      "default": true
    },
    {
      "position": [-15, 1, 5],
      "rotation": [0, 90, 0],
      "name": "Alternate Start"
    }
  ],
  "boundaries": {
    "type": "box",
    "min": [-50, -1, -50],
    "max": [50, 30, 50]
  }
}
```

## Interactive Elements

Document interactive elements within your scene:

```json
"mvmd:interactiveElements": [
  {
    "name": "Campfire",
    "type": "toggleable",
    "position": [0, 0.1, 0],
    "interactionRadius": 3.0,
    "defaultState": "off",
    "states": ["on", "off"],
    "triggers": {
      "on": {
        "visualEffect": "https://example.com/effects/fire.vfx",
        "soundEffect": "https://example.com/sounds/fire_crackling.mp3",
        "lightEffect": "campfireLight"
      }
    }
  },
  {
    "name": "Hidden Treasure Chest",
    "type": "openable",
    "position": [12, 0.2, -8],
    "interactionRadius": 2.0,
    "defaultState": "closed",
    "states": ["open", "closed"],
    "triggers": {
      "open": {
        "animation": "chest_open",
        "soundEffect": "https://example.com/sounds/chest_open.mp3",
        "spawnItem": "ancient_coin"
      }
    },
    "requirements": {
      "item": "rusty_key"
    }
  }
]
```

## Collectibles and Rewards

If your scene includes collectibles or rewards, document them:

```json
"mvmd:collectibles": [
  {
    "name": "Ancient Coin",
    "id": "ancient_coin",
    "position": [12, 0.5, -8],
    "type": "reward",
    "value": 50,
    "model": "https://example.com/items/ancient_coin.glb",
    "thumbnail": "https://example.com/thumbnails/ancient_coin.jpg"
  },
  {
    "name": "Rusty Key",
    "id": "rusty_key",
    "position": [-5, 0.3, 15],
    "type": "key",
    "model": "https://example.com/items/rusty_key.glb",
    "thumbnail": "https://example.com/thumbnails/rusty_key.jpg",
    "unlocks": "hidden_treasure_chest"
  }
]
```

## Audio Landscape

Describe the audio elements in your scene:

```json
"mvmd:audio": {
  "background": {
    "url": "https://example.com/audio/forest_ambience.mp3",
    "volume": 0.7,
    "loop": true
  },
  "positionalAudio": [
    {
      "name": "Creek Sounds",
      "url": "https://example.com/audio/creek_bubbling.mp3",
      "position": [10, 0, -20],
      "radius": 15,
      "falloff": "linear",
      "volume": 1.0,
      "loop": true
    },
    {
      "name": "Wind Through Trees",
      "url": "https://example.com/audio/wind_through_trees.mp3",
      "position": [0, 10, 0],
      "radius": 30,
      "falloff": "exponential",
      "volume": 0.8,
      "loop": true
    }
  ],
  "triggerAudio": [
    {
      "name": "Bird Calls",
      "url": "https://example.com/audio/bird_calls.mp3",
      "triggerType": "random",
      "triggerProbability": 0.01,
      "triggerCooldown": 60,
      "volume": 0.6
    }
  ]
}
```

## Platform Support and Requirements

Specify platform compatibility and requirements:

```json
"mvmd:platformRequirements": {
  "minSpecifications": {
    "gpu": "GTX 1060 or equivalent",
    "memory": "8GB RAM",
    "storage": "500MB available space"
  },
  "supportedPlatforms": [
    "platform-a",
    "platform-b",
    "platform-c"
  ],
  "features": {
    "vrSupport": true,
    "mobileSupport": false,
    "multiplayerSupport": true,
    "maxConcurrentUsers": 16
  },
  "additionalAssets": {
    "downloadUrl": "https://example.com/assets/forest_scene_extras.zip",
    "size": "250MB"
  }
}
```

## Complete Example

Here's a comprehensive example bringing everything together:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Place",
  "name": "Enchanted Forest Clearing",
  "description": "An immersive forest clearing with dynamic lighting, ambient wildlife, and interactive elements including a magical campfire. This scene includes day-night cycles, environmental effects, and hidden collectibles for exploration.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "SceneID",
    "value": "scene-2024-001"
  },
  "creator": {
    "@type": "Person",
    "name": "Environment Artist",
    "url": "https://example.com/creator"
  },
  "dateCreated": "2024-03-15",
  "dateModified": "2024-04-01",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/scenes/enchanted_forest.usd",
  "encodingFormat": "model/vnd.usd",
  
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/forest_thumb.jpg",
    "width": 512,
    "height": 512
  },
  
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/forest_day.jpg",
      "caption": "Daytime view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/forest_night.jpg",
      "caption": "Nighttime view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/forest_campfire.jpg",
      "caption": "Campfire area"
    }
  ],
  
  "mvmd:sceneComposition": {
    "dimensions": {
      "width": 100,
      "length": 100,
      "height": 30,
      "unit": "meters"
    },
    "scale": "1:1",
    "coordinateSystem": "y-up",
    "origin": [0, 0, 0]
  },
  
  "hasPart": [
    {
      "@type": "CreativeWork",
      "name": "Terrain",
      "contentUrl": "https://example.com/assets/forest_terrain.usd",
      "position": [0, 0, 0],
      "scale": [1, 1, 1]
    },
    {
      "@type": "CreativeWork",
      "name": "Trees",
      "contentUrl": "https://example.com/assets/forest_trees.usd",
      "position": [0, 0, 0],
      "scale": [1, 1, 1]
    },
    {
      "@type": "CreativeWork",
      "name": "Creek",
      "contentUrl": "https://example.com/assets/forest_creek.usd",
      "position": [10, 0, -20],
      "scale": [1, 1, 1]
    },
    {
      "@type": "CreativeWork",
      "name": "Campfire",
      "contentUrl": "https://example.com/assets/campfire.usd",
      "position": [0, 0.1, 0],
      "scale": [1, 1, 1]
    },
    {
      "@type": "CreativeWork",
      "name": "Wildlife",
      "contentUrl": "https://example.com/assets/forest_wildlife.usd",
      "position": [0, 0, 0],
      "scale": [1, 1, 1]
    }
  ],
  
  "mvmd:lighting": {
    "type": "dynamic",
    "timeOfDay": "cycle",
    "sources": [
      {
        "name": "Sun",
        "type": "directional",
        "color": "#FFFAEB",
        "intensity": 3.0,
        "direction": [-0.5, -1.0, -0.3]
      },
      {
        "name": "Ambient Light",
        "type": "ambient",
        "color": "#304875",
        "intensity": 0.2
      },
      {
        "name": "Campfire Light",
        "type": "point",
        "color": "#FF7700",
        "intensity": 5.0,
        "position": [0, 1.0, 0],
        "range": 15,
        "castsShadows": true
      },
      {
        "name": "Moon",
        "type": "directional",
        "color": "#C0C0FF",
        "intensity": 1.0,
        "direction": [-0.3, -0.8, 0.1]
      }
    ],
    "environmentMap": "https://example.com/textures/forest_hdri.hdr"
  },
  
  "mvmd:environment": {
    "weather": "dynamic",
    "ambientSound": "https://example.com/audio/forest_ambience.mp3",
    "atmosphericEffects": [
      {
        "type": "fog",
        "density": 0.03,
        "color": "#C0D8FF",
        "startDistance": 50,
        "endDistance": 100
      },
      {
        "type": "particles",
        "name": "Fireflies",
        "density": 0.1,
        "area": [20, 5, 20],
        "activeTime": "night"
      },
      {
        "type": "particles",
        "name": "Pollen",
        "density": 0.05,
        "area": [50, 10, 50],
        "activeTime": "day"
      }
    ],
    "timeControl": {
      "cycleEnabled": true,
      "cycleDuration": 600,
      "startTime": "sunset"
    }
  },
  
  "mvmd:navigation": {
    "walkableSurfaces": [
      {
        "name": "Main Terrain",
        "boundingVolume": "https://example.com/navigation/terrain_navmesh.obj"
      },
      {
        "name": "Bridges",
        "boundingVolume": "https://example.com/navigation/bridges_navmesh.obj"
      }
    ],
    "obstacles": [
      {
        "name": "Trees",
        "boundingVolume": "https://example.com/navigation/trees_colliders.obj"
      },
      {
        "name": "Rocks",
        "boundingVolume": "https://example.com/navigation/rocks_colliders.obj"
      },
      {
        "name": "Creek",
        "boundingVolume": "https://example.com/navigation/creek_collider.obj"
      }
    ],
    "spawnPoints": [
      {
        "position": [0, 1, 10],
        "rotation": [0, 180, 0],
        "default": true
      },
      {
        "position": [-15, 1, 5],
        "rotation": [0, 90, 0],
        "name": "Creek View"
      }
    ],
    "boundaries": {
      "type": "box",
      "min": [-50, -1, -50],
      "max": [50, 30, 50]
    }
  },
  
  "mvmd:interactiveElements": [
    {
      "name": "Campfire",
      "type": "toggleable",
      "position": [0, 0.1, 0],
      "interactionRadius": 3.0,
      "defaultState": "off",
      "states": ["on", "off"],
      "triggers": {
        "on": {
          "visualEffect": "https://example.com/effects/fire.vfx",
          "soundEffect": "https://example.com/sounds/fire_crackling.mp3",
          "lightEffect": "campfireLight"
        }
      }
    },
    {
      "name": "Hidden Treasure Chest",
      "type": "openable",
      "position": [12, 0.2, -8],
      "interactionRadius": 2.0,
      "defaultState": "closed",
      "states": ["open", "closed"],
      "triggers": {
        "open": {
          "animation": "chest_open",
          "soundEffect": "https://example.com/sounds/chest_open.mp3",
          "spawnItem": "ancient_coin"
        }
      },
      "requirements": {
        "item": "rusty_key"
      }
    },
    {
      "name": "Mystical Stone",
      "type": "activatable",
      "position": [-8, 1.0, -5],
      "interactionRadius": 2.0,
      "triggers": {
        "activate": {
          "visualEffect": "https://example.com/effects/magic_glow.vfx",
          "soundEffect": "https://example.com/sounds/magic_hum.mp3"
        }
      }
    }
  ],
  
  "mvmd:collectibles": [
    {
      "name": "Ancient Coin",
      "id": "ancient_coin",
      "position": [12, 0.5, -8],
      "type": "reward",
      "value": 50,
      "model": "https://example.com/items/ancient_coin.glb",
      "thumbnail": "https://example.com/thumbnails/ancient_coin.jpg"
    },
    {
      "name": "Rusty Key",
      "id": "rusty_key",
      "position": [-5, 0.3, 15],
      "type": "key",
      "model": "https://example.com/items/rusty_key.glb",
      "thumbnail": "https://example.com/thumbnails/rusty_key.jpg",
      "unlocks": "hidden_treasure_chest"
    },
    {
      "name": "Magic Feather",
      "id": "magic_feather",
      "position": [-20, 1.5, -15],
      "type": "collectible",
      "model": "https://example.com/items/magic_feather.glb",
      "thumbnail": "https://example.com/thumbnails/magic_feather.jpg"
    }
  ],
  
  "mvmd:audio": {
    "background": {
      "url": "https://example.com/audio/forest_ambience.mp3",
      "volume": 0.7,
      "loop": true
    },
    "positionalAudio": [
      {
        "name": "Creek Sounds",
        "url": "https://example.com/audio/creek_bubbling.mp3",
        "position": [10, 0, -20],
        "radius": 15,
        "falloff": "linear",
        "volume": 1.0,
        "loop": true
      },
      {
        "name": "Wind Through Trees",
        "url": "https://example.com/audio/wind_through_trees.mp3",
        "position": [0, 10, 0],
        "radius": 30,
        "falloff": "exponential",
        "volume": 0.8,
        "loop": true
      }
    ],
    "triggerAudio": [
      {
        "name": "Bird Calls",
        "url": "https://example.com/audio/bird_calls.mp3",
        "triggerType": "random",
        "triggerProbability": 0.01,
        "triggerCooldown": 60,
        "volume": 0.6
      },
      {
        "name": "Owl Hoots",
        "url": "https://example.com/audio/owl_hoots.mp3",
        "triggerType": "timed",
        "triggerTime": "night",
        "triggerInterval": 300,
        "volume": 0.5
      }
    ]
  },
  
  "mvmd:platformRequirements": {
    "minSpecifications": {
      "gpu": "GTX 1060 or equivalent",
      "memory": "8GB RAM",
      "storage": "500MB available space"
    },
    "recommendedSpecifications": {
      "gpu": "RTX 2070 or equivalent",
      "memory": "16GB RAM",
      "storage": "500MB available space"
    },
    "supportedPlatforms": [
      "platform-a",
      "platform-b",
      "platform-c"
    ],
    "features": {
      "vrSupport": true,
      "mobileSupport": false,
      "multiplayerSupport": true,
      "maxConcurrentUsers": 16
    },
    "additionalAssets": {
      "downloadUrl": "https://example.com/assets/forest_scene_extras.zip",
      "size": "250MB"
    }
  }
}
```

## Best Practices for Virtual World Scene Metadata

1. **Be Comprehensive**: Include all relevant aspects of your scene from physical layout to interactive elements.

2. **Prioritize Discoverability**: Use clear names, categories, and keywords to help users find your scene.

3. **Document Interactions**: Clearly define how users can interact with objects in your scene.

4. **Include Technical Requirements**: Help users understand the hardware and software needed to experience your scene.

5. **Add Rich Media**: Include screenshots and videos to showcase your scene's appearance and features.

6. **Structure Your Metadata**: Organize complex scene information into logical sections for clarity.

7. **Define Navigation Information**: Include spawn points, walkable areas, and boundaries.

8. **Document Audio Elements**: Include information about background music, ambient sounds, and triggered audio effects.

## Next Steps

- [Interactable Objects](interactable-objects.md) - Learn how to describe interactive objects within your scenes
- [Virtual World Best Practices](../advanced/world-building.md) - Advanced techniques for creating engaging virtual worlds
- [Validate Your Metadata](../basic/validate-metadata.md) - Ensure your scene metadata is correctly structured

