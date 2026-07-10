import Image from 'next/image';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import CaseStudyHeader from './CaseStudyHeader';
import GridBackground from './GridBackground';
import MoreCaseStudies from './MoreCaseStudies';
import { VisualAsset, VisualCaseStudy } from '@/data/visualCaseStudies';

interface VisualCaseStudyPageProps {
  study: VisualCaseStudy;
}

function Shell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-4 md:px-14 lg:px-20 ${className}`}>
      {children}
    </section>
  );
}

function VisualImage({ asset, priority = false }: { asset: VisualAsset; priority?: boolean }) {
  const displayWidth = asset.maxWidth ?? asset.width;
  // Generate proper responsive sizes based on display width
  const sizes =
    displayWidth <= 800
      ? `(max-width: 768px) 100vw, ${displayWidth}px`
      : '(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px';

  return (
    <div
      className="mx-auto w-full overflow-hidden rounded-xl"
      style={{ maxWidth: displayWidth }}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={priority}
        quality={90}
        sizes={sizes}
        className="h-auto w-full"
      />
    </div>
  );
}

function InfoItem({
  label,
  value,
  accentColor,
  titleFont = 'font-family-inter',
  bodyFont = 'font-family-karla',
}: {
  label: string;
  value: string | string[];
  accentColor?: string;
  titleFont?: string;
  bodyFont?: string;
}) {
  return (
    <div>
      <h3 className={`mb-2 text-lg font-bold text-[#344054] ${titleFont}`}>{label}</h3>
      {Array.isArray(value) ? (
        <div className="flex -space-x-[7px]">
          {value.map((item, index) => (
            <span
              key={item}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-base font-medium text-white ring-2 ring-[#f9f9fa] ${bodyFont}`}
              style={{ backgroundColor: index === 0 && accentColor ? accentColor : '#212833', zIndex: value.length - index }}
            >
              {item === 'Me' ? 'Me' : item.substring(0, 2)}
            </span>
          ))}
        </div>
      ) : (
        <p className={`text-sm font-medium leading-relaxed text-[#344054] ${bodyFont}`}>{value}</p>
      )}
    </div>
  );
}

function HighlightBlock({
  label,
  headline,
  highlight,
  afterHighlight,
  headlineSegments,
  body,
  align = 'left',
  accentColor,
  maxWidthClass = 'max-w-[480px]',
  titleFont = 'font-family-inter',
  bodyFont = 'font-family-karla',
  headlineFont,
}: {
  label: string;
  headline: string;
  highlight: string;
  afterHighlight?: string;
  headlineSegments?: Array<{
    text: string;
    highlight?: boolean;
  }>;
  body: string;
  align?: 'left' | 'right';
  accentColor: string;
  maxWidthClass?: string;
  titleFont?: string;
  bodyFont?: string;
  headlineFont?: string;
}) {
  return (
    <div className={align === 'right' ? `ml-auto ${maxWidthClass}` : maxWidthClass}>
      <h3 className={`mb-5 text-lg font-semibold text-[#344054] ${titleFont}`}>{label}</h3>
      <h2 className={`mb-5 text-[32px] font-normal leading-[1.08] text-[#344054] ${headlineFont || titleFont}`}>
        {headlineSegments
          ? headlineSegments.map((segment, index) =>
              segment.highlight ? (
                <span key={`${segment.text}-${index}`} style={{ color: accentColor, backgroundColor: `${accentColor}1A` }}>
                  {segment.text}
                </span>
              ) : (
                <span key={`${segment.text}-${index}`}>{segment.text}</span>
              ),
            )
          : (
              <>
                {headline ? `${headline} ` : ''}
                <span style={{ color: accentColor, backgroundColor: `${accentColor}1A` }}>{highlight}</span>
                {afterHighlight ? ` ${afterHighlight}` : ''}
              </>
            )}
      </h2>
      <p className={`text-sm font-medium leading-relaxed text-[#344054] ${bodyFont}`}>{body}</p>
    </div>
  );
}

function ProblemIdentification({
  title,
  body,
  points,
  titleFont = 'font-family-inter',
  bodyFont = 'font-family-karla',
}: {
  title: string;
  body: string;
  points: string[];
  titleFont?: string;
  bodyFont?: string;
}) {
  return (
    <div className="mx-auto mb-8 grid max-w-[1120px] gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.4fr)]">
      <div>
        <h3 className={`mb-3 text-lg font-semibold text-primary-1 ${titleFont}`}>{title}</h3>
        <p className={`text-[14px] font-medium leading-relaxed text-primary-1 ${bodyFont}`}>{body}</p>
      </div>
      <div className="grid content-start gap-2.5 sm:grid-cols-2">
        {points.map((point) => (
          <div key={point} className="flex items-start gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-1"></span>
            <span className={`text-[14px] font-medium text-primary-1 ${bodyFont}`}>
              {point}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VisualCaseStudyPage({ study }: VisualCaseStudyPageProps) {
  const titleFont = study.titleFontClass ?? 'font-family-inter';
  const bodyFont = study.bodyFontClass ?? 'font-family-karla';
  const headlineFont = study.headlineFontClass;

  const titleClassName =
    study.titleVariant === 'wide'
      ? `max-w-[800px] break-words ${titleFont} text-3xl font-medium leading-[1.06] text-primary-1 md:text-[42px]`
      : study.titleVariant === 'large'
      ? `max-w-[800px] break-words ${titleFont} text-[38px] font-medium leading-[0.98] text-primary-1 md:text-[50px]`
      : `max-w-[740px] break-words ${titleFont} text-3xl font-medium leading-[1.06] text-primary-1 md:text-5xl`;


  return (
    <main className="min-h-screen bg-white">
      <GridBackground />
      <div className="relative z-10">
        <CaseStudyHeader wide />

        <Shell className="pt-12 pb-20 md:pt-[52px]">
          <div className="mb-20 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <div>
              <p className={`mb-3 text-sm font-bold md:text-base ${bodyFont}`} style={{ color: study.accentColor }}>
                {study.category}
              </p>
              <h1 className={titleClassName}>
                {study.title}
              </h1>
            </div>

            <div className="lg:pt-7">
              <h2 className={`mb-2 text-lg font-bold text-primary-1 ${titleFont}`}>Leveraged skills</h2>
              <p className={`text-sm font-medium leading-relaxed text-primary-1 ${bodyFont}`}>
                {study.skills.join(' \u2022 ')}
              </p>
            </div>
          </div>

          <div className="mb-14 rounded-[18px] bg-[#f9f9fa] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-4 md:gap-10">
              <InfoItem label="Overview" value={study.overview} titleFont={titleFont} bodyFont={bodyFont} />
              <InfoItem label="My role" value={study.role} titleFont={titleFont} bodyFont={bodyFont} />
              <InfoItem label="Team" value={study.team} accentColor={study.accentColor} titleFont={titleFont} bodyFont={bodyFont} />
              <InfoItem label="Timeline" value={study.timeline} titleFont={titleFont} bodyFont={bodyFont} />
            </div>
          </div>

          <div className="mb-14">
            <VisualImage asset={study.hero} priority />
          </div>

          <div className="mb-[128px] grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <HighlightBlock
                label={study.businessGoal.title}
                headline={study.businessGoal.headline}
                highlight={study.businessGoal.highlight}
                afterHighlight={study.businessGoal.afterHighlight}
                body={study.businessGoal.body}
                accentColor={study.accentColor}
                titleFont={titleFont}
                bodyFont={bodyFont}
                headlineFont={headlineFont}
              />
            </div>
            <div className="lg:mt-60">
              <HighlightBlock
                label={study.userProblem.title}
                headline={study.userProblem.headline}
                highlight={study.userProblem.highlight}
                afterHighlight={study.userProblem.afterHighlight}
                headlineSegments={study.userProblem.headlineSegments}
                body={study.userProblem.body}
                align="right"
                accentColor={study.accentColor}
                titleFont={titleFont}
                bodyFont={bodyFont}
                headlineFont={headlineFont}
              />
            </div>
          </div>

          {study.tlds && (
            <section className="mb-20 rounded-[20px] bg-[#f9f9fa] p-6 md:p-10">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className={`text-2xl font-semibold text-[#344054] ${titleFont}`}>{study.slug === 'adaapt-ai-workforce-analytics' ? 'TL;DS' : 'TLDS;'}</h2>
                <span className={`w-fit rounded-lg bg-[#212833] px-5 py-2.5 text-sm font-medium text-white ${bodyFont}`}>
                  {study.tlds.ctaLabel ?? 'Explore Case study'}
                </span>
              </div>
              
              <div className="rounded-[18px] bg-white p-6 md:p-8">
                {(study.tlds.label || study.tlds.title) && (
                  <div className="mb-10">
                    {study.tlds.label && (
                      <p className={`mb-4 text-sm font-bold text-[#344054] ${titleFont}`}>
                        {study.tlds.label}
                      </p>
                    )}
                    {study.tlds.title && (
                      <p className={`text-xl font-normal leading-relaxed text-[#344054] ${headlineFont || titleFont}`}>
                        {study.tlds.title}
                      </p>
                    )}
                  </div>
                )}

                {study.tlds.asset ? (
                  <VisualImage asset={study.tlds.asset} />
                ) : (
                  <div className="flex min-h-28 items-center justify-center p-5 md:p-10">
                    <span className={`rounded-full bg-[#212833] px-5 py-3 text-sm font-semibold text-white ${bodyFont}`}>
                      Case Study in Progress
                    </span>
                  </div>
                )}
              </div>
            </section>
          )}

          {study.metrics && study.metrics.length > 0 && (
            <section className="mb-20">
              <div className={study.metricsVariant === 'panel' ? 'mx-auto max-w-[940px] rounded-[12px] bg-[#f9f9fa] p-7 md:p-8' : ''}>
                {study.metricsVariant === 'panel' && (
                  <div className="mb-5 flex justify-center">
                    <span className={`rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-primary-1 ${bodyFont}`}>
                      + Impact
                    </span>
                  </div>
                )}
                <div className="grid gap-4 md:grid-cols-3">
                  {study.metrics.map((metric) => (
                    <article key={metric.title} className="rounded-xl bg-[#212833] p-6 text-white">
                      <p className={`mb-4 text-3xl font-semibold ${titleFont}`}>{metric.value}</p>
                      <h3 className={`mb-2 text-base font-bold ${titleFont}`}>{metric.title}</h3>
                      <p className={`text-sm leading-relaxed text-white/80 ${bodyFont}`}>{metric.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          <div className="space-y-20">
            {study.sections.map((section, sectionIndex) => (
              <section key={`${sectionIndex}-${section.title ?? section.eyebrow ?? section.assets?.[0]?.src}`}>
                {section.variant === 'pill' && section.eyebrow ? (
                  <div className="mb-9 flex justify-center overflow-visible px-4">
                    <span className={`rounded-lg bg-box-1 px-5 py-2 text-sm font-semibold text-white ${bodyFont}`}>
                      {section.eyebrow} ↓
                    </span>
                  </div>
                ) : (
                  (section.eyebrow || section.title || section.body || section.headline) && (
                    <div className="mx-auto mb-8 max-w-3xl">
                      {section.eyebrow && (
                        <p className={`mb-2 text-sm font-bold ${bodyFont}`} style={{ color: study.accentColor }}>
                          {section.eyebrow}
                        </p>
                      )}
                      {section.title && (
                        <h2 className={`mb-4 text-3xl font-semibold leading-tight text-primary-1 md:text-4xl ${titleFont}`}>
                          {section.title}
                        </h2>
                      )}
                      {section.headline && (
                        <h2 className={`mb-4 text-[32px] font-normal leading-[1.08] text-primary-1 md:text-4xl ${study.headlineFontClass || titleFont}`}>
                          {section.headline}
                        </h2>
                      )}
                      {section.body && (
                        <div className="space-y-4">
                          {section.body.map((paragraph) => (
                            <p
                              key={`${sectionIndex}-${paragraph}`}
                              className={`text-sm font-medium leading-relaxed text-primary-1 ${bodyFont}`}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}

                {section.problemIdentification && <ProblemIdentification {...section.problemIdentification} titleFont={titleFont} bodyFont={bodyFont} />}

                {section.assets && section.assets.length > 0 && (
                  <div className="space-y-7">
                    {section.assets.map((asset) => (
                      <div key={asset.src} className="mx-auto" style={{ maxWidth: asset.maxWidth ?? asset.width }}>
                        {asset.caption && (
                          <p className={`mb-3 text-sm font-bold ${bodyFont}`} style={{ color: study.accentColor }}>
                            {asset.caption}
                          </p>
                        )}
                        <VisualImage asset={asset} />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {study.learnings.length > 0 && (
            <section className="my-20">
              {study.learningsVariant === 'panel' ? (
                <div className="mx-auto max-w-[763px] rounded-xl bg-bg-gray p-8">
                  <div className="mb-7 flex justify-center">
                    <span className={`rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary-1 ${bodyFont}`}>
                      + Learnings & Final Thoughts
                    </span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {study.learnings.map((learning, learningIndex) => (
                      <article
                        key={`${learning.title}-${learningIndex}`}
                        className={`rounded-xl p-6 ${
                          learning.dark ? 'bg-[#212833] text-white' : 'bg-white text-primary-1'
                        }`}
                      >
                        <h3 className={`mb-3 text-base font-bold ${titleFont}`}>{learning.title}</h3>
                        <p className={`text-[13px] leading-relaxed ${learning.dark ? 'text-white/80' : 'text-primary-1'} ${bodyFont}`}>
                          {learning.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="mx-auto mb-8 max-w-3xl text-center">
                    <h2 className={`text-3xl font-semibold text-primary-1 md:text-4xl ${titleFont}`}>
                      Learnings & Final Thoughts
                    </h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                {study.learnings.map((learning, learningIndex) => (
                  <article
                    key={`${learning.title}-${learningIndex}`}
                    className={`rounded-xl p-6 ${
                      learning.dark ? 'bg-[#212833] text-white' : 'border border-border-2 bg-white text-primary-1'
                    }`}
                  >
                    <h3 className={`mb-3 text-lg font-bold ${titleFont}`}>{learning.title}</h3>
                    <p className={`text-sm leading-relaxed ${learning.dark ? 'text-white/80' : 'text-primary-1'} ${bodyFont}`}>
                      {learning.body}
                    </p>
                  </article>
                ))}
                  </div>
                </>
              )}
            </section>
          )}

          {study.endSpacer ? <div style={{ height: study.endSpacer }} /> : null}

          {study.showMoreCaseStudies !== false && <MoreCaseStudies currentSlug={study.slug} />}
        </Shell>

        {study.showFooter !== false && <Footer />}
      </div>
    </main>
  );
}
