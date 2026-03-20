"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getSupabase } from "../lib/supabase";

gsap.registerPlugin(ScrollTrigger);

export default function LeadForm() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".lead-form__header", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".lead-form__card", { y: 40, opacity: 0, scale: 0.97 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".lead-form__card", start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (!form.nombre.trim() || !form.email.trim() || !form.telefono.trim()) {
      setErrorMsg("Todos los campos son obligatorios");
      setStatus("error");
      return;
    }

    try {
      const supabase = getSupabase();
      if (!supabase) {
        // Fallback: simulate success when Supabase not configured
        console.log("Lead (Supabase not configured):", form);
        setStatus("success");
        setForm({ nombre: "", email: "", telefono: "" });
        return;
      }

      const { error } = await supabase.from("leads").insert([
        {
          nombre: form.nombre.trim(),
          email: form.email.trim(),
          telefono: form.telefono.trim(),
        },
      ]);

      if (error) throw error;

      setStatus("success");
      setForm({ nombre: "", email: "", telefono: "" });
    } catch {
      setErrorMsg("Hubo un error al enviar. Intenta de nuevo.");
      setStatus("error");
    }
  };

  return (
    <section ref={ref} id="aplicar" className="lead-form">
      <div className="container">
        <div className="lead-form__header">
          <div className="section-label section-label--lime">Reserva tu cupo</div>
          <h2 className="section-title">
            Empieza hoy a invertir<br />
            <span className="gradient-text">con los que saben</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Déjanos tus datos y un asesor te contactará para darte acceso al círculo.
          </p>
        </div>

        <div className="lead-form__card">
          {status === "success" ? (
            <div className="lead-form__success">
              <div className="lead-form__success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C6FF33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="lead-form__success-title">¡Solicitud enviada!</h3>
              <p className="lead-form__success-desc">
                Te contactaremos pronto para darte acceso al Círculo de Inversionistas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lead-form__form">
              <div className="lead-form__field">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                />
              </div>
              <div className="lead-form__field">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="lead-form__field">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  id="telefono"
                  type="tel"
                  placeholder="+57 300 000 0000"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                />
              </div>

              {errorMsg && <p className="lead-form__error">{errorMsg}</p>}

              <button type="submit" className="lead-form__submit" disabled={status === "loading"}>
                {status === "loading" ? (
                  <span className="lead-form__spinner" />
                ) : (
                  <>
                    Quiero ser parte del Círculo
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>

              <p className="lead-form__disclaimer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Tus datos están seguros. No compartimos tu información.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
