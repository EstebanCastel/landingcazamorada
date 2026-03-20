"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "24 lanzamientos exclusivos al año (lista cero)",
  "Acceso al inventario con hasta 20% de descuento",
  "Descuento progresivo en crédito hipotecario",
  "Taller mensual en vivo con expertos",
  "Reporte de valorización por ciudad y zona",
  "2 encuentros presenciales anuales",
  "Análisis con IA de cada inmueble",
  "Consultoría legal, tributaria y financiera",
  "Sesiones de acompañamiento en inversión",
  "Acceso a la comunidad de inversionistas",
];

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".pricing__header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".pricing__card-wrapper", { y: 60, opacity: 0, scale: 0.95 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".pricing__card-wrapper", start: "top 85%" },
      });
      gsap.fromTo(".pricing__feature", { x: -20, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.4, stagger: 0.07, ease: "power2.out",
        scrollTrigger: { trigger: ".pricing__card-wrapper", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="membresia" className="pricing">
      <div className="pricing__bg-glow" />
      <div className="container" style={{ position: "relative" }}>
        <div className="section-header pricing__header">
          <div className="section-label section-label--lime">Membresía anual</div>
          <h2 className="section-title">
            Una inversión que se paga<br />
            <span className="gradient-text">con la primera oportunidad</span>
          </h2>
        </div>

        <div className="pricing__card-wrapper">
          <div className="pricing__card-border">
            <div className="pricing__card">
              <div className="pricing__badge">Cupos limitados</div>

              <h3 className="pricing__plan-name">Círculo Inversionista</h3>
              <p className="pricing__plan-desc">Membresía anual con acceso completo</p>

              <div className="pricing__price">
                <span className="pricing__price-currency">USD </span>
                <span className="pricing__price-amount">250</span>
                <span className="pricing__price-period"> /año</span>
                <p className="pricing__price-note">Menos de $21 USD al mes</p>
              </div>

              <div className="pricing__divider" />

              <ul className="pricing__features">
                {features.map((f, i) => (
                  <li key={i} className="pricing__feature">
                    <svg className="pricing__feature-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="pricing__feature-text">{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#aplicar" className="pricing__cta">
                Reserva tu cupo
              </a>

              <p className="pricing__guarantee">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Garantía de satisfacción de 30 días
              </p>
            </div>
          </div>
        </div>

        <div className="pricing__trust">
          <div className="pricing__trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7D39EB" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Pago seguro
          </div>
          <div className="pricing__trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7D39EB" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Cancela cuando quieras
          </div>
          <div className="pricing__trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7D39EB" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            +10,000 miembros
          </div>
        </div>
      </div>
    </section>
  );
}
