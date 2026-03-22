"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Download, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="resume" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              DOCUMENTATION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Resume & CV</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              View or download my comprehensive resume to explore my education, technical skills, projects, and professional experience in detail.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-2xl border border-primary/10 bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-xl p-12 md:p-16 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all rounded-2xl" />

            <div className="relative text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white mb-8 group-hover:scale-110 transition-transform"
              >
                <FileText className="h-10 w-10" />
              </motion.div>

              <h3 className="text-3xl font-bold text-foreground mb-4">My Professional Resume</h3>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Comprehensive details about my academic background, technical expertise, project portfolio, internship experience, certifications, and achievements in AI/ML and full-stack development.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all group/btn"
                >
                  <a
                    href="https://drive.google.com/file/d/1KDqPGyoTX8JGIp62PMCvHLxWeJ0XDaMA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Resume
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="rounded-full glass bg-background/30 backdrop-blur-md border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all group/btn"
                >
                  <a
                    href="https://drive.google.com/uc?export=download&id=1KDqPGyoTX8JGIp62PMCvHLxWeJ0XDaMA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Info Cards */}
              <div className="mt-12 pt-12 border-t border-primary/10 grid sm:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-1">20+</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Skills & Tools</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Projects</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-1">4</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Certifications</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
