"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
    title: "Sin acceso a oportunidades reales",
    desc: "Las mejores oportunidades inmobiliarias se cierran antes de llegar al público. Solo los que están dentro del círculo acceden a precios de preventa.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    title: "Miedo a tomar malas decisiones",
    desc: "Sin datos, sin análisis, sin guía. La mayoría invierte con el estómago en vez de con números. Y así se pierden millones.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    title: "Tu dinero pierde valor cada día",
    desc: "La inflación come tus ahorros. Mientras dudas, el costo de los inmuebles sube y tu poder de compra baja. El mejor momento para invertir fue ayer.",
  },
];

export default function Problem() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".problem__header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".problem__card", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: ".problem__card", start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="problem">
      <div className="container">
        <div className="section-header problem__header">
          <div className="section-label section-label--purple">El problema</div>
          <h2 className="section-title">
            Invertir bien <span className="gradient-text">no debería ser</span><br />
            solo para expertos o ricos
          </h2>
          <p className="section-subtitle">
            Si alguna vez sentiste que las mejores oportunidades no son para ti,
            no estás solo. Así se siente el 90% de los inversionistas.
          </p>
        </div>

        <div className="problem__grid">
          {problems.map((p, i) => (
            <div key={i} className="problem__card glass">
              <div className="problem__card-icon">{p.icon}</div>
              <h3 className="problem__card-title">{p.title}</h3>
              <p className="problem__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
