"use client"

import { useEffect, useState } from "react"

type LaunchLoaderProps = {
  onComplete: () => void
}

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>#{}[]/\\,;"

function randomToken(length: number) {
  let out = ""
  for (let i = 0; i < length; i += 1) {
    out += CHARSET[Math.floor(Math.random() * CHARSET.length)]
  }
  return out
}

export function LaunchLoader({ onComplete }: LaunchLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [label, setLabel] = useState("INITIALIZING")
  const [token, setToken] = useState("A1,>K#3Q")

  useEffect(() => {
    const ticker = window.setInterval(() => {
      setProgress((prev) => {
        const jump = Math.floor(Math.random() * 6) + 2
        const next = Math.min(prev + jump, 100)

        if (next < 35) setLabel("LOADING ASSETS")
        else if (next < 70) setLabel("WARMING MODELS")
        else if (next < 95) setLabel("BOOTING INTERFACE")
        else setLabel("READY")

        setToken(next < 95 ? randomToken(10) : "ALAPATI_ABHINAV")

        if (next >= 100) {
          window.clearInterval(ticker)
          window.setTimeout(onComplete, 260)
        }

        return next
      })
    }, 70)

    return () => window.clearInterval(ticker)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[100] bg-black text-blue-300 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white/90 mb-12 text-center font-mono">
          {token}
        </h1>

        <div className="w-full h-3 rounded-full bg-blue-200/20 border border-blue-300/30 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-2 w-full h-1 rounded-full bg-blue-300/10 overflow-hidden">
          <div
            className="h-full bg-blue-400/70 transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-blue-300/95 font-mono text-sm md:text-base">
          <p>{label}</p>
          <p>{progress}%</p>
        </div>
      </div>
    </div>
  )
}
