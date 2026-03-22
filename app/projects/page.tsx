"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { projects, type ProjectCategory } from "@/lib/projects-data"

const filterCategories: Array<"All" | ProjectCategory> = ["All", "ML / AI", "Full Stack", "NLP", "Tools"]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All")

  const filteredProjects = useMemo(
    () => (activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter]
  )

  return (
    <main className="min-h-screen bg-white px-4 py-20 text-slate-900">
      <section className="mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">All Projects</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Explore complete project work across machine learning, full-stack development, and analytics.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "border border-blue-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8 text-center text-slate-600">
            No projects available for this filter yet.
          </div>
        )}
      </section>
    </main>
  )
}
