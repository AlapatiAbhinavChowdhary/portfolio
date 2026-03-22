"use client"

import { AnimatePresence, motion, useInView } from "framer-motion"
import { Calendar, ExternalLink, ShieldCheck, X } from "lucide-react"
import { useMemo, useRef, useState } from "react"

type CertificationItem = {
  title: string
  issuer: string
  completedOn: string
  url: string
}

const certifications: CertificationItem[] = [
  {
    title: "Fundamentals of Network Communication",
    issuer: "Professional Credential",
    completedOn: "2026",
    url: "https://drive.google.com/file/d/1DZ_kl6tk-2j2lmugmRIJZo3X13Rp9pJ-/view?usp=sharing",
  },
  {
    title: "MERN Stack",
    issuer: "Professional Credential",
    completedOn: "2026",
    url: "https://drive.google.com/file/d/1KYDNNRk9j07cH-hj2BXq1G6UTUv1us_p/view?usp=drive_link",
  },
  {
    title: "Oracle AI Professional",
    issuer: "Professional Credential",
    completedOn: "2026",
    url: "https://drive.google.com/file/d/14hDDMMuGCj-wc-sKI539I92ENICJfnd_/view?usp=drive_link",
  },
]

function getDriveThumbnail(url: string) {
  const match = url.match(/\/d\/([^/]+)/)
  return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000` : ""
}

export function CertificationsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const certsWithPreview = useMemo(
    () => certifications.map((cert) => ({ ...cert, preview: getDriveThumbnail(cert.url) })),
    []
  )

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.08),transparent_38%),radial-gradient(circle_at_85%_80%,rgba(37,99,235,0.08),transparent_42%)] -z-10" />

      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <ShieldCheck className="h-4 w-4" />
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Professional Certifications</h2>
        </motion.div>

        <div className="rounded-2xl border border-blue-100/80 bg-white/85 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden">
          {certsWithPreview.map((cert, idx) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: "easeOut", delay: idx * 0.07 }}
              className={`group grid grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-4 px-3 py-3.5 md:px-4 md:py-4 hover:bg-blue-50/45 transition-all duration-300 ${
                idx !== certsWithPreview.length - 1 ? "border-b border-blue-100/70" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setPreviewUrl(cert.preview)}
                className="relative h-12 w-16 md:h-14 md:w-20 overflow-hidden rounded-md border border-blue-100 bg-blue-50/60 transition-all duration-300 hover:brightness-105"
                aria-label={`Open preview for ${cert.title}`}
              >
                {cert.preview ? (
                  <img src={cert.preview} alt={`${cert.title} preview`} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <span className="inline-flex h-full w-full items-center justify-center text-blue-700">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                )}
                <span className="pointer-events-none absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400/80 via-blue-500/70 to-blue-600/70" />
              </button>

              <div className="min-w-0">
                <h3 className="text-[15px] md:text-base font-bold text-slate-900 truncate">{cert.title}</h3>
                <p className="text-sm text-blue-700/95 font-medium truncate">{cert.issuer}</p>
                <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5" />
                  {cert.completedOn}
                </p>
              </div>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100/80 px-3 py-1.5 text-xs md:text-sm font-semibold text-blue-700 transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_16px_-12px_rgba(37,99,235,0.6)]"
              >
                Verify
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-5 flex justify-center"
        >
          <a
            href="https://drive.google.com/drive/folders/1z70ueO8bD2HDMDr-iac1guEzRBT2QWGF?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100/80 px-4 py-2 text-sm font-semibold text-blue-700 transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_16px_-12px_rgba(37,99,235,0.6)]"
          >
            More Certificates
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-[2px] p-4 flex items-center justify-center"
            onClick={() => setPreviewUrl(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-3xl rounded-xl border border-blue-100 bg-white p-3 shadow-xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreviewUrl(null)}
                className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-blue-100 bg-white text-slate-600 hover:bg-blue-50 transition-colors"
                aria-label="Close preview"
              >
                <X className="h-4 w-4" />
              </button>

              <img src={previewUrl} alt="Certificate preview" className="w-full h-auto rounded-lg border border-blue-100" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
