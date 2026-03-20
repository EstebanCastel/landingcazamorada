"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    title: "Lanzamientos exclusivos cada mes",
    desc: "Accede a proyectos nuevos antes que nadie con precios preferenciales y condiciones especiales de preventa.",
    highlight: "Lista cero",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    title: "100,000+ inmuebles con descuento",
    desc: "El mayor inventario inmobiliario de LATAM con descuentos de hasta 20% sobre precio de mercado.",
    highlight: "20% descuento",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: "Descuentos exclusivos en crédito",
    desc: "Tasas preferenciales en tus créditos hipotecarios que mejoran a medida que creces con nosotros.",
    highlight: "Tasas preferentes",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Talleres y comunidad activa",
    desc: "Talleres mensuales en vivo con expertos, 2 encuentros presenciales al año y una red de inversionistas como tú.",
    highlight: "Mensual",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: "Data e inteligencia de mercado",
    desc: "Reportes de valorización por ciudad y zona. Análisis con IA de cada inmueble antes de comprar.",
    highlight: "Con IA",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Asesoría integral incluida",
    desc: "Consultoría legal, tributaria y financiera para la administración de tus inversiones sin costos adicionales.",
    highlight: "Incluido",
  },
];

export default function Benefits() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".benefits__header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".benefit__card", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".benefit__card", start: "top 90%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="beneficios" className="benefits">
      <div className="benefits__bg-glow" />
      <div className="container" style={{ position: "relative" }}>
        <div className="section-header benefits__header">
          <div className="section-label section-label--lime">Beneficios exclusivos</div>
          <h2 className="section-title">
            Todo lo que necesitas para<br />
            <span className="gradient-text">invertir con confianza</span>
          </h2>
          <p className="section-subtitle">
            Como miembro del círculo, accedes a un ecosistema completo:
            oportunidades, financiación, data y comunidad.
          </p>
        </div>

        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit__card glass">
              <span className="benefit__badge">{b.highlight}</span>
              <div className="benefit__icon">{b.icon}</div>
              <h3 className="benefit__title">{b.title}</h3>
              <p className="benefit__desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
