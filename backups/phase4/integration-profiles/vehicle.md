---
sidebar_position: 4
---

> **PROPOSED STATE**: This integration profile is currently in a proposed state and is under community review. The specification may change based on feedback and implementation experience.

# Vehicle Integration Profile

The Vehicle Integration Profile extends the Basic Profile with properties specific to vehicles, mounts, and other transportation elements in virtual environments. This profile combines physical simulation, interaction capabilities, and customization options to create rich vehicle experiences.

## Core Structure

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  
  "name": "Hover Bike",
  "description": "Futuristic single-rider hover bike with customizable components",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "vehicle-2024-001"
  },
  
  "vehicleType": "hover",
  "passengerCapacity": 1,
  "controlType": "direct"
}
```

## Required Properties

### Basic Information
- `@context`
- `@type`: Must be "3DModel"
- `name`
- `description`
- `identifier`
- `creator`
- `contentUrl`
- `encodingFormat`

### Vehicle Properties
- Vehicle type
- Passenger capacity
- Control systems
- Physics properties
- Animation sets

## Technical Specifications

### Physics Configuration
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "physics": {
    "mass": 250,
    "centerOfMass": [0, 0.3, 0],
    "dimensions": [2.5, 1.0, 1.2],
    "propulsion": {
      "type": "hover",
      "maxSpeed": 80,
      "acceleration": 15,
      "braking": 25
    },
    "handling": {
      "turnRadius": 3.5,
      "stability": 0.8,
      "friction": 0.2
    }
  }
}
```

### Passenger Configuration
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "passengers": {
    "capacity": 2,
    "seatingArrangement": "tandem",
    "mountPoints": [
      {
        "role": "driver",
        "position": [0, 1.0, 0.2],
        "rotation": [0, 0, 0, 1],
        "animations": ["drive", "idle", "enter", "exit"]
      },
      {
        "role": "passenger",
        "position": [0, 1.0, -0.6],
        "rotation": [0, 0, 0, 1],
        "animations": ["sit", "idle", "enter", "exit"]
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
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  
  "name": "Desert Racer",
  "description": "High-speed hover vehicle designed for rough terrain with customizable components",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "vehicle-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Vehicles Inc.",
    "url": "https://example.com/virtual-vehicles"
  },
  
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/vehicles/desert-racer.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": "https://example.com/thumbnails/desert-racer.jpg",
  
  "vehicleType": "hover",
  "passengerCapacity": 2,
  "controlType": "direct",
  
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Chassis",
      "contentUrl": "https://example.com/vehicles/parts/chassis.glb",
      "position": [0, 0, 0],
      "partType": "chassis",
      "required": true
    },
    {
      "@type": "3DModel",
      "name": "Engine",
      "contentUrl": "https://example.com/vehicles/parts/engine.glb",
      "position": [0, 0.2, -0.5],
      "partType": "engine",
      "performance": {
        "power": 250,
        "efficiency": 0.8,
        "weight": 120
      }
    },
    {
      "@type": "3DModel",
      "name": "Hover Pods",
      "contentUrl": "https://example.com/vehicles/parts/hover-pods.glb",
      "position": [0, 0, 0],
      "partType": "propulsion",
      "performance": {
        "thrust": 500,
        "stability": 0.85,
        "weight": 80
      }
    }
  ],
  
  "physics": {
    "mass": 450,
    "centerOfMass": [0, 0.3, 0],
    "dimensions": [3.5, 1.2, 2.0],
    "colliders": [
      {
        "type": "box",
        "position": [0, 0.5, 0],
        "dimensions": [3.0, 0.8, 1.8]
      }
    ],
    "propulsion": {
      "type": "hover",
      "hoverHeight": 0.8,
      "maxSpeed": 120,
      "acceleration": 18,
      "braking": 25,
      "terrainFollowing": true,
      "maxInclination": 45
    },
    "handling": {
      "turnRadius": 4.5,
      "stability": 0.75,
      "friction": 0.3,
      "gripFactor": 0.85,
      "driftFactor": 0.2
    }
  },
  
  "passengers": {
    "capacity": 2,
    "seatingArrangement": "tandem",
    "mountPoints": [
      {
        "role": "driver",
        "position": [0, 1.0, 0.5],
        "rotation": [0, 0, 0, 1],
        "animations": ["drive", "idle", "enter", "exit"],
        "controls": ["steering", "throttle", "brake"]
      },
      {
        "role": "passenger",
        "position": [0, 1.0, -0.4],
        "rotation": [0, 0, 0, 1],
        "animations": ["sit", "idle", "enter", "exit"],
        "controls": []
      }
    ],
    "entryPoints": [
      {
        "side": "left",
        "position": [-0.8, 0.5, 0],
        "animations": ["door_open", "door_close"]
      },
      {
        "side": "right",
        "position": [0.8, 0.5, 0],
        "animations": ["door_open", "door_close"]
      }
    ]
  },
  
  "gltf:animations": [
    {
      "name": "idle",
      "type": "loop",
      "duration": 4.0,
      "affects": ["engine", "hover_pods"]
    },
    {
      "name": "engine_start",
      "type": "oneshot",
      "duration": 2.0,
      "affects": ["engine"]
    },
    {
      "name": "door_open",
      "type": "oneshot",
      "duration": 1.5,
      "affects": ["left_door", "right_door"]
    },
    {
      "name": "boost",
      "type": "oneshot",
      "duration": 0.8,
      "affects": ["engine", "hover_pods", "exhaust"]
    }
  ],
  
  "effects": {
    "particles": [
      {
        "name": "hover_dust",
        "type": "dust",
        "position": [0, 0.1, 0],
        "scale": [3.0, 0.2, 2.0],
        "color": [0.8, 0.7, 0.5, 0.6],
        "emission": {
          "rate": 50,
          "speed": 0.8,
          "size": 0.2,
          "lifetime": 1.5
        },
        "triggers": ["movement", "idle"]
      },
      {
        "name": "engine_exhaust",
        "type": "energy",
        "position": [0, 0.4, -1.0],
        "scale": [0.4, 0.4, 1.0],
        "color": [0.1, 0.6, 0.9, 0.7],
        "emission": {
          "rate": 100,
          "speed": 2.0,
          "size": 0.1,
          "lifetime": 0.5
        },
        "triggers": ["acceleration", "boost"]
      }
    ],
    "sounds": [
      {
        "name": "engine_idle",
        "type": "loop",
        "file": "https://example.com/sounds/hover_idle.mp3",
        "volume": 0.5,
        "pitch": 1.0,
        "spatialBlend": 1.0,
        "triggers": ["idle"]
      },
      {
        "name": "engine_acceleration",
        "type": "parametric",
        "file": "https://example.com/sounds/hover_accel.mp3",
        "volume": {
          "min": 0.5,
          "max": 1.0,
          "parameter": "throttle"
        },
        "pitch": {
          "min": 0.8,
          "max": 1.5,
          "parameter": "speed"
        },
        "spatialBlend": 1.0,
        "triggers": ["movement"]
      }
    ],
    "lights": [
      {
        "name": "headlights",
        "type": "spot",
        "position": [0, 0.8, 1.0],
        "color": [1.0, 0.98, 0.9],
        "intensity": 2.0,
        "range": 30.0,
        "angle": 60.0,
        "toggleable": true
      },
      {
        "name": "hover_glow",
        "type": "point",
        "position": [0, 0.2, 0],
        "color": [0.1, 0.6, 0.9],
        "intensity": 1.0,
        "range": 3.0,
        "animation": {
          "property": "intensity",
          "min": 0.8,
          "max": 1.2,
          "frequency": 2.0
        }
      }
    ]
  },
  
  "controls": {
    "interface": "standard",
    "inputs": [
      {
        "name": "steering",
        "type": "axis",
        "default": "horizontal"
      },
      {
        "name": "throttle",
        "type": "axis",
        "default": "vertical"
      },
      {
        "name": "brake",
        "type": "button",
        "default": "brake"
      },
      {
        "name": "boost",
        "type": "button",
        "default": "boost",
        "cooldown": 5.0
      },
      {
        "name": "lights",
        "type": "toggle",
        "default": "lights"
      }
    ],
    "camera": {
      "positions": [
        {
          "name": "first_person",
          "position": [0, 1.6, 0.5],
          "target": [0, 1.5, 10]
        },
        {
          "name": "third_person",
          "position": [0, 2.5, -5],
          "target": [0, 1.0, 0],
          "smoothing": 0.2
        }
      ],
      "default": "third_person"
    }
  },
  
  "customization": {
    "paintSchemes": [
      {
        "name": "Desert Sand",
        "primary": [0.9, 0.8, 0.6],
        "secondary": [0.7, 0.3, 0.2],
        "accent": [0.1, 0.6, 0.9]
      },
      {
        "name": "Racing Blue",
        "primary": [0.2, 0.4, 0.8],
        "secondary": [0.1, 0.1, 0.3],
        "accent": [0.9, 0.3, 0.1]
      }
    ],
    "accessories": [
      {
        "name": "Cargo Rack",
        "model": "https://example.com/vehicles/accessories/cargo.glb",
        "position": [0, 0.9, -1.0],
        "scale": [1.0, 1.0, 1.0]
      },
      {
        "name": "Shield Generator",
        "model": "https://example.com/vehicles/accessories/shield.glb",
        "position": [0, 0.5, 0],
        "scale": [1.0, 1.0, 1.0],
        "effects": ["shield_glow"]
      }
    ]
  },
  
  "performance": {
    "levels": [
      {
        "name": "high",
        "polycount": 75000,
        "textures": "2048x2048",
        "effects": "all"
      },
      {
        "name": "medium",
        "polycount": 35000,
        "textures": "1024x1024",
        "effects": "reduced"
      },
      {
        "name": "low",
        "polycount": 15000,
        "textures": "512x512",
        "effects": "minimal"
      }
    ],
    "default": "medium"
  }
}
```

## Validation Rules

### Vehicle Properties
- Valid vehicle type
- Proper physics configuration
- Passenger mount points
- Animation support
- Control system

### Technical Properties
- Proper colliders
- Valid propulsion system
- Correct handling properties
- Passenger configuration
- Effect definitions

### Customization Properties
- Valid paint schemes
- Proper accessory attachments
- Material definitions
- Effect configurations
- Variant definitions

## Best Practices

1. **Physics Configuration**
    - Realistic physical properties
    - Balanced performance characteristics
    - Proper collision detection
    - Appropriate center of mass
    - Tested handling model

2. **Passenger Integration**
    - Proper mount points
    - Clear entry/exit paths
    - Appropriate animations
    - Visibility considerations
    - Control access

3. **Effects Management**
    - Efficient particle systems
    - Performance-optimized effects
    - Proper sound design
    - Scalable quality levels
    - Responsive feedback

4. **Control Systems**
    - Intuitive input mapping
    - Appropriate feedback
    - Support for different control methods
    - Camera configurations
    - Accessibility considerations

## Integration Examples

### With Environment Profiles
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "3DModel",
  "name": "Environment Vehicle",
  
  "vehicleType": "ground",
  "physics": {
    "mass": 1200,
    "friction": 0.4
  },
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  }
}
```

### With Interactive Systems
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "x3d": "https://www.web3d.org/specifications/x3d-4.0/"
  },
  "@type": "3DModel",
  "name": "Interactive Vehicle",
  
  "controls": {
    "interface": "standard",
    "inputs": [
      {
        "name": "throttle",
        "type": "axis"
      }
    ]
  },
  
  "x3d:interaction": {
    "sensors": [
      {
        "type": "TouchSensor",
        "name": "vehicle_enter"
      }
    ]
  }
}
```

## Common Issues

1. **Physics Simulation**
    - Balance issues
    - Terrain handling
    - Collision problems
    - Performance impact
    - Stability concerns

2. **Control Implementation**
    - Input responsiveness
    - Camera transitions
    - Control mapping
    - Feedback clarity
    - Platform differences

## Next Steps

- Review [Avatar Profile](./avatar-profile.md) for passenger integration
- See [glTF Standard](../standards/gltf.md) for model specifications
- Check [Validation Tools](../tools/validation.md) for testing 