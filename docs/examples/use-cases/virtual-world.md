---
sidebar_position: 1
---

# Virtual World Example

This example demonstrates how to implement MVMD metadata for a complete virtual world environment, including scene descriptions, interactable objects, and navigation elements.

## Virtual World: Fantasy Realm "Eldoria"

Below is a complete metadata example for a fantasy realm virtual world called "Eldoria":

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Eldoria: The Enchanted Realm",
  "description": "A sprawling fantasy world with ancient forests, magical mountains, and hidden mystical locations. This virtual world features dynamic weather systems, day/night cycles, and interactive elements throughout the landscape.",
  "creator": {
    "@type": "Organization",
    "name": "Mystic Worlds Studio",
    "url": "https://mysticworlds.studio"
  },
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  
  "mvmd:worldType": "fantasy",
  "mvmd:worldScale": {
    "dimensions": [10000, 2000, 10000],
    "unit": "meters"
  },
  
  "mvmd:environment": {
    "sky": {
      "type": "dynamic",
      "dayCycle": {
        "duration": 60,
        "durationUnit": "minutes",
        "sunriseTime": 0.25,
        "sunsetTime": 0.75
      },
      "weather": {
        "systems": ["rain", "fog", "clear", "storm"],
        "dynamicTransitions": true,
        "areaSpecific": true
      },
      "celestialBodies": [
        {
          "name": "Sun",
          "type": "primary",
          "color": "#FFF4E5",
          "intensity": 1.2
        },
        {
          "name": "Lumina",
          "type": "moon",
          "phases": true,
          "color": "#E1EBFF",
          "intensity": 0.4
        },
        {
          "name": "Shadra",
          "type": "moon",
          "phases": true,
          "color": "#BFA8D3",
          "intensity": 0.2
        }
      ]
    },
    "terrain": {
      "baseHeightmap": "https://example.com/worlds/eldoria/heightmap.png",
      "resolution": [1024, 1024],
      "biomes": [
        {
          "name": "Whispering Forest",
          "type": "forest",
          "coverage": 0.35,
          "dominant_colors": ["#1A5E1A", "#0E3E0E", "#B69B4C"],
          "ambientSound": "https://example.com/worlds/eldoria/audio/forest_ambience.mp3"
        },
        {
          "name": "Crystalpeaks",
          "type": "mountains",
          "coverage": 0.2,
          "dominant_colors": ["#757575", "#60B0E8", "#FFFFFF"],
          "ambientSound": "https://example.com/worlds/eldoria/audio/mountain_wind.mp3"
        },
        {
          "name": "Glimmersands Desert",
          "type": "desert",
          "coverage": 0.15,
          "dominant_colors": ["#E8C380", "#D4A76A", "#F5DA9C"],
          "ambientSound": "https://example.com/worlds/eldoria/audio/desert_wind.mp3"
        },
        {
          "name": "Mistmeadow Valley",
          "type": "grassland",
          "coverage": 0.3,
          "dominant_colors": ["#7ABA45", "#92CF5F", "#F5EABC"],
          "ambientSound": "https://example.com/worlds/eldoria/audio/meadow_ambience.mp3"
        }
      ]
    },
    "water": {
      "bodies": [
        {
          "name": "Sapphire Lake",
          "type": "lake",
          "position": [5000, 500, 5000],
          "dimensions": [1500, 50, 1200],
          "properties": {
            "color": "#1A45E0",
            "transparency": 0.7,
            "reflectivity": 0.8,
            "wavesEnabled": true,
            "swimEnabled": true
          }
        },
        {
          "name": "Silvermist River",
          "type": "river",
          "spline": "https://example.com/worlds/eldoria/splines/river_main.json",
          "width": 30,
          "depth": 5,
          "properties": {
            "color": "#5280E8",
            "transparency": 0.8,
            "flowSpeed": 1.2,
            "reflectivity": 0.7,
            "soundEffect": "https://example.com/worlds/eldoria/audio/river_flow.mp3"
          }
        }
      ]
    },
    "vegetation": {
      "trees": [
        {
          "name": "Ancient Oak",
          "model": "https://example.com/worlds/eldoria/vegetation/ancient_oak.glb",
          "biomes": ["Whispering Forest"],
          "density": 0.4,
          "variationCount": 4,
          "scaleRange": [0.8, 1.3]
        },
        {
          "name": "Crystal Pine",
          "model": "https://example.com/worlds/eldoria/vegetation/crystal_pine.glb",
          "biomes": ["Crystalpeaks"],
          "density": 0.2,
          "variationCount": 3,
          "scaleRange": [0.9, 1.2]
        }
      ],
      "groundCover": [
        {
          "name": "Forest Ferns",
          "model": "https://example.com/worlds/eldoria/vegetation/ferns.glb",
          "biomes": ["Whispering Forest"],
          "density": 0.7,
          "clustered": true,
          "interactivePhysics": false
        },
        {
          "name": "Meadow Flowers",
          "model": "https://example.com/worlds/eldoria/vegetation/meadow_flowers.glb",
          "biomes": ["Mistmeadow Valley"],
          "density": 0.6,
          "colorVariations": ["#FF5757", "#FFBD59", "#D462FF", "#5CE1E6"],
          "emissive": false
        }
      ]
    },
    "lighting": {
      "globalIllumination": {
        "enabled": true,
        "type": "dynamic",
        "bounces": 3
      },
      "postProcessing": {
        "bloom": true,
        "ambientOcclusion": true,
        "volumetricFog": true
      },
      "areaLights": [
        {
          "name": "Forest Glowshrooms",
          "position": [3500, 510, 4200],
          "radius": 300,
          "color": "#42F5BC",
          "intensity": 0.6,
          "particleEffect": "spores",
          "activeDuringDaylight": false
        }
      ]
    },
    "ambience": {
      "globalSoundtrack": {
        "day": "https://example.com/worlds/eldoria/audio/eldoria_day_theme.mp3",
        "night": "https://example.com/worlds/eldoria/audio/eldoria_night_theme.mp3",
        "battle": "https://example.com/worlds/eldoria/audio/eldoria_battle_theme.mp3",
        "crossfade": true
      },
      "ambientSounds": true,
      "echoAreas": [
        {
          "zone": "Crystal Caves",
          "reverbPreset": "large_cave",
          "boundaries": [4200, 550, 3800, 4500, 650, 4100]
        }
      ]
    }
  },
  
  "mvmd:locations": [
    {
      "name": "Eldoria City",
      "type": "settlement",
      "position": [5000, 520, 4800],
      "description": "The central hub city with merchant districts, player housing, and social gathering areas.",
      "boundaries": {
        "shape": "circle",
        "radius": 500
      },
      "navMarker": {
        "icon": "https://example.com/worlds/eldoria/icons/city.png",
        "visibleFromDistance": 2000,
        "minimapVisible": true
      },
      "contentUrl": "https://example.com/worlds/eldoria/locations/eldoria_city.glb",
      "childLocations": [
        {
          "name": "Great Market",
          "type": "market",
          "position": [4800, 520, 4850],
          "description": "A bustling market where players can trade and buy items from NPCs.",
          "activities": ["shopping", "trading", "socializing"]
        },
        {
          "name": "Arcane Academy",
          "type": "landmark",
          "position": [5200, 525, 4700],
          "description": "A school of magic where players can learn and practice spells.",
          "activities": ["learning", "spell-practice"]
        }
      ]
    },
    {
      "name": "Crystal Caves",
      "type": "dungeon",
      "position": [4300, 600, 3900],
      "description": "A vast network of underground caves filled with glowing crystals and challenging enemies.",
      "difficulty": "medium",
      "recommendedLevel": 15,
      "rewards": ["crystal_shards", "luminous_essence", "cave_map"],
      "entrances": [
        {
          "position": [4350, 610, 3920],
          "requirements": null,
          "portalEffect": "crystal_shimmer"
        },
        {
          "position": [4250, 630, 3880],
          "requirements": {
            "quest": "find_secret_entrance",
            "completed": true
          },
          "portalEffect": null
        }
      ]
    }
  ],
  
  "mvmd:interactables": [
    {
      "id": "ancient_portal",
      "name": "Ancient Portal",
      "type": "portal",
      "position": [4800, 530, 4300],
      "description": "A mysterious ancient portal that can transport players to distant areas.",
      "contentUrl": "https://example.com/worlds/eldoria/objects/ancient_portal.glb",
      "thumbnail": "https://example.com/worlds/eldoria/thumbnails/ancient_portal.jpg",
      "interactions": {
        "activationType": "proximity",
        "activationRadius": 3,
        "promptText": "Press E to use portal",
        "cooldown": 60,
        "destinations": [
          {
            "name": "Mountain Peak",
            "position": [7500, 1500, 2500],
            "unlockRequirement": null
          },
          {
            "name": "Desert Oasis",
            "position": [2500, 480, 8500],
            "unlockRequirement": {
              "quest": "desert_explorer",
              "completed": true
            }
          }
        ],
        "effectOnUse": {
          "visual": "portal_swirl",
          "sound": "https://example.com/worlds/eldoria/audio/portal_activate.mp3",
          "particlesColor": "#7B42F5"
        }
      },
      "states": [
        {
          "name": "inactive",
          "default": true,
          "appearance": "dormant",
          "animation": null
        },
        {
          "name": "active",
          "appearance": "glowing",
          "animation": "portal_idle",
          "emissiveColor": "#7B42F5",
          "particleEffect": "magic_particles"
        },
        {
          "name": "teleporting",
          "appearance": "open",
          "animation": "portal_open",
          "duration": 3,
          "transitionTo": "active"
        }
      ]
    },
    {
      "id": "enchanted_chest",
      "name": "Enchanted Treasure Chest",
      "type": "container",
      "position": [5120, 530, 4600],
      "description": "A magical chest that contains valuable treasures.",
      "contentUrl": "https://example.com/worlds/eldoria/objects/enchanted_chest.glb",
      "respawnTime": 3600,
      "interactions": {
        "activationType": "interact",
        "promptText": "Press E to open",
        "requirements": {
          "item": "ancient_key",
          "consumeOnUse": true
        }
      },
      "states": [
        {
          "name": "closed",
          "default": true,
          "animation": null
        },
        {
          "name": "opening",
          "animation": "chest_open",
          "sound": "https://example.com/worlds/eldoria/audio/chest_open.mp3",
          "particle": "dust",
          "duration": 1.5,
          "transitionTo": "open" 
        },
        {
          "name": "open",
          "animation": "chest_idle_open",
          "lootGeneration": {
            "method": "random",
            "items": [
              {
                "id": "gold_coins",
                "chance": 100,
                "amount": [50, 200]
              },
              {
                "id": "magic_scroll",
                "chance": 30,
                "quality": ["common", "uncommon", "rare"]
              },
              {
                "id": "enchanted_gem",
                "chance": 10,
                "variants": ["ruby", "sapphire", "emerald", "diamond"]
              }
            ]
          }
        }
      ]
    }
  ],
  
  "mvmd:navigation": {
    "pathfinding": {
      "method": "navmesh",
      "url": "https://example.com/worlds/eldoria/navmesh/world_navmesh.bin",
      "regions": [
        {
          "name": "land",
          "movementSpeed": 1.0,
          "restrictions": null
        },
        {
          "name": "water",
          "movementSpeed": 0.5,
          "restrictions": {
            "requiresAbility": "swimming"
          }
        },
        {
          "name": "mountains",
          "movementSpeed": 0.7,
          "restrictions": null
        }
      ]
    },
    "teleports": [
      {
        "name": "City Waypoint",
        "position": [5000, 530, 4800],
        "icon": "https://example.com/worlds/eldoria/icons/waypoint.png",
        "unlockMethod": "discovery"
      },
      {
        "name": "Forest Sanctuary",
        "position": [3600, 510, 4100],
        "icon": "https://example.com/worlds/eldoria/icons/waypoint.png",
        "unlockMethod": "discovery"
      }
    ],
    "worldBoundaries": {
      "type": "soft",
      "warning": {
        "distance": 100,
        "message": "You are approaching the edge of Eldoria.",
        "effect": "fog_increase"
      },
      "boundary": {
        "shape": "rectangle",
        "corners": [
          [0, 0, 0],
          [10000, 0, 0],
          [10000, 0, 10000],
          [0, 0, 10000]
        ]
      }
    }
  },
  
  "mvmd:multiplayer": {
    "maxPlayers": 1000,
    "instances": {
      "type": "dynamic",
      "maxPlayersPerInstance": 100,
      "overflow": "create_new"
    },
    "socialSpaces": [
      {
        "name": "Town Square",
        "location": [5000, 520, 4830],
        "radius": 100,
        "features": ["text_chat", "voice_chat", "emotes", "group_forming"]
      }
    ],
    "playerInteractions": ["trade", "duel", "group", "guild", "friend"],
    "sharedProgress": true
  },
  
  "mvmd:technical": {
    "minRequirements": {
      "cpu": "Intel i5 or equivalent",
      "gpu": "GTX 1060 or equivalent",
      "ram": "8 GB",
      "storage": "10 GB",
      "internetSpeed": "10 Mbps"
    },
    "recommendedRequirements": {
      "cpu": "Intel i7 or equivalent",
      "gpu": "RTX 2070 or equivalent",
      "ram": "16 GB",
      "storage": "10 GB",
      "internetSpeed": "25 Mbps"
    },
    "platforms": ["Windows", "macOS", "Linux"],
    "engineVersion": "Unity 2022.2",
    "serverRegions": ["us-east", "us-west", "eu-central", "asia-east"]
  }
}
```

## Key Components of the Virtual World Metadata

### World Environment Definition

The `mvmd:environment` section defines the world's physical characteristics:

- **Sky**: Dynamic day/night cycle, weather systems, and celestial bodies
- **Terrain**: Height maps, biomes with distinct characteristics
- **Water**: Lakes, rivers, and oceans with physical properties
- **Vegetation**: Trees, plants, and ground cover with distribution patterns
- **Lighting**: Global illumination settings, post-processing effects
- **Ambience**: Sound design, music, and atmospheric effects

### Locations and Points of Interest

The `mvmd:locations` array defines named areas within the world:

- Cities, settlements, and landmarks
- Dungeons, quests, and challenge areas
- Points of interest with descriptions and activities
- Hierarchical structure with parent and child locations

### Interactive Objects

The `mvmd:interactables` array defines objects players can interact with:

- Portals for transportation
- Containers (chests, crates) with loot
- Puzzles and mechanisms
- NPCs and shops
- Vehicles and mounts

Each interactable includes:
- Physical properties (position, model)
- Interaction methods and requirements
- Multiple states and animations
- Visual and audio feedback

### Navigation Systems

The `mvmd:navigation` section defines how players move through the world:

- Pathfinding methods and navigation meshes
- Teleportation networks and waypoints
- World boundaries and constraints
- Region-specific movement properties

### Multiplayer Features

The `mvmd:multiplayer` section defines online interactions:

- Player capacity and instancing
- Social spaces and features
- Player-to-player interactions
- Shared progression systems

## Best Practices for Virtual World Metadata

1. **Organize hierarchically**: Group related components logically.

2. **Define clear boundaries**: Properly establish world limits and area boundaries.

3. **Balance detail levels**: Include enough detail to be useful without overwhelming.

4. **Plan for scale**: Design metadata that can handle both small and large environments.

5. **Document dependencies**: Clearly indicate relationships between world elements.

6. **Standardize coordinates**: Use consistent coordinate systems and units.

7. **Support discovery**: Implement progressive revelation of world elements.

8. **Consider performance**: Include performance-related metadata like LODs and optimization hints.

## Implementation Considerations

When implementing this metadata for your virtual world:

- Store the complete world definition in a central database.
- Break large worlds into manageable chunks or zones.
- Consider dynamic loading of metadata based on player location.
- Implement caching strategies for frequently accessed metadata.
- Version your metadata to support world evolution over time.
- Provide fallbacks for missing or corrupted metadata.

This example demonstrates how MVMD can comprehensively describe a complex virtual world with all its components, allowing for interoperability, discoverability, and rich player experiences across metaverse platforms.

