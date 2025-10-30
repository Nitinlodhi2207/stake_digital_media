'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import {
  Monitor,
  Users,
  Clock,
  Zap,
  Eye,
  Sparkles,
  BarChart3,
  MapPin,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  Smartphone,
} from 'lucide-react';
import FeatureGrid from '@/components/FeatureGrid';
import FAQSection from '@/components/FAQSection';
import ServiceCTA from '@/components/ServiceCTA';

export default function DigitalScreensPage() {
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [locationsRef, locationsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [specsRef, specsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: Monitor,
      title: 'Ultra HD Quality',
      description:
        'Crystal-clear HD displays deliver your content with stunning clarity and vibrant colors that capture attention instantly.',
    },
    {
      icon: Clock,
      title: '30+ Minute Dwell Time',
      description:
        'Venues like Supabets locations provide extended customer engagement with average dwell times exceeding 30 minutes.',
    },
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description:
        'Update your campaigns instantly with our cloud-based content management system. No delays, no hassle.',
    },
    {
      icon: Eye,
      title: 'High Visibility',
      description:
        'Strategically positioned at eye level in high-traffic areas where your audience naturally looks.',
    },
    {
      icon: Users,
      title: 'Diverse Audiences',
      description:
        'Reach LSM 4-8 demographics across urban centers, township hubs, and entertainment venues.',
    },
    {
      icon: BarChart3,
      title: 'Measurable Results',
      description:
        'Track impressions, engagement metrics, and campaign performance with detailed analytics reports.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your brand goals, target audience, and campaign objectives.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our team creates a tailored digital screen strategy with optimal placements.',
    },
    {
      number: '03',
      title: 'Creative Design',
      description: 'Design stunning content or we can help you create engaging visuals.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Your campaign goes live across our premium digital screen network.',
    },
    {
      number: '05',
      title: 'Optimize',
      description: 'Monitor performance and make real-time adjustments for maximum impact.',
    },
  ];

  const locations = [
    {
      title: 'Supabets Venues',
      description: 'Licensed sports betting and entertainment environments with engaged audiences.',
      icon: Target,
      stats: '30+ min dwell time',
    },
    {
      title: 'Shopping Malls',
      description: 'High-traffic retail environments across major South African metros.',
      icon: MapPin,
      stats: 'Premium visibility',
    },
    {
      title: 'Commuter Hubs',
      description: 'Taxi ranks and transport centers in Durban, Joburg, Pretoria, and Cape Town.',
      icon: Globe,
      stats: 'Mass daily reach',
    },
    {
      title: 'Township Centers',
      description: 'Community gathering points where commerce and culture converge.',
      icon: Users,
      stats: 'Authentic connections',
    },
  ];

  const faqs = [
    {
      question: 'What ad formats do you support?',
      answer:
        'We support MP4 video and JPEG/PNG image formats with a screen size of 1920mm x 1080mm. Creative duration should be between 10-35 seconds, with a maximum file size of 20MB for optimal playback quality.',
    },
    {
      question: 'How long does it take to launch a campaign?',
      answer:
        'Once your creative is approved, campaigns can be live within 24-48 hours. Rush launches are available for urgent campaigns.',
    },
    {
      question: 'Can I update my ads in real-time?',
      answer:
        'Yes! Our cloud-based content management system allows you to update your campaigns instantly from anywhere, anytime.',
    },
    {
      question: 'What are the minimum campaign requirements?',
      answer:
        'We offer flexible campaigns starting from 2 weeks. Packages include multiple daily rotations across selected venues for maximum exposure.',
    },
    {
      question: 'Do you provide creative services?',
      answer:
        'Yes! Our in-house creative team can design and produce engaging content optimized for digital screens at competitive rates.',
    },
    {
      question: 'How do I track campaign performance?',
      answer:
        'You receive detailed analytics including impressions, play counts, venue performance, and audience reach via our online dashboard.',
    },
    {
      question: 'What locations are available?',
      answer:
        'Our network spans Supabets venues, malls, commuter hubs across Durban, Johannesburg, Pretoria, Cape Town, and key township centers.',
    },
    {
      question: 'Can I target specific venues or times?',
      answer:
        'Absolutely! Choose specific venues, regions, or dayparts (morning, afternoon, evening) to reach your ideal audience at the right time.',
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* CTA Section - Get Started */}
      <ServiceCTA
        title="Ready to Launch Your Digital Campaign?"
        subtitle="Join leading brands in reaching South African audiences where they live, play, and engage. Let's make your brand unmissable."
        ctaText="Book Your Campaign"
        ctaLink="/contact"
        gradientFrom="from-primary-sky"
        gradientTo="to-primary-deep-blue"
        stats={[
          { value: '24/7', label: 'Support' },
          { value: '48 Hrs', label: 'Launch Time' },
          { value: '100%', label: 'Brand Safe' },
          { value: 'Realtime', label: 'Updates' },
        ]}
      />

      {/* Features Grid */}
      <FeatureGrid
        features={features}
        accentColor="from-primary-sky to-primary-deep-blue"
        title="Why Digital Screens"
        subtitle="Work Better"
      />

      {/* Value Proposition with Images */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-dark mb-4"
            >
              Where Your Brand{' '}
              <span className="bg-gradient-to-r from-primary-sky to-primary-bright-green bg-clip-text text-transparent">
                Comes Alive
              </span>
            </motion.h2>
          </div>

          <div className="space-y-24">
            {/* Supabets Venues */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-sky/10 rounded-full border border-primary-sky/30 mb-4">
                  <Target className="w-4 h-4 text-primary-sky" />
                  <span className="text-xs font-bold text-primary-sky">SUPABETS VENUES</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-secondary-dark mb-4">
                  Engaged Audiences, Extended Exposure
                </h3>
                <p className="font-sans text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
                  Supabets locations are licensed sports betting and entertainment environments
                  that attract diverse, engaged audiences. With customers spending{' '}
                  <span className="text-primary-sky font-semibold">
                    an average of 30 minutes per visit
                  </span>
                  , your message gains multiple exposures within a single experience—building
                  familiarity, trust, and top-of-mind recall.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-bright-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      High-dwell time environments for maximum message retention
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-bright-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Multiple daily exposures to the same audience
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-bright-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Entertainment-focused, receptive mindset
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-sky/10 to-primary-deep-blue/10 rounded-3xl blur-2xl"></div>
                <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="https://res.cloudinary.com/diwa9giv2/image/upload/v1761802873/DIGITAL_SCREENS_hmuc6h.svg"
                    alt="Supabets Digital Screens"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating Stats Badge */}
                <div className="absolute -bottom-6 -left-6 px-6 py-4 bg-white backdrop-blur-xl rounded-xl border-2 border-primary-sky/30 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-primary-sky" />
                    <div>
                      <p className="text-2xl font-bold text-secondary-dark">30+ Min</p>
                      <p className="text-xs text-gray-600">Average Dwell Time</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Technical Specs */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-bright-green/10 to-primary-deep-green/10 rounded-3xl blur-2xl"></div>
                <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="https://res.cloudinary.com/diwa9giv2/image/upload/v1761802873/DIGITAL_SCREENS_hmuc6h.svg"
                    alt="Ultra HD Digital Display"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating Stats Badge */}
                <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-white backdrop-blur-xl rounded-xl border-2 border-primary-bright-green/30 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-8 h-8 text-primary-bright-green" />
                    <div>
                      <p className="text-2xl font-bold text-secondary-dark">Ultra HD</p>
                      <p className="text-xs text-gray-600">Crystal Clear</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-bright-green/10 rounded-full border border-primary-bright-green/30 mb-4">
                  <Sparkles className="w-4 h-4 text-primary-bright-green" />
                  <span className="text-xs font-bold text-primary-bright-green">
                    PREMIUM QUALITY
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-secondary-dark mb-4">
                  Stunning Visual Impact
                </h3>
                <p className="font-sans text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
                  Our Ultra HD digital displays bring your content to life with stunning precision and depth.
Every pixel radiates brilliance — colors are richer, contrasts are sharper, and motion is fluid and immersive.
Whether it’s a bustling shopping mall, a high-energy sports venue, or a sleek corporate environment, your message cuts through the noise with unmatched clarity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-sky mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      1920mm × 1080mm screen size for optimal viewing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-sky mt-1 flex-shrink-0" />
                    <span className="text-gray-700">High brightness for visibility in any light</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-sky mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Wide color gamut for vibrant, true-to-life colors</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Process */}
      <section
        ref={processRef}
        className="py-16 lg:py-24 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-dark mb-4">
              How It{' '}
              <span className="bg-gradient-to-r from-primary-sky to-primary-deep-blue bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="font-sans text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to campaign launch, we make the process seamless and efficient.
            </p>
          </motion.div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary-sky via-primary-bright-green to-primary-deep-blue"></div>

            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-full flex items-center justify-center shadow-xl">
                    <span className="font-display font-bold text-2xl text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-display font-bold text-xl text-secondary-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                {/* Number Circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-full flex items-center justify-center shadow-lg">
                    <span className="font-display font-bold text-xl text-white">
                      {step.number}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-primary-sky to-primary-bright-green"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-display font-bold text-xl text-secondary-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Network */}
      <section
        ref={locationsRef}
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={locationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-dark mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-sky to-primary-bright-green bg-clip-text text-transparent">
                Digital Network
              </span>
            </h2>
            <p className="font-sans text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic placements across South Africa&apos;s most dynamic consumer environments.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => {
              const Icon = location.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={locationsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-sky/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-secondary-dark mb-2">
                      {location.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-600 mb-4 leading-relaxed">
                      {location.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-sky/10 rounded-full">
                      <div className="w-1.5 h-1.5 bg-primary-sky rounded-full"></div>
                      <span className="text-xs font-semibold text-primary-sky">
                        {location.stats}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={locationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href="/network"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-sky to-primary-deep-blue text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Explore Full Network</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section
        ref={specsRef}
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={specsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-dark mb-4">
              Technical{' '}
              <span className="bg-gradient-to-r from-primary-sky to-primary-bright-green bg-clip-text text-transparent">
                Specifications
              </span>
            </h2>
            <p className="font-sans text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Optimized formats and requirements for the best visual experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Screen Specs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={specsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-sky/50 hover:shadow-xl transition-all duration-300"
            >
              <Monitor className="w-10 h-10 text-primary-sky mb-4" />
              <h3 className="font-display font-bold text-xl text-secondary-dark mb-4">Screen Specifications</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Screen Size:</span>
                  <span className="font-semibold text-secondary-dark">1920mm × 1080mm</span>
                </li>
                <li className="flex justify-between">
                  <span>Format:</span>
                  <span className="font-semibold text-secondary-dark">MP4/JPEG/PNG</span>
                </li>
                <li className="flex justify-between">
                  <span>Max Size:</span>
                  <span className="font-semibold text-secondary-dark">20 MB</span>
                </li>
                <li className="flex justify-between">
                  <span>Aspect Ratio:</span>
                  <span className="font-semibold text-secondary-dark">16:9</span>
                </li>
              </ul>
            </motion.div>

            {/* Duration Specs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={specsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-bright-green/50 hover:shadow-xl transition-all duration-300"
            >
              <Clock className="w-10 h-10 text-primary-bright-green mb-4" />
              <h3 className="font-display font-bold text-xl text-secondary-dark mb-4">Creative Duration</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Total Duration:</span>
                  <span className="font-semibold text-secondary-dark">10–35s</span>
                </li>
                <li className="flex justify-between">
                  <span>Minimum:</span>
                  <span className="font-semibold text-secondary-dark">10 seconds</span>
                </li>
                <li className="flex justify-between">
                  <span>Maximum:</span>
                  <span className="font-semibold text-secondary-dark">35 seconds</span>
                </li>
                <li className="flex justify-between">
                  <span>Loop:</span>
                  <span className="font-semibold text-secondary-dark">Continuous</span>
                </li>
              </ul>
            </motion.div>

            {/* File Specs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={specsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-sky/50 hover:shadow-xl transition-all duration-300"
            >
              <Smartphone className="w-10 h-10 text-primary-sky mb-4" />
              <h3 className="font-display font-bold text-xl text-secondary-dark mb-4">File Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Max File Size:</span>
                  <span className="font-semibold text-secondary-dark">20 MB</span>
                </li>
                <li className="flex justify-between">
                  <span>Video Format:</span>
                  <span className="font-semibold text-secondary-dark">MP4</span>
                </li>
                <li className="flex justify-between">
                  <span>Image Format:</span>
                  <span className="font-semibold text-secondary-dark">JPEG, PNG</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimensions:</span>
                  <span className="font-semibold text-secondary-dark">1920 × 1080</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={specsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-8 bg-gradient-to-r from-primary-sky/10 to-primary-deep-blue/10 rounded-2xl border-2 border-primary-sky/30 text-center"
          >
            <p className="font-sans text-gray-700 mb-4">
              Need help with creative? Our design team can create stunning content optimized for our 1920mm × 1080mm digital screens (MP4/JPEG/PNG, max 20MB, 10-35s duration).
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-sky to-primary-deep-blue text-white font-bold rounded-full hover:shadow-xl transition-all duration-300"
            >
              Request Creative Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Results/Stats Section */}
      <section
        ref={resultsRef}
        className="py-8 md:py-16 lg:py-24 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-12 lg:mb-16"
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary-dark mb-2 md:mb-4">
              Real Impact,{' '}
              <span className="bg-gradient-to-r from-primary-sky to-primary-bright-green bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-8">
            {[
              { value: '10K+', label: 'Active Screens', icon: Monitor },
              { value: '2.5M+', label: 'Monthly Impressions', icon: Eye },
              { value: '50+', label: 'Prime Locations', icon: MapPin },
              { value: '30+ Min', label: 'Average Dwell Time', icon: Clock },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={resultsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-2 md:mb-4 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-lg md:rounded-2xl flex items-center justify-center shadow-lg md:shadow-xl">
                    <Icon className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="font-display font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-primary-sky to-primary-deep-blue bg-clip-text text-transparent mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="font-sans text-[10px] sm:text-xs md:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        accentColor="from-primary-sky/20 to-primary-deep-blue/20"
      />
    </main>
  );
}
