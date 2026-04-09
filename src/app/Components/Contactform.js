"use client";

import { Send } from "lucide-react";

export default function ContactFormCard() {
  return (
    <div
      className="relative w-75% rounded-3xl p-8 px-10   sm:p-10 overflow-hidden shadow-xl"
      style={{ background: "#fff" }}
    >
      {/* Decorative leaf shape top-right */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-40"
        style={{ background: "var(--card)" }}
      />

      {/* Header */}
      <div className="mb-7">
        <h2
          className="text-2xl font-bold mb-1"
          style={{
            color: "var(--foreground)",
          
          }}
        >
          Send a Message
        </h2>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          We usually respond to all inquiries within 24 business hours.
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-5">

        {/* Full Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              className="text-[10px] font-semibold  uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Dr. Julian Thorne"
              className="w-full px-4 py-3 rounded-full text-sm outline-none transition-all duration-200 hover:brightness-95 focus:ring-2"
              style={{
                background: "var(--card)",
                color: "var(--foreground)",
                border: "none",
                "--tw-ring-color": "var(--ring)",
              }}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-[10px] font-semibold  uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="j.thorne@hospital.org"
              className="w-full px-4 py-3 rounded-full text-sm outline-none transition-all duration-200 hover:brightness-95 focus:ring-2"
              style={{
                background: "var(--card)",
                color: "var(--foreground)",
                border: "none",
                "--tw-ring-color": "var(--ring)",
              }}
            />
          </div>
        </div>

        {/* Inquiry Type */}
        <div className="flex flex-col gap-1.5">
          <label
            className="text-[10px] font-semibold  uppercase"
            style={{ color: "var(--muted-foreground)" }}
          >
            Inquiry Type
          </label>
          <select
            className="w-full px-4 py-3 rounded-full text-sm outline-none appearance-none transition-all duration-200 hover:brightness-95 focus:ring-2 cursor-pointer"
            style={{
              background: "var(--card)",
              color: "var(--foreground)",
              border: "none",
              "--tw-ring-color": "var(--ring)",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23623222' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              paddingRight: "2.5rem",
            }}
          >
            <option>Healthcare Data Integration</option>
            <option>Clinical Data Curation</option>
            <option>Research Collaboration</option>
            <option>General Inquiry</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label
            className="text-[10px] font-semibold tracking-[0.15em] uppercase"
            style={{ color: "var(--muted-foreground)" }}
          >
            Message
          </label>
          <textarea
            rows={5}
            placeholder="Describe your challenge or goal..."
            className="w-full px-4 py-3 rounded-2xl text-sm outline-none resize-none transition-all duration-200 hover:brightness-95 focus:ring-2"
            style={{
              background: "var(--card)",
              color: "var(--foreground)",
              border: "none",
              "--tw-ring-color": "var(--ring)",
            }}
          />
        </div>

        {/* Submit button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 mt-1"
          style={{
            background: "var(--destructive)",
            color: "var(--primary-foreground)",
          }}
        >
          Submit Inquiry
          <Send size={15} strokeWidth={2} />
        </button>

      </div>
    </div>
  );
}