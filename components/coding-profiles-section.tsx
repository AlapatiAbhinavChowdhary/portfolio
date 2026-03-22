"use client"

import { motion, useInView } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useRef } from "react"
import { Area, CartesianGrid, ComposedChart, Line, ReferenceDot, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si"

type TrendPoint = {
  week: string
  solved: number
}

type ProfileCard = {
  name: string
  icon: "leetcode" | "gfg"
  profileUrl: string
  totalSolved: string
  stats: Array<{ label: string; value: string }>
  trend: TrendPoint[]
  note?: string
}

function makeTrend(points: number[]): TrendPoint[] {
  return points.map((solved, idx) => ({
    week: `W${idx + 1}`,
    solved,
  }))
}

const profileCards: ProfileCard[] = [
  {
    name: "LeetCode",
    icon: "leetcode",
    profileUrl: "https://leetcode.com/u/abhialapati/",
    totalSolved: "236",
    stats: [
      { label: "Easy", value: "159" },
      { label: "Medium", value: "74" },
      { label: "Hard", value: "3" },
    ],
    trend: makeTrend([2, 3, 4, 3, 5, 6, 4, 7, 8, 6, 9, 10]),
    note: "Stats synced from public profile overview.",
  },
  {
    name: "GeeksforGeeks",
    icon: "gfg",
    profileUrl: "https://www.geeksforgeeks.org/profile/abhinavalapati",
    totalSolved: "67",
    stats: [
      { label: "Coding Score", value: "167" },
      { label: "Institute Rank", value: "7682" },
      { label: "POTD Streak", value: "0 Day" },
    ],
    trend: makeTrend([4, 5, 6, 5, 7, 6, 8, 7, 6, 7, 6, 7]),
    note: "Synced from your GFG activity view (including 74 submissions in 2026).",
  },
]

function PlatformIcon({ icon }: { icon: "leetcode" | "gfg" }) {
  if (icon === "leetcode") {
    return <SiLeetcode className="h-5 w-5 text-[#F89F1B]" />
  }

  return <SiGeeksforgeeks className="h-5 w-5 text-[#2F8D46]" />
}

export function CodingProfilesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section id="coding-profiles" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.07),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(37,99,235,0.07),transparent_40%)] -z-10" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 tracking-wide">
            PROBLEM SOLVING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Coding Profiles & Consistency</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I treat consistency like a skill. Daily reps, clean thinking, better outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {profileCards.map((card, index) => (
            <motion.article
              key={card.name}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="group rounded-xl border border-blue-100 bg-white shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden"
            >
              <div className="h-[3px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200" />

              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-blue-50 border border-blue-100">
                      <PlatformIcon icon={card.icon} />
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">{card.name}</h3>
                  </div>

                  <a
                    href={card.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100 transition-colors"
                  >
                    View Profile
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 md:col-span-1">
                    <p className="text-xs text-slate-500">Total Solved</p>
                    <p className="text-xl font-bold text-slate-900 mt-1">{card.totalSolved}</p>
                  </div>

                  {card.stats.map((stat) => (
                    <div key={`${card.name}-${stat.label}`} className="rounded-lg border border-slate-200 bg-white p-3">
                      <p className="text-xs text-slate-500">{stat.label}</p>
                      <p className="text-sm md:text-base font-semibold text-slate-800 mt-1">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold text-slate-700">Weekly Solved Trend</p>
                    <p className="text-xs text-slate-500">Last 12 weeks</p>
                  </div>

                  <div className="h-56 rounded-md border border-slate-200 bg-white p-3">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={card.trend} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                        <defs>
                          <linearGradient id={`${card.name}-fill`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.28} />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.04} />
                          </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.25} vertical={false} />
                        <XAxis
                          dataKey="week"
                          tick={{ fill: "#64748b", fontSize: 11 }}
                          axisLine={{ stroke: "#cbd5e1" }}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fill: "#64748b", fontSize: 11 }}
                          axisLine={{ stroke: "#cbd5e1" }}
                          tickLine={false}
                          allowDecimals={false}
                        />

                        <Tooltip
                          cursor={{ stroke: "#60a5fa", strokeOpacity: 0.35, strokeWidth: 1.5 }}
                          contentStyle={{
                            borderRadius: 8,
                            border: "1px solid #dbeafe",
                            backgroundColor: "#ffffff",
                            fontSize: 12,
                          }}
                          formatter={(value: number) => [`${value} solved`, "Problems"]}
                        />

                        <Area type="monotone" dataKey="solved" stroke="none" fill={`url(#${card.name}-fill)`} />
                        <Line
                          type="monotone"
                          dataKey="solved"
                          stroke="#2563eb"
                          strokeWidth={2.5}
                          dot={{ r: 3, fill: "#2563eb", stroke: "#ffffff", strokeWidth: 1.5 }}
                          activeDot={{ r: 5, fill: "#1d4ed8", stroke: "#ffffff", strokeWidth: 2 }}
                          isAnimationActive
                        />

                        {card.trend.length > 0 && (
                          <ReferenceDot
                            x={card.trend[card.trend.length - 1].week}
                            y={card.trend[card.trend.length - 1].solved}
                            r={6}
                            fill="#1d4ed8"
                            stroke="#ffffff"
                            strokeWidth={2}
                            ifOverflow="visible"
                          />
                        )}
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>

                  <p className="mt-3 text-xs text-slate-600 font-medium">
                    Consistency over intensity - steady growth every week.
                  </p>

                  {card.note && <p className="mt-3 text-[11px] text-slate-500">{card.note}</p>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-sm md:text-base text-slate-600 mt-8 font-medium">
          Consistency beats intensity. I show up every day.
        </p>
      </div>
    </section>
  )
}
