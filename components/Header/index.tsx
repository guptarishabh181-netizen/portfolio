'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <header className="w-full px-4 md:px-14 lg:px-12 py-6 md:pt-16 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-1">
        <Image
          src="/icons/logo.svg" // Replace with your logo path
          alt="Logo"
          width={89}
          height={58}
          className="w-16 md:w-22"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Resume Button */}
        <button
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="px-3.5 md:px-3.5 py-1.5 md:py-1.5 bg-box-1 text-white rounded-md font-medium text-xs md:text-sm hover:bg-primary-1-hover transition-all duration-300 ease-in-out cursor-pointer font-family-karla"
        >
          Resume
        </button>

        {/* LinkedIn Icon with Ellipse */}
        <div className="relative flex items-center justify-center">
          {/* Ellipse centered behind LinkedIn icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ellipse ellipse-1"></div>
          <Link href="https://www.linkedin.com/in/rishabh-gupta-82139a1a6/" target="_blank" rel="noopener noreferrer" className="relative z-10">
            <div className='w-[32px] h-[32px] flex items-center justify-center glass-effect linkedin-glass'>
              <div className="linkedin-icon-wrapper">
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}