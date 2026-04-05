"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient mesh */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(201,169,110,0.4), transparent), radial-gradient(ellipse 60% 80% at 80% 30%, rgba(201,169,110,0.2), transparent), radial-gradient(ellipse 50% 50% at 50% 80%, rgba(139,126,116,0.15), transparent)",
          }}
        />

        {/* Diagonal line */}
        <div
          className="absolute top-0 right-0 w-full h-full opacity-[0.07]"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, var(--color-accent) 40%, var(--color-accent) 40.3%, transparent 40.3%)",
          }}
        />

        {/* Floating geometric shapes */}
        <div
          className="animate-float absolute top-[15%] right-[15%] w-72 h-72 rounded-full border opacity-20"
          style={{ borderColor: "var(--color-accent)" }}
        />
        <div
          className="animate-float-slow absolute bottom-[20%] left-[10%] w-48 h-48 opacity-10"
          style={{
            border: "1px solid var(--color-accent)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          className="animate-float absolute top-[60%] right-[30%] w-24 h-24 rounded-full opacity-[0.08]"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
        <div
          className="animate-float-slow absolute top-[25%] left-[25%] w-16 h-16 rounded-full opacity-[0.06]"
          style={{ backgroundColor: "var(--color-accent)" }}
        />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-accent) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <span
            className="inline-block text-[0.8rem] uppercase tracking-[0.25em] font-medium mb-8 opacity-70"
            style={{ color: "var(--color-accent)" }}
          >
            Est. in London
          </span>
        </div>
        <h1
          className="font-[family-name:var(--font-playfair)] font-bold text-white leading-[1.05] mb-8"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 5rem)",
            letterSpacing: "-0.04em",
          }}
        >
          Gallant
          <br />
          <span style={{ color: "var(--color-accent)" }}>Barbers</span>
        </h1>
        <p
          className="font-[family-name:var(--font-inter)] text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          Where tradition meets precision. Classic grooming reimagined for the
          modern gentleman, in the heart of London.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full px-12 py-4 md:px-14 md:py-5 text-sm md:text-base uppercase tracking-[0.15em] font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110"
          style={{ backgroundColor: "var(--color-accent)", minHeight: "48px" }}
        >
          Book Your Visit
        </a>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, var(--color-bg), transparent)`,
        }}
      />
    </section>
  );
}
