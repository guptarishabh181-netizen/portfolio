import { CaseStudy } from '@/types/index';
import TLDSSection from './sections/TLDSSection';
import ImpactMetrics from './sections/ImpactMetrics';
import ApproachSection from './sections/ApproachSection';
import ProcessSections from './sections/ProcessSections';
import LearningsSection from './sections/LearningsSection';

interface AdditionalSectionsProps {
  caseStudy: CaseStudy;
  nextSlug?: string;
  prevSlug?: string;
}

export default function AdditionalSections({ caseStudy, nextSlug, prevSlug }: AdditionalSectionsProps) {
  return (
    <>
      {/* Dotted Divider */}
      <div className="border-t-2 border-dashed border-dotted-border my-16"></div>

      {/* TLDS Section */}
      {caseStudy.tldsSection && (
        <TLDSSection
          tldsSection={caseStudy.tldsSection}
          nextSlug={nextSlug}
          prevSlug={prevSlug}
        />
      )}

      {/* Impact Metrics */}
      {caseStudy.impactMetrics && caseStudy.impactMetrics.length > 0 && (
        <ImpactMetrics metrics={caseStudy.impactMetrics} />
      )}

      {/* Approach Section */}
      {caseStudy.approachSection && caseStudy.approachSection.images.length > 0 && (
        <ApproachSection images={caseStudy.approachSection.images} />
      )}

      {/* Process Sections - Research & Ideation, etc. */}
      {caseStudy.processSections && caseStudy.processSections.length > 0 && (
        <ProcessSections
          sections={caseStudy.processSections}
          caseStudyTextColor={caseStudy.caseStudyTextColor}
        />
      )}

      {/* Learnings & Final Thoughts */}
      {caseStudy.learnings && caseStudy.learnings.length > 0 && (
        <LearningsSection learnings={caseStudy.learnings} />
      )}
    </>
  );
}
