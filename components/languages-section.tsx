"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Languages } from "lucide-react"

const languages = [
  { name: "English", proficiency: "Professional Working Proficiency", emoji: "🇬🇧", level: 90 },
  { name: "German", proficiency: "Basic / Learning", emoji: "🇩🇪", level: 25 },
  { name: "Hindi", proficiency: "Fluent", emoji: "🇮🇳", level: 95 },
  { name: "Telugu", proficiency: "Native", emoji: "🇮🇳", level: 100 },
]

export function LanguagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="languages" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              COMMUNICATION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Languages I Speak</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proficiency in multiple languages for global communication
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-primary/10 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all rounded-2xl" />

                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{language.emoji}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {language.name}
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                    {language.proficiency}
                  </p>

                  {/* Proficiency Bar */}
                  <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${language.level}%` } : {}}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full"
                    />
                  </div>
                  <p className="text-xs text-primary font-semibold mt-2">{language.level}% Proficiency</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
