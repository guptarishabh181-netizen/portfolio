'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer Motion values for smooth tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const maskSize = useMotionValue(0);

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
    <footer className="w-full flex justify-center py-8 px-4 md:px-8">
      {/* Container with max-w-7xl and rounded-3xl applied to the background */}
      <div className="w-full max-w-7xl bg-bg-gray rounded-3xl p-8 md:p-12 lg:px-16 lg:py-14 flex flex-col justify-between min-h-[300px]">
        
        {/* Top Area */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 pt-4">
          
          {/* Left side - Interactive Hover Text */}
          <div
            ref={containerRef}
            className="relative inline-block cursor-default"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => maskSize.set(100)} // Slightly larger mask for the longer words
            onMouseLeave={() => maskSize.set(0)}
          >
            {/* Base Layer */}
            <div className="relative z-10">
              <h2 className="text-[40px] md:text-[50px] font-regular text-primary-1 font-family-inter leading-[1.15]">
                Simple isn’t easy.<br />
                I made it anyway.
              </h2>
            </div>

            {/* Hover Mask Layer */}
            <motion.div
              className="absolute -inset-[100px] z-20 bg-primary-1 pointer-events-none"
              style={{
                WebkitMaskImage: useMotionTemplate`radial-gradient(${smoothSize}px circle at calc(${smoothX}px + 100px) calc(${smoothY}px + 100px), black 99%, transparent 100%)`,
                maskImage: useMotionTemplate`radial-gradient(${smoothSize}px circle at calc(${smoothX}px + 100px) calc(${smoothY}px + 100px), black 99%, transparent 100%)`,
              }}
            >
              {/* Positioned exactly 100px from top/left to perfectly overlap the base text */}
              <div className="absolute top-[100px] left-[100px]">
                <h2 className="text-[40px] md:text-[50px] font-regular text-white font-family-inter leading-[1.15]">
                  Don’t ask how<br />
                  long it took.
                </h2>
              </div>
            </motion.div>
          </div>

          {/* Right side - Contact Information */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Email */}
            <div>
              <h3 className="text-[15px] font-bold text-primary-1 mb-1 font-family-inter cursor-default">
                Email
              </h3>
              <a
                href="mailto:guptarishabh181@gmail.com"
                className="text-primary-2 hover:text-primary-1 transition-colors text-[15px] font-family-karla"
              >
                guptarishabh181@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Area - Blame Text */}
        <div className="mt-16 md:mt-24">
          <p className="text-sm text-primary-1 font-family-karla font-regular">
            <span className="group inline-flex items-center gap-1 cursor-default">
              Blame{' '}
              <span className="font-semibold text-primary-1 cursor-pointer">
                <a href="https://www.linkedin.com/in/sushant-/" target="_blank" rel="noopener noreferrer">
                  @Sushant
                </a>
              </span>{' '}
              if anything breaks.
              
              {/* Image Container */}
              <span className="relative w-5 h-5 inline-block ml-1">
                {/* Default Smiley Image (Fades out on hover) */}
                <Image 
                  src="/icons/smiley.svg" 
                  alt="Smiley" 
                  width={20} 
                  height={20} 
                  className="absolute inset-0 w-5 h-5 transition-opacity duration-300 group-hover:opacity-0" 
                />
                {/* Angry Image (Fades in on hover) */}
                <Image 
                  src="/icons/angry.svg" 
                  alt="Angry" 
                  width={20} 
                  height={20} 
                  className="absolute inset-0 w-5 h-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100" 
                />
              </span>
            </span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}
