---
sidebar_position: 3
---

# 3D and Virtual World Standards

## glTF (GL Transmission Format)
An efficient, standardized format for 3D content delivery.

### Key Features
- Efficient transmission and loading of 3D models
- Support for materials, textures, and animations
- Extensible metadata system

### Example Usage
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Virtual Asset",
  "format": "glTF 2.0",
  "gltf:material": "metallic",
  "gltf:scale": [1.0, 1.0, 1.0]
}
```

## USD (Universal Scene Description)
A high-performance format for describing complex 3D scenes.

### Key Features
- Layering and composition system
- Rich metadata support
- Industry-standard adoption

## X3D
A standard for web-based 3D graphics and interactive 3D content.

### Key Features
- XML-based format
- Real-time rendering
- Web integration capabilities
