"use client";

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700
          before:bg-gradient-to-tl before:from-blue-400/20 before:via-transparent before:to-blue-800/20
          after:bg-gradient-to-br after:from-transparent after:via-blue-600/10 after:to-transparent
          transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        {/* Animated shapes */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto py-24 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="size-32 md:size-40 rounded-full bg-white backdrop-blur-sm flex items-center justify-center">
            <Image src="/logo.svg" alt="LOGO" fill className="object-cover p-4"/>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          元素周期表
        </h1>
        <div className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-12">
          键作龙蛇笔 码凝天地玄<br/>
          织云连海岳 刻月映人间<br/>
          指底洪波起 惊雷破大千<br/>
          虚实皆有道 万象入灵笺<br/>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#products">
            <Button size="lg" className="text-white hover:bg-white hover:text-blue-600">
              我们引以为傲的产品
            </Button>
          </Link>
          <Link href="#github">
            <Button size="lg" variant="outline" className="text-blue-600 bg-white hover:text-white hover:bg-blue-600">
              在GitHub了解更多
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" className="text-white/80 hover:text-white transition-colors">
            <ArrowDown className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}

