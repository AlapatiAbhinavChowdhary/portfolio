"use client"

import { motion, useInView } from "framer-motion"
import { Code2, Zap, Users } from "lucide-react"
import { useRef } from "react"

type LoveCard = {
  title: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

const cards: LoveCard[] = [
  {
    title: "Building Things End-to-End",
    icon: Code2,
    description:
      "I like building things end-to-end - from messy UI bugs to backend logic that somehow works after 3 retries. There is something satisfying about seeing an idea turn into something real (and not crash immediately).",
  },
  {
    title: "Making Things Faster",
    icon: Zap,
    description:
      "I enjoy making things faster - not because users notice milliseconds, but because I do. Watching load time drop feels like winning a small personal battle.",
  },
  {
    title: "Building What Actually Matters",
    icon: Users,
    description:
      "I do not like building just for the sake of it. If it does not solve something useful, it just feels like code sitting there judging me.",
  },
]

export function ThingsLoveSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.08),transparent_42%),radial-gradient(circle_at_85%_75%,rgba(37,99,235,0.06),transparent_44%)] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-block text-xs md:text-sm font-mono text-slate-500 mb-2 tracking-wide">
            {/* stuff I enjoy */}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            What I <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-clip-text text-transparent">Actually</span> Enjoy Building
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Not everything. Just the stuff that keeps me hooked.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 * idx }}
                className="rounded-2xl border border-blue-100 bg-white/85 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:shadow-blue-200/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-7">{card.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
