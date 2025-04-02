---
sidebar_position: 2
---

# Composable 3D NFT

This Composable 3D NFT recipe extends the Basic Profile with properties specific to 3D models and objects. This profile combines
Schema.org metadata with technical properties from glTF and related standards to define reusable 3D assets.

It uses the hasPart attribute to define the individual parts of the model, so that they can be combined with other NFTs.

## Core Structure

```json
{
  "name": "Trashformers #3 - The Professor",
  "description": "The Professor is an eccentric and brilliant scientist with spider-like metallic legs and a body made from a smuggled ipe wood shelf, obsessed with the properties of garbage and pioneering the field of \"Quantum Garbology,\" which makes him a valuable, though absent-minded, ally to the Trashformers.",
  "sensitive_content": false,
  "series_number": 3,
  "series_total": 123,
  "attributes": [
    {
      "trait_type": "Head",
      "value": "Dark Shelfmet"
    },
    {
      "trait_type": "Waist",
      "value": "Mempool"
    },
    {
      "trait_type": "Bottom",
      "value": "Air Care"
    },
    {
      "trait_type": "Legs",
      "value": "Arachnoid"
    },
    {
      "trait_type": "Slide",
      "value": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_slide.png"
    }
  ],
  "collection": {
    "name": "Trashformers",
    "id": "d1da7f91-5175-441f-8c68-f02c146250f7",
    "attributes": [
      {
        "type": "description",
        "value": "123 Spacebucks NFTs"
      },
      {
        "type": "icon",
        "value": "https://trashformers.xyz/files/trashformers-icon.jpg"
      },
      {
        "type": "banner",
        "value": "https://trashformers.xyz/files/trashformers_header.jpg"
      },
      {
        "type": "twitter",
        "value": "@TrashformersNFT"
      },
      {
        "type": "website",
        "value": "https://trashformers.xyz"
      }
    ]
  },
  "data": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/",
      "gltf": "https://www.khronos.org/gltf/"
    },
    "@type": "ImageObject",
    "encodingFormat": "image/png",
    "contentSize": "4.1708 MB",
    "width": 4000,
    "height": 4000,
    "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_image.png",
    "encodesCreativeWork": [
      {
        "@type": "VideoObject",
        "sha256": "3b4b77d57a5d354c830455dc97a5ecc3fc1a7d9338999958ddd95f5d96fdec23",
        "height": "4000",
        "width": "4000",
        "name": "Trashformers 003 - Rare 1_turntable.mp4",
        "size": "16.378 MB",
        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_turntable.mp4",
        "description": "Turntable",
        "encodingFormat": "video/mp4"
      }
    ],
    "thumbnail": [
      {
        "@type": "ImageObject",
        "sha256": "050aa7b601f9d050a9ecb1b852911c235064916f0d9d6587d72a3983a2a92564",
        "height": "4000",
        "width": "4000",
        "name": "Trashformers 003 - Rare 1_image.png",
        "size": "4.1708 MB",
        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_image.png",
        "description": "Thumbnail",
        "encodingFormat": "image/png"
      }
    ],
    "associatedMedia": [
      {
        "@type": "3DModel",
        "sha256": "6b773924348c8933cebbb23a71990ccfb16b00356dfb1ddfd7bbf28ac33e9e04",
        "name": "Trashformers 003 - Rare 1_glb.glb",
        "size": "3.52 MB",
        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_glb.glb",
        "description": "GLB Model",
        "encodingFormat": "model/gltf-binary"
      }
    ],
    "hasPart": [
      {
        "@type": "3DModel",
        "encodingFormat": "model/gltf-binary",
        "sha256": "b3b9488ee49f38fa256a22c89e8efd6ce1a98d6a0d25a5a6aa76695f0efe7ea9",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "Trait",
          "name": "Head",
          "value": "Dark Shelfmet"
        },
        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_part_head_dark_shelfmet.glb",
        "gltf:properties": {
          "scale": [
            1.4201340675354005,
            1.4201343059539796,
            1.4201343059539796
          ],
          "rotation": [
            -0.7071068286895752,
            0.0,
            0.0,
            0.7071068286895752
          ],
          "translation": [
            0.0001447883842047304,
            0.4153881072998047,
            0.0830850899219513
          ]
        },
        "name": "Trashformers 003 - Rare 1_part_head_dark_shelfmet.glb",
        "size": "677.920 KB",
        "description": "GLB Part"
      },
      {
        "@type": "3DModel",
        "encodingFormat": "model/gltf-binary",
        "sha256": "615656921907f14606e7dffb6c145931a2978798779e1d1b6a6a049f6168b7d2",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "Trait",
          "name": "Bottom",
          "value": "Air Care"
        },
        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_part_bottom_air_care.glb",
        "gltf:properties": {
          "scale": [
            1.1783671379089356,
            1.1783673763275147,
            1.1783673763275147
          ],
          "rotation": [
            -0.7071068286895752,
            0.0,
            0.0,
            0.7071068286895752
          ],
          "translation": [
            0.0,
            -0.2519422769546509,
            0.09754324704408646
          ]
        },
        "name": "Trashformers 003 - Rare 1_part_bottom_air_care.glb",
        "size": "555.960 KB",
        "description": "GLB Part"
      },
      {
        "@type": "3DModel",
        "encodingFormat": "model/gltf-binary",
        "sha256": "7187721a651e53860d54fb7e6375ca11af49153ea074c48f56e08c341a3eab8e",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "Trait",
          "name": "Legs",
          "value": "Arachnoid"
        },
        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_part_legs_arachnoid.glb",
        "gltf:properties": {
          "scale": [
            1.0947469472885132,
            1.0947471857070923,
            1.0947471857070923
          ],
          "rotation": [
            -0.7071068286895752,
            0.0,
            0.0,
            0.7071068286895752
          ],
          "translation": [
            0.0,
            -0.5753867030143738,
            0.0025049836840480568
          ]
        },
        "name": "Trashformers 003 - Rare 1_part_legs_arachnoid.glb",
        "size": "1.36 MB",
        "description": "GLB Part"
      }
    ]
  }
}
```

## Implementation Details

For detailed implementation patterns for 3D models, including glTF-specific properties and extensions, refer to the [3D Standards](../namespaces/3d-standards.md) namespace documentation.

## Next Steps

- Review [Environment Profile](./scene.md) for spatial context
- Check [Avatar Profile](./avatar.md) for character-specific properties
- See [Validation Tools](../reference/validator.md) for testing

## Related Namespaces

- [Schema.org](../namespaces/schema-org.md): Core vocabulary for NFT metadata
- [3D Standards](../namespaces/3d-standards.md): Implementation patterns for 3D NFT assets
- [Trust & Provenance](../namespaces/trust-provenance.md): Authentication and verification for NFTs
