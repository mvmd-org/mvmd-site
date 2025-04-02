---
sidebar_position: 3
---

# Types of Things

This guide covers the Schema.org types used within MVMD. While Schema.org
defines [many types](https://schema.org/docs/full.html), we focus on those most relevant for Metaverse assets and
experiences. As new recipes and use cases are added to MVMD, this guide will be updated with additional types.

## Core Types

### CreativeWork
Schema.org:
[Thing](https://schema.org/Thing) > [CreativeWork](https://schema.org/CreativeWork)

The most versatile base type for digital assets. Used for any creative content or intellectual creation.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Digital Asset",
  "creator": {
    "@type": "Organization",
    "name": "Digital Studio"
  }
}
```

Common uses:

- Base type for complex assets
- Collections of assets
- Multi-part creations
- Composite works

### MediaObject
Schema.org:
[Thing](https://schema.org/Thing) > [CreativeWork](https://schema.org/CreativeWork) > [MediaObject](https://schema.org/MediaObject)


Base type for various media formats. Several specialized subtypes are commonly used:

#### ImageObject
Schema.org:
[Thing](https://schema.org/Thing) > [CreativeWork](https://schema.org/CreativeWork) > [MediaObject](https://schema.org/MediaObject) > [ImageObject](https://schema.org/ImageObject)

Primary type for visual assets and previews:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "ImageObject",
  "name": "Asset Preview",
  "contentUrl": "https://example.com/preview.jpg",
  "encodingFormat": "image/jpeg",
  "width": "1024",
  "height": "1024"
}
```

Common uses:

- Asset previews
- Thumbnails
- Textures
- Reference images

#### 3DModel
Schema.org:
[Thing](https://schema.org/Thing) > [CreativeWork](https://schema.org/CreativeWork) > [MediaObject](https://schema.org/MediaObject) > [3DModel](https://schema.org/3DModel)

Specialized type for three-dimensional assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Detailed Model",
  "contentUrl": "https://example.com/model.glb",
  "encodingFormat": "model/gltf-binary"
}
```

Common uses:

- Virtual objects
- Character models
- Environmental elements
- Interactive props

### Place
Schema.org:
[Thing](https://schema.org/Thing) > [Place](https://schema.org/Place)

Used specifically for digital representations of physical locations (digital twins):

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Place",
  "name": "Digital Museum Twin",
  "description": "Digital twin of the Metropolitan Museum",
  "maximumAttendeeCapacity": 1000,
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7794,
    "longitude": -73.9632
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1000 Fifth Avenue",
    "addressLocality": "New York"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Spawn Points",
      "value": 4
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Arena Size",
      "value": "100x100"
    }
  ]
}
```

Common uses:

- Digital twins of real buildings
- Virtual representations of physical spaces
- Mapped physical environments
- Real-world location references

### VirtualLocation
Schema.org:
[Thing](https://schema.org/Thing)  > [Intangible](https://schema.org/Intangible)  > [VirtualLocation](https://schema.org/VirtualLocation)

Used for purely virtual spaces in the metaverse:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "VirtualLocation",
  "name": "Tech Summit Plaza",
  "description": "A virtual conference space in the Metaverse featuring multiple presentation areas, networking zones, and interactive exhibits.",
  "image": "https://example.com/virtual-locations/tech-summit-plaza.jpg",
  "url": "https://meta.example.com/locations/tech-summit-plaza",
  "potentialAction": {
    "@type": "JoinAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/join/tech-summit-plaza?userId={userId}",
      "actionPlatform": [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/VRHeadset"
      ]
    }
  }
}
```

Common uses:

- Virtual meeting spaces
- Game environments
- Fantasy locations
- Abstract spaces

# Event

A Schema.org Type  
[Thing](https://schema.org/Thing) > [Event](https://schema.org/Event)

An event happening at a certain time and location, such as a concert, lecture, or festival. Events can be held in both
physical locations and virtual spaces.

## Example

```json
{
  "@context": "https://schema.org/",
  "@type": "Event",
  "name": "Future of Digital Worlds Summit 2024",
  "description": "Annual conference exploring the intersection of virtual worlds, gaming, and digital society",
  "startDate": "2024-09-15T09:00:00-07:00",
  "endDate": "2024-09-17T17:00:00-07:00",
  "eventStatus": "EventScheduled",
  "eventAttendanceMode": "MixedEventAttendanceMode",
  "location": [
    {
      "@type": "Place",
      "name": "Tech Convention Center",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Innovation Blvd",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      }
    },
    {
      "@type": "VirtualLocation",
      "name": "Digital Summit Space",
      "url": "https://summit.example.com/virtual-venue"
    }
  ],
  "maximumVirtualAttendeeCapacity": 2000,
  "maximumPhysicalAttendeeCapacity": 500,
  "offers": [
    {
      "@type": "Offer",
      "name": "In-Person Full Pass",
      "price": 599.00,
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Virtual Attendance",
      "price": 199.00,
      "priceCurrency": "USD"
    }
  ]
}
```

Common uses:
* Virtual conferences and meetups
* Live streaming events
* Social gatherings in virtual worlds
* Mixed reality performances


### SoftwareApplication
Schema.org:
[Thing](https://schema.org/Thing) > [CreativeWork](https://schema.org/CreativeWork) > [SoftwareApplication](https://schema.org/SoftwareApplication)

Used for interactive applications and experiences:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "SoftwareApplication",
  "name": "Virtual Gallery Creator",
  "applicationCategory": "Virtual Reality Application",
  "applicationSubCategory": "Content Creation",
  "operatingSystem": "Quest OS",
  "softwareVersion": "2.1.0",
  "downloadUrl": "https://store.example.com/virtual-gallery-creator",
  "installUrl": "https://install/virtual-gallery-creator",
  "screenshot": {
    "@type": "ImageObject",
    "url": "https://example.com/gallery-creator-screenshot.jpg",
    "width": "1920",
    "height": "1080"
  }
}
```

Common uses:

- Interactive experiences
- Virtual applications
- Games
- Tools

### DigitalDocument
Schema.org:
[Thing](https://schema.org/Thing) > [CreativeWork](https://schema.org/CreativeWork) > [DigitalDocument](https://schema.org/DigitalDocument)

Used for documentation and text-based assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "User Guide",
  "encodingFormat": "text/markdown",
  "abstract": "Guide to using virtual space"
}
```

Common uses:

- Documentation
- Guides
- Specifications
- Instructions

## Type Relationships

Types can be related in several ways:

### Inheritance

Many types inherit from broader types:

- `3DModel` is a type of `MediaObject`
- `MediaObject` is a type of `CreativeWork`
- All types ultimately derive from `Thing`

### Composition

Types can be composed using various properties:

- `mainEntity`: The primary object
- `hasPart`: Direct components
- `associatedMedia`: Related media
- `encodesCreativeWork`: Embedded content
- `subjectOf`: Related documentation

_Please review the [Composition](/concepts/composition) page for details._

### References

Types can reference each other:

- `image`: Link to an ImageObject
- `mainEntityOfPage`: Primary subject
- `sameAs`: Alternative versions

_Please review the [References](/concepts/references) page for details._


## Best Practices

1. **Type Selection**
    - Choose the most specific applicable type
    - Consider required properties
    - Think about relationships
    - Plan for extensions

2. **Property Usage**
    - Include all required properties
    - Use optional properties appropriately
    - Maintain consistency
    - Document custom properties

3. **Type Relationships**
    - Define clear hierarchies
    - Use appropriate relationship properties
    - Document dependencies
    - Maintain referential integrity


## Future Types

As MVMD evolves, additional types will be documented here based on:

- New use cases identified
- Additional recipes created
- Community feedback
- Platform requirements

For a complete list of available Schema.org types, visit the [full documentation](https://schema.org/docs/full.html).
