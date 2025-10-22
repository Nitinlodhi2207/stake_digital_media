'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  accentColor: string;
  title: string;
  subtitle: string;
}

export default function FeatureGrid({ features, accentColor, title, subtitle }: FeatureGridProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-8 md:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #0BB4E4 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-12 lg:mb-16"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary-dark mb-2 md:mb-4">
            {title}{' '}
            <span className={`bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>
              {subtitle}
            </span>
          </h2>
        </motion.div>

        {/* Features Grid - 2 columns on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-3 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl border-2 border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${accentColor} rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-sm md:text-xl lg:text-2xl text-secondary-dark mb-1 md:mb-3 group-hover:text-primary-sky transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm lg:text-base text-gray-600 leading-snug md:leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
