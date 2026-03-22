"use client"

import { motion, useInView } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { useRef } from "react"

type EducationItem = {
  degree: string
  institute: string
  detail: string
  period: string
}

const education: EducationItem[] = [
  {
    degree: "Matriculation (10th)",
    institute: "Narayana EM School, Tenali",
    detail: "100%",
    period: "2020 - 2021",
  },
  {
    degree: "Intermediate (MPC)",
    institute: "Narayana Jr College, Tenali",
    detail: "94.6%",
    period: "2021 - 2023",
  },
  {
    degree: "B.Tech (CSE - AI & ML)",
    institute: "Lovely Professional University",
    detail: "CGPA: 8.1 (Currently Pursuing)",
    period: "2023 - Present",
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.08),transparent_38%),radial-gradient(circle_at_85%_80%,rgba(37,99,235,0.08),transparent_42%)] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Academic Journey</h2>
          <p className="text-slate-600 mt-3 text-base md:text-lg">Where it all started and how it's going</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-200/80 md:hidden" />
          <div className="hidden md:block absolute left-[16.666%] right-[16.666%] top-2 h-px bg-blue-200/80" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
            {education.map((item, idx) => (
              <div key={item.degree} className="relative pl-10 md:pl-0 pt-10 md:pt-5">
                <span className="absolute left-2 top-4 h-4 w-4 rounded-full bg-blue-500 border-2 border-white shadow-sm md:left-1/2 md:-translate-x-1/2 md:top-0" />
                <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 h-4 w-px bg-blue-200/80" />

                <motion.article
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.38, delay: idx * 0.1 }}
                  className={`relative rounded-xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-blue-200/55 hover:scale-[1.01] ${
                    idx === education.length - 1
                      ? "border-blue-300 shadow-[0_12px_28px_-18px_rgba(37,99,235,0.6)] md:scale-[1.01]"
                      : "border-blue-100 shadow-md"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400" />

                  <div className="flex items-start gap-3.5">
                    <span className="h-10 w-10 rounded-lg bg-blue-50 border border-blue-100 inline-flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.degree}</h3>
                      <p className="text-blue-800 font-semibold mt-2">{item.institute}</p>
                      <p className="text-sm text-slate-600 mt-2">{item.detail}</p>
                      <p className="text-sm text-slate-500 mt-1">{item.period}</p>
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
