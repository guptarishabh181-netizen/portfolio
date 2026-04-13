import { ProcessSection } from '@/types/index';

interface ProcessSectionsProps {
  sections: ProcessSection[];
  caseStudyTextColor: string;
}

export default function ProcessSections({ sections, caseStudyTextColor }: ProcessSectionsProps) {
  return (
    <div className="space-y-16">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-16">
          {/* Section Header and Content - Center Aligned with max-w-3xl */}
          <div className="max-w-3xl mx-auto mb-8">
            <p
              className="text-base font-bold mb-2 font-family-karla"
              style={{ color: caseStudyTextColor }}
            >
              {section.category}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-1 mb-4 font-family-inter">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-sm text-primary-1 font-regular leading-relaxed font-family-karla"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Section Image - Center Aligned with max-w-3xl */}
          {section.image !== undefined && (
            <div className="max-w-3xl mx-auto relative w-full aspect-[16/9] bg-bg-gray rounded-xl overflow-hidden flex items-center justify-center mb-8">
              {section.image ? (
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-primary-2">
                  <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
          )}

          {/* Font Sections - Primary Font, Secondary Font */}
          {section.fontSections && section.fontSections.length > 0 && (
            <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
              {section.fontSections.map((fontSection, fontIndex) => (
                <div key={fontIndex}>
                  <div className="relative w-full aspect-[16/9] bg-bg-gray rounded-xl overflow-hidden flex items-center justify-center mb-3 md:mb-4">
                    {fontSection.image ? (
                      <img
                        src={fontSection.image}
                        alt={fontSection.label}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-primary-2">
                        <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p
                    className="text-sm md:text-base font-bold font-family-karla"
                    style={{ color: caseStudyTextColor }}
                  >
                    {fontSection.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Design System Images - Two tall images */}
          {section.designSystemImages && section.designSystemImages.length > 0 && (
            <div className="max-w-3xl mx-auto space-y-8 mt-8">
              {section.designSystemImages.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative w-full max-w-[763px] aspect-[763/818] mx-auto bg-bg-gray rounded-xl overflow-hidden flex items-center justify-center"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={`Design System ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-primary-2">
                      <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
