<!-- Path: /docs/implementation/metadata-profiles/environment-profile.md -->
---
sidebar_position: 4
---

# Environment Profile

The Environment Profile defines metadata for virtual spaces and environments. This profile combines spatial, interactive, and technical properties from multiple standards to describe complex virtual environments.

## Core Structure

```json
{
   "@context": {
      "@vocab": "https://schema.org/",
      "gltf": "https://www.khronos.org/gltf/",
      "usd": "https://openusd.org/ns/",
      "citygml": "http://www.opengis.net/citygml/2.0"
   },
   "@type": "Place",

   "name": "Virtual Conference Center",
   "description": "Large-scale virtual conference space with multiple meeting rooms and interactive displays",

   "identifier": {
      "@type": "PropertyValue",
      "propertyID": "MVMD-ID",
      "value": "environment-2024-001"
   }
}
```

## Required Properties

### Basic Information (from Basic Profile)
- `@context`
- `@type`: Must be "Place"
- `name`
- `description`
- `identifier`
- `creator`
- `contentUrl`
- `encodingFormat`

### Environment Properties
- `maximumAttendeeCapacity`
- Spatial boundaries
- Entry points
- Interactive elements

## Spatial Properties

### Basic Spatial Information
```json
{
   "spatialCoverage": {
      "@type": "GeoShape",
      "box": "0,0,100,100",
      "elevation": 0
   },

   "maximumAttendeeCapacity": 500,

   "amenityFeature": [
      {
         "@type": "LocationFeatureSpecification",
         "name": "mainHall",
         "value": true,
         "maxCapacity": 200
      },
      {
         "@type": "LocationFeatureSpecification",
         "name": "meetingRooms",
         "value": 8,
         "maxCapacity": 30
      }
   ]
}
```

### Scene Composition
```json
{
   "usd:stage": {
      "upAxis": "Y",
      "metersPerUnit": 1.0
   },

   "usd:layers": [
      {
         "name": "architecture",
         "path": "/Conference/Architecture"
      },
      {
         "name": "furniture",
         "path": "/Conference/Furniture"
      },
      {
         "name": "lighting",
         "path": "/Conference/Lighting"
      }
   ]
}
```

## Complete Example

```json
{
   "@context": {
      "@vocab": "https://schema.org/",
      "gltf": "https://www.khronos.org/gltf/",
      "usd": "https://openusd.org/ns/",
      "citygml": "http://www.opengis.net/citygml/2.0"
   },
   "@type": "Place",

   "name": "Virtual Conference Center",
   "description": "Professional virtual conference space featuring a grand hall, multiple meeting rooms, and interactive presentation areas.",

   "identifier": {
      "@type": "PropertyValue",
      "propertyID": "MVMD-ID",
      "value": "environment-2024-001"
   },

   "creator": {
      "@type": "Organization",
      "name": "Virtual Spaces Inc.",
      "url": "https://example.com/virtual-spaces"
   },

   "dateCreated": "2024-03-15",
   "license": "https://creativecommons.org/licenses/by/4.0/",

   "contentUrl": "https://example.com/environments/conference-center.usd",
   "encodingFormat": "model/vnd.usd",
   "thumbnailUrl": "https://example.com/thumbnails/conference-center.jpg",

   "spatialCoverage": {
      "@type": "GeoShape",
      "box": "0,0,200,150",
      "elevation": 0,
      "ceiling": 6
   },

   "maximumAttendeeCapacity": 500,

   "amenityFeature": [
      {
         "@type": "LocationFeatureSpecification",
         "name": "mainHall",
         "value": true,
         "maxCapacity": 200,
         "location": {
            "@type": "Place",
            "additionalProperty": {
               "@type": "PropertyValue",
               "name": "coordinates",
               "value": [100, 0, 75]
            }
         }
      },
      {
         "@type": "LocationFeatureSpecification",
         "name": "meetingRooms",
         "value": 8,
         "maxCapacity": 30,
         "amenityFeature": {
            "name": "presentationScreen",
            "value": true
         }
      }
   ],

   "usd:stage": {
      "upAxis": "Y",
      "metersPerUnit": 1.0
   },

   "usd:layers": [
      {
         "name": "architecture",
         "path": "/Conference/Architecture"
      },
      {
         "name": "furniture",
         "path": "/Conference/Furniture"
      },
      {
         "name": "lighting",
         "path": "/Conference/Lighting"
      },
      {
         "name": "interactive",
         "path": "/Conference/Interactive"
      }
   ],

   "usd:variants": {
      "lighting": ["day", "night", "presentation"],
      "layout": ["conference", "exhibition", "reception"]
   },

   "citygml:indoor": {
      "storeys": 1,
      "rooms": [
         {
            "name": "mainHall",
            "type": "hall",
            "height": 6.0,
            "area": 1000
         },
         {
            "name": "meetingRoom",
            "type": "meeting",
            "height": 3.0,
            "area": 50,
            "count": 8
         }
      ]
   },

   "additionalProperty": [
      {
         "@type": "PropertyValue",
         "name": "entryPoints",
         "value": [
            {
               "name": "mainEntrance",
               "position": [100, 0, 0],
               "direction": [0, 0, 1]
            },
            {
               "name": "sideEntrance",
               "position": [0, 0, 75],
               "direction": [1, 0, 0]
            }
         ]
      },
      {
         "@type": "PropertyValue",
         "name": "spawnPoints",
         "value": [
            {
               "name": "lobby",
               "position": [100, 0, 10],
               "direction": [0, 0, 1]
            }
         ]
      },
      {
         "@type": "PropertyValue",
         "name": "interactiveElements",
         "value": [
            {
               "type": "presentationScreen",
               "locations": ["mainHall", "meetingRooms"],
               "interactions": ["display", "share", "control"]
            },
            {
               "type": "lightingControl",
               "locations": ["mainHall", "meetingRooms"],
               "interactions": ["adjust", "preset"]
            }
         ]
      },
      {
         "@type": "PropertyValue",
         "name": "streamingRegions",
         "value": [
            {
               "name": "mainHall",
               "priority": 1,
               "lodLevels": [0, 1, 2]
            },
            {
               "name": "meetingRooms",
               "priority": 2,
               "lodLevels": [0, 1]
            }
         ]
      }
   ]
}
```

## Validation Rules

### Spatial Validation
- Valid spatial boundaries
- Non-negative dimensions
- Valid coordinates
- Proper unit usage

### Capacity Validation
- Valid total capacity
- Consistent sub-area capacities
- Reasonable density limits

### Interactive Elements
- Valid element types
- Proper positioning
- Clear interaction methods

## Best Practices

1. **Spatial Organization**
   - Clear zone definitions
   - Proper capacity allocation
   - Logical layout structure
   - Efficient navigation paths
   - Resource optimization

2. **Interactive Features**
   - Well-defined interactions
   - Clear element locations
   - Proper feature documentation
   - User-friendly controls
   - Efficient handling

3. **Scene Management**
   - Organized layer structure
   - Proper variant definitions
   - Clear streaming regions
   - Resource optimization
   - Performance monitoring

4. **Entry Management**
   - Clear entry points
   - Defined spawn locations
   - Proper flow control
   - Traffic management
   - Access control

## Next Steps

- Review [3D Object Profile](./3d-object-profile.md) for object metadata
- See [Avatar Profile](./avatar-profile.md) for character integration
- Check [Validation Tools](../tools/validation.md) for testing
