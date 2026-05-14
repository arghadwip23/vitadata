"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function decorateSections() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    if (!section.hasAttribute("data-aos")) {
      section.setAttribute("data-aos", index % 2 === 0 ? "fade-up" : "fade-left");
    }

    if (!section.hasAttribute("data-aos-duration")) {
      section.setAttribute("data-aos-duration", "700");
    }

    if (!section.hasAttribute("data-aos-delay")) {
      section.setAttribute("data-aos-delay", String(Math.min(index * 60, 180)));
    }

    if (!section.hasAttribute("data-aos-easing")) {
      section.setAttribute("data-aos-easing", "ease-out-cubic");
    }
  });
}

export default function AOSProvider({ children }) {
  const pathname = usePathname();
  const aosRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    async function initAOS() {
      const module = await import("aos");
      const AOS = module.default;
      if (!mounted) return;

      aosRef.current = AOS;
      AOS.init({
        duration: 700,
        offset: 80,
        once: true,
        mirror: false,
        easing: "ease-out-cubic",
      });

      requestAnimationFrame(() => {
        decorateSections();
        AOS.refreshHard();
      });
    }

    initAOS();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!aosRef.current) return;

    const timer = setTimeout(() => {
      decorateSections();
      aosRef.current.refreshHard();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return children;
}
