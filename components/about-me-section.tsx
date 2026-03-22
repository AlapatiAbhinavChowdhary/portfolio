"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const quotes = [
  "Debugging at 2 AM is brutal. Shipping the fix while it's still dark out feels like a minor victory.",
  "I'd rather have working code that's boring than broken code that looks cool.",
  "The best learning happens right after the first production bug. Everything before that is just practice.",
]

export function AboutMeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-x-0 top-24 h-[82%] bg-gradient-to-r from-blue-500 to-blue-600 [clip-path:polygon(0_12%,100%_0,100%_88%,0_100%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-sm">Builder Mindset, Student Heart</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mx-auto lg:mx-0"
          >
            <div className="w-44 h-44 rounded-full p-1.5 bg-white/90 shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/profile.png"
                  alt="Alapati Abhinav Chowdhary"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="text-white/95"
          >
            <p className="text-lg leading-relaxed mb-4">
              I'm a software developer who started coding out of pure curiosity and a bit of frustration with how things worked. Fast forward: still curious, way more frustrated, infinitely better at debugging.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I build things because understanding how systems come together is genuinely exciting. I break them intentionally, fix them obsessively, and ship them confidently. There's something satisfying about code that just works—especially at 2 AM when you're running on cold coffee and spite.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I don't believe in perfect code, but I do believe in code that solves problems and doesn't make the next person want to quit. Clean architecture, readable variables, tests that actually pass—these aren't optional.
            </p>
            <p className="text-lg leading-relaxed">
              The best part of what I do? Shipping features that make life easier for real people. That's the whole game.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {quotes.map((q, idx) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
              className="rounded-xl bg-white/92 text-slate-700 p-4 border border-blue-100 shadow-sm"
            >
              <p className="text-sm leading-relaxed">"{q}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
