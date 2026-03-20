"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".footer__grid", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 95%" },
      });
      gsap.fromTo(".footer__big-logo", { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".footer__big-logo", start: "top 95%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="footer">
      <div className="container">
        {/* Main grid - 4 columns */}
        <div className="footer__grid">
          {/* Col 1: Logo & description */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">CM</div>
              <div className="footer__logo-text">CazaMorada</div>
            </div>
            <p className="footer__desc">
              El círculo de inversionistas inmobiliarios más grande de LATAM.
              Acceso exclusivo, data, financiación y comunidad para invertir con confianza.
            </p>
          </div>

          {/* Col 2: Navegación */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navegación</h4>
            <ul className="footer__col-list">
              <li><a href="#">Inicio</a></li>
              <li><a href="#beneficios">Beneficios</a></li>
              <li><a href="#como-funciona">Cómo funciona</a></li>
              <li><a href="#membresia">Membresía</a></li>
            </ul>
          </div>

          {/* Col 3: Información */}
          <div className="footer__col">
            <h4 className="footer__col-title">Información</h4>
            <ul className="footer__col-list">
              <li><a href="#">Términos de servicio</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#faq">Preguntas frecuentes</a></li>
              <li><a href="#aplicar">Contacto</a></li>
            </ul>
          </div>

          {/* Col 4: Respaldado por */}
          <div className="footer__col">
            <h4 className="footer__col-title">Respaldado por</h4>
            <div className="footer__backed">
              <div className="footer__backed-badge">
                <div className="footer__backed-icon">H</div>
                <span>Habi</span>
              </div>
              <p className="footer__backed-desc">
                Respaldado por la proptech más grande de Colombia y México.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom bar */}
        <div className="footer__bottom">
          {/* Social icons */}
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <p className="footer__copy">
            &copy; {new Date().getFullYear()} CazaMorada. Todos los derechos reservados.
          </p>
        </div>

        {/* Big decorative logo */}
        <div className="footer__big-logo">
          <span className="footer__big-logo-text">CazaMorada</span>
        </div>
      </div>
    </footer>
  );
}
