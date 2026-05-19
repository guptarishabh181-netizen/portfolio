import { CaseStudy } from '@/types/index';

interface ContentSectionsProps {
  caseStudy: CaseStudy;
}

export default function ContentSections({ caseStudy }: ContentSectionsProps) {
  return (
    <>
      {/* Dotted Divider */}
      <div className="border-t-2 border-dashed border-dotted-border my-12 md:my-16"></div>

      {/* Content Sections - Staggered Layout */}
      <div className="relative">
        {/* Business Goal - Top Left */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <h3 className="text-lg md:text-xl font-semibold text-primary-1 mb-4 md:mb-6 font-family-inter">
            {caseStudy.businessGoal.title}
          </h3>
          <h2 className="text-[2rem] md:text-4xl font-regular text-primary-1 mb-5 md:mb-7 font-family-inter leading-tight">
            {caseStudy.businessGoal.beforeHighlight}{' '}
            <span style={{ color: caseStudy.caseStudyTextColor, backgroundColor: caseStudy.caseStudyTextColor + '1A' }}>
              {caseStudy.businessGoal.highlight}
            </span>{' '}
            {caseStudy.businessGoal.afterHighlight}
          </h2>
          <p className="text-sm text-primary-1 font-regular leading-relaxed font-family-karla">
            {caseStudy.businessGoal.description}
          </p>
        </div>

        {/* User Problem & Solution - Bottom Right (offset) */}
        <div className="max-w-2xl ml-auto">
          <h3 className="text-lg md:text-xl font-semibold text-primary-1 mb-4 md:mb-6 font-family-inter">
            {caseStudy.userProblem.title}
          </h3>
          <h2 className="text-[2rem] md:text-4xl font-regular text-primary-1 mb-5 md:mb-7 font-family-inter leading-tight">
              {caseStudy.userProblem.beforeHighlight}{' '}
            <span style={{ color: caseStudy.caseStudyTextColor, backgroundColor: caseStudy.caseStudyTextColor + '1A' }}>
              {caseStudy.userProblem.highlight}
            </span>{' '}
            {caseStudy.userProblem.afterHighlight}
          </h2>
          <p className="text-sm text-primary-1 font-regular leading-relaxed mb-4 font-family-karla">
            {caseStudy.userProblem.description}
          </p>
          <p className="text-sm text-primary-1 font-regular leading-relaxed font-family-karla">
            {caseStudy.userProblem.solution}
          </p>
        </div>
      </div>
    </>
  );
}
