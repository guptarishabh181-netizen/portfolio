import { caseStudies } from '@/data/index';
import GridBackground from '@/components/CaseStudy/GridBackground';
import CaseStudyHeader from '@/components/CaseStudy/CaseStudyHeader';
import { CaseStudyHeroContent, CaseStudyHeroImage } from '@/components/CaseStudy/CaseStudyHero';
import InfoGrid from '@/components/CaseStudy/InfoGrid';
import ContentSections from '@/components/CaseStudy/ContentSections';
import Footer from '@/components/Footer';

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
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}
