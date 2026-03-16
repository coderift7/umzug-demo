"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
const TOTAL_FRAMES = 121;

function getFrameSrc(index: number) {
  const num = String(Math.max(1, Math.min(TOTAL_FRAMES, index))).padStart(3, "0");
  return `${basePath}/images/frames/frame-${num}.jpg`;
}

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef(1);
  const cacheRef = useRef<Map<number, HTMLImageElement>>(new Map());

  // Aggressively preload ALL frames into memory on mount
  useEffect(() => {
    const cache = cacheRef.current;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.decoding = "async";
      img.src = getFrameSrc(i);
      cache.set(i, img);
    }
  }, []);

  const updateFrame = useCallback(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const rect = container.getBoundingClientRect();
    const wh = window.innerHeight;
    const total = wh + rect.height;
    const traveled = wh - rect.top;
    const progress = Math.max(0, Math.min(1, traveled / total));
    const frame = Math.max(1, Math.min(TOTAL_FRAMES, Math.ceil(progress * TOTAL_FRAMES)));

    if (frame !== frameRef.current) {
      frameRef.current = frame;
      // Use cached image if loaded, otherwise set src directly
      const cached = cacheRef.current.get(frame);
      if (cached && cached.complete) {
        img.src = cached.src;
      } else {
        img.src = getFrameSrc(frame);
      }
    }
  }, []);

  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateFrame);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateFrame();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [updateFrame]);

  return (
    <section className="relative bg-white">
      <div ref={containerRef} className="relative h-[300vh]">
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
