import { CaseStudy } from '@/types/index';

interface CaseStudyHeroContentProps {
  caseStudy: CaseStudy;
}

export function CaseStudyHeroContent({ caseStudy }: CaseStudyHeroContentProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 mb-12">
      {/* Left - Title */}
      <div className="flex-1">
        <p className="text-header-1 font-bold text-base font-family-karla" style={{ color: caseStudy.caseStudyTextColor }}>
          {caseStudy.category}
        </p>
        <h1 className="text-5xl font-semibold text-primary-1 font-family-inter leading-tight">
          {caseStudy.title}
        </h1>
      </div>

      {/* Right - Leveraged Skills */}
      <div className="lg:w-90 relative">
        {/* Ellipses behind the text */}
        <div className="absolute top-4 left-16 ellipse ellipse-1 -z-10"></div>
        <div className="absolute top-4 right-16 ellipse ellipse-2 -z-10"></div>

        <div className="relative z-10">
          <h3 className="text-lg font-bold text-primary-1 mb-2 font-family-inter">
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
  return (
    <div className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center mb-16">
      {/* Placeholder */}
      <div className="text-gray-400">
        <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );
}
