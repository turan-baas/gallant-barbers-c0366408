"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "Classic Haircut",
    description:
      "A tailored cut crafted to suit your face shape and personal style. Includes a consultation, precision cut with scissors or clippers, and styled finish.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.5.141.977.4 1.396l.956 1.545a2.168 2.168 0 01-1.673 3.31l-2.551.17a2.168 2.168 0 01-2.032-1.05l-.956-1.544a2.168 2.168 0 010-2.291l2.773-4.375zm1.536.887l2.121-1.223m0 0a3 3 0 115.196-3 3 3 0 01-5.196 3zm0 0l-2.121 1.223"
        />
      </svg>
    ),
  },
  {
    title: "Hot Towel Shave",
    description:
      "The quintessential barbershop experience. A traditional straight-razor shave with steamed towels, premium lather, and soothing aftercare for the smoothest finish.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
        />
      </svg>
    ),
  },
  {
    title: "Beard Sculpting",
    description:
      "Expert beard shaping and grooming to complement your cut. From a clean lineup to full beard styling, we sculpt and condition your facial hair to perfection.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section
      id="services"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-reveal">
          <span
            className="inline-block text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Our Services
          </span>
          <h2
            className="font-[family-name:var(--font-playfair)] font-semibold leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
            }}
          >
            Crafted for the
            <br />
            Modern Gentleman
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} group rounded-2xl p-8 lg:p-10 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-default`}
              style={{
                backgroundColor: "white",
                borderColor: "#e5e5e5",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e5e5";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-accent)",
                }}
              >
                {service.icon}
              </div>
              <h3
                className="font-semibold text-lg mb-3"
                style={{ color: "var(--color-text)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-[1.05rem] leading-[1.8]"
                style={{ color: "var(--color-text-muted)" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 scroll-reveal">
          <p
            className="text-[1.05rem] mb-6"
            style={{ color: "var(--color-text-muted)" }}
          >
            Looking for something specific? We&apos;re happy to accommodate.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
