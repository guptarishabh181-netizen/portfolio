import { ImpactMetric } from '@/types/index';

interface ImpactMetricsProps {
  metrics: ImpactMetric[];
}

export default function ImpactMetrics({ metrics }: ImpactMetricsProps) {
  return (
    <div className="mb-12 md:mb-16 bg-bg-gray rounded-2xl p-6 md:p-8 lg:p-12">
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="inline-flex items-center gap-2 bg-white px-4 md:px-5 py-2 rounded-full">
          <span className="text-primary-1 text-base md:text-lg font-semibold font-family-inter">✦ Impact</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-box-1 rounded-xl md:rounded-2xl p-6 md:p-8"
          >
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-family-inter">
              {metric.percentage}
            </h4>
            <h5 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 font-family-inter">
              {metric.title}
            </h5>
            <p className="text-sm text-bg-gray-2 font-regular leading-relaxed font-family-karla">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
