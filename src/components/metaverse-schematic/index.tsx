"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function MetaverseSchematic() {
  // Content state with descriptions for popups
  const content = {
    title: "Metaverse Asset Standards",
    standards: "glTF • USD • VRM • FBX • COLLADA • X3D • OpenXR • CityJSON • 3D Tiles • C2PA",
    standardsDesc:
      "A comprehensive collection of established standards that excel in different domains: glTF for efficient 3D models, USD for complex scene composition, VRM for humanoid avatars, FBX for animation and rigging, COLLADA for asset exchange, X3D for web-based 3D graphics, OpenXR for VR/AR experiences, CityJSON for urban environments, 3D Tiles for large-scale geospatial data, and C2PA for content authentication.",

    schema: "Schema.org & JSON-LD Foundation",
    schemaDesc:
      "MVMD builds on Schema.org and JSON-LD as its foundation, providing flexible structure, namespace support, and broad compatibility. This layer extends Schema.org with metaverse-specific properties, while maintaining search engine compatibility.",

    profiles: "MVMD Integration Profiles",
    profilesContent: "Ready-to-use templates for common asset types",
    profilesDesc:
      "Standardized metadata templates that combine multiple standards for specific use cases. Examples include Composable 3D NFTs, Digital Twins, Vehicles, and Identity profiles. Each profile provides clear implementation patterns, validation rules, and best practices.",

    assets: "Digital Assets Implementation",
    assetsDesc:
      "Practical implementation patterns for complex digital assets. This layer handles component relationships, asset hierarchies, content embedding, and resource management. It provides clear guidance for combining multiple standards while maintaining proper validation.",

    implementation: "Interoperable Ecosystem",
    implementationDesc:
      "The framework that enables seamless asset integration across platforms. It handles namespace management, standard relationships, validation across specifications, and maintains compatibility with search engines and discovery tools.",

    platforms: "Metaverse Platforms & Marketplaces",
    platformsDesc:
      "The diverse ecosystem where MVMD-enabled assets are created, traded, and experienced. Platforms benefit from increased interoperability, better asset discovery, simplified onboarding, and support for complex multi-component assets.",
  }

  // Refs for each box
  const boxRefs = {
    title: useRef<HTMLDivElement>(null),
    schema: useRef<HTMLDivElement>(null),
    profiles: useRef<HTMLDivElement>(null),
    assets: useRef<HTMLDivElement>(null),
    implementation: useRef<HTMLDivElement>(null),
    platforms: useRef<HTMLDivElement>(null),
  }

  // Box component with glass morphism - entire box is clickable
  const GlassBox = ({
    field,
    title,
    content,
    description,
    gradient = "from-purple-600/80 to-blue-600/80",
    isLarge = false,
    number,
  }: {
    field: string
    title: string
    content?: string
    description: string
    gradient?: string
    isLarge?: boolean
    number: number
  }) => {
    return (
      <motion.div
        ref={boxRefs[field as keyof typeof boxRefs]}
        className={`group relative border border-white/20 rounded-lg p-4 bg-gradient-to-br ${gradient} backdrop-blur-md shadow-lg hover:z-10`}
        whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Number label */}
        <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-blue-600 backdrop-blur-md flex items-center justify-center text-sm font-bold text-white border border-white/30">
          {number}
        </div>

        <div className="font-bold text-base text-center text-white">{title}</div>

        {content && <div className="mt-2 text-center text-white text-sm font-normal">{content}</div>}

        {/* Glass Tooltip */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+10px)] w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out pointer-events-none z-50">
          <div className="relative bg-gray-900/90 backdrop-blur-md border border-white/20 rounded-lg p-4 text-sm text-white shadow-lg">
            {description}
            {/* Arrow pointing down */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-gray-900/90 border-b border-r border-white/20"></div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Simplified connection line
  const ConnectionLine = () => (
    <div className="h-4 flex justify-center">
      <motion.div
        className="w-0.5 bg-white/50"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="max-w-md mx-auto p-4 relative">
      <div className="relative">
        {/* Background dotted line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[40px] bottom-[40px] border-l-2 border-dotted border-blue-600 z-0" />
        <div className="space-y-2 relative z-10">
          {/* Box 1: Metaverse Asset Standards */}
          <GlassBox
            field="title"
            title={content.title}
            content={content.standards}
            description={content.standardsDesc}
            gradient="from-indigo-500/80 to-blue-500/80"
            isLarge={true}
            number={1}
          />

          <ConnectionLine />

          {/* Box 2: Schema.org, JSON-LD */}
          <GlassBox
            field="schema"
            title={content.schema}
            description={content.schemaDesc}
            gradient="from-blue-500/80 to-sky-500/80"
            number={2}
          />

          <ConnectionLine />

          {/* Box 3: MVMD Integration Profiles */}
          <GlassBox
            field="profiles"
            title={content.profiles}
            content={content.profilesContent}
            description={content.profilesDesc}
            gradient="from-sky-500/80 to-cyan-500/80"
            isLarge={true}
            number={3}
          />

          <ConnectionLine />

          {/* Box 4: NFTs, Digital Assets, Data */}
          <GlassBox
            field="assets"
            title={content.assets}
            description={content.assetsDesc}
            gradient="from-cyan-500/80 to-teal-500/80"
            number={4}
          />

          <ConnectionLine />

          {/* Box 5: Interoperable Implementation */}
          <GlassBox
            field="implementation"
            title={content.implementation}
            description={content.implementationDesc}
            gradient="from-teal-500/80 to-blue-500/80"
            number={5}
          />

          <ConnectionLine />

          {/* Box 6: Metaverse Platforms... */}
          <GlassBox
            field="platforms"
            title={content.platforms}
            description={content.platformsDesc}
            gradient="from-blue-500/80 to-indigo-500/80"
            number={6}
          />
        </div>
      </div>
    </div>
  )
} 