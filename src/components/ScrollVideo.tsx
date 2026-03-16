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
  const frameRef = useRef(1);
  const imgRef = useRef<HTMLImageElement>(null);

  // Preload frames in background (non-blocking)
  useEffect(() => {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = getFrameSrc(i);
      link.as = "image";
      document.head.appendChild(link);
    }
  }, []);

  // Update frame on scroll
  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    let ticking = false;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const wh = window.innerHeight;
      const total = wh + rect.height;
      const traveled = wh - rect.top;
      const progress = Math.max(0, Math.min(1, traveled / total));
      const frame = Math.max(1, Math.min(TOTAL_FRAMES, Math.ceil(progress * TOTAL_FRAMES)));

      if (frame !== frameRef.current) {
        frameRef.current = frame;
        img.src = getFrameSrc(frame);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", onScroll);
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
            className="absolute top-20 z-10 px-4 text-center lg:top-28"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Alles aus einer Hand
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Wir packen für Sie —<br />
              <span className="text-accent">von A bis Z</span>
            </h2>
          </motion.div>

          {/* Frame image — always visible, no loading gate */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={getFrameSrc(1)}
            alt="Umzugswagen Animation — Möbel werden ein- und ausgepackt"
            width={960}
            height={537}
            className="w-full max-w-4xl px-4"
          />
        </div>
      </div>
    </section>
  );
}
