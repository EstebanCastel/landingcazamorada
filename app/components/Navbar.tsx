"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled glass-dark" : ""}`}
    >
      <div className="container">
        <div className="navbar__inner">
          <a href="#" className="navbar__logo" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>CazaMorada</span>
          </a>

          <div className="navbar__links">
            <a href="#beneficios">Beneficios</a>
            <a href="#como-funciona">Cómo Funciona</a>
            <a href="#aplicar">Membresía</a>
            <a href="#faq">FAQ</a>
          </div>

          <a href="#aplicar" className="navbar__cta">
            Aplica ahora
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`navbar__mobile ${menuOpen ? "open" : ""}`}>
          <a href="#beneficios" onClick={() => setMenuOpen(false)}>Beneficios</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Cómo Funciona</a>
          <a href="#aplicar" onClick={() => setMenuOpen(false)}>Membresía</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#aplicar" onClick={() => setMenuOpen(false)} className="navbar__mobile-cta">
            Aplica ahora
          </a>
        </div>
      </div>
    </nav>
  );
}
