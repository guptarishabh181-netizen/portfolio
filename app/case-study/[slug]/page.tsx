import { caseStudies } from '@/data/index';
import GridBackground from '@/components/CaseStudy/GridBackground';
import CaseStudyHeader from '@/components/CaseStudy/CaseStudyHeader';
import { CaseStudyHeroContent, CaseStudyHeroImage } from '@/components/CaseStudy/CaseStudyHero';
import InfoGrid from '@/components/CaseStudy/InfoGrid';
import ContentSections from '@/components/CaseStudy/ContentSections';
import AdditionalSections from '@/components/CaseStudy/AdditionalSections';
import MoreCaseStudies from '@/components/CaseStudy/MoreCaseStudies';
import Footer from '@/components/Footer';
import CommentSummarizerCaseStudy from '@/components/CaseStudy/CommentSummarizerCaseStudy';

export default async function CaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const caseStudy = await caseStudies[slug];

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  if (slug === 'comment-summarizer') {
    return <CommentSummarizerCaseStudy />;
  }

  // Get next and previous case study slugs
  const slugs = Object.keys(caseStudies);
  const currentIndex = slugs.indexOf(slug);
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : undefined;
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : undefined;

  return (
    <main className="min-h-screen bg-white">
      <GridBackground />

      <div className="relative z-10">
        <CaseStudyHeader />

        <div className="max-w-7xl mx-auto px-4 md:px-14 lg:px-12 py-12">
          <CaseStudyHeroContent caseStudy={caseStudy} />
          <InfoGrid caseStudy={caseStudy} />
          <CaseStudyHeroImage caseStudy={caseStudy} />
          <ContentSections caseStudy={caseStudy} />
          <AdditionalSections caseStudy={caseStudy} nextSlug={nextSlug} prevSlug={prevSlug} />
          <MoreCaseStudies currentSlug={slug} />
        </div>
        <Footer />
      </div>
    </main>
  );
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}
