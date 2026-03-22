import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { getProjectBySlug, projects } from "@/lib/projects-data"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white px-4 py-20 text-slate-900">
      <article className="mx-auto max-w-5xl">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_16px_44px_-28px_rgba(30,64,175,0.3)]">
          <div className="relative aspect-video overflow-hidden border-b border-blue-100 bg-blue-50/40">
            {project.imageUrl ? (
              <img src={project.imageUrl} alt={`${project.title} preview`} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-blue-50 to-blue-100/70 flex items-center justify-center">
                <p className="text-blue-700 font-semibold">{project.title}</p>
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h1>
            <p className="mt-4 text-slate-600 leading-relaxed">{project.fullDescription}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((stackItem) => (
                <span
                  key={stackItem}
                  className="rounded-full border border-blue-200/70 bg-blue-500/8 px-3 py-1 text-xs md:text-sm font-medium text-blue-700"
                >
                  {stackItem}
                </span>
              ))}
            </div>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-slate-900">Key Features</h2>
              <ul className="mt-3 space-y-2 text-slate-600">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:from-blue-700 hover:to-blue-800"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:scale-[1.03] hover:border-blue-400/60 hover:bg-blue-50"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
