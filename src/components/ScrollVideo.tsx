"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
const TOTAL_FRAMES = 61;

function getFrameSrc(index: number) {
  const num = String(Math.max(1, Math.min(TOTAL_FRAMES, index))).padStart(3, "0");
  return `${basePath}/images/frames/frame-${num}.jpg`;
}

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [preloaded, setPreloaded] = useState(false);

  // Preload all frames
  useEffect(() => {
    let count = 0;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        count++;
        if (count >= TOTAL_FRAMES) setPreloaded(true);
      };
      img.onerror = () => {
        count++;
        if (count >= TOTAL_FRAMES) setPreloaded(true);
      };
    }
  }, []);

  // Update frame on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const containerHeight = rect.height;
        const totalTravel = windowHeight + containerHeight;
        const traveled = windowHeight - rect.top;
        const progress = Math.max(0, Math.min(1, traveled / totalTravel));
        const frame = Math.max(1, Math.min(TOTAL_FRAMES, Math.ceil(progress * TOTAL_FRAMES)));

        setCurrentFrame(frame);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
    };
  }, []);

  return (
    <section className="relative bg-white">
      <div ref={containerRef} className="relative h-[250vh]">
        <div className="sticky top-0 flex h-[100dvh] flex-col items-center justify-center overflow-hidden">
          {/* Text overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-20 z-10 text-center px-4 lg:top-28"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Alles aus einer Hand
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Wir packen für Sie —<br />
              <span className="text-accent">von A bis Z</span>
            </h2>
          </motion.div>

          {/* Frame image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getFrameSrc(currentFrame)}
            alt="Umzugswagen Animation — Möbel werden ein- und ausgepackt"
            width={960}
            height={537}
            className="w-full max-w-4xl px-4"
          />

          {/* Loading spinner */}
          {!preloaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
