---
sidebar_position: 7
---

# Interactables Profile

The Interactables Profile defines metadata for objects that can be interacted with in virtual environments, such as buttons, switches, doors, and other interactive elements.

## Core Structure

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  
  "name": "Control Panel",
  "description": "Interactive control panel with multiple buttons and displays",
  
  "interactionType": "multi",
  "triggers": ["proximity", "click"],
  "states": ["on", "off"]
}
```

## Required Properties

- Basic Profile requirements
- Interaction type
- Trigger definitions
- State management
- Response behaviors

## Technical Details

(Placeholder for detailed technical specifications)

## Common Patterns

(Placeholder for implementation patterns)

## Best Practices

(Placeholder for best practices)

## Next Steps

- Implement basic interactables
- Test interaction patterns
- Validate functionality
