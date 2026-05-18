import Image from 'next/image';
import { CaseStudy } from '@/types/index';

interface CaseStudyHeroContentProps {
  caseStudy: CaseStudy;
}

export function CaseStudyHeroContent({ caseStudy }: CaseStudyHeroContentProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8 md:mb-12">
      {/* Left - Title */}
      <div className="flex-1 max-w-3xl">
        <p className="text-sm md:text-base font-bold font-family-karla mb-3" style={{ color: caseStudy.caseStudyTextColor }}>
          {caseStudy.category}
        </p>
        <h1 className="text-[2rem] leading-[1.08] md:text-5xl md:leading-tight font-semibold text-primary-1 font-family-inter">
          {caseStudy.title}
        </h1>
      </div>

      {/* Right - Leveraged Skills */}
      <div className="lg:w-[360px] relative">
        {/* Ellipses behind the text */}
        <div className="absolute top-4 left-16 ellipse ellipse-1 -z-10"></div>
        <div className="absolute top-4 right-16 ellipse ellipse-2 -z-10"></div>

        <div className="relative z-10">
          <h3 className="text-base md:text-lg font-bold text-primary-1 mb-2 font-family-inter">
            Leveraged skills
          </h3>
          <p className="text-sm text-primary-1 font-medium leading-relaxed font-family-karla">
            {caseStudy.skills.join(' • ')}
          </p>
        </div>
      </div>
    </div>
  );
}

interface CaseStudyHeroImageProps {
  caseStudy: CaseStudy;
}

export function CaseStudyHeroImage({ caseStudy }: CaseStudyHeroImageProps) {
  const isVectorArtwork = caseStudy.heroImage.endsWith('.svg');

  return (
    <div className="w-full aspect-[16/9] bg-bg-gray rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center mb-12 md:mb-16 border border-border-2">
      {caseStudy.heroImage ? (
        <div className={`relative w-full h-full ${isVectorArtwork ? 'bg-[#f6f7ff]' : ''}`}>
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            fill
            priority
            className={isVectorArtwork ? 'object-contain' : 'object-cover'}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      ) : (
        <div className="text-primary-2">
          <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
    </div>
  );
}
