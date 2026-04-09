"use client";

import { Mail, Phone, MapPin, Building2 } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@vitadata.solutions",
    href: "mailto:hello@vitadata.solutions",
  },
  {
    icon: Phone,
    label: "Call Our Team",
    value: "+1 (555) 234-5678",
    href: "tel:+15552345678",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "VIT Chennai",
    href: null,
  },
];

export default function ContactInfoCard() {
  return (
    <div className="w-75% flex flex-col gap-8 lg:px-10">

      {/* Heading */}
      <h2
        className="text-2xl font-bold"
        style={{
          color: "var(--foreground)",
         
        }}
      >
        Reach Our Global Network
      </h2>

      {/* Contact items */}
      <div className="flex flex-col gap-5">
        {contactItems.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4">
            {/* Icon box */}
            <div
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: "var(--secondary)" }}
            >
              <Icon size={18} strokeWidth={1.75} style={{ color: "var(--accent)" }} />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-0.5">
              <span
                className="text-[10px] font-semibold tracking-[0.15em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                {label}
              </span>
              {href ? (
                <a
                  href={href}
                  className="text-base font-medium transition-opacity duration-200 hover:opacity-70"
                  style={{ color: "var(--foreground)" }}
                >
                  {value}
                </a>
              ) : (
                <span
                  className="text-base font-medium"
                  style={{ color: "var(--foreground)" }}
                >
                  {value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden">
        <iframe
          title="VIT Chennai Map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=80.1529,12.8406,80.1729,12.8606&layer=mapnik&marker=12.8506,80.1629"
          className="w-full h-full"
          style={{
            border: "none",
            filter: "grayscale(1) sepia(0.2) brightness(0.88)",
          }}
          loading="lazy"
        />

        {/* Center pin overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
            style={{ background: "var(--destructive)" }}
          >
            <Building2 size={18} strokeWidth={1.75} style={{ color: "var(--primary-foreground)" }} />
          </div>
        </div>
      </div>

    </div>
  );
}