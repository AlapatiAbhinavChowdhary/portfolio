"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Braces, BrainCircuit, Code2, Server, Wrench } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { FaAws, FaDocker, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa"
import { SiPowers } from "react-icons/si"
import type { IconType } from "react-icons"

type SkillItem = {
  name: string
  logo?: string
  icon?: IconType
  iconClassName?: string
}

type SkillCategory = {
  title: string
  icon: LucideIcon
  skills: SkillItem[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    icon: Braces,
    skills: [
      { name: "React.js", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS", logo: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    ],
  },
  {
    title: "BACKEND",
    icon: Server,
    skills: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", logo: "https://cdn.simpleicons.org/express/000000" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "REST API", logo: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
    ],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: [
      { name: "Scikit-Learn", logo: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/013243" },
      { name: "Matplotlib", logo: "https://cdn.simpleicons.org/plotly/3F4F75" },
      { name: "Seaborn", logo: "https://cdn.simpleicons.org/python/3776AB" },
    ],
  },
  {
    title: "TOOLS",
    icon: Wrench,
    skills: [
      { name: "Git", icon: FaGitAlt, iconClassName: "text-[#F05032]" },
      { name: "GitHub", icon: FaGithub, iconClassName: "text-[#111827]" },
      { name: "Docker", icon: FaDocker, iconClassName: "text-[#2496ED]" },
      { name: "Power BI", icon: SiPowers, iconClassName: "text-[#F2C811]" },
      { name: "AWS", icon: FaAws, iconClassName: "text-[#FF9900]" },
      { name: "Linux", icon: FaLinux, iconClassName: "text-[#111827]" },
    ],
  },
  {
    title: "LANGUAGES",
    icon: Code2,
    skills: [
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/000000" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
      { name: "C", logo: "https://cdn.simpleicons.org/c/00599C" },
      { name: "SQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
    ],
  },
]

function SkillCard({ name, logo, icon: Icon, iconClassName }: SkillItem) {
  return (
    <div className="group rounded-xl border border-primary/10 bg-white/70 backdrop-blur-xl p-4 min-h-[120px] flex flex-col justify-center items-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300">
      <div className="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center mb-3">
        {Icon ? (
          <Icon className={`w-9 h-9 ${iconClassName ?? "text-slate-700"} transition-transform duration-300 group-hover:scale-110`} />
        ) : (
          <img
            src={logo || "/placeholder.svg"}
            alt={name}
            className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
      <p className="text-sm md:text-base font-medium text-slate-700 text-center leading-tight">{name}</p>
    </div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(37,99,235,0.12),transparent_40%)] -z-10" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills Stack</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Organized by niche: Frontend, Backend, AI/ML, Tools, and Languages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 * categoryIndex }}
                className="rounded-2xl border border-primary/10 bg-white/50 backdrop-blur-md p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <CategoryIcon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-foreground">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <SkillCard key={`${category.title}-${skill.name}`} {...skill} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
