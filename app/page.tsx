import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Search, Bell } from "lucide-react"
import Hero from "./components/hero"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { GridBackgroundDemo } from "@/components/ui/gridBackground"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen box-border max-w-[100vw] bg-black text-white">
      <div className="relative z-10">
        <div className="absolute inset-x-0 pointer-events-none top-[yourHeaderHeight] z-0 overflow-hidden h-[calc(100vh-110px)]">
          <GridBackgroundDemo />
        </div>
        <Hero />

        {/* Dashboard Section */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
            <div className="bg-zinc-950 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1"></div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 flex">
              {/* Sidebar */}
              <div className="w-48 pr-4">
                <div className="mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-black text-xl font-bold">⬦</span>
                  </div>
                  <span className="font-semibold">HimSankalp</span>
                </div>

                <div className="space-y-1">
                  <div className="bg-zinc-800 text-white px-3 py-2 rounded-md flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <span className="text-sm">Reports Dashboard</span>
                  </div>

                  <div className="text-gray-400 px-3 py-2 rounded-md flex items-center gap-2 hover:bg-zinc-800 transition-colors">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                    </div>
                    <span className="text-sm">Real-Time Analytics</span>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Community Reports</h2>
                  <div className="flex items-center gap-4">
                    <Search className="w-5 h-5 text-gray-400" />
                    <Bell className="w-5 h-5 text-gray-400" />
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                      U
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Total Reports */}
                  <div className="bg-zinc-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-400">Total Reports</span>
                      </div>
                      <button className="text-gray-400 hover:text-white">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-semibold">2,345</div>
                      <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">+10.5%</div>
                    </div>
                  </div>

                  {/* Pending Reports */}
                  <div className="bg-zinc-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-400">Pending Reports</span>
                      </div>
                      <button className="text-gray-400 hover:text-white">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-semibold">789</div>
                      <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">+5.32%</div>
                    </div>
                  </div>

                  {/* Resolved Reports */}
                  <div className="bg-zinc-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <path d="M22 6l-10 7L2 6" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-400">Resolved Reports</span>
                      </div>
                      <button className="text-gray-400 hover:text-white">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-semibold">1,234</div>
                      <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">+8.90%</div>
                    </div>
                  </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-20 flex items-end">
                      <div className="w-full flex items-end justify-between gap-1">
                        {[...Array(12)].map((_, j) => (
                          <div
                            key={j}
                            className="w-full bg-teal-500/30 rounded-sm"
                            style={{
                              height: `${Math.max(15, Math.floor(Math.random() * 100))}%`,
                              opacity: j === 8 ? 1 : 0.5,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Comparison Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reports Dashboard Feature */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
              <div className="p-4">
                <div className="bg-zinc-950 rounded-lg p-4 mb-6">
                  {/* Dashboard Preview */}
                  <div className="flex flex-col">
                    {/* Browser chrome */}
                    <div className="bg-zinc-900 px-3 py-1.5 flex items-center gap-1 rounded-t-md">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>

                    {/* Dashboard content */}
                    <div className="bg-zinc-800 p-3 rounded-b-md">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                            <span className="text-black text-xs font-bold">⬦</span>
                          </div>
                          <span className="text-xs font-medium">Reports Overview</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                          <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        </div>
                      </div>

                      {/* Table */}
                      <div className="mt-3 space-y-2">
                        <div className="grid grid-cols-4 gap-2 text-[10px] text-gray-400">
                          <div>Issue</div>
                          <div>Category</div>
                          <div>Location</div>
                          <div>Status</div>
                        </div>

                        {/* Table rows */}
                        {[
                          { issue: "Pothole on Main St", category: "Infrastructure", location: "Sector 5", status: "Pending" },
                          { issue: "Frequent power outage", category: "Utilities", location: "Downtown", status: "In Progress" },
                          { issue: "Water supply issue", category: "Utilities", location: "Uptown", status: "Resolved" },
                          { issue: "Broken streetlight", category: "Infrastructure", location: "Sector 3", status: "Pending" },
                        ].map((report, i) => (
                          <div key={i} className="grid grid-cols-4 gap-2 text-[10px] py-1">
                            <div className="truncate">{report.issue}</div>
                            <div className="truncate">{report.category}</div>
                            <div className="truncate">{report.location}</div>
                            <div>
                              <span
                                className={`px-1.5 py-0.5 rounded-full text-[8px] ${
                                  report.status === "Resolved"
                                    ? "bg-green-500/20 text-green-400"
                                    : report.status === "In Progress"
                                    ? "bg-amber-500/20 text-amber-400"
                                    : "bg-teal-500/20 text-teal-400"
                                }`}
                              >
                                {report.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">Reports Dashboard</h3>
                <p className="text-gray-400 text-sm">
                  Get a comprehensive view of all community reports, track statuses and monitor municipal responsiveness.
                </p>
              </div>
            </div>

            {/* Real-Time Analytics Feature */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
              <div className="p-4">
                <div className="bg-zinc-950 rounded-lg p-4 mb-6 h-[220px] flex flex-col">
                  <div className="flex justify-end mb-2">
                    <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">+10.5%</div>
                  </div>

                  {/* Analytics Chart */}
                  <div className="flex-1 flex items-end">
                    <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                      <path
                        d="M0,80 C20,70 40,90 60,85 C80,80 100,50 120,40 C140,30 160,45 180,30 C200,15 220,5 240,10 C260,15 280,20 300,10"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2"
                        className="drop-shadow-md"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">Real-Time Analytics</h3>
                <p className="text-gray-400 text-sm">
                  Monitor and analyze incoming reports in real-time to identify trends and prioritize urgent issues.
                </p>
              </div>
            </div>

            {/* Quick Report Feature */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
              <div className="p-4">
                <div className="bg-zinc-950 rounded-lg p-4 mb-6 h-[220px] flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                      </svg>
                    </div>
                    <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center text-xl font-medium">
                      R
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">Quick Report Submission</h3>
                <p className="text-gray-400 text-sm">
                  Instantly report local issues with our intuitive, easy-to-use interface.
                </p>
              </div>
            </div>

            {/* Community Collaboration Feature */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 lg:col-span-2">
              <div className="p-4">
                <div className="bg-zinc-950 rounded-lg p-4 mb-6 h-[220px] flex items-center justify-center">
                  <div className="bg-zinc-900 rounded-lg p-6 max-w-xs w-full">
                    <h4 className="text-lg font-medium mb-4">Collaborate on Reports</h4>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                        Validate reported issues
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                        Prioritize urgent matters
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                        Share updates with your community
                      </li>
                    </ul>

                    <div className="mt-6 flex justify-between">
                      <div className="relative">
                        <div className="absolute -top-6 -right-2 bg-amber-500/20 text-amber-500 text-xs px-2 py-1 rounded-full">
                          Community Lead
                        </div>
                        <div className="w-8 h-8 rounded-full bg-amber-500"></div>
                      </div>

                      <div className="relative">
                        <div className="absolute -bottom-6 -left-2 bg-teal-500/20 text-teal-400 text-xs px-2 py-1 rounded-full">
                          Resident
                        </div>
                        <div className="w-8 h-8 rounded-full bg-teal-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">Community Collaboration</h3>
                <p className="text-gray-400 text-sm">
                  Work together with neighbors to validate, prioritize, and escalate critical local issues.
                </p>
              </div>
            </div>

            {/* Team Collaboration Feature */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
              <div className="p-4">
                <div className="bg-zinc-950 rounded-lg p-4 mb-6 h-[220px] flex items-center justify-center">
                  <div className="flex -space-x-2">
                    {["bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-amber-500", "bg-pink-500"].map(
                      (color, i) => (
                        <div
                          key={i}
                          className={`w-12 h-12 rounded-full ${color} border-2 border-zinc-950 flex items-center justify-center text-white font-medium`}
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
                <p className="text-gray-400 text-sm">
                  Bring your community together in one workspace to collaborate on critical reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-400 px-4 py-1.5 rounded-full mb-6">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs font-medium">Features</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Features</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Discover the powerful tools designed to empower citizens, streamline reporting, and enhance community collaboration.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: Issue Tracking */}
            <div className="bg-zinc-900/50 rounded-xl p-8 hover:bg-zinc-900/80 transition-colors">
              <div className="w-10 h-10 mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21H3M21 7L15 7M21 3L15 3M15 21L15 3M10 21L10 12M5 21L5 8M10 8L5 8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Issue Tracking</h3>
              <p className="text-gray-400">
                Accurately track all reports submitted by citizens and monitor updates in real time.
              </p>
            </div>

            {/* Feature 2: Community Feedback */}
            <div className="bg-zinc-900/50 rounded-xl p-8 hover:bg-zinc-900/80 transition-colors">
              <div className="w-10 h-10 mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Feedback</h3>
              <p className="text-gray-400">
                Collect real-time feedback and comments directly from the community to enhance responsiveness.
              </p>
            </div>

            {/* Feature 3: Secure Reporting */}
            <div className="bg-zinc-900/50 rounded-xl p-8 hover:bg-zinc-900/80 transition-colors">
              <div className="w-10 h-10 mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Reporting</h3>
              <p className="text-gray-400">
                Maintain complete control over your data with robust role-based permission settings.
              </p>
            </div>

            {/* Feature 4: Smart Insights */}
            <div className="bg-zinc-900/50 rounded-xl p-8 hover:bg-zinc-900/80 transition-colors">
              <div className="w-10 h-10 mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 18.5L9 17L4 19V7L9 5L15 7L20 5V14.5" />
                  <path d="M9 5V17" />
                  <path d="M15 7V11" />
                  <path d="M18 18.5L21 16.5" />
                  <path d="M18 21.5L21 19.5" />
                  <path d="M15 19.5C15 20.8807 16.1193 22 17.5 22C18.8807 22 20 20.8807 20 19.5C20 18.1193 18.8807 17 17.5 17C16.1193 17 15 18.1193 15 19.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
              <p className="text-gray-400">
                Leverage AI-powered analytics to gain insights and prioritize community issues.
              </p>
            </div>

            {/* Feature 5: Custom Reports */}
            <div className="bg-zinc-900/50 rounded-xl p-8 hover:bg-zinc-900/80 transition-colors">
              <div className="w-10 h-10 mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" />
                  <path d="M7 7H17" />
                  <path d="M7 12H17" />
                  <path d="M7 17H13" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Reports</h3>
              <p className="text-gray-400">
                Generate detailed, custom reports to track and analyze community issues efficiently.
              </p>
            </div>

            {/* Feature 6: Report Suggestions */}
            <div className="bg-zinc-900/50 rounded-xl p-8 hover:bg-zinc-900/80 transition-colors">
              <div className="w-10 h-10 mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 12H16" />
                  <path d="M12 8V16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Report Suggestions</h3>
              <p className="text-gray-400">
                Get automated suggestions to improve the clarity and impact of your reports.
              </p>
            </div>
          </div>
        </section>

        {/* Community Collaboration Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="text-amber-500 font-medium">Community Collaboration</span>
              </div>

              <h2 className="text-4xl font-bold mb-6">Seamless Collaboration for Community Impact</h2>

              <p className="text-gray-400 mb-8">
                Work together with your neighbors to verify reports, share updates, and ensure timely resolution of local issues.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                Learn more
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="relative">
              {/* Collaboration Demo */}
              <div className="grid gap-6">
                {/* User Permissions Panel */}
                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <div className="space-y-4">
                    {/* User 1 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="Raj Kumar"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">Raj Kumar</div>
                          <div className="text-sm text-gray-400">Community Leader</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Full access</span>
                        <svg
                          className="w-4 h-4 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>

                    {/* User 2 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="Sneha Patel"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">Sneha Patel</div>
                          <div className="text-sm text-gray-400">Resident</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Can view</span>
                        <svg
                          className="w-4 h-4 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>

                    {/* Share to web */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Share Report</div>
                          <div className="text-sm text-gray-400">Anyone with the link can view</div>
                        </div>
                      </div>
                      <div className="relative inline-block w-12 h-6 rounded-full bg-teal-500">
                        <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Task Card */}
                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-4">Submit a new issue report</h3>

                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="bg-amber-500/20 text-amber-500 text-xs px-3 py-1 rounded-full">High Priority</div>

                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          Sep 05
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">Assigned to</span>
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full border-2 border-zinc-900 overflow-hidden bg-pink-500"></div>
                            <div className="w-6 h-6 rounded-full border-2 border-zinc-900 overflow-hidden bg-purple-500"></div>
                            <div className="w-6 h-6 rounded-full border-2 border-zinc-900 overflow-hidden bg-yellow-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex-shrink-0 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Amit Sharma"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Amit Sharma</span>
                        <span className="text-gray-400">commented</span>
                      </div>

                      <div className="bg-zinc-800 rounded-lg p-3 mb-2">
                        <p className="text-sm text-gray-300">
                          Your report has been received and is under review by our community moderators.
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          3 min ago
                        </div>
                        <button className="text-sm text-gray-400 hover:text-white">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Highlight 1: User Permissions */}
            <div>
              <div className="w-10 h-10 mb-4 text-amber-500">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">User Permissions</h3>
              <p className="text-gray-400">
                Set different levels of access for community members and moderators for secure and controlled reporting.
              </p>
            </div>

            {/* Highlight 2: Task Assignment */}
            <div>
              <div className="w-10 h-10 mb-4 text-amber-500">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Task Assignment</h3>
              <p className="text-gray-400">
                Assign reports to community moderators and track the progress of issue resolution.
              </p>
            </div>

            {/* Highlight 3: Feedback Activity */}
            <div>
              <div className="w-10 h-10 mb-4 text-amber-500">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Feedback Activity</h3>
              <p className="text-gray-400">
                Engage with community feedback to constantly improve the reporting process and resolution efficiency.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}
