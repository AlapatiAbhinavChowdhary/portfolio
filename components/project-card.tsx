"use client"

import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/projects-data"

type ProjectCardProps = {
  project: Project
  showViewDetails?: boolean
}

function getTitleInitials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
}

export function ProjectCard({ project, showViewDetails = true }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-blue-100 bg-white/90 shadow-[0_16px_44px_-28px_rgba(30,64,175,0.3)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_28px_60px_-28px_rgba(59,130,246,0.4)]">
      <div className="relative aspect-video overflow-hidden rounded-t-3xl border-b border-blue-100/80 bg-blue-50/40">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-blue-50 to-blue-100/70 flex items-center justify-center">
            <div className="text-center px-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 border border-blue-200 text-blue-700 font-bold text-lg">
                {getTitleInitials(project.title)}
              </span>
              <p className="mt-2 text-xs font-medium text-slate-600">{project.category}</p>
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
      </div>

      <div className="p-5 md:p-6">
        <h3 className="text-xl font-semibold leading-tight text-slate-900 md:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((stackItem) => (
            <span
              key={stackItem}
              className="rounded-full border border-blue-200/70 bg-blue-500/8 px-2.5 py-0.5 text-[10px] md:text-[11px] font-medium text-blue-700"
            >
              {stackItem}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:from-blue-700 hover:to-blue-800 hover:shadow-[0_10px_22px_-14px_rgba(37,99,235,0.65)]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-all duration-300 hover:scale-[1.03] hover:border-blue-400/60 hover:bg-blue-50"
          >
            <Github className="h-3.5 w-3.5" />
            Code
          </a>
          {showViewDetails && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 transition-all duration-300 hover:scale-[1.03] hover:bg-blue-100"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
