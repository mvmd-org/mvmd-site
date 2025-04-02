---
sidebar_position: 6
---

# OpenXR Standards

This page covers how to integrate OpenXR standards into your metadata through namespaces.

## Overview and Use Cases

[OpenXR](https://www.khronos.org/openxr/) is an open, royalty-free standard for accessing virtual reality (VR) and augmented reality (AR) platforms and devices. It provides a common foundation for VR and AR applications to run across various hardware platforms.

Common use cases include:
- XR application compatibility metadata
- Hardware requirements specification
- Device capability descriptions
- Input binding configurations
- XR content accessibility information
- Immersive experience parameters

## Core Properties and Extensions

OpenXR provides a standardized way to interact with XR hardware:

- **Core Components**: Runtime, Application, Session, Action, Space
- **Key Concepts**:
  - Instance: The entry point to the OpenXR runtime
  - Session: The connection between an application and a user's physical environment
  - Action: An input or output operation that an application exposes
  - Space: A frame of reference for tracking
- **Common Extensions**:
  - Hand tracking
  - Eye tracking
  - Spatial anchors
  - Composition layers
  - Scene understanding

## Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "openxr": "https://www.khronos.org/openxr/schema/"
  }
}
```

## External Reference Patterns

When linking to OpenXR-compatible content:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "SoftwareApplication",
  "name": "XR Viewer Application",
  "applicationCategory": "VirtualRealityApplication",
  "operatingSystem": "Windows, Android",
  "softwareRequirements": "OpenXR 1.0 compatible system"
}
```

For more detailed hardware requirements:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "SoftwareApplication",
  "name": "Immersive Training Simulator",
  "applicationCategory": "VirtualRealityApplication",
  "operatingSystem": "Windows",
  "softwareRequirements": {
    "@type": "CreativeWork",
    "name": "OpenXR Requirements",
    "contentUrl": "https://example.com/app/xr-requirements.json",
    "encodingFormat": "application/json" 
  }
}
```

## Embedding Patterns

When embedding OpenXR configuration data:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "openxr": "https://www.khronos.org/openxr/schema/"
  },
  "@type": "SoftwareApplication",
  "name": "XR Experience",
  "applicationCategory": "VirtualRealityApplication",
  "openxr:requirements": {
    "minVersion": "1.0",
    "extensions": [
      "XR_EXT_hand_tracking",
      "XR_FB_display_refresh_rate"
    ],
    "formFactors": ["hmd", "handheld"]
  }
}
```

## Implementation Examples

Complete XR experience with detailed configuration:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "openxr": "https://www.khronos.org/openxr/schema/"
  },
  "@type": "SoftwareApplication",
  "name": "Immersive Educational Experience",
  "description": "Interactive exploration of historical sites in virtual reality",
  "applicationCategory": "EducationalApplication VirtualRealityApplication",
  "operatingSystem": "Windows, Android",
  "offers": {
    "@type": "Offer",
    "price": "15.99",
    "priceCurrency": "USD"
  },
  "openxr:configuration": {
    "specVersion": "1.0",
    "requiredExtensions": [
      "XR_EXT_hand_tracking",
      "XR_FB_display_refresh_rate"
    ],
    "optionalExtensions": [
      "XR_EXT_eye_gaze_interaction",
      "XR_MSFT_spatial_anchor"
    ],
    "supportedFormFactors": [
      {
        "type": "hmd",
        "recommendedDevices": ["Oculus Quest 2", "HTC Vive Pro", "Valve Index"]
      },
      {
        "type": "handheld",
        "recommendedDevices": ["Android AR compatible phones"]
      }
    ],
    "inputActions": [
      {
        "name": "grab",
        "type": "boolean",
        "defaultBindings": {
          "hmd": "squeeze/value",
          "handheld": "touchscreen/tap" 
        }
      },
      {
        "name": "navigate",
        "type": "vector2",
        "defaultBindings": {
          "hmd": "thumbstick",
          "handheld": "touchscreen/swipe"
        }
      },
      {
        "name": "select",
        "type": "boolean",
        "defaultBindings": {
          "hmd": "trigger/value",
          "handheld": "touchscreen/tap"
        }
      }
    ],
    "graphicsRequirements": {
      "recommendedGPU": "NVIDIA GTX 1070 or equivalent",
      "minimumGPU": "NVIDIA GTX 970 or equivalent",
      "preferredColorSpace": "linear"
    },
    "userExperience": {
      "comfortLevel": "moderate",
      "locomotionMethods": ["teleport", "continuous"],
      "standingExperience": true,
      "seatedExperience": true,
      "playAreaRecommended": "2m x 2m"
    }
  },
  "openxr:accessibility": {
    "subtitles": true,
    "audioDescription": true,
    "oneHandedMode": true,
    "noFlashingContent": true,
    "colorBlindOptions": true,
    "comfortSettings": {
      "adjustableFieldOfView": true,
      "motionIntensity": "adjustable",
      "snapTurning": true
    }
  }
}
```

Another example focused on AR application:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "openxr": "https://www.khronos.org/openxr/schema/"
  },
  "@type": "SoftwareApplication",
  "name": "AR Object Visualizer",
  "description": "View 3D models in your real environment with augmented reality",
  "applicationCategory": "AugmentedRealityApplication",
  "operatingSystem": "iOS, Android",
  "openxr:configuration": {
    "specVersion": "1.0",
    "requiredExtensions": [
      "XR_MSFT_scene_understanding",
      "XR_FB_plane_detection"
    ],
    "supportedFormFactors": [
      {
        "type": "handheld",
        "recommendedDevices": ["ARKit compatible iOS devices", "ARCore compatible Android devices"]
      },
      {
        "type": "hmd",
        "recommendedDevices": ["Microsoft HoloLens 2"]
      }
    ],
    "trackingCapabilities": {
      "planarSurfaces": true,
      "environmentUnderstanding": true,
      "lightEstimation": true,
      "objectOcclusion": true,
      "imageRecognition": true
    },
    "contentPlacement": {
      "anchorTypes": ["plane", "mesh", "image"],
      "persistentAnchors": true,
      "cloudAnchors": true,
      "multiUserExperience": true
    }
  },
  "openxr:compatibility": {
    "arCore": {
      "minVersion": "1.25.0",
      "features": ["Depth API", "Cloud Anchors"]
    },
    "arKit": {
      "minVersion": "4.0",
      "features": ["People Occlusion", "Scene Reconstruction"]
    }
  }
}
```

## Best Practices

- Include both required and optional OpenXR extensions
- Specify input mappings for different form factors
- Document hardware requirements clearly
- Include accessibility information
- Provide fallbacks for devices without specific extensions
- Document comfort settings for immersive experiences
- Specify minimum OpenXR runtime version
- Include details about tracking requirements

## Implementation Considerations

- **Hardware Diversity**: Account for different XR hardware capabilities
- **Input Flexibility**: Design for multiple input methods
- **Performance Specifications**: Be clear about performance requirements
- **Accessibility**: Include accessibility features and options
- **Extension Support**: Have fallbacks for optional extensions
- **Form Factor Specifics**: Optimize for different device types
- **Platform Specifics**: Note any platform-specific considerations

## Related Concepts

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md)

## Practical Implementation Guide

### Step 1: Basic XR Application Setup

1. **Define Basic Application Information**:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "openxr": "https://www.khronos.org/openxr/schema/"
  },
  "@type": "SoftwareApplication",
  "name": "My XR App",
  "applicationCategory": "VirtualRealityApplication",
  "operatingSystem": "Windows, Android",
  "description": "An immersive XR experience"
}
```

2. **Add OpenXR Version and Extensions**:
```json
{
  // ... basic properties ...
  "openxr:requirements": {
    "specVersion": "1.0",
    "requiredExtensions": [
      "XR_KHR_composition_layer_cube",
      "XR_EXT_hand_tracking"
    ],
    "optionalExtensions": [
      "XR_EXT_eye_gaze_interaction",
      "XR_FB_display_refresh_rate"
    ]
  }
}
```

### Step 2: Hardware and Platform Configuration

1. **Specify Device Requirements**:
```json
{
  // ... previous properties ...
  "openxr:hardware": {
    "minimumRequirements": {
      "gpu": "NVIDIA GTX 970 or equivalent",
      "cpu": "Intel i5-4590 or equivalent",
      "ram": "8 GB",
      "storage": "2 GB"
    },
    "recommendedRequirements": {
      "gpu": "NVIDIA RTX 2060 or equivalent",
      "cpu": "Intel i7-9700K or equivalent",
      "ram": "16 GB",
      "storage": "4 GB"
    }
  }
}
```

2. **Define Form Factor Support**:
```json
{
  // ... previous properties ...
  "openxr:formFactors": {
    "hmd": {
      "supported": true,
      "recommendedDevices": [
        "Meta Quest 2",
        "Valve Index",
        "HP Reverb G2"
      ],
      "minimumFieldOfView": {
        "horizontal": 90,
        "vertical": 90
      }
    },
    "handheld": {
      "supported": true,
      "recommendedDevices": [
        "ARCore compatible phones",
        "ARKit compatible phones"
      ]
    }
  }
}
```

### Step 3: Input and Interaction Configuration

1. **Define Input Actions**:
```json
{
  // ... previous properties ...
  "openxr:input": {
    "actions": [
      {
        "name": "hand_pose",
        "type": "pose",
        "requirements": ["XR_EXT_hand_tracking"],
        "bindings": {
          "hmd": "/user/hand/left/input/aim/pose",
          "handheld": "/user/hand/grip/pose"
        }
      },
      {
        "name": "select_object",
        "type": "boolean",
        "bindings": {
          "hmd": "/user/hand/right/input/trigger/value",
          "handheld": "/user/hand/grip/value"
        }
      }
    ],
    "actionSets": [
      {
        "name": "gameplay",
        "priority": 1,
        "actions": ["hand_pose", "select_object"]
      }
    ]
  }
}
```

### Step 4: User Experience and Comfort Settings

1. **Configure Comfort Options**:
```json
{
  // ... previous properties ...
  "openxr:comfort": {
    "locomotion": {
      "methods": ["teleport", "smooth"],
      "defaultMethod": "teleport",
      "turnOptions": {
        "snap": true,
        "smooth": true,
        "defaultAngle": 45
      },
      "vignette": {
        "enabled": true,
        "intensity": 0.7
      }
    },
    "posture": {
      "standing": true,
      "seated": true,
      "roomScale": true,
      "minPlayArea": {
        "width": 1.5,
        "depth": 1.5
      }
    }
  }
}
```

2. **Add Accessibility Features**:
```json
{
  // ... previous properties ...
  "openxr:accessibility": {
    "visual": {
      "subtitles": true,
      "highContrast": true,
      "colorblindModes": ["protanopia", "deuteranopia", "tritanopia"],
      "textScaling": true
    },
    "audio": {
      "spatialAudio": true,
      "audioDescription": true,
      "hearingAidSupport": true
    },
    "physical": {
      "oneHandedMode": true,
      "seatedMode": true,
      "reducedMotion": true
    }
  }
}
```

### Step 5: Platform-Specific Implementation

1. **AR Implementation**:
```json
{
  // ... previous properties ...
  "openxr:ar": {
    "features": {
      "planeDetection": true,
      "imageTracking": true,
      "meshGeneration": true,
      "lightEstimation": true
    },
    "anchors": {
      "local": true,
      "cloud": true,
      "persistence": true
    },
    "occlusion": {
      "environmental": true,
      "people": true
    }
  }
}
```

2. **VR Implementation**:
```json
{
  // ... previous properties ...
  "openxr:vr": {
    "rendering": {
      "resolution": {
        "default": "native",
        "scalingOptions": [0.7, 1.0, 1.2, 1.5]
      },
      "refreshRate": {
        "minimum": 72,
        "recommended": 90,
        "maximum": 120
      }
    },
    "tracking": {
      "headset": "6dof",
      "controllers": "6dof",
      "hands": "skeletal",
      "eyes": "gaze"
    }
  }
}
```

### Best Practices for Implementation

1. **Version Management**:
   - Always specify OpenXR version requirements
   - List required and optional extensions separately
   - Include fallbacks for unsupported features
   - Document version-specific features

2. **Hardware Compatibility**:
   - Define clear minimum requirements
   - List recommended specifications
   - Support multiple form factors when possible
   - Include device-specific optimizations

3. **Input Handling**:
   - Design for multiple input methods
   - Support both VR and AR interactions
   - Implement fallbacks for unsupported inputs
   - Use standard action mappings

4. **Performance Optimization**:
   - Implement dynamic resolution scaling
   - Support multiple quality presets
   - Monitor and adjust refresh rates
   - Optimize for mobile VR/AR

### Troubleshooting Common Issues

1. **Extension Support**:
   - Check extension availability at runtime
   - Provide fallback functionality
   - Log unsupported features
   - Handle graceful degradation

2. **Input Problems**:
   - Validate action bindings
   - Test across different devices
   - Support multiple input methods
   - Handle disconnection events

3. **Performance Issues**:
   - Monitor frame timing
   - Implement dynamic quality scaling
   - Check GPU/CPU utilization
   - Optimize render pipeline

4. **Platform Compatibility**:
   - Test on target platforms
   - Verify extension support
   - Check hardware capabilities
   - Validate tracking requirements
