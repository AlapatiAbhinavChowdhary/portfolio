"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full Stack (MERN) Training",
    company: "W3grads",
    period: "Jun 2025 - Jul 2025",
    description:
      "Completed intensive 2-month MERN stack training program. Built 5+ full-stack projects including authentication systems, REST APIs, and database integrations. Achieved 95% assignment completion rate and deployed 3 production-ready applications.",
    impact: "Trained in building scalable web applications • 5+ projects completed • 95% assignment success rate",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
  },
  {
    title: "Campus Ambassador",
    company: "Comet AI Browser",
    period: "Aug 2025 - Nov 2025",
    description:
      "Led campus outreach initiatives for Comet AI browser across university. Organized 10+ awareness sessions and demo events, reaching 500+ students and faculty members.",
    impact: "Reached 500+ students • Organized 10+ events • Increased campus adoption by 40%",
    skills: ["Marketing", "Communication", "Leadership"],
  },
  {
    title: "Community Volunteer",
    company: "Educational Outreach",
    period: "Jun 2023 - Jul 2023",
    description:
      "Mentored 50+ underprivileged students in literacy and computer basics. Conducted 15+ interactive sessions on hygiene, sanitation, and educational development.",
    impact: "Mentored 50+ students • Conducted 15+ sessions • Improved literacy awareness",
    skills: ["Teaching", "Mentoring", "Community Service"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              JOURNEY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Growth</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Training programs, internships, and community involvement that shaped my career
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative ${index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"} pl-12 md:pl-0`}
                >
                  {/* Timeline dot */}
                  <div className="absolute top-6 left-2.5 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20" />

                  {/* Card */}
                  <div
                    className={`group relative rounded-2xl border border-primary/10 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl p-8 md:p-10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/10 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all rounded-2xl" />

                    <div className="relative">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-semibold text-lg">{exp.company}</p>
                          </div>
                          <Briefcase className="h-6 w-6 text-primary shrink-0" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-primary/10 mb-4" />

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                      {/* Impact */}
                      <div className="bg-primary/5 rounded-lg p-4 mb-4 border border-primary/10">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Impact</p>
                        <p className="text-sm text-foreground font-medium">{exp.impact}</p>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="rounded-full text-xs px-3 py-1 font-medium bg-primary/10 text-primary border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
