---
sidebar_position: 3
---

# Virtual Environment Example

This example demonstrates a complete implementation of metadata for a virtual environment following the Scene Profile. It integrates Schema.org with USD and other environment-specific standards.

## Complete Metadata Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/ns/",
    "gltf": "https://www.khronos.org/gltf/",
    "geo": "http://www.opengis.net/ont/geosparql#",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": ["3DModel", "Place"],
  "@id": "https://example.com/environments/sci-fi-hub",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "EnvironmentID",
    "value": "env-2024-042"
  },
  "name": "Orbital Science Hub",
  "description": "A futuristic space station environment featuring multiple interconnected modules, research facilities, and observation decks. This fully interactive environment includes animated elements, ambient sound design, and customizable lighting scenarios.",
  "creator": {
    "@type": "Organization",
    "name": "Environment Studios",
    "url": "https://example.com/studios/environment"
  },
  "dateCreated": "2024-01-10",
  "dateModified": "2024-04-01",
  "license": "https://creativecommons.org/licenses/by-sa/4.0/",
  
  "contentUrl": "https://example.com/environments/orbital-hub.usd",
  "encodingFormat": "model/vnd.usd",
  "contentSize": "85.7MB",
  
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/orbital-hub.jpg",
    "width": 1024,
    "height": 576
  },
  
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/hub-exterior.jpg",
      "caption": "Exterior view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/hub-command.jpg",
      "caption": "Command center"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/hub-lab.jpg",
      "caption": "Research laboratory"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/hub-observation.jpg",
      "caption": "Observation deck"
    }
  ],
  
  "keywords": ["space station", "sci-fi", "futuristic", "laboratory", "virtual environment", "space"],
  "category": ["Virtual Environment", "Science Fiction", "Space"],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "capacity",
      "name": "User Capacity",
      "value": 25
    },
    {
      "@type": "PropertyValue",
      "propertyID": "dimensions",
      "name": "Dimensions",
      "value": "120m x 80m x 30m"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "polyCount",
      "name": "Polygon Count",
      "value": 3500000
    },
    {
      "@type": "PropertyValue",
      "propertyID": "lightingType",
      "name": "Lighting Type",
      "value": "dynamic"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "navMeshType",
      "name": "Navigation Mesh Type",
      "value": "multi-level"
    }
  ],
  
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Command Module",
      "contentUrl": "https://example.com/parts/command-module.usd",
      "encodingFormat": "model/vnd.usd",
      "description": "Central command and control area with consoles and holographic displays",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "moduleType",
          "name": "Module Type",
          "value": "command"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "capacity",
          "name": "User Capacity",
          "value": 8
        }
      ]
    },
    {
      "@type": "3DModel",
      "name": "Research Laboratory",
      "contentUrl": "https://example.com/parts/lab-module.usd",
      "encodingFormat": "model/vnd.usd",
      "description": "Scientific research area with interactive equipment and specimens",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "moduleType",
          "name": "Module Type",
          "value": "laboratory"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "capacity",
          "name": "User Capacity",
          "value": 6
        }
      ]
    },
    {
      "@type": "3DModel",
      "name": "Observation Deck",
      "contentUrl": "https://example.com/parts/observation-module.usd",
      "encodingFormat": "model/vnd.usd",
      "description": "Panoramic viewing area with large windows overlooking space",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "moduleType",
          "name": "Module Type",
          "value": "observation"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "capacity",
          "name": "User Capacity",
          "value": 12
        }
      ]
    },
    {
      "@type": "3DModel",
      "name": "Residential Quarters",
      "contentUrl": "https://example.com/parts/living-module.usd",
      "encodingFormat": "model/vnd.usd",
      "description": "Living spaces with customizable rooms and amenities",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "moduleType",
          "name": "Module Type",
          "value": "residential"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "capacity",
          "name": "User Capacity",
          "value": 10
        }
      ]
    }
  ],
  
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Environment Map",
      "contentUrl": "https://example.com/textures/space-hdri.exr",
      "encodingFormat": "image/x-exr"
    },
    {
      "@type": "AudioObject",
      "name": "Ambient Sound Loop",
      "contentUrl": "https://example.com/audio/station-ambient.mp3",
      "encodingFormat": "audio/mpeg",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "audioType",
          "name": "Audio Type",
          "value": "ambient"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "duration",
          "name": "Duration",
          "value": "4:30"
        }
      ]
    },
    {
      "@type": "AudioObject",
      "name": "Interface Sounds",
      "contentUrl": "https://example.com/audio/interface-sfx.mp3",
      "encodingFormat": "audio/mpeg",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "audioType",
          "name": "Audio Type",
          "value": "interaction"
        }
      ]
    }
  ],
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0,
    "timeCodesPerSecond": 24,
    "defaultPrim": "OrbitalHub"
  },
  
  "usd:renderSettings": {
    "rendererName": "HdStorm",
    "resolution": [1920, 1080],
    "aspectRatio": 1.7777777777777777,
    "clearColor": [0.0, 0.0, 0.0, 1.0]
  },
  
  "usd:physics": {
    "gravity": [0.0, 0.0, 0.0],  // Zero gravity environment
    "enabled": true
  },
  
  "mvmd:interactivity": {
    "interactiveElements": [
      "consoles", 
      "doors", 
      "elevators", 
      "laboratory-equipment", 
      "holographic-displays", 
      "lighting-controls"
    ],
    "soundZones": [
      "command-center",
      "laboratory",
      "observation-deck",
      "residential",
      "corridors"
    ],
    "navigation": "free-movement",
    "interactionMethods": ["controller", "hand-tracking", "gaze"],
    "features": {
      "voiceCommands": true,
      "artificialGravity": true,
      "dayNightCycle": true,
      "dynamicEvents": ["space-phenomena", "emergency-simulation", "visitor-arrivals"]
    }
  },
  
  "geo:spatialRelations": {
    "orbitalPosition": "Low Earth Orbit",
    "altitude": "420km"
  },
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "Environment Studio Creator 2.0"
  },
  
  "mvmd:compatibility": {
    "platforms": [
      "platform-a",
      "platform-b",
      "platform-c",
      "platform-d",
      "platform-e"
    ],
    "renderers": ["vulkan", "metal", "opengl"],
    "deviceTypes": ["pc", "vr", "ar", "mobile-high-end"],
    "minSpecifications": {
      "gpu": "rtx2070 or equivalent",
      "cpu": "4 cores, 3.0GHz",
      "ram": "8GB",
      "vram": "6GB"
    }
  },
  
  "potentialAction": [
    {
      "@type": "ViewAction",
      "name": "Explore Environment",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://example.com/explore?env=orbital-hub"
      }
    },
    {
      "@type": "JoinAction",
      "name": "Join Multiplayer Session",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://example.com/join?env=orbital-hub"
      }
    },
    {
      "@type": "ControlAction",
      "name": "Configure Environment",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://example.com/configure?env=orbital-hub"
      }
    }
  ]
}
```

## Explanation By Section

### Core Identity Properties

```json
"@context": {
  "@vocab": "https://schema.org/",
  "usd": "https://openusd.org/ns/",
  "gltf": "https://www.khronos.org/gltf/",
  "geo": "http://www.opengis.net/ont/geosparql#",
  "mvmd": "https://mvmd.org/v1/"
},
"@type": ["3DModel", "Place"],
"@id": "https://example.com/environments/sci-fi-hub",
"identifier": {
  "@type": "PropertyValue",
  "propertyID": "EnvironmentID",
  "value": "env-2024-042"
},
"name": "Orbital Science Hub",
"description": "A futuristic space station environment featuring multiple interconnected modules, research facilities, and observation decks. This fully interactive environment includes animated elements, ambient sound design, and customizable lighting scenarios."
```

This section establishes:
- **Context**: Sets Schema.org as the default vocabulary and adds USD, glTF, GeoSPARQL, and MVMD namespaces
- **Type**: Defines this as both a 3D model and a place
- **Identifier**: Provides a unique, persistent identifier for the environment
- **Name and Description**: Gives a clear title and detailed description of the environment's features

### Component Modules

```json
"hasPart": [
  {
    "@type": "3DModel",
    "name": "Command Module",
    "contentUrl": "https://example.com/parts/command-module.usd",
    "encodingFormat": "model/vnd.usd",
    "description": "Central command and control area with consoles and holographic displays",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "propertyID": "moduleType",
        "name": "Module Type",
        "value": "command"
      },
      {
        "@type": "PropertyValue",
        "propertyID": "capacity",
        "name": "User Capacity",
        "value": 8
      }
    ]
  },
  // Additional modules...
]
```

This section defines:
- **Environment Sections**: Major areas within the virtual environment
- **Component Metadata**: Details about each module's purpose and capacity
- **Component Files**: Links to the actual component model files

### USD-Specific Properties

```json
"usd:stage": {
  "upAxis": "Y",
  "metersPerUnit": 1.0,
  "timeCodesPerSecond": 24,
  "defaultPrim": "OrbitalHub"
},

"usd:renderSettings": {
  "rendererName": "HdStorm",
  "resolution": [1920, 1080],
  "aspectRatio": 1.7777777777777777,
  "clearColor": [0.0, 0.0, 0.0, 1.0]
},

"usd:physics": {
  "gravity": [0.0, 0.0, 0.0],  // Zero gravity environment
  "enabled": true
}
```

This section provides:
- **USD Stage Information**: Core settings for the USD scene
- **Render Settings**: Default display configuration
- **Physics Properties**: Simulation settings like gravity values

### Interactive Features

```json
"mvmd:interactivity": {
  "interactiveElements": [
    "consoles", 
    "doors", 
    "elevators", 
    "laboratory-equipment", 
    "holographic-displays", 
    "lighting-controls"
  ],
  "soundZones": [
    "command-center",
    "laboratory",
    "observation-deck",
    "residential",
    "corridors"
  ],
  "navigation": "free-movement",
  "interactionMethods": ["controller", "hand-tracking", "gaze"],
  "features": {
    "voiceCommands": true,
    "artificialGravity": true,
    "dayNightCycle": true,
    "dynamicEvents": ["space-phenomena", "emergency-simulation", "visitor-arrivals"]
  }
}
```

This section details:
- **Interactive Objects**: Elements users can interact with
- **Audio Features**: Sound zones for spatial audio
- **Navigation Method**: How users move through the environment
- **Interaction Types**: Methods for user interaction
- **Special Features**: Unique capabilities of the environment

### Platform Compatibility

```json
"mvmd:compatibility": {
  "platforms": [
    "platform-a",
    "platform-b",
    "platform-c",
    "platform-d",
    "platform-e"
  ],
  "renderers": ["vulkan", "metal", "opengl"],
  "deviceTypes": ["pc", "vr", "ar", "mobile-high-end"],
  "minSpecifications": {
    "gpu": "rtx2070 or equivalent",
    "cpu": "4 cores, 3.0GHz",
    "ram": "8GB",
    "vram": "6GB"
  }
}
```

This section provides:
- **Compatible Platforms**: Which platforms support this environment
- **Rendering APIs**: Compatible rendering technologies
- **Device Support**: Types of devices that can run the environment
- **Hardware Requirements**: Minimum specifications needed

### Associated Media

```json
"associatedMedia": [
  {
    "@type": "ImageObject",
    "name": "Environment Map",
    "contentUrl": "https://example.com/textures/space-hdri.exr",
    "encodingFormat": "image/x-exr"
  },
  {
    "@type": "AudioObject",
    "name": "Ambient Sound Loop",
    "contentUrl": "https://example.com/audio/station-ambient.mp3",
    "encodingFormat": "audio/mpeg",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "propertyID": "audioType",
        "name": "Audio Type",
        "value": "ambient"
      },
      {
        "@type": "PropertyValue",
        "propertyID": "duration",
        "name": "Duration",
        "value": "4:30"
      }
    ]
  },
  // Additional media...
]
```

This section includes:
- **Environmental Textures**: Special textures like HDRIs
- **Audio Elements**: Sound files for ambience and interactions
- **Additional Media Properties**: Details about audio types and duration

### User Actions

```json
"potentialAction": [
  {
    "@type": "ViewAction",
    "name": "Explore Environment",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/explore?env=orbital-hub"
    }
  },
  {
    "@type": "JoinAction",
    "name": "Join Multiplayer Session",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/join?env=orbital-hub"
    }
  },
  {
    "@type": "ControlAction",
    "name": "Configure Environment",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/configure?env=orbital-hub"
    }
  }
]
```

This section provides:
- **Exploration Options**: Ways to explore the environment
- **Multiplayer Features**: Options for joining with others
- **Configuration Tools**: Ways to customize the environment

## Implementation Notes

### Environment Setup

When implementing virtual environments with this metadata:

1. **Modular Structure**: Organize the environment in logical modules for easier loading
2. **Level of Detail**: Implement LOD systems for optimal performance
3. **Occlusion Culling**: Configure proper visibility systems for complex spaces
4. **Physics Optimization**: Balance physical simulation with performance requirements

### Integration Strategies

This metadata supports several integration approaches:

1. **Full Environment Loading**: Loading the entire environment at once
2. **Progressive Loading**: Loading modules based on user proximity
3. **Level Streaming**: Dynamic loading/unloading of sections
4. **Instance Management**: Supporting multiple instances for different user groups

### Performance Considerations

For optimal environment performance:

1. **Asset Optimization**: Balance detail with performance requirements
2. **Texture Streaming**: Implement progressive texture loading
3. **Audio Management**: Use 3D spatial audio with distance attenuation
4. **Interaction Prioritization**: Focus interactivity on key elements

## Next Steps

After implementing environment metadata:

- Test your environment across different platforms to ensure compatibility
- Create user guides explaining the interactive features
- Consider creating variants with different themes or configurations
- Implement dynamic events that leverage the environment's unique features

For other complex examples, see:
- [Basic Asset Example](./basic-asset.md)
- [Avatar Profile Example](./avatar-profile.md)
- [NFT Asset Example](./nft-asset.md) 