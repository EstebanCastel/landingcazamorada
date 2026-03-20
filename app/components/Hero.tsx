"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero__badge", { y: 20, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, delay: 0.6 })
        .fromTo(".hero__title", { y: 80, opacity: 0, clipPath: "inset(100% 0 0 0)" }, { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 1.2 }, "-=0.3")
        .fromTo(".hero__subtitle", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
        .fromTo(".hero__actions", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.4")
        .fromTo(".hero__video", { y: 60, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 1 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero__bg">
        <div className="hero__bg-orb1" />
        <div className="hero__bg-orb2" />
        <div className="hero__bg-grid" />
      </div>

      <div className="container">
        <div className="hero__content">
          <div className="hero__badges">
            <span className="hero__badge hero__badge--lime glass">
              <span className="hero__badge-dot" />
              Cupos limitados 2026
            </span>
            <span className="hero__badge hero__badge--default glass">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7D39EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Exclusivo para inversionistas
            </span>
          </div>

          <h1 className="hero__title">
            Invierte en inmuebles<br />
            <span className="gradient-text">con ventaja.</span>
          </h1>

          <p className="hero__subtitle">
            Únete al círculo de inversionistas inmobiliarios más grande de LATAM.
            Accede a oportunidades exclusivas, descuentos de hasta 35% y
            acompañamiento experto en cada inversión.
          </p>

          <div className="hero__actions">
            <a href="#membresia" className="btn-primary">
              Aplica para ser miembro
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#como-funciona" className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
              </svg>
              Descubre cómo funciona
            </a>
          </div>

          <div className="hero__video">
            <div className="hero__video-inner">
              <div className="hero__play-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#C6FF33">
                  <polygon points="8 5 20 12 8 19" />
                </svg>
              </div>
              <p className="hero__video-label">Video demo próximamente</p>
            </div>
            <div className="hero__video-corners">
              <div className="hero__corner hero__corner--tl" />
              <div className="hero__corner hero__corner--tr" />
              <div className="hero__corner hero__corner--bl" />
              <div className="hero__corner hero__corner--br" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
