"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Únete al círculo",
    desc: "Aplica a la membresía anual. Verificamos tu perfil y te damos acceso a la comunidad de inversionistas más grande de LATAM.",
    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
  },
  {
    number: "02",
    title: "Descubre oportunidades curadas",
    desc: "Cada mes recibes oportunidades exclusivas analizadas con data e IA: preventas, inmuebles con descuento y proyectos de alta valorización.",
    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
  },
  {
    number: "03",
    title: "Invierte acompañado",
    desc: "Nuestro equipo te acompaña en cada paso: análisis, financiación, legal, tributario y hasta la administración de tu propiedad para renta.",
    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".how__header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".how__step", { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.7, stagger: 0.25, ease: "power3.out",
        scrollTrigger: { trigger: ".how__step", start: "top 85%" },
      });
      gsap.fromTo(".how__line", { scaleY: 0 }, {
        scaleY: 1, duration: 1.5, ease: "power2.inOut",
        scrollTrigger: { trigger: ".how__step", start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="como-funciona" className="how">
      <div className="container">
        <div className="section-header how__header">
          <div className="section-label section-label--purple">Así de simple</div>
          <h2 className="section-title">
            Tres pasos para empezar<br />
            <span className="gradient-text">a construir patrimonio</span>
          </h2>
        </div>

        <div className="how__steps">
          <div className="how__line" />
          {steps.map((s, i) => (
            <div key={i} className="how__step">
              <div className="how__step-number">{s.number}</div>
              <div className="how__step-content glass">
                <div className="how__step-icon">{s.icon}</div>
                <h3 className="how__step-title">{s.title}</h3>
                <p className="how__step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
