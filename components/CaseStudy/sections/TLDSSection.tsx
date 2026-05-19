import Image from 'next/image';
import Link from 'next/link';

interface TLDSSectionProps {
  tldsSection: {
    content: string;
    image?: string;
  };
  nextSlug?: string;
  prevSlug?: string;
}

export default function TLDSSection({ tldsSection, nextSlug, prevSlug }: TLDSSectionProps) {
  const isVectorArtwork = tldsSection.image?.endsWith('.svg');

  return (
    <div className="mb-12 md:mb-16">
      {/* Header outside container */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-primary-1 font-family-inter">
          TLDS;
        </h3>
        <Link
          href="#"
          className="px-4 md:px-5 py-2 md:py-2.5 bg-box-1 text-white rounded-lg text-sm font-medium hover:bg-primary-1-hover transition-all duration-300 font-family-karla whitespace-nowrap"
        >
          Explore Case study
        </Link>
      </div>

      {/* Gray container with image */}
      <div className="bg-bg-gray rounded-2xl p-6 md:p-12 mb-6 md:mb-8">
        <div className={`relative w-full aspect-[16/9] rounded-xl overflow-hidden flex items-center justify-center ${isVectorArtwork ? 'bg-[#f6f7ff]' : 'bg-bg-gray-2'}`}>
          {tldsSection.image ? (
            <Image
              src={tldsSection.image}
              alt="TLDS"
              fill
              className={isVectorArtwork ? 'object-contain' : 'object-cover'}
              sizes="(max-width: 768px) 100vw, 960px"
            />
          ) : (
            <div className="text-primary-2">
              <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Navigation - Previous/Next */}
      <div className="flex items-center justify-center gap-3 md:gap-4">
        {prevSlug ? (
          <Link
            href={`/case-study/${prevSlug}`}
            className="px-4 md:px-6 py-2 md:py-2.5 bg-bg-gray text-primary-1 rounded-lg text-sm font-medium hover:bg-bg-gray-2 transition-all duration-300 font-family-karla border border-border-2"
          >
            Previous
          </Link>
        ) : (
          <button
            disabled
            className="px-4 md:px-6 py-2 md:py-2.5 bg-bg-gray text-primary-2 rounded-lg text-sm font-medium font-family-karla border border-border-2 opacity-50 cursor-not-allowed"
          >
            Previous
          </button>
        )}

        {nextSlug ? (
          <Link
            href={`/case-study/${nextSlug}`}
            className="px-4 md:px-6 py-2 md:py-2.5 bg-primary-1 text-white rounded-lg text-sm font-medium hover:bg-primary-1-hover transition-all duration-300 font-family-karla"
          >
            Next
          </Link>
        ) : (
          <button
            disabled
            className="px-4 md:px-6 py-2 md:py-2.5 bg-primary-1 text-white rounded-lg text-sm font-medium font-family-karla opacity-50 cursor-not-allowed"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
