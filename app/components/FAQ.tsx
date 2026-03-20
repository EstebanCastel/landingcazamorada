"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "¿Necesito experiencia previa en inversión inmobiliaria?",
    a: "No. El círculo está diseñado tanto para inversionistas experimentados como para quienes están empezando. Nuestros talleres, expertos y análisis con IA te guían paso a paso.",
  },
  {
    q: "¿Cómo accedo a los lanzamientos exclusivos?",
    a: "Como miembro, recibes acceso anticipado a proyectos en lista cero antes de que salgan al mercado. Nuestro equipo negocia precios preferenciales con desarrolladores y te notifica de cada oportunidad.",
  },
  {
    q: "¿Qué pasa si no me gusta y quiero cancelar?",
    a: "Tienes 30 días de garantía de satisfacción. Si no estás conforme, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.",
  },
  {
    q: "¿Los descuentos en crédito hipotecario son reales?",
    a: "Sí. A través de Habi Credit y Habicapital, ofrecemos descuentos progresivos en tasa: 1% en la primera transacción, 1.5% en la segunda y 2% en las siguientes.",
  },
  {
    q: "¿Qué incluye la asesoría legal y tributaria?",
    a: "Cada miembro tiene acceso a sesiones con nuestro equipo de expertos legales y tributarios para estructurar sus inversiones de forma óptima, revisar contratos y optimizar impuestos.",
  },
  {
    q: "¿En qué ciudades están disponibles las oportunidades?",
    a: "Operamos en las principales ciudades de Colombia y México: Bogotá, Medellín, Cali, Barranquilla, Ciudad de México, Guadalajara y Monterrey, entre otras.",
  },
];

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq__header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".faq__item", { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".faq__item", start: "top 90%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="faq" className="faq">
      <div className="container">
        <div className="section-header faq__header">
          <div className="section-label section-label--purple">Preguntas frecuentes</div>
          <h2 className="section-title">
            ¿Tienes dudas?<br />
            <span className="gradient-text">Las resolvemos</span>
          </h2>
        </div>

        <div className="faq__list">
          {faqs.map((f, i) => (
            <div key={i} className="faq__item glass">
              <button className="faq__question" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <svg className={`faq__icon ${open === i ? "open" : ""}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className={`faq__answer ${open === i ? "open" : ""}`}>
                <div className="faq__answer-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
