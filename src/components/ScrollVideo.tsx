"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Wait for video metadata to load
    const onLoaded = () => {
      const duration = video.duration;

      const onScroll = () => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const containerHeight = rect.height;

        // Calculate scroll progress through the container
        // 0 = container just entered viewport from bottom
        // 1 = container has left viewport at top
        const totalTravel = windowHeight + containerHeight;
        const traveled = windowHeight - rect.top;
        const progress = Math.max(0, Math.min(1, traveled / totalTravel));

        // Map scroll progress to video time
        video.currentTime = progress * duration;
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll(); // Set initial frame

      return () => window.removeEventListener("scroll", onScroll);
    };

    if (video.readyState >= 1) {
      const cleanup = onLoaded();
      return cleanup;
    }

    video.addEventListener("loadedmetadata", onLoaded, { once: true });
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  return (
    <section className="relative bg-white">
      <div ref={containerRef} className="relative h-[250vh]">
        {/* Sticky video container */}
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          {/* Text overlay top */}
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

          {/* Video */}
          <video
            ref={videoRef}
            src={`${basePath}/images/truck-scroll.mp4`}
            muted
            playsInline
            preload="auto"
            className="h-auto w-full max-w-4xl object-contain px-4"
          />
        </div>
      </div>
    </section>
  );
}
