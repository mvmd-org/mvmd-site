---
sidebar_position: 2
---

# Interactable Objects

This guide explains how to create metadata for interactive objects in virtual worlds using MVMD. It covers various interaction types, triggers, user feedback, and state management.

## Essential Properties for Interactable Objects

Every interactable object should include these core properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Thing",
  "name": "Interactive Door",
  "description": "A wooden door that can be opened and closed by users. It provides appropriate visual and audio feedback.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "ObjectID",
    "value": "door-2024-001"
  },
  "contentUrl": "https://example.com/objects/wooden-door.glb",
  "encodingFormat": "model/gltf-binary",
  "potentialAction": {
    "@type": "InteractAction",
    "name": "Open/Close",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "action://toggle-door"
    }
  }
}
```

## Types of Interactions

Define the specific types of interactions your object supports:

```json
"mvmd:interactionType": [
  "clickable",
  "toggleable",
  "grabbable"
],

"mvmd:interactionDetails": {
  "interactionRadius": 2.0,
  "interactionPrompt": "Press E to Open/Close",
  "interactionMethod": "proximity",
  "interactionPriority": 2,
  "multiUserInteraction": true
}
```

### Common Interaction Types

Here are some common interaction types you can use:

- **Clickable**: Objects that respond to a click or tap
- **Toggleable**: Objects that can be switched between states
- **Grabbable**: Objects that can be picked up or moved
- **Draggable**: Objects that can be dragged along a surface
- **Rotatable**: Objects that can be rotated
- **Scalable**: Objects that can be resized
- **Activatable**: Objects that can be turned on or activated
- **Container**: Objects that can hold other objects
- **Button**: Interactive controls that can be pressed
- **Lever/Switch**: Controls that can be toggled

## State Management

For objects with multiple states, define the states and transitions:

```json
"mvmd:states": {
  "defaultState": "closed",
  "currentState": "closed",
  "availableStates": ["open", "closed", "locked"],
  "stateTransitions": [
    {
      "from": "closed",
      "to": "open",
      "condition": "user_interact",
      "animation": "door_open_animation"
    },
    {
      "from": "open",
      "to": "closed",
      "condition": "user_interact",
      "animation": "door_close_animation"
    },
    {
      "from": "closed",
      "to": "locked",
      "condition": "use_key",
      "animation": "door_lock_animation"
    },
    {
      "from": "locked",
      "to": "closed",
      "condition": "use_key",
      "animation": "door_unlock_animation"
    }
  ]
}
```

## Triggers and Actions

Define what happens when a user interacts with the object:

```json
"mvmd:triggers": {
  "onInteract": {
    "actions": [
      {
        "type": "animate",
        "target": "self",
        "animation": {
          "name": "door_open_close",
          "duration": 1.5,
          "easing": "easeInOut"
        }
      },
      {
        "type": "playSound",
        "sound": "https://example.com/sounds/door_creak.mp3",
        "volume": 0.8,
        "spatial": true
      },
      {
        "type": "changeState",
        "newState": "currentState === 'open' ? 'closed' : 'open'"
      }
    ]
  },
  "onStateChange": {
    "open": {
      "actions": [
        {
          "type": "setNavigation",
          "enabled": true
        },
        {
          "type": "setCollision",
          "enabled": false
        }
      ]
    },
    "closed": {
      "actions": [
        {
          "type": "setNavigation",
          "enabled": false
        },
        {
          "type": "setCollision",
          "enabled": true
        }
      ]
    }
  }
}
```

## Physics and Collision Properties

Define the physical behavior of the object when interacted with:

```json
"mvmd:physics": {
  "mass": 10.0,
  "collisionEnabled": true,
  "collisionShape": "box",
  "dimensions": [1.0, 2.0, 0.1],
  "dynamic": false,
  "constraints": {
    "type": "hinge",
    "axis": [0, 1, 0],
    "pivot": [0.5, 0, 0],
    "limits": {
      "min": 0,
      "max": 90
    }
  }
}
```

## Visual and Audio Feedback

Define visual and audio feedback for user interactions:

```json
"mvmd:feedback": {
  "visual": [
    {
      "type": "highlight",
      "color": "#FFCC00",
      "intensity": 0.5,
      "trigger": "hover"
    },
    {
      "type": "animation",
      "name": "door_handle_wiggle",
      "trigger": "click"
    },
    {
      "type": "particles",
      "effect": "dust",
      "trigger": "stateChange",
      "duration": 1.0
    }
  ],
  "audio": [
    {
      "type": "sound",
      "url": "https://example.com/sounds/door_handle_rattle.mp3",
      "trigger": "hover",
      "volume": 0.3,
      "spatial": true
    },
    {
      "type": "sound",
      "url": "https://example.com/sounds/door_open.mp3",
      "trigger": "stateChange",
      "condition": "newState === 'open'",
      "volume": 0.8,
      "spatial": true
    },
    {
      "type": "sound",
      "url": "https://example.com/sounds/door_close.mp3",
      "trigger": "stateChange",
      "condition": "newState === 'closed'",
      "volume": 0.8,
      "spatial": true
    }
  ],
  "haptic": [
    {
      "type": "vibration",
      "intensity": 0.5,
      "duration": 0.2,
      "trigger": "interact"
    }
  ]
}
```

## Requirements and Conditions

Define any requirements or conditions for interaction:

```json
"mvmd:requirements": {
  "itemRequired": {
    "id": "brass_key",
    "name": "Brass Key",
    "consumeOnUse": false
  },
  "playerProperties": {
    "minimumLevel": 3,
    "requiredPermission": "admin"
  },
  "contextualConditions": {
    "timeOfDay": "night",
    "weatherCondition": "rain"
  }
}
```

## Associated Objects and Dependencies

Define relationships with other objects in the scene:

```json
"mvmd:associations": {
  "controls": [
    {
      "id": "room_light",
      "type": "light",
      "action": "toggle"
    }
  ],
  "requires": [
    {
      "id": "door_frame",
      "type": "structure"
    }
  ],
  "connectedTo": [
    {
      "id": "security_system",
      "type": "system",
      "relationship": "triggers_alarm_when_opened"
    }
  ]
}
```

## Multi-user Interaction

Define how multiple users can interact with the object simultaneously:

```json
"mvmd:multiUserInteraction": {
  "simultaneousUsers": 2,
  "sharedState": true,
  "ownershipModel": "first-come",
  "ownershipDuration": 60,
  "collaborativeActions": [
    {
      "name": "lift",
      "requiredUsers": 2,
      "roles": [
        {
          "name": "left_side",
          "position": [-0.5, 0, 0]
        },
        {
          "name": "right_side",
          "position": [0.5, 0, 0]
        }
      ]
    }
  ]
}
```

## Complete Example

Here's a comprehensive example bringing everything together:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Thing",
  "name": "Ancient Treasure Chest",
  "description": "An ornate wooden treasure chest with metal fixtures. It can be opened, closed, and locked. Requires a specific key to unlock when in locked state.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "ObjectID",
    "value": "chest-2024-001"
  },
  "contentUrl": "https://example.com/objects/treasure-chest.glb",
  "encodingFormat": "model/gltf-binary",
  
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/treasure-chest.jpg",
    "width": 512,
    "height": 512
  },
  
  "mvmd:interactionType": [
    "clickable",
    "toggleable"
  ],
  
  "mvmd:interactionDetails": {
    "interactionRadius": 2.5,
    "interactionPrompt": "Press E to Open/Close",
    "interactionMethod": "proximity",
    "interactionPriority": 2,
    "multiUserInteraction": false
  },
  
  "mvmd:states": {
    "defaultState": "closed",
    "currentState": "closed",
    "availableStates": ["open", "closed", "locked"],
    "stateTransitions": [
      {
        "from": "closed",
        "to": "open",
        "condition": "user_interact AND !is_locked",
        "animation": "chest_open_animation"
      },
      {
        "from": "open",
        "to": "closed",
        "condition": "user_interact",
        "animation": "chest_close_animation"
      },
      {
        "from": "closed",
        "to": "locked",
        "condition": "use_key",
        "animation": "chest_lock_animation"
      },
      {
        "from": "locked",
        "to": "closed",
        "condition": "use_key",
        "animation": "chest_unlock_animation"
      }
    ],
    "persistState": true
  },
  
  "mvmd:triggers": {
    "onInteract": {
      "actions": [
        {
          "type": "animate",
          "target": "self",
          "animation": {
            "name": "chest_state_change",
            "duration": 1.2,
            "easing": "easeInOut"
          }
        },
        {
          "type": "playSound",
          "sound": "https://example.com/sounds/chest_creak.mp3",
          "volume": 0.8,
          "spatial": true
        },
        {
          "type": "changeState",
          "newState": "currentState === 'open' ? 'closed' : (currentState === 'closed' ? 'open' : currentState)"
        }
      ]
    },
    "onStateChange": {
      "open": {
        "actions": [
          {
            "type": "spawnItem",
            "itemId": "ancient_coin",
            "position": [0, 0.5, 0],
            "condition": "!hasBeenOpened",
            "setVariable": {
              "hasBeenOpened": true
            }
          },
          {
            "type": "emitLight",
            "color": "#FFC107",
            "intensity": 2.0,
            "range": 5.0
          }
        ]
      },
      "closed": {
        "actions": [
          {
            "type": "stopEmitLight"
          }
        ]
      },
      "locked": {
        "actions": [
          {
            "type": "playSound",
            "sound": "https://example.com/sounds/chest_locked.mp3",
            "volume": 0.8,
            "spatial": true
          }
        ]
      }
    }
  },
  
  "mvmd:physics": {
    "mass": 25.0,
    "collisionEnabled": true,
    "collisionShape": "box",
    "dimensions": [1.2, 0.8, 0.7],
    "dynamic": false,
    "constraints": {
      "type": "hinge",
      "axis": [1, 0, 0],
      "pivot": [0, 0.8, -0.35],
      "limits": {
        "min": 0,
        "max": 85
      }
    }
  },
  
  "mvmd:feedback": {
    "visual": [
      {
        "type": "highlight",
        "color": "#FFCC00",
        "intensity": 0.5,
        "trigger": "hover"
      },
      {
        "type": "animation",
        "name": "chest_lid_wiggle",
        "trigger": "hover",
        "condition": "currentState !== 'open'"
      },
      {
        "type": "particles",
        "effect": "dust",
        "trigger": "stateChange",
        "duration": 1.0
      }
    ],
    "audio": [
      {
        "type": "sound",
        "url": "https://example.com/sounds/chest_creak_small.mp3",
        "trigger": "hover",
        "volume": 0.3,
        "spatial": true
      },
      {
        "type": "sound",
        "url": "https://example.com/sounds/chest_open.mp3",
        "trigger": "stateChange",
        "condition": "newState === 'open'",
        "volume": 0.8,
        "spatial": true
      },
      {
        "type": "sound",
        "url": "https://example.com/sounds/chest_close.mp3",
        "trigger": "stateChange",
        "condition": "newState === 'closed'",
        "volume": 0.8,
        "spatial": true
      }
    ],
    "haptic": [
      {
        "type": "vibration",
        "intensity": 0.5,
        "duration": 0.2,
        "trigger": "interact"
      },
      {
        "type": "vibration",
        "intensity": 0.8,
        "duration": 0.5,
        "pattern": "double",
        "trigger": "stateChange",
        "condition": "newState === 'open'"
      }
    ]
  },
  
  "mvmd:requirements": {
    "itemRequired": {
      "id": "golden_key",
      "name": "Golden Key",
      "consumeOnUse": false,
      "requiredForStates": ["locked"]
    },
    "contextualConditions": {
      "questCompleted": "dungeon_entrance"
    }
  },
  
  "mvmd:contents": {
    "items": [
      {
        "id": "ancient_coin",
        "name": "Ancient Gold Coin",
        "type": "collectible",
        "value": 100,
        "model": "https://example.com/objects/gold_coin.glb",
        "thumbnail": "https://example.com/thumbnails/gold_coin.jpg"
      },
      {
        "id": "healing_potion",
        "name": "Healing Potion",
        "type": "consumable",
        "effect": "restore_health",
        "strength": 50,
        "model": "https://example.com/objects/healing_potion.glb",
        "thumbnail": "https://example.com/thumbnails/healing_potion.jpg"
      }
    ],
    "revealCondition": "state === 'open'"
  },
  
  "mvmd:networkSync": {
    "importance": "high",
    "updateFrequency": "onChange",
    "synkedProperties": ["state", "position", "contents"]
  }
}
```

## Best Practices for Interactable Objects

1. **Clear Affordances**: Make it clear how users can interact with the object through visual cues, highlights, or prompts.

2. **Consistent Interaction Models**: Use consistent interaction patterns across similar objects to establish user expectations.

3. **Appropriate Feedback**: Provide clear visual, audio, and haptic feedback for all interactions.

4. **Performance Considerations**: Keep physics and animation complexity appropriate for the target platform.

5. **State Management**: Clearly define all possible states and valid transitions between them.

6. **Accessibility**: Ensure interactions are accessible through multiple input methods (click, keyboard, controller).

7. **Meaningful Interactions**: Create interactions that have purpose and meaning within your virtual world.

8. **Network Efficiency**: For multi-user environments, optimize network synchronization to minimize bandwidth usage.

## Common Interaction Patterns

### Buttons and Controls

```json
{
  "@type": "Thing",
  "name": "Emergency Button",
  "mvmd:interactionType": ["clickable", "pressable"],
  "mvmd:states": {
    "defaultState": "unpressed",
    "availableStates": ["pressed", "unpressed"],
    "stateTransitions": [
      {
        "from": "unpressed",
        "to": "pressed",
        "condition": "user_interact",
        "animation": "button_press"
      },
      {
        "from": "pressed",
        "to": "unpressed",
        "condition": "timeout",
        "timeout": 0.5,
        "animation": "button_release"
      }
    ]
  },
  "mvmd:triggers": {
    "onStateChange": {
      "pressed": {
        "actions": [
          {
            "type": "activateDevice",
            "deviceId": "alarm_system"
          }
        ]
      }
    }
  },
  "mvmd:feedback": {
    "visual": [
      {
        "type": "color",
        "from": "#FF0000",
        "to": "#880000",
        "trigger": "stateChange",
        "condition": "newState === 'pressed'"
      }
    ],
    "audio": [
      {
        "type": "sound",
        "url": "https://example.com/sounds/button_press.mp3",
        "trigger": "stateChange",
        "condition": "newState === 'pressed'"
      }
    ]
  }
}
```

### Doors and Portals

```json
{
  "@type": "Thing",
  "name": "Portal Door",
  "mvmd:interactionType": ["activatable"],
  "mvmd:states": {
    "defaultState": "inactive",
    "availableStates": ["inactive", "active"]
  },
  "mvmd:triggers": {
    "onStateChange": {
      "active": {
        "actions": [
          {
            "type": "teleport",
            "destination": {
              "world": "fantasy_realm",
              "position": [100, 0, 200],
              "rotation": [0, 180, 0]
            },
            "effect": "portal_swirl"
          }
        ]
      }
    }
  }
}
```

### Containers and Storage

```json
{
  "@type": "Thing",
  "name": "Supply Crate",
  "mvmd:interactionType": ["openable", "container"],
  "mvmd:contents": {
    "items": [
      {
        "id": "medkit",
        "quantity": 2
      },
      {
        "id": "ammunition",
        "quantity": 50
      }
    ],
    "randomSelection": true,
    "itemCount": 2
  }
}
```

## Next Steps

- [Describe Virtual World Scenes](describe-scenes.md) - Return to the main virtual world scene guide
- [Add Environmental Effects](../advanced/environmental-effects.md) - Learn how to add atmospheric effects to your scenes
- [Validate Your Metadata](../basic/validate-metadata.md) - Ensure your interaction metadata is correctly structured

