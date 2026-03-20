"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    title: "Sin acceso a oportunidades reales",
    desc: "Las mejores oportunidades inmobiliarias se cierran antes de llegar al público. Solo los que están dentro del círculo acceden a precios de preventa.",
  },
  {
    title: "Miedo a tomar malas decisiones",
    desc: "Sin datos, sin análisis, sin guía. La mayoría invierte con el estómago en vez de con números. Y así se pierden millones.",
  },
  {
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
              <h3 className="problem__card-title">{p.title}</h3>
              <p className="problem__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
