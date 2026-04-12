'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer Motion values for smooth 60fps tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const maskSize = useMotionValue(0);

  // Add a spring physics effect so the circle glides smoothly
  const smoothConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, smoothConfig);
  const smoothY = useSpring(mouseY, smoothConfig);
  const smoothSize = useSpring(maskSize, smoothConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center px-4 md:px-8 lg:px-12">
      {/* Profile Image with RG */}
      <div className="mb-11 md:mb-4 relative flex items-center justify-center">
        <div className="relative">
          <Image
            src="/icons/profile.svg"
            alt="Profile"
            width={46}
            height={46}
            className="w-12 h-12 border-2 border-border-1 rounded-full object-cover"
          />
        </div>
        <div className="absolute -right-8 rounded-full flex items-center justify-center">
          <div className="relative z-10 glass-effect rg-glass w-12 h-12 rounded-full flex items-center justify-center">
            <p className="text-[#525252] text-sm md:text-base font-medium font-family-karla">
              RG
            </p>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <span className="inline-block w-2 h-2 bg-top-2 rounded-full"></span>
        <span className="text-top-1 font-medium text-sm md:text-base font-family-karla">
          Open to New Opportunities
        </span>
      </div>

      {/* --- MOUSE EVENTS & REVEAL WRAPPER --- */}
      <div className="text-center mb-2 max-w-4xl flex flex-col items-center">
        <div
          ref={containerRef}
          // 1. Removed the stray 'overflow' class here so it doesn't clip children
          className="relative inline-block cursor-default" 
          onMouseMove={handleMouseMove}
          onMouseEnter={() => maskSize.set(90)}
          onMouseLeave={() => maskSize.set(0)}
        >
          {/* 1. BASE LAYER (Visible outside the circle) */}
          <div className="relative z-10 flex flex-col items-center justify-center py-2">
            <h1 className="text-[40px] md:text-5xl lg:text-6xl font-regular text-primary-1 font-family-inter leading-tight">
              Overthinking UX
            </h1>
            <p className="text-[40px] md:text-5xl lg:text-6xl font-regular text-primary-2 font-family-inter leading-tight">
              Since 2021
            </p>
          </div>
          
          <motion.div
            // 2. Changed inset-0 to -inset-[100px] to give the mask 100px of bleed room
            className="absolute -inset-[100px] z-20 flex flex-col items-center justify-center py-2 bg-neutral-900 pointer-events-none"
            style={{
              // 3. Offset the X and Y coordinates by 100px to perfectly match the new expanded boundaries
              WebkitMaskImage: useMotionTemplate`radial-gradient(${smoothSize}px circle at calc(${smoothX}px + 100px) calc(${smoothY}px + 100px), black 99%, transparent 100%)`,
              maskImage: useMotionTemplate`radial-gradient(${smoothSize}px circle at calc(${smoothX}px + 100px) calc(${smoothY}px + 100px), black 99%, transparent 100%)`,
            }}
          >
            <h1 className="text-[40px] md:text-5xl lg:text-6xl font-regular text-white font-family-inter leading-tight">
              Simplifying UX
            </h1>
            <p className="text-[40px] md:text-5xl lg:text-6xl font-regular text-white font-family-inter leading-tight">
              Since 2021
            </p>
          </motion.div>
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-primary-1 max-w-2xl text-xs md:text-sm font-light leading-relaxed mb-11 md:mb-4 font-family-karla">
        Strategic AI UX Designer with experience across SaaS, FinTech, and Digital
        Health. Skilled in crafting end-to-end user experiences, translating
        complex systems into intuitive interfaces, and delivering measurable
        business impact through design.
      </p>

      {/* CTA Buttons */}
      <div className="relative mb-20 md:mb-32 flex items-center justify-center">
        <div className="relative flex flex-row items-center gap-2">
          <div className="relative flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ellipse ellipse-1"></div>
            <a
              href="mailto:guptarishabh181@gmail.com"
              className="relative z-10 px-3.5 py-2.5 bg-box-1 text-white rounded-lg font-regular text-sm hover:bg-primary-1 cursor-pointer transition-all duration-300 font-family-karla"
            >
              Direct E-mail me
            </a>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ellipse ellipse-2"></div>
            <a
              href="#work"
              className="relative z-10 px-3.5 py-2.5 text-primary-1 rounded-lg font-regular text-sm cursor-pointer glass-effect explore-glass font-family-karla"
            >
              Explore my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}