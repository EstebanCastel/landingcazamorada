"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "100,000+", label: "Inmuebles analizados al año" },
  { value: "30%", label: "Descuento en preventas" },
  { value: "50+", label: "Lanzamientos exclusivos al año" },
  { value: "$3.4B+", label: "En transacciones facilitadas" },
];

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stats__item",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="stats__item">
              <div className="stats__value">{s.value}</div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
