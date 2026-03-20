"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const urgencyItems = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>,
    text: "La inflación destruye el 8% de tu capital cada año",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    text: "Los cupos se llenan — no hay segundas rondas",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    text: "Los precios inmobiliarios suben en promedio 12% anual",
  },
];

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".final-cta__card", { y: 50, opacity: 0, scale: 0.97 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".final-cta__urgency-item", { x: -30, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: ".final-cta__urgency-item", start: "top 90%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="final-cta">
      <div className="container">
        <div className="final-cta__card">
          <div className="final-cta__bg" />
          <div className="final-cta__bg-glow" />

          {/* Floating decorative orbs */}
          <div className="final-cta__orb final-cta__orb--1" />
          <div className="final-cta__orb final-cta__orb--2" />

          <div className="final-cta__content">
            <div className="final-cta__eyebrow">No dejes tu dinero quieto</div>

            <h2 className="final-cta__title">
              Mientras lo piensas,<br />
              <span>otros ya están invirtiendo.</span>
            </h2>

            <p className="final-cta__desc">
              Cada día que pasa sin invertir es dinero que pierdes. Los miembros del
              círculo ya están accediendo a oportunidades que no llegan al mercado abierto.
            </p>

            {/* Urgency items */}
            <div className="final-cta__urgency">
              {urgencyItems.map((item, i) => (
                <div key={i} className="final-cta__urgency-item">
                  <span className="final-cta__urgency-icon">{item.icon}</span>
                  <span className="final-cta__urgency-text">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="final-cta__actions">
              <a href="#aplicar" className="btn-primary btn-primary--large">
                Aplica ahora — cupos limitados
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <div className="final-cta__social-proof">
                <div className="final-cta__avatars">
                  <div className="final-cta__avatar" style={{ background: "#7D39EB" }}>J</div>
                  <div className="final-cta__avatar" style={{ background: "#6428C8" }}>M</div>
                  <div className="final-cta__avatar" style={{ background: "#9B5FF5" }}>A</div>
                  <div className="final-cta__avatar" style={{ background: "#C6FF33", color: "#000" }}>+</div>
                </div>
                <span className="final-cta__social-text">
                  +247 personas aplicaron esta semana
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
