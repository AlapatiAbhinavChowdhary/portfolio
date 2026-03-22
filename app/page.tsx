"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { ThingsLoveSection } from "@/components/things-love-section"
import { AboutMeSection } from "@/components/about-me-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { CodingProfilesSection } from "@/components/coding-profiles-section"
import { ContactSection } from "@/components/contact-section"
import { LaunchLoader } from "@/components/launch-loader"
import { Navbar } from "@/components/navbar"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <LaunchLoader onComplete={() => setIsLoaded(true)} />}
      <div className={`bg-white text-gray-900 transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <main>
          <HeroSection />
          <ThingsLoveSection />
          <AboutMeSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <CodingProfilesSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}
