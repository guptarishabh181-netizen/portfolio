'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/index';

interface MoreCaseStudiesProps {
  currentSlug: string;
}

export default function MoreCaseStudies({ currentSlug }: MoreCaseStudiesProps) {
  // Get all case studies except the current one
  const allCaseStudies = Object.values(caseStudies).filter(cs => cs.slug !== currentSlug);
  const [studyList, setStudyList] = useState(allCaseStudies);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, studyList]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % studyList.length);
      setIsAnimating(false);
    }, 500);
  };

  const shuffleCaseStudies = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      const shuffled = [...studyList].sort(() => Math.random() - 0.5);
      setStudyList(shuffled);
      setCurrentIndex(0);
      setIsAnimating(false);
    }, 500);
  };

  const currentStudy = studyList[currentIndex];
  const nextStudy = studyList[(currentIndex + 1) % studyList.length];

  return (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-semibold text-primary-1 text-center mb-12 font-family-inter">
        More Case Studies
      </h2>

      {/* Stacked Cards Container */}
      <div className="relative mb-8 flex justify-center" style={{ maxWidth: '100%' }}>
        {/* Mobile View - Simple Card */}
        <div className="block lg:hidden w-full max-w-3xl px-4">
          <div
            className={`bg-white rounded-2xl p-4 md:p-6 border border-border-2 transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="flex flex-col gap-4">
              {/* Image */}
              <div className="w-full h-48 md:h-60">
                <div className="relative w-full h-full bg-bg-gray rounded-xl overflow-hidden">
                  {currentStudy?.heroImage ? (
                    <Image
                      src={currentStudy.heroImage}
                      alt={currentStudy.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-primary-2">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary-1 mb-2 font-family-inter">
                  {currentStudy?.title}
                </h3>
                <p className="text-sm text-primary-1 font-regular leading-relaxed mb-4 font-family-karla line-clamp-3">
                  {currentStudy?.overview}
                </p>
                <Link
                  href={`/case-study/${currentStudy?.slug}`}
                  className="inline-block px-4 py-2 bg-box-1 text-white rounded-lg text-sm font-medium hover:bg-primary-1-hover transition-all duration-300 font-family-karla w-fit mb-4"
                >
                  View Case study
                </Link>
                <div className="w-full border-t border-dashed border-border-2 mb-3"></div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-semibold text-primary-1 font-family-inter">
                    Leveraged skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStudy?.skills.slice(0, 5).map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white rounded-full text-xs text-primary-1 font-medium font-family-karla border border-border-2 whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View - Stacked Cards */}
        <div className="hidden lg:block relative pt-4" style={{ height: '362px', width: '957px' }}>
          {/* Back Card */}
          <div
            className="absolute bg-white rounded-2xl border border-border-2 transition-all duration-500 flex gap-6 p-6"
            style={{
              width: '937px',
              height: '342px',
              left: '50%',
              top: '0px',
              transform: 'translateX(-50%) scale(0.98)',
              zIndex: 1,
              opacity: 0.7
            }}
          >
            <div style={{ width: '410px', height: '291px', flexShrink: 0 }}>
              <div className="relative w-full h-full bg-bg-gray rounded-xl overflow-hidden">
                {nextStudy?.heroImage && (
                  <Image
                    src={nextStudy.heroImage}
                    alt={nextStudy.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-1 mb-3 font-family-inter">
                {nextStudy?.title}
              </h3>
            </div>
          </div>

          {/* Front Card */}
          <div
            className={`absolute bg-white rounded-2xl p-6 border border-border-2 transition-all duration-500 flex gap-6 ${
              isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
            }`}
            style={{
              zIndex: 2,
              height: '342px',
              width: '957px',
              top: '20px',
              left: '50%',
              transform: isAnimating ? 'translateX(-50%) translateY(2rem)' : 'translateX(-50%) translateY(0)'
            }}
          >
            <div style={{ width: '410px', height: '291px', flexShrink: 0 }}>
              <div className="relative w-full h-full bg-bg-gray rounded-xl overflow-hidden">
                {currentStudy?.heroImage ? (
                  <Image
                    src={currentStudy.heroImage}
                    alt={currentStudy.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary-2">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-1 mb-3 font-family-inter">
                  {currentStudy?.title}
                </h3>
                <p className="text-sm text-primary-1 font-regular leading-relaxed mb-4 font-family-karla">
                  {currentStudy?.overview}
                </p>
                <Link
                  href={`/case-study/${currentStudy?.slug}`}
                  className="inline-block px-5 py-2.5 bg-box-1 text-white rounded-lg text-sm font-medium hover:bg-primary-1-hover transition-all duration-300 font-family-karla w-fit"
                >
                  View Case study
                </Link>
              </div>
              <div>
                <div className="w-full border-t border-dashed border-border-2 mb-4"></div>
                <div className="flex items-start gap-3">
                  <h4 className="text-base font-semibold text-primary-1 font-family-inter whitespace-nowrap flex-shrink-0">
                    Leveraged skills
                  </h4>
                  <div className="flex flex-wrap gap-2 flex-1">
                    {currentStudy?.skills.slice(0, 5).map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white rounded-full text-xs text-primary-1 font-medium font-family-karla border border-border-2 whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shuffle Button */}
      <div className="flex justify-center">
        <button
          onClick={shuffleCaseStudies}
          className="px-6 py-3 bg-box-1 text-white rounded-lg text-sm font-medium hover:bg-primary-1-hover transition-all duration-300 font-family-karla"
        >
          Shuffle
        </button>
      </div>
    </div>
  );
}
