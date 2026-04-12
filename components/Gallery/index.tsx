'use client';

import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/icons/gallery/project-1.png', alt: 'Project 1' },
  { id: 2, src: '/icons/gallery/project-1.png', alt: 'Project 2' },
  { id: 3, src: '/icons/gallery/project-1.png', alt: 'Project 3' },
  { id: 4, src: '/icons/gallery/project-1.png', alt: 'Project 4' },
  { id: 5, src: '/icons/gallery/project-1.png', alt: 'Project 5' },
  { id: 6, src: '/icons/gallery/project-1.png', alt: 'Project 6' },
];

export default function Gallery() {
  return (
    <section className="w-full bg-white py-8 md:py-12 flex justify-center overflow-hidden">
      {/* Gallery Container - 1120x209px */}
      <div className="w-full max-w-[1120px] h-[209px] relative">
        <div className="gallery-fade overflow-hidden h-full">
          {/* Animated Gallery Loop */}
          <div className="gallery-loop flex gap-4 whitespace-nowrap h-full">
            {[...galleryImages, ...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="inline-block flex-shrink-0 h-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-400 flex items-center justify-center">
                  {/* Placeholder - Replace with actual images */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={209}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
