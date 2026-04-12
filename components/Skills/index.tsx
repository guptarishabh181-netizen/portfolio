'use client';
import Image from 'next/image';

const skillsData = [
  'Data-informed Design',
  'Design Thinking',
  'UI/UX Design',
  'Design Systems',
  'Generative UI',
  'AI UX Workflows',
  'Prompt-driven Design',
];

export default function Skills() {
  return (
    <section className="w-full bg-white pt-8 md:pt-0 flex justify-center">
      <div className="skills-fade overflow-hidden w-full max-w-7xl relative">
        {/* Animated Skills Loop */}
        <div className="skills-loop flex gap-6 md:gap-8 whitespace-nowrap">
          {[...skillsData, ...skillsData, ...skillsData, ...skillsData].map((skill, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-6">
              <Image
                src="/icons/star.svg"
                alt="Skill Dot"
                width={12}
                height={12}
                className="w-3 h-3 md:w-4 md:h-4"
              />
              <span className="text-primary-1 font-regular text-xs md:text-sm flex-shrink-0 font-family-karla">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}