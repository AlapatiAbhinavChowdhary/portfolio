"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Dot {
  x: number
  y: number
  baseX: number
  baseY: number
  phase: number
  speed: number
  radius: number
  color: string
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let dots: Dot[] = []
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createDots = () => {
      dots = []
      const spacing = 40
      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)

      const colors =
        theme === "dark"
          ? ["rgba(100, 140, 200, 0.3)", "rgba(120, 150, 210, 0.3)", "rgba(90, 130, 190, 0.3)"]
          : ["rgba(200, 180, 255, 0.6)", "rgba(255, 180, 220, 0.6)", "rgba(220, 180, 255, 0.6)"]

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2
          const y = j * spacing + spacing / 2

          dots.push({
            x,
            y,
            baseX: x,
            baseY: y,
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.3,
            radius: 1.5 + Math.random() * 0.5,
            color: colors[Math.floor(Math.random() * colors.length)],
          })
        }
      }
    }

    const drawDots = () => {
      dots.forEach((dot) => {
        const wave = Math.sin(time * dot.speed + dot.phase) * 3
        const ripple = Math.cos(time * dot.speed * 0.7 + dot.phase * 1.5) * 2

        dot.x = dot.baseX + wave
        dot.y = dot.baseY + ripple

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)

        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.radius * 3)
        gradient.addColorStop(0, dot.color)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.fill()
      })
    }

    const animate = () => {
      ctx.fillStyle = theme === "dark" ? "#121826" : "#FFFFFF"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawDots()

      time += 0.005
      animationId = requestAnimationFrame(animate)
    }

    resize()
    createDots()
    animate()

    const handleResize = () => {
      resize()
      createDots()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ pointerEvents: "none" }} />
}
