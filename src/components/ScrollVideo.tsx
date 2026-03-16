"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
const TOTAL_FRAMES = 61;

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const num = String(i).padStart(3, "0");
      img.src = `${basePath}/images/frames/frame-${num}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Draw frames based on scroll position
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions from first frame
    const firstImage = imagesRef.current[0];
    canvas.width = firstImage.naturalWidth;
    canvas.height = firstImage.naturalHeight;

    // Draw first frame immediately
    ctx.drawImage(firstImage, 0, 0);

    let rafId: number;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const containerHeight = rect.height;
        const totalTravel = windowHeight + containerHeight;
        const traveled = windowHeight - rect.top;
        const progress = Math.max(0, Math.min(1, traveled / totalTravel));

        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(progress * TOTAL_FRAMES)
        );

        const img = imagesRef.current[frameIndex];
        if (img) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [loaded]);

  return (
    <section className="relative bg-white">
      <div ref={containerRef} className="relative h-[250vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          {/* Text overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-20 z-10 text-center lg:top-28"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Alles aus einer Hand
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Wir packen für Sie —<br />
              <span className="text-accent">von A bis Z</span>
            </h2>
          </motion.div>

          {/* Canvas for frame rendering */}
          <canvas
            ref={canvasRef}
            className="h-auto w-full max-w-4xl object-contain px-4"
          />

          {/* Loading state */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
