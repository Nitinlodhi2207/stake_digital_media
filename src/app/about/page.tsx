'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Animated section component
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stats counter component
function StatsCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// Floating orb background component
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-sky/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary-deep-blue/20 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-bright-green/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-primary-deep-green/20 rounded-full blur-3xl animate-float-slower" />
    </div>
  );
}

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const values = [
    {
      icon: '👁️',
      title: 'Visibility with Purpose',
      description: 'Every screen and structure tells a story worth seeing.',
      gradient: 'from-primary-sky to-primary-deep-blue'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We build relationships rooted in transparency and results.',
      gradient: 'from-primary-deep-blue to-primary-bright-green'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'From Wi-Fi integration to data analytics—we evolve with the market.',
      gradient: 'from-primary-bright-green to-primary-deep-green'
    },
    {
      icon: '🌍',
      title: 'Community Connection',
      description: 'We uplift local economies by driving advertising spend into shared spaces.',
      gradient: 'from-primary-deep-green to-primary-sky'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'Every campaign is delivered with precision and passion.',
      gradient: 'from-primary-sky to-primary-bright-green'
    },
    {
      icon: '🚀',
      title: 'Growth Partnership',
      description: 'Your success is our success—we grow together through measurable results.',
      gradient: 'from-primary-bright-green to-primary-deep-blue'
    }
  ];

  const stats = [
    { value: 1500000, suffix: '+', label: 'Monthly Impressions' },
    { value: 50, suffix: '+', label: 'Premium Locations' },
    { value: 100, suffix: '+', label: 'Active Campaigns' },
    { value: 9, suffix: '', label: 'Provinces Covered' }
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-dark via-primary-deep-blue to-secondary-dark pt-24 md:pt-32 pb-16 md:pb-20">
        <FloatingOrbs />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-block px-4 py-2 md:px-6 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs md:text-sm font-semibold tracking-wider">
              ABOUT STAKE DIGITAL MEDIA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-2"
          >
            Redefining
            <span className="block mt-1 md:mt-2 bg-gradient-to-r from-primary-sky via-primary-bright-green to-primary-sky bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto]">
              Outdoor Media
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Where technology meets creativity, and national visibility blends with local authenticity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 md:mt-10 mb-16 md:mb-0"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary-sky to-primary-deep-blue text-white text-sm md:text-base font-semibold rounded-full hover:shadow-[0_0_40px_rgba(11,180,228,0.6)] transition-all duration-300 hover:scale-105"
            >
              Get Started
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - Hidden on mobile, shown on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="hidden md:block absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <AnimatedSection className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 bg-primary-sky/10 rounded-full">
                <span className="text-primary-deep-blue font-semibold text-xs md:text-sm tracking-wider">WHO WE ARE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-dark mb-4 md:mb-6 leading-tight">
                Built for Brands That
                <span className="block bg-gradient-to-r from-primary-sky to-primary-deep-blue bg-clip-text text-transparent">
                  Stand Out
                </span>
              </h2>
              <div className="space-y-3 md:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  Stake Digital Media is a South African Out-of-Home (OOH) advertising company built for brands that want to stand out where people live, move, and connect.
                </p>
                <p>
                  We specialise in <strong className="text-primary-deep-blue">digital screens</strong> and <strong className="text-primary-deep-blue">billboard solutions</strong> that merge creativity, technology, and strategy—turning public spaces into platforms for storytelling and influence.
                </p>
                <p>
                  From vibrant township hubs to national highways, from local sports bars to national retail chains—we create advertising ecosystems that keep brands top-of-mind and deeply rooted in real spaces.
                </p>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0 px-4 sm:px-8 md:px-12 lg:px-0">
              <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-sky/20 to-primary-deep-blue/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4 sm:p-6 md:p-8">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-6">🎯</div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-dark mb-2 md:mb-4">Our Mission</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
                      To redefine outdoor media by bridging technology, creativity, and community—giving brands the power to engage South Africans where they truly are.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
                <div className="text-center text-white">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">9</div>
                  <div className="text-[10px] sm:text-xs">Provinces</div>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center transform hover:-rotate-6 transition-transform duration-300">
                <div className="text-center text-white">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">24/7</div>
                  <div className="text-[10px] sm:text-xs">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="relative py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-secondary-dark via-primary-deep-blue/10 to-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-sky to-primary-deep-blue bg-clip-text text-transparent mb-1 md:mb-2">
                  <StatsCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-semibold leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* What We Do Section */}
      <AnimatedSection className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 bg-primary-bright-green/10 rounded-full">
              <span className="text-primary-deep-green font-semibold text-xs md:text-sm tracking-wider">WHAT WE DO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-dark mb-3 md:mb-6 px-4">
              Advertising Ecosystems That
              <span className="block bg-gradient-to-r from-primary-bright-green to-primary-deep-green bg-clip-text text-transparent">
                Keep Brands Top-of-Mind
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Digital Screen Network */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary-sky/5 to-primary-deep-blue/5 border-2 border-primary-sky/20 hover:border-primary-sky hover:shadow-[0_0_40px_rgba(11,180,228,0.3)] transition-all duration-500"
            >
              <div className="hidden md:block absolute top-6 md:top-8 right-6 md:right-8 text-4xl md:text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                📺
              </div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-2xl sm:text-2xl md:text-3xl">
                  📺
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-dark mb-3 md:mb-4">Digital Screen Network</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                  Our digital division includes Supabets in-venue screens and mall displays—strategically placed in high-dwell, high-traffic environments where audiences spend meaningful time engaging.
                </p>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-sky flex-shrink-0 mt-0.5 md:mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700">Data-driven exposure with measurable results</span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-sky flex-shrink-0 mt-0.5 md:mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700">High-dwell, high-traffic locations</span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-sky flex-shrink-0 mt-0.5 md:mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700">Audience insights and analytics</span>
                  </div>
                </div>
                <Link
                  href="/services/digital-screens"
                  className="inline-flex items-center gap-2 mt-4 md:mt-6 text-sm md:text-base text-primary-deep-blue font-semibold hover:gap-4 transition-all duration-300"
                >
                  Explore Digital Screens
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Billboard Division */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary-bright-green/5 to-primary-deep-green/5 border-2 border-primary-bright-green/20 hover:border-primary-bright-green hover:shadow-[0_0_40px_rgba(109,206,46,0.3)] transition-all duration-500"
            >
              <div className="hidden md:block absolute top-6 md:top-8 right-6 md:right-8 text-4xl md:text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                🗺️
              </div>
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-2xl sm:text-2xl md:text-3xl">
                  🗺️
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-dark mb-3 md:mb-4">Billboard Division</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                  Our billboard network spans digital and static formats, including iconic placements across Soweto and surrounding metros—dominating major commuter routes with unmatched reach.
                </p>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-bright-green flex-shrink-0 mt-0.5 md:mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700">Premium cultural touchpoints</span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-bright-green flex-shrink-0 mt-0.5 md:mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700">Strategic high-traffic locations</span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-bright-green flex-shrink-0 mt-0.5 md:mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700">Monthly traffic reporting</span>
                  </div>
                </div>
                <Link
                  href="/services/billboards"
                  className="inline-flex items-center gap-2 mt-4 md:mt-6 text-sm md:text-base text-primary-deep-green font-semibold hover:gap-4 transition-all duration-300"
                >
                  Explore Billboards
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Values Section */}
      <AnimatedSection className="relative py-10 sm:py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10 lg:mb-12">
            <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 bg-primary-deep-blue/10 backdrop-blur-md border border-primary-deep-blue/20 rounded-full">
              <span className="text-primary-deep-blue font-semibold text-xs md:text-sm tracking-wider">OUR VALUES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-dark mb-4 md:mb-6 px-4">
              Principles That
              <span className="block bg-gradient-to-r from-primary-sky via-primary-bright-green to-primary-sky bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto]">
                Drive Everything We Do
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-primary-sky hover:shadow-xl transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Vision Section */}
      <AnimatedSection className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 md:mb-8 text-4xl sm:text-5xl md:text-6xl">🚀</div>
          <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 bg-primary-deep-blue/10 rounded-full">
            <span className="text-primary-deep-blue font-semibold text-xs md:text-sm tracking-wider">OUR VISION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-dark mb-4 md:mb-8 leading-tight px-4">
            To Become Africa&apos;s Most
            <span className="block bg-gradient-to-r from-primary-sky to-primary-deep-blue bg-clip-text text-transparent">
              Trusted & Measurable OOH Network
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
            Known for our ability to blend brand storytelling with audience data, and national visibility with local authenticity. We&apos;re building the future of outdoor advertising in Africa.
          </p>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-dark mb-4 md:mb-6 px-4">
              Why Brands Choose
              <span className="block bg-gradient-to-r from-primary-sky to-primary-bright-green bg-clip-text text-transparent">
                Stake Digital Media
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: '🎯',
                title: 'Strategic Placements',
                description: 'High-traffic, high-dwell locations in community-centred environments'
              },
              {
                icon: '🗺️',
                title: 'Nationwide Network',
                description: 'Scalable campaign options across all 9 provinces of South Africa'
              },
              {
                icon: '📊',
                title: 'Measurable Results',
                description: 'Detailed performance reports and monthly traffic analytics'
              },
              {
                icon: '🎨',
                title: 'Creative Support',
                description: 'Seamless creative formatting and technical assistance'
              },
              {
                icon: '🌐',
                title: 'Wi-Fi Integration',
                description: 'Optional connectivity for enhanced audience engagement'
              },
              {
                icon: '🤝',
                title: 'Partnership Approach',
                description: 'Dedicated account management and collaborative campaign planning'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-white border-2 border-gray-200 hover:border-primary-sky hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl sm:text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-secondary-dark mb-1 md:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-sky via-primary-deep-blue to-primary-bright-green overflow-hidden">
        <FloatingOrbs />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-2">
              Ready to Make Your Brand
              <span className="block">Part of South Africa&apos;s Daily Landscape?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-10 leading-relaxed px-4">
              Whether you&apos;re launching a new product or expanding your footprint, we provide the platform, data, and visibility to make your brand unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-primary-deep-blue text-sm md:text-base font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Book a Campaign
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services/digital-screens"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white text-sm md:text-base font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                View Our Network
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
}
