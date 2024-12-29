---
sidebar_position: 3
---

# X3D Standard

X3D (Extensible 3D) is a royalty-free, open standards file format and run-time architecture for representing and communicating 3D scenes and objects. Developed by the Web3D Consortium, X3D serves as the successor to the Virtual Reality Modeling Language (VRML), offering enhanced features and extensibility for real-time interactive 3D graphics on the web.
Web3D

For detailed information, you can refer to the official X3D specifications: [X3D Specifications](https://www.web3d.org/standards/number/19775-1)

## Core Properties

### Scene Structure

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "x3d": "https://www.web3d.org/documents/specifications/19775-1/V4.0/index.html"
  },
  "@type": "3DModel",
  "name": "Web Scene",
  
  "x3d:scene": {
    "profile": "Interchange",
    "version": "4.0",
    "units": {
      "length": "meters",
      "angle": "radians"
    },
    "metadata": {
      "title": "Interactive Web Scene",
      "creator": "Virtual Web Studios",
      "created": "2024-03-15"
    }
  }
}
```

### Interactive Elements

```json
{
  "x3d:interaction": {
    "sensors": [
      {
        "type": "TouchSensor",
        "name": "button1",
        "description": "Interactive button",
        "enabled": true
      },
      {
        "type": "ProximitySensor",
        "name": "zone1",
        "center": [0, 0, 0],
        "size": [10, 10, 10]
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
    "x3d": "https://www.web3d.org/documents/specifications/19775-1/V4.0/index.html"
  },
  "@type": "3DModel",
  "name": "Interactive Web Gallery",
  "description": "Web-based virtual art gallery with interactive displays",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "webscene-2024-001"
  },
  
  "x3d:scene": {
    "profile": "Interchange",
    "version": "4.0",
    "units": {
      "length": "meters",
      "angle": "radians",
      "time": "seconds"
    },
    "metadata": {
      "title": "Virtual Art Gallery",
      "creator": "Virtual Web Studios",
      "created": "2024-03-15",
      "modified": "2024-03-15",
      "copyright": "© 2024 Virtual Web Studios"
    }
  },
  
  "x3d:viewpoints": [
    {
      "name": "Entry",
      "position": [0, 1.6, 10],
      "orientation": [0, 1, 0, 0],
      "description": "Gallery Entrance",
      "fieldOfView": 0.785398
    },
    {
      "name": "MainHall",
      "position": [0, 1.6, 0],
      "orientation": [0, 1, 0, 1.5708],
      "description": "Main Gallery Hall"
    }
  ],
  
  "x3d:lighting": {
    "ambient": {
      "color": [0.2, 0.2, 0.2],
      "intensity": 0.3
    },
    "directional": [
      {
        "name": "mainLight",
        "color": [1, 1, 1],
        "intensity": 0.8,
        "direction": [-1, -1, -1]
      }
    ],
    "point": [
      {
        "name": "spotlight1",
        "color": [1, 1, 0.9],
        "location": [2, 3, 0],
        "radius": 10
      }
    ]
  },
  
  "x3d:interaction": {
    "sensors": [
      {
        "type": "TouchSensor",
        "name": "artwork1",
        "description": "Interactive Artwork Display",
        "enabled": true
      },
      {
        "type": "ProximitySensor",
        "name": "galleryZone1",
        "center": [0, 0, 0],
        "size": [20, 5, 20],
        "enabled": true
      }
    ],
    "timeSensors": [
      {
        "name": "rotation1",
        "cycleInterval": 6.0,
        "loop": true
      }
    ],
    "scripts": [
      {
        "name": "displayHandler",
        "url": "handlers/display.js",
        "inputEvents": ["artwork1_touched"],
        "outputEvents": ["update_display"]
      }
    ]
  },
  
  "x3d:appearance": {
    "materials": [
      {
        "name": "wallMaterial",
        "diffuseColor": [0.9, 0.9, 0.9],
        "specularColor": [0.1, 0.1, 0.1],
        "transparency": 0.0
      }
    ],
    "textures": [
      {
        "name": "floorTexture",
        "url": "textures/marble.jpg",
        "repeatS": true,
        "repeatT": true
      }
    ]
  },
  
  "x3d:animation": {
    "interpolators": [
      {
        "type": "PositionInterpolator",
        "name": "moveDisplay",
        "key": [0, 0.5, 1],
        "keyValue": [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0]
        ]
      }
    ],
    "routes": [
      {
        "from": "rotation1.fraction_changed",
        "to": "moveDisplay.set_fraction"
      }
    ]
  },
  
  "x3d:rendering": {
    "background": {
      "skyColor": [[0.2, 0.2, 0.3]],
      "groundColor": [[0.1, 0.1, 0.1]]
    },
    "fog": {
      "color": [0.2, 0.2, 0.3],
      "visibilityRange": 100
    },
    "navigationInfo": {
      "type": "WALK",
      "speed": 1.0,
      "headlight": true
    }
  }
}
```

## Property Guidelines

### Scene Properties
- Define proper profile
- Set correct version
- Specify units
- Include metadata
- Configure viewpoints

### Interaction Properties
- Define clear sensors
- Set proper triggers
- Configure animations
- Specify handlers
- Include routes

### Appearance Properties
- Define materials
- Configure textures
- Set lighting
- Include effects
- Manage resources

## Best Practices

1. **Scene Organization**
    - Logical structure
    - Clear hierarchy
    - Efficient grouping
    - Proper naming
    - Resource management

2. **Interaction Design**
    - User-friendly sensors
    - Clear feedback
    - Efficient handling
    - Proper timing
    - Error management

3. **Performance Optimization**
    - Resource loading
    - Level of detail
    - Event handling
    - Memory management
    - Render efficiency

4. **Web Integration**
    - Browser compatibility
    - Resource loading
    - Event handling
    - DOM integration
    - Security considerations

## Integration Examples

### With glTF Models
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "x3d": "https://www.web3d.org/documents/specifications/19775-1/V4.0/index.html",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Web Asset",
  
  "x3d:scene": {
    "profile": "Interchange",
    "version": "4.0"
  },
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "WebModelBuilder 1.0"
  }
}
```

### With Interactive Environments
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "x3d": "https://www.web3d.org/documents/specifications/19775-1/V4.0/index.html",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "Place",
  "name": "Web Environment",
  
  "x3d:interaction": {
    "sensors": [
      {
        "type": "TouchSensor",
        "name": "trigger1"
      }
    ]
  },
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  }
}
```

## Validation Rules

### Required Properties
- Valid scene profile
- Proper version
- Unit definitions
- Basic metadata
- Scene structure

### Optional Properties
- Interaction sensors
- Animation data
- Appearance settings
- Rendering config
- Script handlers

## Common Issues

1. **Resource Management**
    - Loading optimization
    - Memory usage
    - Asset caching
    - Event cleanup
    - Reference handling

2. **Browser Compatibility**
    - Feature detection
    - Fallback handling
    - Performance varies
    - Event differences
    - DOM integration

## Next Steps

- Review [Environment Profile](/implementation/metadata-profiles/environment-profile.md) for integration
- See [glTF Standard](./gltf.md) for model optimization
- Check [Validation Tools](../tools/validation.md) for testing
