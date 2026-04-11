"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Database, Users, Activity, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Clinical Data Analytics",
    description:
      "Advanced modeling that transforms raw clinical trial data into actionable marketing intelligence.",
    icon: Database,
  },
  {
    title: "HCP Omnichannel Engagement",
    description:
      "Connecting brands with healthcare providers through seamless, data-driven touchpoints across all channels.",
    icon: Users,
  },
  {
    title: "Patient Journey Optimization",
    description:
      "Mapping and improving the patient experience to ensure therapy adherence and better health outcomes.",
    icon: Activity,
  },
  {
    title: "Regulatory-Compliant Marketing",
    description:
      "Precision-built campaigns that respect strict healthcare regulations while maximizing impact.",
    icon: ShieldCheck,
  },
];

export default function EcosystemSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background px-5 md:px-7 lg:px-20 md:mt-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Curated Ecosystems for Healthcare Growth
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            Our frameworks are engineered to navigate the complexities of life
            sciences marketing with surgical precision.
          </p>

          {/* Accent line */}
          <div className="mt-6 w-12 h-[2px] bg-primary" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="rounded-2xl border border-border bg-muted/40 hover:bg-muted transition-colors"
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-background border border-border">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
