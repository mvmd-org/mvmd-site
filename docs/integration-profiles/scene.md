---
sidebar_position: 11
---

> **PROPOSED STATE**: This integration profile is currently in a proposed state and is under community review. The specification may change based on feedback and implementation experience.

# Scene

The Scene Recipe extends the Environment Recipe with specific properties for interactive scenes and staged environments. This profile combines spatial, interactive, and performance properties to define complex virtual scenes.

## Core Structure

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "Place",

  "name": "Virtual Theater",
  "description": "Interactive theater space with dynamic lighting and stage effects",

  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "scene-2024-001"
  }
}
```

## Required Properties

### Basic Information
- `@context`
- `@type`: Must be "Place"
- `name`
- `description`
- `identifier`
- `creator`
- `contentUrl`
- `encodingFormat`

### Scene Properties
- Spatial configuration
- Lighting setup
- Interactive elements
- Performance settings
- Event triggers

## Scene Configuration

### Spatial Layout
```json
{
  "spatialProperties": {
    "dimensions": {
      "width": 50,
      "length": 30,
      "height": 15,
      "unit": "meters"
    },
    "areas": [
      {
        "name": "stage",
        "type": "performance",
        "position": [0, 0, 0],
        "dimensions": [20, 15, 10]
      },
      {
        "name": "audience",
        "type": "seating",
        "position": [0, 0, -15],
        "dimensions": [30, 20, 5],
        "capacity": 200
      }
    ]
  }
}
```

### Lighting System
```json
{
  "lighting": {
    "ambient": {
      "color": [0.2, 0.2, 0.2],
      "intensity": 0.5
    },
    "fixtures": [
      {
        "name": "main_spot",
        "type": "spotlight",
        "position": [0, 10, 0],
        "color": [1, 1, 1],
        "intensity": 1.0,
        "animation": "spotlight_sequence"
      }
    ],
    "presets": [
      {
        "name": "performance",
        "ambient": 0.2,
        "fixtures": {
          "main_spot": 1.0,
          "side_lights": 0.8
        }
      },
      {
        "name": "intermission",
        "ambient": 0.5,
        "fixtures": {
          "main_spot": 0.0,
          "side_lights": 0.4
        }
      }
    ]
  },

  "effects": {
    "particle_systems": [
      {
        "name": "smoke",
        "type": "volumetric",
        "position": [0, 0, 0],
        "maxParticles": 1000,
        "triggers": ["scene_start", "manual"]
      },
      {
        "name": "sparkles",
        "type": "sprite",
        "position": [0, 5, 0],
        "maxParticles": 500,
        "triggers": ["effect_cue"]
      }
    ],
    "sound": [
      {
        "name": "ambient",
        "type": "background",
        "source": "audio/ambient.mp3",
        "volume": 0.3,
        "loop": true
      },
      {
        "name": "applause",
        "type": "effect",
        "source": "audio/applause.mp3",
        "volume": 0.8,
        "triggers": ["scene_end"]
      }
    ]
  },

  "interactivity": {
    "triggers": [
      {
        "name": "scene_start",
        "type": "event",
        "actions": [
          {
            "target": "curtain",
            "action": "open",
            "duration": 5.0
          },
          {
            "target": "lighting",
            "action": "preset",
            "value": "performance"
          }
        ]
      },
      {
        "name": "scene_end",
        "type": "event",
        "actions": [
          {
            "target": "curtain",
            "action": "close",
            "duration": 5.0
          },
          {
            "target": "lighting",
            "action": "preset",
            "value": "intermission"
          }
        ]
      }
    ],
    "controls": [
      {
        "name": "lighting_control",
        "type": "interface",
        "access": "operator",
        "actions": ["preset_select", "intensity_adjust", "color_adjust"]
      },
      {
        "name": "effect_control",
        "type": "interface",
        "access": "operator",
        "actions": ["trigger_effect", "adjust_parameters"]
      }
    ]
  },

  "performance": {
    "recommended": {
      "maxConcurrentUsers": 250,
      "minBandwidth": "10Mbps",
      "minRAM": "4GB",
      "recommendedGPU": "GTX 1060 or better"
    },
    "optimization": {
      "lod_levels": 3,
      "culling_distance": 50,
      "max_visible_lights": 8,
      "max_active_effects": 4
    }
  }
}
{
  "name": "performance",
  "ambient": 0.2,
  "fixtures": {
    "main_spot": 1.0
  }
}
]
}
}
```

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "Place",
  
  "name": "Interactive Theater",
  "description": "Full-featured virtual theater with dynamic staging and effects",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "scene-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Venues Inc.",
    "url": "https://example.com/virtual-venues"
  },
  
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/scenes/theater.usd",
  "encodingFormat": "model/vnd.usd",
  
  "spatialProperties": {
    "dimensions": {
      "width": 50,
      "length": 30,
      "height": 15,
      "unit": "meters"
    },
    "areas": [
      {
        "name": "stage",
        "type": "performance",
        "position": [0, 0, 0],
        "dimensions": [20, 15, 10],
        "interactiveElements": ["curtain", "props", "effects"]
      },
      {
        "name": "audience",
        "type": "seating",
        "position": [0, 0, -15],
        "dimensions": [30, 20, 5],
        "capacity": 200,
        "seatingLayout": "theater_style"
      },
      {
        "name": "backstage",
        "type": "preparation",
        "position": [0, 0, 10],
        "dimensions": [20, 10, 10],
        "access": "restricted"
      }
    ]
  },
  
  "lighting": {
    "ambient": {
      "color": [0.2, 0.2, 0.2],
      "intensity": 0.5
    },
    "fixtures": [
      {
        "name": "main_spot",
        "type": "spotlight",
        "position": [0, 10, 0],
        "color": [1, 1, 1],
        "intensity": 1.0,
        "animation": "spotlight_sequence"
      },
      {
        "name": "side_lights",
        "type": "floodlight",
        "position": [5, 8, 0],
        "color": [0.9, 0.7, 0.5],
        "intensity": 0.8
      }
    ],
    "presets": [
