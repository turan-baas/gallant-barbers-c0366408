"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();

  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Contact info + form */}
          <div className="scroll-reveal">
            <span
              className="inline-block text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Contact
            </span>
            <h2
              className="font-[family-name:var(--font-playfair)] font-semibold mb-8 leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
              }}
            >
              Get in Touch
            </h2>

            {/* Contact details */}
            <div className="space-y-5 mb-12">
              <a
                href="tel:+442034901234"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    color: "var(--color-accent)",
                  }}
                >
                  <svg
                    className="w-5 h-5"
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
                </div>
                <div>
                  <p
                    className="text-sm font-medium uppercase tracking-wider mb-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Phone
                  </p>
                  <p
                    className="text-[1.05rem] font-medium group-hover:underline"
                    style={{ color: "var(--color-text)" }}
                  >
                    +44 20 3490 1234
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    color: "var(--color-accent)",
                  }}
                >
                  <svg
                    className="w-5 h-5"
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
                </div>
                <div>
                  <p
                    className="text-sm font-medium uppercase tracking-wider mb-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Address
                  </p>
                  <p
                    className="text-[1.05rem]"
                    style={{ color: "var(--color-text)" }}
                  >
                    46A Porchester Rd, London W2 6ET
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=46A+Porchester+Rd+London+W2+6ET"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border transition-all duration-200 hover:shadow-md"
                style={{
                  borderColor: "var(--color-accent)",
                  color: "var(--color-accent)",
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Open in Google Maps
              </a>
            </div>

            {/* Contact form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 rounded-xl border bg-white text-[0.95rem] transition-all duration-200 outline-none"
                  style={{
                    borderColor: "#e5e5e5",
                    color: "var(--color-text)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.15)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#e5e5e5";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3.5 rounded-xl border bg-white text-[0.95rem] transition-all duration-200 outline-none"
                  style={{
                    borderColor: "#e5e5e5",
                    color: "var(--color-text)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.15)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#e5e5e5";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl border bg-white text-[0.95rem] transition-all duration-200 outline-none resize-none"
                  style={{
                    borderColor: "#e5e5e5",
                    color: "var(--color-text)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.15)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#e5e5e5";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <button
                type="submit"
                className="rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Map placeholder */}
          <div className="scroll-reveal scroll-reveal-delay-1">
            <div
              className="relative rounded-2xl overflow-hidden h-full min-h-[400px] lg:min-h-0 flex items-center justify-center"
              style={{
                backgroundColor: "var(--color-primary)",
                border: "2px solid var(--color-accent)",
              }}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Map pin illustration */}
              <div className="relative text-center z-10 p-8">
                <div className="mb-6 flex justify-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-accent)",
                    }}
                  >
                    <svg
                      className="w-10 h-10 text-white"
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
                  </div>
                </div>
                <h3
                  className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-white mb-3"
                >
                  Gallant Barbers
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  46A Porchester Rd
                  <br />
                  London W2 6ET
                  <br />
                  United Kingdom
                </p>
              </div>

              {/* Corner accents */}
              <div
                className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg opacity-30"
                style={{ borderColor: "var(--color-accent)" }}
              />
              <div
                className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg opacity-30"
                style={{ borderColor: "var(--color-accent)" }}
              />
              <div
                className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg opacity-30"
                style={{ borderColor: "var(--color-accent)" }}
              />
              <div
                className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 rounded-br-lg opacity-30"
                style={{ borderColor: "var(--color-accent)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
