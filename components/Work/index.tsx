'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Project } from '@/types/index';
import { projects, years, allToolLogos } from '@/data/index';


export default function Work() {
  const [activeYear, setActiveYear] = useState<number>(2026);
  const [currentTools, setCurrentTools] = useState<string[]>(['sketch', 'protopie', 'adobe', 'figma', 'psd', 'chatgpt']);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      let currentProject: Project | null = null;

      for (const project of projects) {
        const element = projectRefs.current[project.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if project is in the top half of the viewport
          if (rect.top >= containerRect.top && rect.top <= containerRect.top + containerRect.height / 2) {
            currentProject = project;
            break;
          }
        }
      }

      // Update active year and tools based on current project
      if (currentProject) {
        setActiveYear(currentProject.year);
        setCurrentTools(currentProject.tools);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToYear = (year: number) => {
    // If selecting 2022-21, find the oldest project mapping to that group, else exact year
    const firstProjectOfYear = projects.find(p => year === 2022 ? p.year <= 2022 : p.year === year);
    if (firstProjectOfYear && projectRefs.current[firstProjectOfYear.id]) {
      projectRefs.current[firstProjectOfYear.id]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const displayTools = currentTools.slice(0, 8);
  const toolsToDisplay = displayTools.map(toolKey => allToolLogos[toolKey] || { name: toolKey, icon: '' });

  return (
    <section className="w-full bg-white py-8 md:py-24 flex justify-center" id="work">
      <div className="w-full max-w-96 md:max-w-7xl h-[687px] md:h-[847px] bg-white md:bg-bg-gray-2 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 h-full">
          
          {/* Left Sidebar - Year Navigation - Hidden on mobile */}
          <div className="hidden md:block md:col-span-2 bg-bg-gray pl-4 pt-4 overflow-y-auto">
            
            {/* Stacked/Overlapping Logos */}
            <div className="mb-12 relative h-24 w-48">
              {toolsToDisplay.map((tool, index) => {
                const positions = [
                  { top: '0', left: '0', zIndex: 60 },
                  { top: '0', left: '2rem', zIndex: 50 },
                  { top: '0', left: '4rem', zIndex: 40 },
                  { top: '0', left: '6rem', zIndex: 30 },
                  { top: '2rem', left: '0', zIndex: 70 },
                  { top: '2rem', left: '2rem', zIndex: 60 },
                  { top: '2rem', left: '4rem', zIndex: 50 },
                  { top: '2rem', left: '6rem', zIndex: 40 },
                ];
                const pos = positions[index] || positions[0];

                return (
                  <div
                    key={`${tool.name}-${index}`}
                    className="absolute w-12 h-12 rounded-full bg-white border-1 border-white flex items-center justify-center transition-all duration-500 ease-in-out"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      zIndex: pos.zIndex
                    }}
                  >
                    {tool.icon && (
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        width={40}
                        height={40}
                        className="fill object-cover rounded-full w-10 h-10"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Year Filters */}
            <div className="space-y-8">
              {years.map((yearData) => (
                <button
                  key={yearData.year}
                  onClick={() => scrollToYear(yearData.year)}
                  className={`block text-left transition-all duration-300 ${
                    activeYear === yearData.year || (activeYear <= 2022 && yearData.year === 2022)
                      ? 'opacity-100'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <h3 className="text-3xl font-bold text-primary-1 font-family-inter mb-1">
                    {yearData.displayYear}
                  </h3>
                  <div className="text-sm text-primary-2 font-family-karla">
                    <span className="block">{yearData.line1}</span>
                    <span className={`block ${yearData.year >= 2023 ? 'font-medium text-primary-1' : ''}`}>
                      {yearData.line2}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Scrollable Projects */}
          <div
            ref={scrollContainerRef}
            className="col-span-1 md:col-span-10 bg-white md:bg-bg-gray overflow-y-auto p-4 md:p-10 work-scroll-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="space-y-12 md:space-y-16">
              {projects.map((project) => {
                const projectYearData = years.find(y => y.year === (project.year <= 2022 ? 2022 : project.year));

                return (
                  <article
                    key={project.id}
                    ref={(el) => { projectRefs.current[project.id] = el; }}
                    className="work-card"
                    data-year={project.year}
                  >
                    {/* Mobile: Year + Tools at top */}
                    <div className="md:hidden flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-4xl font-bold text-primary-1 font-family-inter mb-1">
                          {projectYearData?.displayYear || project.year}
                        </h3>
                        {projectYearData && (
                          <div className="text-sm text-primary-2 font-family-karla">
                            <span className="block">{projectYearData.line1}</span>
                            <span className={`block ${projectYearData.year >= 2023 ? 'font-medium text-primary-1' : ''}`}>
                              {projectYearData.line2}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="relative h-20 w-32">
                        {project.tools.slice(0, 8).map((toolKey, index) => {
                          const tool = allToolLogos[toolKey] || { name: toolKey, icon: '' };
                          const positions = [
                            { top: '0', left: '0', zIndex: 60 },
                            { top: '0', left: '1.75rem', zIndex: 50 },
                            { top: '0', left: '3.25rem', zIndex: 40 },
                            { top: '0', left: '5rem', zIndex: 30 },
                            { top: '1.75rem', left: '0', zIndex: 70 },
                            { top: '1.75rem', left: '1.75rem', zIndex: 60 },
                            { top: '1.75rem', left: '3.25rem', zIndex: 50 },
                            { top: '1.75rem', left: '5rem', zIndex: 40 },
                          ];
                          const pos = positions[index] || positions[0];

                          return (
                            <div
                              key={`${tool.name}-${index}`}
                              className="absolute w-10 h-10 rounded-full bg-white border-1 border-white flex items-center justify-center"
                              style={{
                                top: pos.top,
                                left: pos.left,
                                zIndex: pos.zIndex
                              }}
                            >
                              {tool.icon && (
                                <Image
                                  src={tool.icon}
                                  alt={tool.name}
                                  width={32}
                                  height={32}
                                  className="w-8 h-8 object-cover rounded-full"
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Header - Title, Description & Button */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 pr-4">
                          <h2 className="text-3xl md:text-4xl font-semibold text-primary-1 mb-3 font-family-inter">
                            {project.title}
                          </h2>
                          <p className="text-sm text-primary-1 font-family-karla leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        {project.caseStudySlug && (
                          <Link
                            href={`/case-study/${project.caseStudySlug}`}
                            className="hidden md:block px-5 py-2.5 bg-box-1 text-white rounded-lg text-sm font-medium hover:bg-primary-1-hover transition-all duration-300 font-family-karla whitespace-nowrap"
                          >
                            View Case study
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className='border-1 glow-effect border-border-2 rounded-md md:rounded-2xl p-1'>
                    <div className="bg-white mb-4 ">
                      {/* Project Image Container */}
                      <div className="relative w-full aspect-[16/10] rounded-md md:rounded-xl overflow-hidden">
                        
                        {/* Actual Image */}
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        )}
                        
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex items-center justify-start md:justify-end px-4 gap-2 text-sm text-primary-1 font-medium font-family-karla mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={tag}>
                          {tag}
                          {index < project.tags.length - 1 && (
                            <span className="mx-2 text-primary-1">♦</span>
                          )}
                        </span>
                      ))}
                    </div>
                    </div>

                    {/* Button - Mobile only */}
                    {project.caseStudySlug && (
                      <div className="md:hidden mt-4">
                        <Link
                          href={`/case-study/${project.caseStudySlug}`}
                          className="block px-5 py-2.5 bg-box-1 text-white rounded-lg text-sm font-medium hover:bg-primary-1-hover transition-all duration-300 font-family-karla text-center"
                        >
                          View Case study
                        </Link>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}