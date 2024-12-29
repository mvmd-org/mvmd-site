---
sidebar_position: 4
---

# Geospatial Standards

## CityGML
An OGC standard for describing 3D city models and geospatial data.

### Key Features
- Semantic modeling of urban environments
- Multi-scale representation
- Support for terrain and land use

### Example Usage
```xml
<cityGML xmlns="http://www.opengis.net/citygml/2.0">
  <cityModel>
    <cityObjectMember>
      <bldg:Building>
        <bldg:function>residential</bldg:function>
        <bldg:yearBuilt>2023</bldg:yearBuilt>
      </bldg:Building>
    </cityObjectMember>
  </cityModel>
</cityGML>
```

## 3D Tiles
An OGC standard optimized for streaming and rendering massive 3D geospatial datasets.

### Key Features
- Hierarchical level of detail
- Efficient streaming
- Integration with web mapping platforms

### Example Usage
```json
{
  "asset": {
    "version": "1.0"
  },
  "geometricError": 70,
  "root": {
    "boundingVolume": {
      "region": [-1.3197, 0.6988, -1.3196, 0.6989, 0, 20]
    },
    "geometricError": 50,
    "refine": "ADD"
  }
}
