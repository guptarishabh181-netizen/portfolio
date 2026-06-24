'use client';

import Image from 'next/image';
import { useState } from 'react';

const slides = [
  { id: 'tlds-slide-1', src: '/case-studies/comment-summarizer/tlds-slides/page-1.png', alt: 'TLDS slide 1' },
  { id: 'tlds-slide-2', src: '/case-studies/comment-summarizer/tlds-slides/page-2.png', alt: 'TLDS slide 2' },
  { id: 'tlds-slide-3', src: '/case-studies/comment-summarizer/tlds-slides/page-3.png', alt: 'TLDS slide 3' },
  { id: 'tlds-slide-4', src: '/case-studies/comment-summarizer/tlds-slides/page-4.png', alt: 'TLDS slide 4' },
  { id: 'tlds-slide-5', src: '/case-studies/comment-summarizer/tlds-slides/page-5.png', alt: 'TLDS slide 5' },
  { id: 'tlds-slide-6', src: '/case-studies/comment-summarizer/tlds-slides/page-6.png', alt: 'TLDS slide 6' },
];

function NavLabel({
  children,
  onClick,
  dark = false,
  disabled = false,
}: {
  children: string;
  onClick?: () => void;
  dark?: boolean;
  disabled?: boolean;
}) {
  const classes = dark
    ? 'rounded-lg bg-[#212833] px-5 py-2 font-family-karla text-sm font-semibold text-white'
    : 'rounded-lg border border-[#E2E3E4] bg-white px-4 py-2 font-family-karla text-sm font-semibold text-[#344054]';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${classes} transition disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {children}
    </button>
  );
}

export default function TldsSlidesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = activeIndex + 1;
  const previousSlide = () => setActiveIndex((index) => Math.max(index - 1, 0));
  const nextSlide = () => setActiveIndex((index) => Math.min(index + 1, slides.length - 1));

  return (
    <div>
      <div className="tlds-carousel relative aspect-[3261/1974] overflow-hidden rounded-2xl bg-[#F7F7F8]">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.src} className="relative h-full min-w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                unoptimized
                sizes="(max-width: 768px) 100vw, 1120px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <NavLabel onClick={previousSlide} disabled={activeIndex === 0}>
          Previous
        </NavLabel>
        <NavLabel onClick={nextSlide} dark disabled={activeIndex === slides.length - 1}>
          Next
        </NavLabel>
      </div>

      <p className="mt-3 text-center font-family-karla text-sm font-semibold text-[#5B6573]">
        {currentSlide} / {slides.length}
      </p>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((slide, dotIndex) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${dotIndex + 1}`}
            aria-pressed={dotIndex === activeIndex}
            onClick={() => setActiveIndex(dotIndex)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              dotIndex === activeIndex ? 'bg-[#212833]' : 'bg-[#CFD5DE]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
