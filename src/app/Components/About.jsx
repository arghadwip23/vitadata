import { ArrowRight } from "lucide-react";

export default function VitaDataAbout() {
  return (
    <section className="w-[90vw] mx-auto font-sans ">
      <div
        className="relative flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden shadow-xl"
        style={{ background: "#5C3D2E" }}
      >
        {/* Left: image panel with beige background */}
        <div
          className="relative  hidden lg:flex items-center justify-center md:w-[42%] w-full min-h-[320px]"
          style={{ background: "#E8D5C4" }}
        >
          {/* Decorative soft circle behind image */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <div
              className="w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(210,180,155,0.45) 0%, rgba(232,213,196,0) 75%)",
              }}
            />
          </div>

          {/* Pill-in-nest image */}
          <div className="relative z-10 flex items-center justify-center p-6 md:p-10">
            <img
              src="/image.png"
              alt="A white capsule pill resting in a natural nest made of dried plants and seeds, symbolizing natural healthcare"
              className="w-72 h-72 scale-1.5 md:w-72 md:h-72 object-contain drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 16px 40px rgba(80,40,10,0.22))",
              }}
            />
          </div>
        </div>

        {/* Right: text content panel */}
        <div className="flex flex-col justify-center md:w-[58%] w-full px-10 py-12 md:px-14 md:py-14">
          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-widest uppercase mb-4"
            style={{
              color: "#D9B99B",
              letterSpacing: "0.18em",
              fontFamily: "'Georgia', 'Times New Roman', serif",
            }}
          >
            About VitaData
          </h2>

          {/* Accent underline */}
          <div
            className="mb-6 rounded-full"
            style={{
              width: "48px",
              height: "3px",
              background: "#D9B99B",
              opacity: 0.7,
            }}
          />

          {/* Subheading */}
          <p
            className="font-bold text-base md:text-lg mb-4 leading-snug"
            style={{ color: "#F0E0CF" }}
          >
            Let&apos;s Synergize to Build Powerful Healthcare Solutions that
            Enhance the Value of Care
          </p>

          {/* Body text */}
          <p
            className="text-sm md:text-base leading-relaxed mb-10"
            style={{ color: "#C9AFA0" }}
          >
            VitaData delivers an integrated hospital management and patient
            engagement platform designed to simplify healthcare operations and
            enhance care delivery. Our system enables secure role-based access,
            smart appointment scheduling, digital prescriptions, centralized
            medical records with OTP-based cross-hospital access, lab
            management, automated follow-ups, and cloud-based storage. Powered
            by AI-driven analytics, risk assessment, and a patient mobile app,
            VitaData creates a unified, intelligent healthcare ecosystem.
          </p>

          {/* CTA Button */}
          <div>
            <button
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                background: "#E8C9B5",
                color: "#3B2016",
                border: "none",
                letterSpacing: "0.02em",
                focusRingColor: "#D9B99B",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F0D8C5";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(80,40,10,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#E8C9B5";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              More About Us
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-full transition-transform duration-300 group-hover:translate-x-1"
                style={{ background: "#3B2016" }}
              >
                <ArrowRight size={14} color="#E8C9B5" strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}