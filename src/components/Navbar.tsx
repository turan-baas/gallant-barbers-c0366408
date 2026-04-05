"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 shadow-lg backdrop-blur-[12px]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <a
            href="#home"
            className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight"
            style={{ color: scrolled ? "var(--color-primary)" : "#fff" }}
          >
            Gallant<span style={{ color: "var(--color-accent)" }}>.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-colors duration-200"
                style={{ color: scrolled ? "var(--color-text)" : "#fff" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 rounded-full px-7 py-2.5 text-[0.8rem] uppercase tracking-[0.15em] font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-[5px] z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className="block w-7 h-[3px] rounded-full transition-all duration-300 origin-center"
              style={{
                backgroundColor: scrolled && !mobileOpen ? "var(--color-primary)" : "#fff",
                transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "translateY(0)",
              }}
            />
            <span
              className="block w-7 h-[3px] rounded-full transition-all duration-300"
              style={{
                backgroundColor: scrolled && !mobileOpen ? "var(--color-primary)" : "#fff",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-7 h-[3px] rounded-full transition-all duration-300 origin-center"
              style={{
                backgroundColor: scrolled && !mobileOpen ? "var(--color-primary)" : "#fff",
                transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "translateY(0)",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-white text-3xl font-[family-name:var(--font-playfair)] font-semibold mb-8 transition-all duration-500"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: mobileOpen ? `${i * 100 + 200}ms` : "0ms",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-4 rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white transition-all duration-500"
          style={{
            backgroundColor: "var(--color-accent)",
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            transitionDelay: mobileOpen ? `${navLinks.length * 100 + 200}ms` : "0ms",
          }}
        >
          Get in Touch
        </a>
      </div>
    </>
  );
}
