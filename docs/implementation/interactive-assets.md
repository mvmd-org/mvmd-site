---
sidebar_position: 5
---

# Interactive Asset Implementation

This guide covers implementing interactive elements in metaverse assets, focusing on practical workflows for creating assets that respond to user interaction across different platforms.

## Use Cases

Interactive asset implementation addresses these common scenarios:

- Creating assets that respond to user actions (click, touch, proximity)
- Implementing state changes and animations triggered by interactions
- Defining behavior patterns that work across different environments
- Building linked interactions between multiple objects
- Creating programmatic responses to environmental conditions

## Prerequisites

Before implementing interactive assets, ensure you have:

- A clear understanding of your target platforms' interaction systems
- Knowledge of supported animation and state management capabilities
- Familiarity with basic MVMD metadata structure
- Understanding of event-driven interaction models

## Implementation Workflow

### 1. Define Interaction Points

Start by identifying where and how users can interact with your asset:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Interactive Control Panel",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "interactionPoints",
      "name": "Interaction Points",
      "value": [
        {
          "id": "power-button",
          "type": "button",
          "position": [0, 0.5, 0.1],
          "radius": 0.05,
          "label": "Power",
          "interactionType": ["touch", "click"],
          "highlightColor": "#FF3366"
        },
        {
          "id": "volume-slider",
          "type": "slider",
          "position": [0.2, 0, 0.1],
          "size": [0.3, 0.05, 0.02],
          "label": "Volume",
          "interactionType": ["grab", "drag"],
          "axis": "x",
          "range": [0, 100],
          "default": 50,
          "steps": 10
        }
      ]
    }
  ]
}
```

### 2. Define State Transitions

Specify how the asset changes state based on interactions:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Interactive Lamp",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "states",
      "name": "Object States",
      "value": {
        "initialState": "off",
        "states": [
          {
            "id": "off",
            "properties": {
              "emissiveColor": "#000000",
              "lightEnabled": false
            }
          },
          {
            "id": "on",
            "properties": {
              "emissiveColor": "#FFDD88",
              "lightEnabled": true,
              "lightIntensity": 100
            }
          },
          {
            "id": "dimmed",
            "properties": {
              "emissiveColor": "#664400",
              "lightEnabled": true,
              "lightIntensity": 30
            }
          }
        ],
        "transitions": [
          {
            "from": "off",
            "to": "on",
            "trigger": "click",
            "target": "lamp-switch",
            "animation": "switch-on"
          },
          {
            "from": "on",
            "to": "off",
            "trigger": "click",
            "target": "lamp-switch",
            "animation": "switch-off"
          },
          {
            "from": "on",
            "to": "dimmed",
            "trigger": "hold",
            "target": "lamp-switch",
            "duration": 2.0
          }
        ]
      }
    }
  ]
}
```

### 3. Link Interactions to Animations

Connect user interactions to appropriate animations:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Interactive Door",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "animations",
      "name": "Interactive Animations",
      "value": {
        "animations": [
          {
            "id": "door-open",
            "trigger": "click",
            "target": "door-handle",
            "duration": 1.5,
            "playMode": "once",
            "transitionTo": "open"
          },
          {
            "id": "door-close",
            "trigger": "click",
            "target": "door-panel",
            "duration": 1.2,
            "playMode": "once",
            "transitionTo": "closed"
          },
          {
            "id": "handle-wiggle",
            "trigger": "interaction-denied",
            "duration": 0.5,
            "playMode": "once"
          }
        ],
        "conditions": [
          {
            "animation": "door-open",
            "requiresState": "closed",
            "fallback": "handle-wiggle"
          },
          {
            "animation": "door-close",
            "requiresState": "open",
            "fallback": null
          }
        ]
      }
    }
  ]
}
```

### 4. Define Interaction Feedback

Specify how the asset provides feedback during interactions:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Interactive Console",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "feedback",
      "name": "Interaction Feedback",
      "value": {
        "feedbackTypes": [
          {
            "event": "hover",
            "visual": {
              "highlightColor": "#88AAFF",
              "outline": true,
              "outlineWidth": 2
            },
            "audio": null,
            "haptic": null
          },
          {
            "event": "press",
            "visual": {
              "highlightColor": "#FFAA00",
              "moveDistance": 0.01,
              "moveDirection": "down"
            },
            "audio": {
              "sound": "button-click",
              "volume": 0.7,
              "spatial": true
            },
            "haptic": {
              "intensity": 0.5,
              "duration": 0.1
            }
          },
          {
            "event": "success",
            "visual": {
              "emissiveColor": "#00FF00",
              "emissiveDuration": 0.5
            },
            "audio": {
              "sound": "success-chime",
              "volume": 0.5
            },
            "haptic": {
              "pattern": "success",
              "intensity": 0.3
            }
          }
        ]
      }
    }
  ]
}
```

### 5. Set Up Connections Between Objects

Create interactive systems with connected elements:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Connected Room System",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Light Switch",
      "identifier": "switch-1"
    },
    {
      "@type": "3DModel",
      "name": "Ceiling Light",
      "identifier": "light-1"
    },
    {
      "@type": "3DModel",
      "name": "Motion Sensor",
      "identifier": "sensor-1"
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "connections",
      "name": "Object Connections",
      "value": {
        "connections": [
          {
            "source": "switch-1",
            "sourceEvent": "toggle",
            "target": "light-1",
            "targetAction": "setPower",
            "valueMapping": {
              "on": true,
              "off": false
            }
          },
          {
            "source": "sensor-1",
            "sourceEvent": "motionDetected",
            "target": "light-1",
            "targetAction": "setPower",
            "value": true,
            "conditions": [
              {
                "property": "environmentLight",
                "operator": "<",
                "value": 0.3
              }
            ]
          }
        ]
      }
    }
  ]
}
```

## Complete Example

A comprehensive interactive asset implementation:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Interactive Control Console",
  "description": "User console with multiple interactive elements",
  "creator": {
    "@type": "Organization",
    "name": "Interactive Systems Inc.",
    "url": "https://interactivesystems.example.com"
  },
  "contentUrl": "https://assets.example.com/console.glb",
  "encodingFormat": "model/gltf-binary",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "interactionPoints",
      "name": "Interaction Points",
      "value": [
        {
          "id": "power-button",
          "type": "button",
          "position": [0, 0.1, 0.05],
          "radius": 0.03,
          "label": "Power",
          "interactionType": ["touch", "click"],
          "highlightColor": "#FF3366"
        },
        {
          "id": "volume-slider",
          "type": "slider",
          "position": [0.15, 0, 0.05],
          "size": [0.2, 0.03, 0.01],
          "label": "Volume",
          "interactionType": ["grab", "drag"],
          "axis": "x",
          "range": [0, 100],
          "default": 50,
          "steps": 10
        },
        {
          "id": "mode-selector",
          "type": "dial",
          "position": [-0.15, 0, 0.05],
          "radius": 0.04,
          "label": "Mode",
          "interactionType": ["rotate"],
          "rotation": {
            "axis": "z",
            "range": [0, 270],
            "steps": 3
          }
        }
      ]
    },
    {
      "@type": "PropertyValue",
      "propertyID": "states",
      "name": "Object States",
      "value": {
        "initialState": "off",
        "states": [
          {
            "id": "off",
            "properties": {
              "screenEnabled": false,
              "powerLed": "#330000",
              "buttonsEnabled": false
            }
          },
          {
            "id": "on",
            "properties": {
              "screenEnabled": true,
              "powerLed": "#00FF00",
              "buttonsEnabled": true,
              "screenContent": "main-menu"
            }
          },
          {
            "id": "standby",
            "properties": {
              "screenEnabled": true,
              "powerLed": "#FFAA00",
              "buttonsEnabled": true,
              "screenContent": "standby"
            }
          }
        ],
        "transitions": [
          {
            "from": "off",
            "to": "on",
            "trigger": "click",
            "target": "power-button",
            "animation": "power-up"
          },
          {
            "from": "on",
            "to": "standby",
            "trigger": "timer",
            "duration": 60,
            "animation": "fade-to-standby"
          },
          {
            "from": ["on", "standby"],
            "to": "off",
            "trigger": "hold",
            "target": "power-button",
            "duration": 2.0,
            "animation": "power-down"
          }
        ]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "animations",
      "name": "Interactive Animations",
      "value": {
        "animations": [
          {
            "id": "power-up",
            "duration": 2.0,
            "playMode": "once",
            "transitionTo": "on"
          },
          {
            "id": "power-down",
            "duration": 1.5,
            "playMode": "once",
            "transitionTo": "off"
          },
          {
            "id": "fade-to-standby",
            "duration": 1.0,
            "playMode": "once",
            "transitionTo": "standby"
          },
          {
            "id": "button-press",
            "duration": 0.2,
            "playMode": "once"
          },
          {
            "id": "slider-move",
            "duration": 0.1,
            "playMode": "continuous"
          }
        ]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "feedback",
      "name": "Interaction Feedback",
      "value": {
        "feedbackTypes": [
          {
            "event": "hover",
            "visual": {
              "highlightColor": "#88AAFF",
              "outline": true,
              "outlineWidth": 2
            },
            "audio": null,
            "haptic": null
          },
          {
            "event": "press",
            "visual": {
              "highlightColor": "#FFAA00",
              "moveDistance": 0.01,
              "moveDirection": "down"
            },
            "audio": {
              "sound": "button-click",
              "volume": 0.7,
              "spatial": true
            },
            "haptic": {
              "intensity": 0.5,
              "duration": 0.1
            }
          },
          {
            "event": "drag",
            "visual": {
              "highlightColor": "#FFAA00"
            },
            "audio": {
              "sound": "slider-move",
              "volume": 0.3,
              "spatial": true
            },
            "haptic": {
              "intensity": 0.2,
              "continuous": true
            }
          }
        ]
      }
    }
  ],
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "Interactive Studio 2024"
  },
  
  "gltf:animations": [
    "power-up", 
    "power-down", 
    "fade-to-standby",
    "button-press",
    "slider-move"
  ]
}
```

## Implementation Considerations

### Platform-Specific Interaction Systems

Each platform handles interactions differently:
- **VR/AR Environments**: May use ray-based selection, controller input, or hand tracking
- **Web 3D Viewers**: Typically use mouse/touch interactions
- **Game Engines**: Often use custom interaction systems with raycast and collision detection
- **Mobile Platforms**: Rely on touch-based interactions with simplified feedback

### Accessibility Considerations

- Include multiple interaction methods for the same functionality
- Ensure feedback is available through multiple channels (visual, audio, haptic)
- Use standard interaction patterns that users will recognize
- Provide sufficient visual cues for interactive elements
- Consider reduced motion preferences for animations

### Performance Optimization

- Limit the number of interactive elements visible at one time
- Use simple collision shapes for interaction detection
- Implement level-of-detail for interaction options at different distances
- Optimize animations to use minimal resources
- Consider batching interaction feedback for multiple simultaneous interactions

### Common Issues

- **Input Detection**: Inconsistent handling of click/touch events across platforms
- **Animation Timing**: Different animation systems interpret timing differently
- **Feedback Synchronization**: Visual, audio and haptic feedback may not sync perfectly
- **Performance Impact**: Complex interaction systems can significantly affect performance
- **State Management**: Race conditions can occur with rapid state transitions

## Related Documentation

- [Basic Asset Implementation](./assets.md)
- [Cross-Platform Asset Implementation](./cross-platform-assets.md)
- [Composable Asset Implementation](./composable.md)
- [glTF Standard](../standards/gltf.md)
- [Integration Profiles: Interactable](../integration-profiles/interactable.md) 