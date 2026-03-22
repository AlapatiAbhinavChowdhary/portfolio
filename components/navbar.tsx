"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState("#about")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((element): element is Element => Boolean(element))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visibleEntry?.target?.id) return
        setActiveHref(`#${visibleEntry.target.id}`)
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5],
      }
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 92
      const elementPosition = (element as HTMLElement).getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: Math.max(0, elementPosition - headerOffset), behavior: "smooth" })
      setActiveHref(href)
    }
  }

  return (
    <header
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/75 backdrop-blur-xl border-b border-blue-100/70 py-3 shadow-lg shadow-black/5" : "py-5 bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 hover:scale-105 transition-transform"
        >
          Abhi<span className="text-blue-500 dark:text-blue-300">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "group text-sm font-medium transition-colors relative",
                activeHref === link.href ? "text-blue-700" : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300",
                  activeHref === link.href ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </a>
          ))}
          <Button asChild className="rounded-full px-6">
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              Hire Me
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="rounded-full"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav id="mobile-nav" className="md:hidden glass mt-2 mx-4 rounded-xl p-4 flex flex-col gap-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href)
                setMobileOpen(false)
              }}
              className={cn(
                "text-sm font-medium transition-colors py-2",
                activeHref === link.href ? "text-blue-700" : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="rounded-full w-full mt-2">
            <a
              href="#contact"
              onClick={(e) => {
                handleNavClick(e, "#contact")
                setMobileOpen(false)
              }}
            >
              Hire Me
            </a>
          </Button>
        </nav>
      )}
    </header>
  )
}
