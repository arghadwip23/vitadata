"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EcosystemSection from "../Components/SOlutionComponent";
import CaseStudyHero from "../Components/CaseStudyConponent";
import { Button } from "@/components/ui/button";

export default function SolutionsHero() {
  return (
    <>
    <section className="relative w-full h-[580px] sm:h-[620px] md:h-[680px] overflow-hidden">

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
        alt="Doctor working on tablet"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Secondary color transparent overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(242, 194, 178, 0.45)" }}
      />

      {/* Frosted glass card — left aligned */}
      <div className="absolute inset-0 flex items-center px-6 sm:px-12 md:px-20 ">
        <div
          className="w-full  max-w-sm sm:max-w-xl rounded-3xl px-8 py-10 sm:px-10 sm:py-12 flex flex-col gap-6"
          style={{
            background: "rgba(251, 238, 234, 0.68)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Badge */}
          <span
            className="self-start text-[10px] font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full"
            style={{
              background: "var(--secondary)",
              color: "var(--muted-foreground)",
            }}
          >
            Expertise
          </span>

          {/* Heading */}
          <h1
            className=" text-5xl lg:text-7xl sm:text-5xl font-bold  tracking-wider"
            style={{
              color: "var(--foreground)",
             
            }}
          >
            Precision
            <br />
            Marketing
            <br />
            Solutions
          </h1>

          {/* Description */}
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Where clinical data meets creative intelligence. We curate
            healthcare narratives through rigorous analytics and human-centric
            design.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              href="#"
              className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
              style={{
                background: "var(--destructive)",
                color: "var(--primary-foreground)",
              }}
            >
              Explore Our Work
            </Link>

            <Link
              href="#"
              className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-2.5"
              style={{ color: "var(--foreground)" }}
            >
              See Capabilities
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>

    </section>
    <EcosystemSection />
    <CaseStudyHero/>
    <section className="w-full py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Wrapper */}
        <div className="max-w-3xl mx-auto text-center space-y-6">

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-semibold  text-foreground">
            Ready to Lead with Precision?
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Join the leading healthcare organizations leveraging Vitatadata to
            redefine the boundaries of medical marketing.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">

            {/* Primary Button */}
            <Button
              className="
                rounded-full px-6 py-5 text-sm font-medium
                 text-primary-foreground
                hover:bg-primary/90
                shadow-md hover:shadow-lg
                transition-all
              "
              style={{
                background: "var(--destructive)",
                
              }}
            >
              Book a Consultation
            </Button>

            {/* Secondary Button */}
            <Button
              variant="outline"
              className="
                rounded-full px-6 py-5 text-sm font-medium
                border-border text-foreground
                hover:bg-muted
                transition-all
              "
              
            >
              Download Services Deck
            </Button>

          </div>

        </div>
      </div>
    </section>
    </>
  );
}