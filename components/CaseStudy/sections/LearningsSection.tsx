import { Learning } from '@/types/index';

interface LearningsSectionProps {
  learnings: Learning[];
}

export default function LearningsSection({ learnings }: LearningsSectionProps) {
  return (
    <>
      <div className="max-w-3xl mx-auto mb-12 md:mb-16 bg-bg-gray rounded-2xl p-6 md:p-8 lg:p-12">
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 bg-white px-4 md:px-5 py-2 rounded-full">
            <span className="text-primary-1 text-base md:text-lg font-semibold font-family-inter">✦ learnings & Final Thoughts</span>
          </div>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {learnings.map((learning, index) => (
            <div
              key={index}
              className={`rounded-xl md:rounded-2xl p-6 md:p-8 ${
                learning.isDark ? 'bg-box-1' : 'bg-white'
              }`}
            >
              <h3
                className={`text-lg md:text-xl font-semibold mb-2 md:mb-3 font-family-inter ${
                  learning.isDark ? 'text-white' : 'text-primary-1'
                }`}
              >
                {learning.title}
              </h3>
              <p
                className={`text-sm font-regular leading-relaxed font-family-karla ${
                  learning.isDark ? 'text-bg-gray-2' : 'text-primary-1'
                }`}
              >
                {learning.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Thank You Message - Outside the gray container */}
      <div className="flex justify-center mb-12 md:mb-16">
        <div className="inline-flex items-center px-6 md:px-8 py-2.5 md:py-3 bg-white rounded-full border border-border-2">
          <span className="text-sm md:text-base font-medium text-primary-1 font-family-karla">
            Thank you for watching!
          </span>
        </div>
      </div>
    </>
  );
}
