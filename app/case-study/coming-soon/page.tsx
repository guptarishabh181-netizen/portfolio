import Link from 'next/link';
import GridBackground from '@/components/CaseStudy/GridBackground';

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-white relative">
      <GridBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-bg-gray px-5 py-2 rounded-lg mb-8">
            <span className="text-primary-1 text-sm md:text-base font-semibold font-family-inter">
              ✦ Coming Soon
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-1 mb-6 font-family-inter">
            Case Study in Progress
          </h1>

          {/* Description */}
          <p className="text-base md:text-2xl text-primary-1 font-regular leading-relaxed font-family-karla mb-12 max-w-xl mx-auto">
            I'm currently working on documenting this project. Check back soon to see the full case study with insights, process, and outcomes.
          </p>

          {/* Back to Work Button */}
          <Link
            href="/#work"
            className="inline-block px-6 py-3 bg-box-1 text-white rounded-lg text-base font-medium hover:bg-primary-1-hover transition-all duration-300 font-family-karla"
          >
            Back to Work
          </Link>
        </div>
      </div>
    </main>
  );
}
