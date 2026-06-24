'use client';

import Image from 'next/image';

interface ApproachSectionProps {
  images: string[];
}

export default function ApproachSection({ images }: ApproachSectionProps) {
  const scrollToApproach = () => {
    const approachSection = document.getElementById('approach-section');
    if (approachSection) {
      approachSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* How Did I Approached Button */}
      <div className="mb-12 md:mb-16">
        <div className="flex justify-center">
          <button
            onClick={scrollToApproach}
            className="px-5 md:px-6 py-2.5 md:py-3 bg-box-1 text-white rounded-lg text-sm font-medium hover:bg-primary-1-hover transition-all duration-300 font-family-karla flex items-center gap-2"
          >
            How Did I approached?
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Approach Images - No Container */}
      <div id="approach-section" className="space-y-6 md:space-y-8 mb-16">
        {images.map((image, index) => {
          const isVectorArtwork = image.endsWith('.svg');

          return (
            <div
              key={index}
              className={`relative w-full ${index === 0 ? 'aspect-[16/9] md:aspect-[16/7]' : 'aspect-[16/9] md:aspect-[16/10]'} ${isVectorArtwork ? 'bg-[#f6f7ff]' : 'bg-bg-gray'} rounded-xl overflow-hidden flex items-center justify-center`}
            >
              {image ? (
                <Image
                  src={image}
                  alt={`Approach ${index + 1}`}
                  fill
                  className={isVectorArtwork ? 'object-contain' : 'object-cover'}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              ) : (
                <div className="text-primary-2">
                  <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
