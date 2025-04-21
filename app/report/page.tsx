"use client";

import { useState } from "react";
import { ReportForm } from "../components/ReportIssueForm";
import { ReportList } from "../components/reportView";

type Report = {
  id: string;
  issueName: string;
  description: string;
  city: string;
  state: string;
  pincode: string;
  severity: string;
  media?: File | null;
  createdAt: string;
};

export default function ReportPage() {
  const [currentTab, setCurrentTab] = useState<"form" | "view">("form");
  const [reports, setReports] = useState<Report[]>([]);

  const addReport = (report: Omit<Report, "id" | "createdAt">) => {
    const newReport: Report = {
      ...report,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setReports((prev) => [newReport, ...prev]);
  };

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-zinc-900 p-6 border-r border-zinc-800">
        <h2 className="text-xl font-bold mb-6">HimSankalp</h2>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setCurrentTab("form")}
            className={`text-left px-4 py-2 rounded ${
              currentTab === "form"
                ? "bg-amber-500 text-black"
                : "hover:bg-zinc-800"
            }`}
          >
            Report an Issue
          </button>
          <button
            onClick={() => setCurrentTab("view")}
            className={`text-left px-4 py-2 rounded ${
              currentTab === "view"
                ? "bg-amber-500 text-black"
                : "hover:bg-zinc-800"
            }`}
          >
            View Reports
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {currentTab === "form" ? (
          <ReportForm onSubmit={addReport} />
        ) : (
          <ReportList reports={reports} />
        )}
      </main>
    </div>
  );
}
