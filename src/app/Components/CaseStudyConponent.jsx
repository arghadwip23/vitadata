"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CaseStudyHero() {
  return (
    <section className="w-full py-16 md:py-24  bg-background">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 ">

        <div className="relative overflow-hidden rounded-3xl shadow-2xl mx-2 lg:mx-20">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/case-study-bg.jpg" // replace with your asset
              alt="case study"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Orange Glow Layer (design match) */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/60 via-orange-400/40 to-orange-300/20" />

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center px-6 py-12 md:px-12 md:py-16 lg:py-20">

            {/* LEFT CONTENT */}
            <div className="max-w-xl text-white space-y-6">

              <p className="text-xs tracking-[0.25em] uppercase text-white/70">
                Case Study / Precision Metrics
              </p>

              <div className="space-y-2">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  98.8%
                </h2>
                <p className="text-lg md:text-xl text-white/80 font-medium">
                  Targeting Accuracy
                </p>
              </div>

              <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                Our recent deployment for a global oncology brand achieved
                record-breaking engagement metrics through audited clinical
                segmenting.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="flex justify-start lg:justify-end">
              
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 w-full max-w-sm text-white shadow-xl">
                
                <div className="space-y-4">

                  <h3 className="text-3xl md:text-4xl font-semibold">
                    4.2x
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed">
                    Increase in HCP interaction rates compared to industry
                    standards.
                  </p>

                  <Button
                    variant="ghost"
                    className="mt-4 p-0 h-auto text-white hover:bg-transparent hover:text-white/80 flex items-center gap-2"
                  >
                    Read Full Report
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                </div>
              </div>

            </div>

          </div>

          {/* Soft border highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>

      </div>
    </section>
  );
}