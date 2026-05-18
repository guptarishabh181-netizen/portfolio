import { CaseStudy } from '@/types/index';

interface InfoGridProps {
  caseStudy: CaseStudy;
}

export default function InfoGrid({ caseStudy }: InfoGridProps) {
  return (
    <div className="flex justify-center mb-10 md:mb-12">
      <div className="w-full max-w-7xl bg-bg-gray rounded-xl md:rounded-2xl p-5 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Overview */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-primary-1 mb-3 font-family-inter">
              Overview
            </h3>
            <p className="text-sm text-primary-1 font-medium leading-relaxed font-family-karla">
              {caseStudy.overview}
            </p>
          </div>

          {/* My role */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-primary-1 mb-3 font-family-inter">
              My role
            </h3>
            <p className="text-sm text-primary-1 font-medium leading-relaxed font-family-karla">
              {caseStudy.role}
            </p>
          </div>

          {/* Team - Stacked/Overlapping */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-primary-1 mb-3 font-family-inter">
              Team
            </h3>
            <div className="relative h-10 w-44">
              {caseStudy.team.map((member, index) => (
                <div
                  key={index}
                  className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold font-family-karla border-2 border-white"
                  style={{
                    backgroundColor: member.color,
                    left: `${index * 1.5}rem`,
                    zIndex: caseStudy.team.length - index
                  }}
                >
                  {member.name}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline - At the end */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-primary-1 mb-3 font-family-inter">
              Timeline
            </h3>
            <p className="text-sm text-primary-1 font-medium font-family-karla">
              {caseStudy.timeline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
