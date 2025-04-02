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
