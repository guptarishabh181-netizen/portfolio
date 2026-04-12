import { CaseStudy } from '@/types/index';

interface InfoGridProps {
  caseStudy: CaseStudy;
}

export default function InfoGrid({ caseStudy }: InfoGridProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="w-full max-w-7xl bg-bg-gray rounded-2xl p-8">
        <div className="flex items-start justify-between">
          {/* Overview */}
          <div className="flex-1 max-w-[280px]">
            <h3 className="text-lg font-bold text-primary-1 mb-3 font-family-inter">
              Overview
            </h3>
            <p className="text-sm text-primary-1 font-medium leading-relaxed font-family-karla">
              {caseStudy.overview}
            </p>
          </div>

          {/* My role */}
          <div className="flex-1 max-w-[180px]">
            <h3 className="text-lg font-bold text-primary-1 mb-3 font-family-inter">
              My role
            </h3>
            <p className="text-sm text-primary-1 font-medium leading-relaxed font-family-karla">
              {caseStudy.role}
            </p>
          </div>

          {/* Team - Stacked/Overlapping */}
          <div className="flex-1 max-w-[160px]">
            <h3 className="text-lg font-bold text-primary-1 mb-3 font-family-inter">
              Team
            </h3>
            <div className="relative h-10 w-32">
              {caseStudy.team.map((member, index) => (
                <div
                  key={index}
                  className="absolute w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold font-family-karla border-2 border-white"
                  style={{
                    backgroundColor: member.color,
                    left: `${index * 1.5}rem`,
                    zIndex: 40 - index * 10
                  }}
                >
                  {member.name}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline - At the end */}
          <div className="flex-1 max-w-[90px]">
            <h3 className="text-lg font-bold text-primary-1 mb-3 font-family-inter">
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
