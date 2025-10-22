'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCTAProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  gradientFrom: string;
  gradientTo: string;
  stats?: Array<{ value: string; label: string }>;
}

export default function ServiceCTA({
  title,
  subtitle,
  ctaText,
  ctaLink,
  gradientFrom,
  gradientTo,
  stats,
}: ServiceCTAProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative pt-24 pb-10 md:pt-28 md:pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary-dark/50 via-transparent to-secondary-dark/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Heading */}
          <h2 className="font-display font-bold text-xl sm:text-3xl md:text-4xl lg:text-6xl text-white mb-3 md:mb-6 leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-base md:text-lg lg:text-xl text-white/95 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-8 md:mb-12">
            <Link
              href={ctaLink}
              className="group relative inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-white text-primary-deep-blue font-display font-bold text-base md:text-xl rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                {ctaText}
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 lg:gap-12 pt-8 md:pt-12 border-t border-white/20 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs sm:text-sm md:text-base text-white/90 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
