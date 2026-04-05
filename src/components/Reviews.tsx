"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    text: "Absolutely brilliant experience from start to finish. The attention to detail on my fade was second to none. I've been to plenty of barbers across London, but Gallant is where I'll stay.",
    name: "James Whitfield",
  },
  {
    text: "Found this gem on Porchester Road and haven't looked back. The hot towel shave is an experience every man should have at least once. Relaxing, professional, and the result speaks for itself.",
    name: "David Chen",
  },
  {
    text: "Best barbers in Bayswater, hands down. They really listen to what you want and deliver every single time. The vibe is welcoming and the craftsmanship is top tier.",
    name: "Michael Okonkwo",
  },
];

export default function Reviews() {
  useScrollReveal();

  return (
    <section
      id="reviews"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Rating header */}
        <div className="text-center mb-20 scroll-reveal">
          <span
            className="inline-block text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Reviews
          </span>
          <div
            className="font-[family-name:var(--font-playfair)] font-bold leading-none mb-4"
            style={{ fontSize: "6rem", color: "var(--color-accent)" }}
          >
            4
          </div>
          <div className="flex justify-center gap-1.5 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                className="w-6 h-6"
                fill="var(--color-accent)"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            Rated on Google
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} bg-white rounded-2xl shadow-sm p-8 relative`}
            >
              {/* Decorative quote */}
              <div
                className="absolute top-4 right-6 font-[family-name:var(--font-playfair)] select-none"
                style={{
                  fontSize: "5rem",
                  lineHeight: "1",
                  color: "var(--color-accent)",
                  opacity: 0.15,
                }}
              >
                &ldquo;
              </div>

              <p
                className="italic text-[1.05rem] leading-[1.8] mb-6 relative z-10"
                style={{ color: "var(--color-text-muted)" }}
              >
                {review.text}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "var(--color-text)" }}
                  >
                    {review.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((j) => (
                        <svg
                          key={j}
                          className="w-3 h-3"
                          fill="var(--color-accent)"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Google Review
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
