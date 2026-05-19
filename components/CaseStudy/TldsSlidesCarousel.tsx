'use client';

import Image from 'next/image';

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
  htmlFor,
  dark = false,
}: {
  children: string;
  htmlFor?: string;
  dark?: boolean;
}) {
  const classes = dark
    ? 'rounded-lg bg-[#212833] px-5 py-2 font-family-karla text-sm font-semibold text-white'
    : 'rounded-lg border border-[#E2E3E4] bg-white px-4 py-2 font-family-karla text-sm font-semibold text-[#344054]';

  if (!htmlFor) {
    return <span className={`${classes} cursor-not-allowed opacity-50`}>{children}</span>;
  }

  return (
    <label htmlFor={htmlFor} className={`${classes} cursor-pointer`}>
      {children}
    </label>
  );
}

export default function TldsSlidesCarousel() {
  return (
    <div>
      {slides.map((slide, index) => (
        <input key={slide.id} id={slide.id} name="tlds-slide" type="radio" className="sr-only" defaultChecked={index === 0} />
      ))}

      <div className="tlds-carousel relative aspect-[3261/1974] overflow-hidden rounded-2xl bg-[#F7F7F8]">
        <div className="tlds-track flex h-full" style={{ width: `${slides.length * 100}%` }}>
          {slides.map((slide, index) => (
            <div key={slide.src} className="relative h-full shrink-0" style={{ width: `${100 / slides.length}%` }}>
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

      {slides.map((slide, index) => {
        const previous = slides[index - 1]?.id;
        const next = slides[index + 1]?.id;

        return (
          <div key={`${slide.id}-controls`} className={`tlds-controls tlds-controls--${index + 1} mt-6 hidden items-center justify-center gap-2`}>
            <NavLabel htmlFor={previous}>Previous</NavLabel>
            <NavLabel htmlFor={next} dark>
              Next
            </NavLabel>
          </div>
        );
      })}

      {slides.map((slide, index) => (
        <p
          key={`${slide.id}-counter`}
          className={`tlds-counter tlds-counter--${index + 1} mt-3 hidden text-center font-family-karla text-sm font-semibold text-[#5B6573]`}
        >
          {index + 1} / {slides.length}
        </p>
      ))}

      {slides.map((slide, currentIndex) => (
        <div key={`${slide.id}-dots`} className={`tlds-dots tlds-dots--${currentIndex + 1} mt-4 hidden justify-center gap-2`}>
          {slides.map((dotSlide, dotIndex) => (
            <label
              key={dotSlide.id}
              htmlFor={dotSlide.id}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`h-2.5 w-2.5 cursor-pointer rounded-full transition ${
                dotIndex === currentIndex ? 'bg-[#212833]' : 'bg-[#CFD5DE]'
              }`}
            />
          ))}
        </div>
      ))}

      <style>{`
        .tlds-track {
          transition: transform 300ms ease-out;
        }

        #tlds-slide-1:checked ~ .tlds-carousel .tlds-track {
          transform: translateX(0%);
        }

        #tlds-slide-2:checked ~ .tlds-carousel .tlds-track {
          transform: translateX(-16.666667%);
        }

        #tlds-slide-3:checked ~ .tlds-carousel .tlds-track {
          transform: translateX(-33.333334%);
        }

        #tlds-slide-4:checked ~ .tlds-carousel .tlds-track {
          transform: translateX(-50%);
        }

        #tlds-slide-5:checked ~ .tlds-carousel .tlds-track {
          transform: translateX(-66.666667%);
        }

        #tlds-slide-6:checked ~ .tlds-carousel .tlds-track {
          transform: translateX(-83.333334%);
        }

        #tlds-slide-1:checked ~ .tlds-controls--1,
        #tlds-slide-2:checked ~ .tlds-controls--2,
        #tlds-slide-3:checked ~ .tlds-controls--3,
        #tlds-slide-4:checked ~ .tlds-controls--4,
        #tlds-slide-5:checked ~ .tlds-controls--5,
        #tlds-slide-6:checked ~ .tlds-controls--6,
        #tlds-slide-1:checked ~ .tlds-dots--1,
        #tlds-slide-2:checked ~ .tlds-dots--2,
        #tlds-slide-3:checked ~ .tlds-dots--3,
        #tlds-slide-4:checked ~ .tlds-dots--4,
        #tlds-slide-5:checked ~ .tlds-dots--5,
        #tlds-slide-6:checked ~ .tlds-dots--6 {
          display: flex;
        }

        #tlds-slide-1:checked ~ .tlds-counter--1,
        #tlds-slide-2:checked ~ .tlds-counter--2,
        #tlds-slide-3:checked ~ .tlds-counter--3,
        #tlds-slide-4:checked ~ .tlds-counter--4,
        #tlds-slide-5:checked ~ .tlds-counter--5,
        #tlds-slide-6:checked ~ .tlds-counter--6 {
          display: block;
        }
      `}</style>
    </div>
  );
}
