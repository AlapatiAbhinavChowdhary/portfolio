"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink, Code2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    period: "Aug 2025 - Sep 2025",
    link: "#",
    icon: "🤖",
  },
  {
    title: "Gen AI Academy",
    issuer: "Google",
    period: "Jul 2025 - Aug 2025",
    link: "#",
    icon: "🧠",
  },
  {
    title: "Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    period: "Sep 2025 - Oct 2025",
    link: "#",
    icon: "☁️",
  },
  {
    title: "Data Visualisation",
    issuer: "TATA",
    period: "Jun 2025 - Jul 2025",
    link: "#",
    icon: "📊",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              MILESTONES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications & Achievements</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-primary/10 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all rounded-2xl" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <Award className="h-5 w-5 text-primary/50 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mb-4">{cert.period}</p>

                  {cert.link !== "#" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full h-auto p-0 text-xs"
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Certificate
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* DSA Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group relative rounded-2xl border border-primary/10 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl p-8 mb-12 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all rounded-2xl" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <Code2 className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">DSA & Problem Solving</h3>
                  <p className="text-muted-foreground">Consistent practice and skill development on LeetCode</p>
                </div>
              </div>
              <Button
                asChild
                className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all group/btn"
              >
                <a href="https://leetcode.com/u/abhialapati/" target="_blank" rel="noopener noreferrer">
                  <Code2 className="mr-2 h-5 w-5" />
                  View LeetCode Profile
                  <ExternalLink className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Education Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="group relative rounded-2xl border border-primary/10 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all" />

            <div className="relative p-8 md:p-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <BookOpen className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Academic Excellence</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Matriculation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-transparent border border-blue-100"
                >
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="font-semibold text-foreground mb-1">Matriculation</p>
                  <p className="text-sm text-muted-foreground">Narayana Em School</p>
                </motion.div>

                {/* Intermediate */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.85 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-transparent border border-purple-100"
                >
                  <div className="text-4xl font-bold text-primary mb-2">94.6%</div>
                  <p className="font-semibold text-foreground mb-1">Intermediate (MPC)</p>
                  <p className="text-sm text-muted-foreground">Narayana Jr College</p>
                </motion.div>

                {/* B.Tech */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-transparent border border-orange-100"
                >
                  <div className="text-4xl font-bold text-primary mb-2">8.1</div>
                  <p className="font-semibold text-foreground mb-1">B.Tech CSE (AI&ML)</p>
                  <p className="text-sm text-muted-foreground">Lovely Professional Univ.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
