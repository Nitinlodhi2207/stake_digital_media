'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  TrendingUp,
  Sparkles,
  Eye,
  Clock,
  Target,
  Globe,
  Wifi,
  Navigation,
  Car,
  CheckCircle,
  ArrowRight,
  Sun,
  BarChart3,
  Users,
  Zap,
  Award,
} from 'lucide-react';
import FeatureGrid from '@/components/FeatureGrid';
import FAQSection from '@/components/FAQSection';
import ServiceCTA from '@/components/ServiceCTA';

export default function BillboardsPage() {
  const [sitesRef, sitesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [locationsRef, locationsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [specsRef, specsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: MapPin,
      title: 'Prime Locations',
      description:
        'Strategic placements on major commuter routes and cultural corridors with maximum visibility and constant traffic flow.',
    },
    {
      icon: TrendingUp,
      title: '1.5M+ Monthly Impressions',
      description:
        'Massive reach with over 1.5 million vehicle impressions monthly at our featured Soweto locations alone.',
    },
    {
      icon: Sparkles,
      title: 'LED Illumination',
      description:
        'Select sites feature LED illumination for 24/7 visibility, ensuring your message shines day and night.',
    },
    {
      icon: Target,
      title: 'Cultural Relevance',
      description:
        'Positioned where commerce and community converge—authentic connections in township hubs and urban centers.',
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Enabled Sites',
      description:
        'Selected billboards feature Wi-Fi connectivity, enabling enhanced engagement opportunities and data collection.',
    },
    {
      icon: BarChart3,
      title: 'Measurable Impact',
      description:
        'Detailed traffic reports, monthly impressions data, and audience demographics for every campaign.',
    },
  ];

  const featuredSites = [
    {
      name: 'Pela Main Road, Orlando West',
      location: 'Soweto, Gauteng',
      format: 'Wrap Medium',
      traffic: '±1,578,740',
      period: 'Monthly Vehicles',
      illumination: false,
      wifi: true,
      target: 'LSM 4-8',
      highlights: [
        'Next to iconic Old Maponya Mall',
        'Opposite newly opened Sakhumzi Restaurant',
        'Vibrant commercial and cultural corridor',
        'High pedestrian and vehicle traffic',
      ],
      image: 'https://res.cloudinary.com/diwa9giv2/image/upload/v1761802746/BILLBOARDS_r9btux.svg',
    },
    {
      name: 'Koma Road, Senaone',
      location: 'Soweto, Gauteng',
      format: 'V-Shaped Billboard (3m × 12m)',
      traffic: '+972,234',
      period: 'Monthly Vehicles',
      illumination: false,
      wifi: true,
      target: 'LSM 4-8',
      highlights: [
        'Double-sided V-shaped structure',
        'Links Shoprite Dlamini, Jabulani Mall, Protea Point',
        'Major commuter route with constant flow',
        'Ideal for high-frequency brand recall',
      ],
      image: 'https://res.cloudinary.com/diwa9giv2/image/upload/v1761802746/BILLBOARDS_r9btux.svg',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Site Selection',
      description: 'Choose from our premium billboard locations or let us recommend the best fit for your audience.',
    },
    {
      number: '02',
      title: 'Creative Design',
      description: 'Design compelling visuals or work with our creative team to produce eye-catching billboard artwork.',
    },
    {
      number: '03',
      title: 'Production & Install',
      description: 'We handle all production, printing, and professional installation with precision and care.',
    },
    {
      number: '04',
      title: 'Go Live',
      description: 'Your billboard goes live, commanding attention on South Africa\'s busiest routes.',
    },
    {
      number: '05',
      title: 'Monitor & Report',
      description: 'Receive detailed traffic reports and campaign performance analytics throughout your booking.',
    },
  ];

  const locationCategories = [
    {
      title: 'Soweto & Township Hubs',
      description: 'Orlando West, Senaone, and other vibrant community centers.',
      icon: Users,
      stats: '2.5M+ impressions',
    },
    {
      title: 'Metropolitan Highways',
      description: 'Major routes in Johannesburg, Pretoria, Durban, and Cape Town.',
      icon: Car,
      stats: 'Prime visibility',
    },
    {
      title: 'CBD Locations',
      description: 'High-traffic business districts and commercial areas.',
      icon: Globe,
      stats: 'Business audience',
    },
    {
      title: 'Commuter Routes',
      description: 'Taxi ranks, transport hubs, and daily travel corridors.',
      icon: Navigation,
      stats: 'Daily reach',
    },
  ];

  const faqs = [
    {
      question: 'What billboard sizes are available?',
      answer:
        'We offer various formats including standard billboards, wrap mediums, V-shaped double-sided structures (3m × 12m), and custom sizes. Each location has specific dimensions detailed in our media kit.',
    },
    {
      question: 'How long is the minimum booking period?',
      answer:
        'Minimum booking periods vary by location but typically start at 1 month. Longer campaigns (3, 6, or 12 months) receive preferred rates and priority booking.',
    },
    {
      question: 'Do you provide design and printing services?',
      answer:
        'Yes! Our team handles end-to-end creative services including design, production, printing, and installation. We can also work with your existing artwork.',
    },
    {
      question: 'Are the billboards illuminated?',
      answer:
        'Select premium sites feature LED illumination for 24/7 visibility. Site-specific details including illumination options are provided in our location inventory.',
    },
    {
      question: 'How do you measure campaign performance?',
      answer:
        'We provide monthly traffic reports with vehicle counts, estimated impressions, audience demographics (LSM profiles), and photographic proof of display.',
    },
    {
      question: 'Can I book multiple locations?',
      answer:
        'Absolutely! Multi-location campaigns receive volume discounts and coordinated installation schedules for maximum impact across your target markets.',
    },
    {
      question: 'What are the production lead times?',
      answer:
        'Typical production and installation takes 2-3 weeks from artwork approval. Rush installations can be arranged for urgent campaigns with additional fees.',
    },
    {
      question: 'Do you offer Wi-Fi enabled billboards?',
      answer:
        'Yes, select locations feature Wi-Fi connectivity which enables enhanced audience engagement, data collection, and interactive campaign opportunities.',
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* CTA Section - Get Started Today */}
      <ServiceCTA
        title="Ready to Dominate South Africa's Roads?"
        subtitle="Turn your brand into a landmark. Book premium billboard locations and make your message unmissable across the nation's busiest routes."
        ctaText="Book Your Billboard"
        ctaLink="/contact"
        gradientFrom="from-primary-bright-green"
        gradientTo="to-emerald-500"
        stats={[
          { value: 'Very Fast', label: 'Setup Time' },
          { value: '1 Month+', label: 'Min. Booking' },
          { value: ' All Weather', label: 'Certified' },
          { value: 'Full Service', label: 'Assistance' },
        ]}
      />

      {/* Features Grid */}
      <FeatureGrid
        features={features}
        accentColor="from-primary-bright-green to-primary-deep-green"
        title="Why Billboards"
        subtitle="Make Impact"
      />

      {/* Featured Sites Showcase */}
      <section
        ref={sitesRef}
        className="py-16 lg:py-24 bg-white relative overflow-hidden"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sitesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-bright-green/10 rounded-full border border-primary-bright-green/30 backdrop-blur-xl mb-4">
              <Award className="w-4 h-4 text-primary-bright-green" />
              <span className="text-xs md:text-sm font-bold tracking-wider text-primary-bright-green">
                FEATURED SITES
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-dark mb-4">
              Premium{' '}
              <span className="bg-gradient-to-r from-primary-bright-green to-emerald-400 bg-clip-text text-transparent">
                Billboard Locations
              </span>
            </h2>
            <p className="font-sans text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic placements where your brand becomes part of South Africa&apos;s daily landscape.
            </p>
          </motion.div>

          <div className="space-y-24">
            {featuredSites.map((site, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={sitesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image - Alternating sides */}
                <div
                  className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-bright-green/10 to-primary-deep-green/10 rounded-3xl blur-2xl"></div>
                  <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {site.wifi && (
                        <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg border border-primary-bright-green/30 shadow-lg">
                          <div className="flex items-center gap-1.5">
                            <Wifi className="w-3 h-3 text-primary-bright-green" />
                            <span className="text-xs font-semibold text-secondary-dark">Wi-Fi Enabled</span>
                          </div>
                        </div>
                      )}
                      {site.illumination && (
                        <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg border border-yellow-400/30 shadow-lg">
                          <div className="flex items-center gap-1.5">
                            <Sun className="w-3 h-3 text-yellow-500" />
                            <span className="text-xs font-semibold text-secondary-dark">Illuminated</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content - Alternating sides */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-bright-green/10 rounded-full border border-primary-bright-green/30 mb-4">
                    <MapPin className="w-3 h-3 text-primary-bright-green" />
                    <span className="text-xs font-bold text-primary-bright-green">
                      SITE {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-secondary-dark mb-2">
                    {site.name}
                  </h3>
                  <p className="font-sans text-base text-gray-600 mb-6">{site.location}</p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Format</p>
                      <p className="text-sm font-semibold text-secondary-dark">{site.format}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Target Market</p>
                      <p className="text-sm font-semibold text-secondary-dark">{site.target}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-gray-500 mb-1">Traffic Volume</p>
                      <p className="text-xl font-bold text-primary-bright-green">
                        {site.traffic}
                      </p>
                      <p className="text-xs text-gray-600">{site.period}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {site.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-bright-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-bright-green to-emerald-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-primary-bright-green/30 transition-all duration-300 hover:scale-105"
                  >
                    <span>Book This Site</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Process */}
      <section ref={processRef} className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-dark mb-4">
              How It{' '}
              <span className="bg-gradient-to-r from-primary-bright-green to-primary-deep-green bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="font-sans text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              From site selection to installation, we handle everything for a seamless experience.
            </p>
          </motion.div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary-bright-green via-emerald-400 to-primary-deep-green"></div>

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
                  <div className="relative z-10 w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-full flex items-center justify-center shadow-xl">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-full flex items-center justify-center shadow-lg">
                    <span className="font-display font-bold text-xl text-white">
                      {step.number}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-primary-bright-green to-emerald-400"></div>
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

      {/* Location Categories */}
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
              <span className="bg-gradient-to-r from-primary-bright-green to-emerald-400 bg-clip-text text-transparent">
                Billboard Network
              </span>
            </h2>
            <p className="font-sans text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic coverage across South Africa&apos;s most influential markets and routes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationCategories.map((location, index) => {
              const Icon = location.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={locationsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-bright-green/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-secondary-dark mb-2">
                      {location.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-600 mb-4 leading-relaxed">
                      {location.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-bright-green/10 rounded-full">
                      <div className="w-1.5 h-1.5 bg-primary-bright-green rounded-full"></div>
                      <span className="text-xs font-semibold text-primary-bright-green">
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
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-bright-green to-emerald-500 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>View All Locations</span>
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
              Design{' '}
              <span className="bg-gradient-to-r from-primary-bright-green to-emerald-400 bg-clip-text text-transparent">
                Specifications
              </span>
            </h2>
            <p className="font-sans text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Technical requirements for creating billboard-ready artwork.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Design Specs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={specsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-bright-green/50 hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="w-10 h-10 text-primary-bright-green mb-4" />
              <h3 className="font-display font-bold text-xl text-secondary-dark mb-4">Artwork Format</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>File Types:</span>
                  <span className="font-semibold text-secondary-dark">PDF, AI, PSD</span>
                </li>
                <li className="flex justify-between">
                  <span>Resolution:</span>
                  <span className="font-semibold text-secondary-dark">300 DPI min</span>
                </li>
                <li className="flex justify-between">
                  <span>Color Mode:</span>
                  <span className="font-semibold text-secondary-dark">CMYK</span>
                </li>
                <li className="flex justify-between">
                  <span>Bleed:</span>
                  <span className="font-semibold text-secondary-dark">100mm all sides</span>
                </li>
              </ul>
            </motion.div>

            {/* Size Specs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={specsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-bright-green/50 hover:shadow-xl transition-all duration-300"
            >
              <Target className="w-10 h-10 text-primary-bright-green mb-4" />
              <h3 className="font-display font-bold text-xl text-secondary-dark mb-4">Common Sizes</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>V-Shaped:</span>
                  <span className="font-semibold text-secondary-dark">3m × 12m</span>
                </li>
                <li className="flex justify-between">
                  <span>Wrap Medium:</span>
                  <span className="font-semibold text-secondary-dark">Custom sizes</span>
                </li>
                <li className="flex justify-between">
                  <span>Standard:</span>
                  <span className="font-semibold text-secondary-dark">6m × 3m</span>
                </li>
                <li className="flex justify-between">
                  <span>Large Format:</span>
                  <span className="font-semibold text-secondary-dark">12m × 6m</span>
                </li>
              </ul>
            </motion.div>

            {/* Production Specs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={specsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-bright-green/50 hover:shadow-xl transition-all duration-300"
            >
              <Zap className="w-10 h-10 text-primary-bright-green mb-4" />
              <h3 className="font-display font-bold text-xl text-secondary-dark mb-4">Production Details</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Material:</span>
                  <span className="font-semibold text-secondary-dark">Vinyl flex</span>
                </li>
                <li className="flex justify-between">
                  <span>Durability:</span>
                  <span className="font-semibold text-secondary-dark">Weather-proof</span>
                </li>
                <li className="flex justify-between">
                  <span>Lead Time:</span>
                  <span className="font-semibold text-secondary-dark">2-3 weeks</span>
                </li>
                <li className="flex justify-between">
                  <span>Installation:</span>
                  <span className="font-semibold text-secondary-dark">Included</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={specsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-8 bg-gradient-to-r from-primary-bright-green/10 to-primary-deep-green/10 rounded-2xl border-2 border-primary-bright-green/30 text-center"
          >
            <p className="font-sans text-gray-700 mb-4">
              Need help with billboard design? Our creative team produces stunning outdoor artwork.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-bright-green to-emerald-500 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300"
            >
              Request Design Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-dark mb-4">
              Billboard Impact by{' '}
              <span className="bg-gradient-to-r from-primary-bright-green to-emerald-400 bg-clip-text text-transparent">
                The Numbers
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Premium Sites', icon: MapPin },
              { value: '2.5M+', label: 'Monthly Impressions', icon: Eye },
              { value: '24/7', label: 'Brand Visibility', icon: Clock },
              { value: '100%', label: 'Illuminated Options', icon: Sun },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-2xl flex items-center justify-center shadow-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-display font-bold text-3xl lg:text-4xl bg-gradient-to-r from-primary-bright-green to-emerald-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="font-sans text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        accentColor="from-primary-bright-green/20 to-primary-deep-green/20"
      />
    </main>
  );
}
