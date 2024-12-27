---
sidebar_position: 6
---

# OpenXR Standard

OpenXR is an open-source, royalty-free standard developed by the Khronos Group to provide high-performance access to virtual reality (VR) and augmented reality (AR) platforms and devices. It serves as a unified API, enabling developers to build applications that are interoperable across a wide range of hardware and software platforms, thereby reducing fragmentation in the XR (extended reality) industry.
Khronos Group

For detailed information, you can refer to the official OpenXR 1.0 specification: [OpenXR 1.1 Specification](https://registry.khronos.org/OpenXR/#apispecs)

## Core Properties

### Action Sets

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "openxr": "https://registry.khronos.org/OpenXR/specs/1.1/html/xrspec.html"
  },
  "@type": "ImageObject",
  "name": "Interactive Experience",

  "openxr:actionSets": [
    {
      "@type": "openxr:ActionSet",
      "name": "gameplay",
      "localizedName": "Gameplay Controls",
      "priority": 1,
      "actions": [
        {
          "name": "grab",
          "type": "boolean",
          "localizedName": "Grab Object"
        },
        {
          "name": "move",
          "type": "vector2f",
          "localizedName": "Move Character"
        }
      ]
    }
  ]
}
```

### Input Bindings

```json
{
  "openxr:inputBindings": {
    "@type": "openxr:InputBindings",
    "interactionProfile": "/interaction_profiles/khr/simple_controller",
    "bindings": {
      "gameplay/grab": {
        "type": "click",
        "paths": [
          "/user/hand/left/input/select/click",
          "/user/hand/right/input/select/click"
        ]
      },
      "gameplay/move": {
        "type": "value",
        "paths": [
          "/user/hand/left/input/thumbstick",
          "/user/hand/right/input/thumbstick"
        ]
      }
    }
  }
}
```

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "xr": "https://www.khronos.org/openxr/"
  },
  "@type": "ImageObject",
  "name": "VR Training Simulation",
  "description": "Interactive virtual reality training environment",
  "contentUrl": "https://example.com/images/simulation-preview.jpg",
  
  "openxr:configuration": {
    "@type": "openxr:Configuration",
    "requiredExtensions": [
      "XR_KHR_simple_controller",
      "XR_EXT_hand_tracking"
    ],
    "viewConfiguration": "stereo",
    "blendMode": "opaque",
    "environmentBlendMode": "opaque",
    "trackingProperties": {
      "orientationTracking": true,
      "positionTracking": true
    }
  },
  
  "openxr:actionSets": [
    {
      "@type": "openxr:ActionSet",
      "name": "gameplay",
      "localizedName": "Gameplay Controls",
      "priority": 1,
      "actions": [
        {
          "name": "grab",
          "type": "boolean",
          "localizedName": "Grab Object"
        },
        {
          "name": "move",
          "type": "vector2f",
          "localizedName": "Move Character"
        },
        {
          "name": "rotate",
          "type": "vector2f",
          "localizedName": "Rotate View"
        },
        {
          "name": "teleport",
          "type": "boolean",
          "localizedName": "Teleport"
        }
      ]
    },
    {
      "@type": "openxr:ActionSet",
      "name": "ui",
      "localizedName": "Menu Controls",
      "priority": 2,
      "actions": [
        {
          "name": "select",
          "type": "boolean",
          "localizedName": "Select Menu Item"
        },
        {
          "name": "scroll",
          "type": "vector2f",
          "localizedName": "Scroll Menu"
        }
      ]
    }
  ],
  
  "openxr:inputBindings": {
    "@type": "openxr:InputBindings",
    "interactionProfile": "/interaction_profiles/khr/simple_controller",
    "bindings": {
      "gameplay/grab": {
        "type": "click",
        "paths": [
          "/user/hand/left/input/select/click",
          "/user/hand/right/input/select/click"
        ]
      },
      "gameplay/move": {
        "type": "value",
        "paths": [
          "/user/hand/left/input/thumbstick",
          "/user/hand/right/input/thumbstick"
        ]
      },
      "gameplay/rotate": {
        "type": "value",
        "paths": [
          "/user/hand/right/input/thumbstick"
        ]
      },
      "gameplay/teleport": {
        "type": "click",
        "paths": [
          "/user/hand/right/input/trigger/value"
        ]
      }
    }
  },
  
  "openxr:spaces": {
    "@type": "openxr:Spaces",
    "referenceSpaces": [
      {
        "type": "local",
        "bounds": {
          "width": 5.0,
          "height": 3.0
        }
      },
      {
        "type": "stage",
        "bounds": {
          "width": 10.0,
          "height": 10.0
        }
      }
    ],
    "actionSpaces": [
      {
        "action": "gameplay/grab",
        "space": "grip_pose"
      }
    ]
  },
  
  "openxr:rendering": {
    "@type": "openxr:Rendering",
    "swapchainFormat": "RGBA8",
    "depthFormat": "D24S8",
    "sampleCount": 4,
    "foveatedRendering": true,
    "resolution": {
      "width": 2048,
      "height": 2048
    }
  }
}
```

## Property Guidelines

### Configuration Properties
- Specify required extensions
- Define view configuration
- Set blend modes
- Configure tracking
- Document requirements

### Action Properties
- Use clear naming
- Group related actions
- Set proper priorities
- Define types accurately
- Document bindings

### Space Properties
- Define reference spaces
- Set proper bounds
- Configure action spaces
- Manage tracking
- Document relationships

## Best Practices

1. **Input Configuration**
    - Group related actions
    - Use consistent naming
    - Provide localization
    - Test combinations
    - Document bindings

2. **Space Management**
    - Define clear boundaries
    - Configure references
    - Handle transitions
    - Test tracking
    - Validate poses

3. **Rendering Setup**
    - Set proper formats
    - Configure resolution
    - Enable optimizations
    - Test performance
    - Validate quality

4. **Extension Handling**
    - Check availability
    - Provide fallbacks
    - Test compatibility
    - Document requirements
    - Handle failures

## Next Steps

- Review [Interaction Profiles](../interaction-profile.md)
- See [VR Standards](./vr-standards.md)
- Check [Validation](../../tools/validation.md)
