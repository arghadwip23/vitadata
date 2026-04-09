"use client";

import ContactFormCard from "../Components/Contactform";
import ContactInfoCard from "../Components/ContactInfo";

export default function ContactHero() {
  return (
    <>
    <section className="relative w-full h-120 sm:h-130 md:h-140 overflow-hidden">

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=1600&q=80"
        alt="Laboratory background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Secondary color overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "var(--secondary)",
          opacity: 0.35,
        }}
      />

      {/* Centered frosted glass card */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div
          className="w-full max-w-4xl rounded-3xl px-8 py-12 sm:px-14 sm:py-16 flex flex-col items-center text-center gap-5"
          style={{
            background: "rgba(255, 248, 245, 0.72)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        >
          {/* Badge */}
          <span
            className="text-[10px] font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full"
            style={{
              background: "var(--secondary)",
              color: "var(--muted-foreground)",
            }}
          >
            Connect With Us
          </span>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
           
          >
            <span style={{ color: "var(--foreground)" }}>
              Get in Touch with our{" "}
            </span>
            <br />
            <span style={{ color: "#894E2F" }}>Clinical Curators</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-sm sm:text-base leading-relaxed max-w-md"
            style={{ color: "var(--muted-foreground)" }}
          >
            Bridging the gap between human expertise and data precision. Our
            team is ready to curate your healthcare data journey.
          </p>
        </div>
      </div>
    </section>
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8  lg:gap-20 p-5 px-10 mt-20">
       <div>
         <ContactFormCard />
       </div>
        <div>
            <ContactInfoCard />
         </div>
     </section>
    </>
  );
}