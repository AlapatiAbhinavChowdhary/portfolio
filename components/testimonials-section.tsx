"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Training Instructor",
    role: "W3grads MERN Stack Program",
    content:
      "Abhinav demonstrated exceptional dedication throughout the MERN training. He consistently delivered high-quality projects and showed strong problem-solving abilities. His 95% assignment completion rate speaks to his commitment to learning.",
    rating: 5,
  },
  {
    name: "Project Mentor",
    role: "Machine Learning Supervisor",
    content:
      "His Email Spam Classifier project showcased solid understanding of NLP concepts and machine learning pipelines. The 96% accuracy achieved is impressive for a student project, and the code quality was production-ready.",
    rating: 5,
  },
  {
    name: "Community Lead",
    role: "Educational Outreach Program",
    content:
      "Abhinav's dedication to teaching underprivileged students was remarkable. He mentored over 50 students with patience and creativity, making complex topics accessible and engaging for young learners.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Others <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-lg">
            Feedback from mentors, instructors, and colleagues
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass rounded-3xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all hover:scale-[1.02]"
              >
                <Quote className="h-10 w-10 text-primary/20 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={`${testimonial.name}-star-${i}`} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
