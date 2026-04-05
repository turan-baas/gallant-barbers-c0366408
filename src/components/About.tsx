"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text column - 60% */}
          <div className="lg:col-span-3 scroll-reveal">
            <span
              className="inline-block text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              About Us
            </span>
            <h2
              className="font-[family-name:var(--font-playfair)] font-semibold mb-8 leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
              }}
            >
              A Cut Above the Rest,
              <br />
              Since Day One
            </h2>
            <div
              className="space-y-6 text-[1.125rem] leading-[1.8]"
              style={{ color: "var(--color-text-muted)" }}
            >
              <p>
                Nestled on Porchester Road in the vibrant neighbourhood of
                Bayswater, Gallant Barbers is more than just a barbershop —
                it&apos;s a destination for gentlemen who appreciate the craft of
                grooming. From the moment you step through our doors, you&apos;ll
                feel the difference that genuine care and skill can make.
              </p>
              <p>
                Our team of experienced barbers blend time-honoured techniques
                with contemporary style, ensuring every client leaves looking and
                feeling their absolute best. We believe that a great haircut is
                not just about appearance — it&apos;s about confidence, about
                taking a moment for yourself in the bustle of London life.
              </p>
              <p>
                Whether you&apos;re after a classic cut, a precise fade, or a
                traditional hot towel shave, we bring the same passion and
                attention to detail to every chair. That&apos;s the Gallant
                promise.
              </p>
            </div>
          </div>

          {/* Decorative column - 40% */}
          <div className="lg:col-span-2 scroll-reveal scroll-reveal-delay-1">
            <div className="relative flex items-center justify-center">
              {/* Abstract composition */}
              <div
                className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                {/* Accent shapes */}
                <div
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <div
                  className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full opacity-15"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />

                {/* Rating display */}
                <div className="text-center">
                  <div
                    className="font-[family-name:var(--font-playfair)] font-bold leading-none mb-3"
                    style={{
                      fontSize: "6rem",
                      color: "var(--color-accent)",
                    }}
                  >
                    4.0
                  </div>
                  <div className="flex justify-center gap-1 mb-3">
                    {[1, 2, 3, 4].map((i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="var(--color-accent)"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p
                    className="text-sm uppercase tracking-[0.15em] font-medium"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Google Rating
                  </p>
                </div>
              </div>

              {/* Large decorative quote */}
              <div
                className="absolute -top-8 -left-6 font-[family-name:var(--font-playfair)] opacity-10 select-none"
                style={{
                  fontSize: "10rem",
                  lineHeight: "1",
                  color: "var(--color-accent)",
                }}
              >
                &ldquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
