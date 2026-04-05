const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-3">
              Gallant<span style={{ color: "var(--color-accent)" }}>.</span>
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Where tradition meets precision. Classic grooming reimagined for
              the modern gentleman, in the heart of London.
            </p>
          </div>

          {/* Center: Nav */}
          <div>
            <h4
              className="text-[0.75rem] uppercase tracking-[0.2em] font-medium mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h4
              className="text-[0.75rem] uppercase tracking-[0.2em] font-medium mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+442034901234"
                className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                +44 20 3490 1234
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <svg
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                46A Porchester Rd, London W2 6ET
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div
          className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-white/30 text-sm">
            &copy; 2026 Gallant Barbers. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Crafted with care in London
          </p>
        </div>
      </div>
    </footer>
  );
}
