---
sidebar_position: 1
---

# Describe Virtual World Scenes

This guide explains how to create metadata for virtual world scenes using the MVMD standard, ensuring compatibility and discoverability across metaverse platforms.

## Overview

Virtual world scenes are complex environments that combine multiple elements:

- Spatial structure and boundaries
- Interactive objects and elements
- Environmental properties (lighting, physics, audio)
- Navigation and accessibility information
- Platform-specific requirements

Proper metadata ensures scenes can be discovered, loaded, and experienced consistently across platforms.

## Essential Properties for Scene Description

Every virtual world scene should include these core metadata properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Enchanted Forest Plaza",
  "description": "A mystical forest clearing with interactive elements and ambient sounds.",
  "encodingFormat": "model/gltf-binary",
  "contentUrl": "https://example.com/scenes/forest-plaza.glb",
  "mvmd:category": "scene",
  "mvmd:sceneType": "outdoor"
}
```

## Scene Composition and Structure

Define the overall layout and structure of your scene:

```json
{
  "mvmd:sceneComposition": {
    "scale": "1:1", 
    "dimensions": {
      "width": 100,
      "height": 35,
      "depth": 100
    },
    "boundingBox": {
      "min": [-50, 0, -50],
      "max": [50, 35, 50]
    },
    "origin": [0, 0, 0],
    "upAxis": "Y"
  }
}
```

## Components and Objects

Document the key components and objects within your scene:

```json
{
  "mvmd:sceneComponents": [
    {
      "id": "terrain",
      "name": "Forest Floor",
      "type": "environment",
      "position": [0, 0, 0]
    },
    {
      "id": "trees",
      "name": "Tree Collection",
      "type": "environment",
      "count": 42,
      "distribution": "natural"
    },
    {
      "id": "central-fountain",
      "name": "Magic Fountain",
      "type": "interactable",
      "position": [0, 1, 0],
      "interactionType": "proximity",
      "interactionRange": 3
    },
    {
      "id": "ambient-creatures",
      "name": "Forest Creatures",
      "type": "autonomous",
      "behavior": "ambient",
      "count": 12
    }
  ]
}
```

## Lighting Information

Describe the lighting setup in your virtual world:

```json
{
  "mvmd:lighting": {
    "mode": "dynamic",
    "timeOfDay": "dusk",
    "sources": [
      {
        "id": "sun",
        "type": "directional",
        "color": "#FDB813",
        "intensity": 0.7,
        "direction": [-0.5, -1, -0.2]
      },
      {
        "id": "fountain-glow",
        "type": "point",
        "color": "#4DF0FF",
        "intensity": 2.0,
        "position": [0, 3, 0],
        "range": 10,
        "castsShadows": true
      },
      {
        "id": "ambient",
        "type": "ambient",
        "color": "#2C3E50",
        "intensity": 0.3
      }
    ],
    "shadows": true,
    "shadowQuality": "high"
  }
}
```

## Environmental Factors

Define environmental elements and effects:

```json
{
  "mvmd:environment": {
    "skybox": "https://example.com/textures/forest-sky.hdr",
    "fog": {
      "type": "exponential",
      "color": "#8FA5BC",
      "density": 0.03,
      "start": 10,
      "end": 100
    },
    "weather": {
      "type": "particle",
      "effect": "light-rain",
      "intensity": 0.4
    },
    "ambientEffects": [
      {
        "id": "floating-particles",
        "type": "particle",
        "effect": "fireflies",
        "regions": [
          {"center": [10, 1, 15], "radius": 8},
          {"center": [-15, 1, -5], "radius": 5}
        ]
      },
      {
        "id": "fountain-spray",
        "type": "particle",
        "effect": "water-mist",
        "position": [0, 2, 0],
        "radius": 3
      }
    ]
  }
}
```

## Navigation and Boundaries

Document navigation paths, boundaries, and points of interest:

```json
{
  "mvmd:navigation": {
    "spawnPoints": [
      {"position": [0, 1, 25], "rotation": [0, 3.14, 0], "default": true},
      {"position": [-20, 1, 15], "rotation": [0, 2.35, 0], "name": "East Path"}
    ],
    "navMesh": "https://example.com/scenes/forest-plaza-navmesh.bin",
    "boundaries": {
      "type": "invisible-wall",
      "points": [
        [-50, 0, -50], [50, 0, -50], [50, 0, 50], [-50, 0, 50], [-50, 0, -50]
      ]
    },
    "pointsOfInterest": [
      {
        "id": "fountain",
        "name": "Magic Fountain",
        "position": [0, 1, 0],
        "description": "A mystical fountain with magical properties",
        "markerType": "highlight"
      },
      {
        "id": "ancient-tree",
        "name": "Ancient Oak",
        "position": [-25, 0, 15],
        "description": "A thousand-year-old tree with glowing runes",
        "markerType": "icon"
      }
    ]
  }
}
```

## Interactive Elements

Describe interactive elements and their behaviors:

```json
{
  "mvmd:interactions": {
    "interactableObjects": [
      {
        "id": "central-fountain",
        "type": "activatable",
        "activationType": "proximity",
        "range": 3,
        "actions": [
          {
            "name": "activate",
            "effect": "particle",
            "effectDetails": "water-glow-increase",
            "soundEffect": "magic-chime"
          }
        ]
      },
      {
        "id": "forest-door",
        "type": "portal",
        "position": [-40, 1, 0],
        "destination": {
          "scene": "underground-cavern",
          "position": [0, 1, 0]
        },
        "activationType": "interaction",
        "requiresItem": "ancient-key"
      }
    ],
    "triggers": [
      {
        "id": "forest-music",
        "type": "region",
        "shape": "sphere",
        "position": [0, 5, 0],
        "radius": 30,
        "action": "play-audio",
        "target": "ambient-forest-theme",
        "mode": "once"
      }
    ]
  }
}
```

## Collectibles and Rewards

Document collectible items and rewards:

```json
{
  "mvmd:collectibles": [
    {
      "id": "magic-mushroom",
      "name": "Glowing Mushroom",
      "type": "resource",
      "positions": [
        [10, 0, 5], [15, 0, -8], [-5, 0, 12], [-20, 0, -15]
      ],
      "respawns": true,
      "respawnTime": 300,
      "effect": "health-boost"
    },
    {
      "id": "ancient-key",
      "name": "Ancient Runic Key",
      "type": "quest-item",
      "position": [35, 1, 25],
      "respawns": false,
      "requirement": "complete-fountain-puzzle"
    }
  ]
}
```

## Audio Landscape

Define the audio elements in your scene:

```json
{
  "mvmd:audioElements": {
    "ambient": [
      {
        "id": "ambient-forest-theme",
        "url": "https://example.com/audio/forest-ambient.mp3",
        "volume": 0.4,
        "loop": true,
        "spatial": false
      },
      {
        "id": "forest-creatures",
        "url": "https://example.com/audio/forest-creatures.mp3",
        "volume": 0.2,
        "loop": true,
        "spatial": true,
        "position": [0, 5, 0],
        "radius": 50
      }
    ],
    "positional": [
      {
        "id": "fountain-bubbling",
        "url": "https://example.com/audio/fountain-loop.mp3",
        "position": [0, 1, 0],
        "radius": 15,
        "falloff": "logarithmic",
        "loop": true
      },
      {
        "id": "wind-through-trees",
        "positions": [
          [25, 10, 25], [-25, 10, 25], [25, 10, -25], [-25, 10, -25]
        ],
        "url": "https://example.com/audio/wind-trees.mp3",
        "radius": 20,
        "volume": 0.3,
        "loop": true
      }
    ]
  }
}
```

## Platform Support and Requirements

Define which platforms are supported and their specific requirements:

```json
{
  "mvmd:platformRequirements": {
    "minSpecification": {
      "gpu": "mid-range",
      "memory": "4GB",
      "storage": "150MB"
    },
    "supportedPlatforms": [
      {
        "name": "Unity WebGL",
        "version": "2021.2+",
        "features": ["all"]
      },
      {
        "name": "Unreal Web",
        "version": "5.0+",
        "features": ["all"]
      },
      {
        "name": "Mobile AR",
        "version": "latest",
        "features": ["basic-visualization", "limited-interaction"],
        "limitations": ["reduced-lighting", "simplified-geometry"]
      }
    ]
  }
}
```

## Complete Example

Here's a more complete example of a virtual world scene metadata structure (some sections abbreviated for clarity):

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Enchanted Forest Plaza",
  "description": "A mystical forest clearing with interactive elements and ambient sounds.",
  "creator": {
    "@type": "Person",
    "name": "Virtual Worlds Design Team",
    "url": "https://example.com/design-team"
  },
  "dateCreated": "2023-06-15",
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "encodingFormat": "model/gltf-binary",
  "contentUrl": "https://example.com/scenes/forest-plaza.glb",
  
  "mvmd:category": "scene",
  "mvmd:sceneType": "outdoor",
  "mvmd:version": "1.2",
  
  "mvmd:sceneComposition": {
    "scale": "1:1",
    "dimensions": {
      "width": 100,
      "height": 35,
      "depth": 100
    },
    "boundingBox": {
      "min": [-50, 0, -50],
      "max": [50, 35, 50]
    },
    "origin": [0, 0, 0],
    "upAxis": "Y"
  },
  
  "mvmd:sceneComponents": [
    {
      "id": "terrain",
      "name": "Forest Floor",
      "type": "environment",
      "position": [0, 0, 0]
    },
    {
      "id": "central-fountain",
      "name": "Magic Fountain",
      "type": "interactable",
      "position": [0, 1, 0],
      "interactionType": "proximity",
      "interactionRange": 3
    }
    // Additional components omitted for brevity
  ],
  
  "mvmd:lighting": {
    "mode": "dynamic",
    "timeOfDay": "dusk",
    "sources": [
      {
        "id": "sun",
        "type": "directional",
        "color": "#FDB813",
        "intensity": 0.7,
        "direction": [-0.5, -1, -0.2]
      }
      // Additional light sources omitted for brevity
    ],
    "shadows": true,
    "shadowQuality": "high"
  },
  
  // Environment, navigation, interactions, etc. sections omitted for brevity
  
  "mvmd:relatedAssets": [
    {
      "id": "high-quality-render",
      "url": "https://example.com/images/forest-plaza-hq.jpg",
      "type": "image",
      "purpose": "promotion"
    },
    {
      "id": "video-flythrough",
      "url": "https://example.com/videos/forest-plaza-tour.mp4",
      "type": "video",
      "purpose": "preview"
    },
    {
      "id": "separate-collision-mesh",
      "url": "https://example.com/scenes/forest-plaza-collision.glb",
      "type": "model",
      "purpose": "physics"
    }
  ]
}
```

## Best Practices for Virtual World Scene Metadata

1. **Be Comprehensive** - Include as much detail as practical about your scene to enhance compatibility
2. **Prioritize Discoverability** - Add descriptive keywords and categorization to make your scene findable
3. **Document Interactions** - Clearly define all interactive elements and their behaviors
4. **Include Technical Requirements** - Specify minimum hardware and software needed for optimal experience
5. **Add Rich Media** - Include thumbnails, previews, and reference material for better representation
6. **Structure Your Metadata** - Organize properties logically to facilitate understanding
7. **Define Navigation Information** - Include spawn points, boundaries, and points of interest
8. **Document Audio Elements** - Specify both ambient and positional audio sources

## Next Steps

- [Create Interactable Objects](interactable-objects.md) - Learn how to define interactive objects in detail
- [Advanced World Building](../advanced/construct-complex-metadata.md) - Discover advanced techniques for complex virtual environments
- [Validate Your Metadata](../basic/validate-metadata.md) - Ensure your scene metadata is correctly structured
- [Integration Profile: Scene](../../integration-profiles/scene.md) - Review the full scene profile specification
- [Integration Profile: Interactable](../../integration-profiles/interactable.md) - Learn more about interactable object standards

