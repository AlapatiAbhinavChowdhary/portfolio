"use client"

import { motion, useInView } from "framer-motion"
import { FormEvent, useRef, useState } from "react"
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi"
import { SiLeetcode } from "react-icons/si"

type FormState = {
  name: string
  email: string
  message: string
}

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
}

const CONTACT_RECEIVER_EMAIL = "abhinavalapati.aac@gmail.com"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState<FormState>(initialFormState)
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()

    if (!name || !email || !message) {
      setError("Please fill in all required fields.")
      return
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!validEmail) {
      setError("Please enter a valid email address.")
      return
    }

    try {
      setError("")
      setSubmitted(false)
      setIsSending(true)

      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_RECEIVER_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New portfolio message from ${name}`,
          _captcha: "false",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit message.")
      }

      setSubmitted(true)
      setFormData(initialFormState)
    } catch {
      setError("Could not send message right now. Please try again in a moment.")
    } finally {
      setIsSending(false)
    }

    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.07),transparent_40%),radial-gradient(circle_at_88%_82%,rgba(37,99,235,0.07),transparent_42%)] -z-10" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 tracking-wide">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Got an idea, opportunity, or just want to say hi? I'm always open to conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="rounded-xl border border-blue-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-[3px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200" />

            <div className="p-6 md:p-7">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Contact Info</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Building something interesting? I'd love to hear about it.
                <br />
                I'm always open to collaboration, ideas, and meaningful conversations.
              </p>

              <div className="space-y-4 mb-7">
                <a
                  href="mailto:abhinavalapati.aac@gmail.com"
                  className="flex items-center gap-3 text-slate-700 hover:text-blue-700 transition-colors"
                >
                  <span className="h-9 w-9 rounded-lg bg-blue-50 border border-blue-100 inline-flex items-center justify-center">
                    <FiMail className="h-4 w-4" />
                  </span>
                  <span className="font-medium">abhinavalapati.aac@gmail.com</span>
                </a>

                <a
                  href="tel:+919494996979"
                  className="flex items-center gap-3 text-slate-700 hover:text-blue-700 transition-colors"
                >
                  <span className="h-9 w-9 rounded-lg bg-blue-50 border border-blue-100 inline-flex items-center justify-center">
                    <FiPhone className="h-4 w-4" />
                  </span>
                  <span className="font-medium">+91 94949 96979</span>
                </a>

                <div className="flex items-center gap-3 text-slate-700">
                  <span className="h-9 w-9 rounded-lg bg-blue-50 border border-blue-100 inline-flex items-center justify-center">
                    <FiMapPin className="h-4 w-4" />
                  </span>
                  <span className="font-medium">India</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500 mb-3 tracking-wide">SOCIAL LINKS</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/AlapatiAbhinavChowdhary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:scale-[1.03] transition-all"
                  >
                    <FiGithub className="h-4 w-4" />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abhinavalapati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:scale-[1.03] transition-all"
                  >
                    <FiLinkedin className="h-4 w-4" />
                    LinkedIn
                  </a>

                  <a
                    href="https://leetcode.com/u/abhialapati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:scale-[1.03] transition-all"
                  >
                    <SiLeetcode className="h-4 w-4 text-[#F89F1B]" />
                    LeetCode
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-xl border border-blue-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-[3px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200" />

            <div className="p-6 md:p-7">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Send a Message</h3>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-medium text-slate-700 block mb-1.5">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-sm font-medium text-slate-700 block mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium text-slate-700 block mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-200 focus:border-blue-500 resize-none"
                    placeholder="Tell me a bit about your idea or project..."
                  />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}
                {submitted && <p className="text-sm text-emerald-600">Message sent successfully. I'll get back to you soon.</p>}

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-5 py-3 text-sm font-semibold hover:bg-blue-700 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>

              <p className="text-sm text-slate-600 mt-5">I usually reply faster than my code compiles 😄</p>
            </div>
          </motion.article>
        </div>

        <p className="text-center text-sm text-slate-500 mt-10">
          © 2026 Abhinav. Built with passion and a lot of debugging.
        </p>
      </div>
    </section>
  )
}
