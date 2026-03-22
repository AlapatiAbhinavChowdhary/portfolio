"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 lg:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.04),transparent_42%),radial-gradient(circle_at_85%_70%,rgba(37,99,235,0.03),transparent_46%)] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-blue-700 text-lg md:text-xl font-semibold mb-4"
            >
              Hello! I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold mb-5 leading-[1.05]"
            >
              <span className="text-slate-800">Alapati </span>
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient hero-name-glow">
                Abhinav
              </span>
              <span className="text-slate-800"> Chowdhary</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="text-xl md:text-2xl font-semibold text-slate-700 mb-6"
            >
              AI/ML Engineer | Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mb-10"
            >
              I build scalable AI-powered applications and end-to-end systems that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <Button
                asChild
                size="lg"
                className="rounded-xl px-8 bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_24px_-12px_rgba(37,99,235,0.65)]"
              >
                <a href="mailto:abhinavalapati.aac@gmail.com">Contact Me</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-xl px-8 border-slate-300 text-slate-700 hover:bg-slate-100 bg-white/70 transition-all duration-300"
              >
                <a
                  href="https://drive.google.com/file/d/1YZnl2bBYv4HN_kGuK2dxffRXQQGosOOy/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/AlapatiAbhinavChowdhary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-300 bg-white/80 text-slate-700 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinavalapati"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-300 bg-white/80 text-slate-700 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:abhinavalapati.aac@gmail.com"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-300 bg-white/80 text-slate-700 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            whileHover={{ y: -4, scale: 1.008, rotateX: 1, rotateY: -1 }}
            className="relative"
            style={{ transformPerspective: 1200 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute inset-0 bg-blue-200/25 rounded-3xl blur-xl translate-x-2 translate-y-3"
            />
            <div className="relative rounded-3xl bg-white/95 border border-blue-100 shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/45 hover:border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-500" />
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                  <span className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-slate-500">developer.js</span>
              </div>

              <pre className="text-sm md:text-[1.02rem] leading-8 text-slate-600 overflow-x-auto">
                <code>
                  <span className="text-slate-500">// Building useful products</span>
                  {"\n"}
                  <span className="text-pink-600">const</span> <span className="text-blue-700">developer</span> = {"{"}
                  {"\n"}
                  {"  "}role: <span className="text-green-700">"AI/ML Engineer"</span>,
                  {"\n"}
                  {"  "}builds: [<span className="text-green-700">"AI Apps"</span>, <span className="text-green-700">"Web Apps"</span>],
                  {"\n"}
                  {"  "}focus: [<span className="text-green-700">"Scalable Systems"</span>, <span className="text-green-700">"Real-world Impact"</span>],
                  {"\n"}
                  {"  "}mindset: <span className="text-green-700">"Always learning 🚀"</span>
                  {"\n"}
                  {"}"};<span className="terminal-cursor" />
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
