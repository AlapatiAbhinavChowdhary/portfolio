"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { featuredProjects } from "@/lib/projects-data"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full overflow-hidden bg-white px-4 py-24 text-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_16%,rgba(59,130,246,0.14),transparent_40%),radial-gradient(circle_at_86%_82%,rgba(6,182,212,0.12),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(rgba(59,130,246,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.35)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-500">PROJECTS</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Featured Builds</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            A curated snapshot of recent work across full-stack development, machine learning, and analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-100"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
