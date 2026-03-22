import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alapati Abhinav Chowdhary | AI & ML Developer Portfolio",
  description:
    "AI & ML developer portfolio showcasing machine learning projects, data science work, and full-stack applications. Specializing in Python, React, and cloud computing. Currently seeking AI/ML Engineering and Data Science opportunities.",
  keywords: [
    "AI developer portfolio",
    "ML projects",
    "data science portfolio",
    "machine learning engineer",
    "full stack developer",
    "Python developer",
    "React developer",
    "Alapati Abhinav Chowdhary",
  ],
  authors: [{ name: "Alapati Abhinav Chowdhary" }],
  creator: "Alapati Abhinav Chowdhary",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alapati Abhinav Chowdhary | AI & ML Developer",
    description:
      "AI & ML developer portfolio showcasing machine learning projects, data science work, and full-stack applications.",
    siteName: "Alapati Abhinav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alapati Abhinav Chowdhary | AI & ML Developer",
    description:
      "AI & ML developer portfolio showcasing machine learning projects, data science work, and full-stack applications.",
  },
  icons: {
    icon: "/favicon-aac.svg",
    shortcut: "/favicon-aac.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
