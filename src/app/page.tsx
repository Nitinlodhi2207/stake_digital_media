'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, MapPin, Users, Zap, BarChart3, Target, Eye, Sparkles, Globe, Award, Clock } from 'lucide-react';
import OurWork from '@/components/OurWork';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [cardRotation, setCardRotation] = useState({ left: 0, right: 0 });
  const observerRef = useRef<IntersectionObserver | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    // Smooth scroll progress tracking with card rotation
    const handleScroll = () => {
      // Calculate rotation for service cards based on scroll
      if (servicesRef.current) {
        const servicesRect = servicesRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const servicesTop = servicesRect.top;
        const servicesHeight = servicesRect.height;
        
        // Calculate scroll progress (0 to 1)
        // Start rotating when section enters viewport, stop when fully visible
        const scrollStart = windowHeight;
        const scrollEnd = windowHeight / 2;
        
        if (servicesTop < scrollStart && servicesTop > -servicesHeight) {
          // Map scroll position to rotation (0 to 360 degrees)
          const progress = Math.max(0, Math.min(1, (scrollStart - servicesTop) / (scrollStart - scrollEnd)));
          const rotationLeft = -180 + (progress * 180); // Rotate from -180 to 0
          const rotationRight = 180 - (progress * 180); // Rotate from 180 to 0
          
          setCardRotation({
            left: rotationLeft,
            right: rotationRight
          });
        } else if (servicesTop <= scrollEnd) {
          // Reset to 0 when fully in view
          setCardRotation({ left: 0, right: 0 });
        } else {
          // Initial state
          setCardRotation({ left: -180, right: 180 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    // Enhanced Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            // Add animation class to element
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.15, rootMargin: '-50px' }
    );

    // Observe all sections and animated elements
    document.querySelectorAll('section[id], [data-animate]').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const isSectionVisible = (id: string) => visibleSections.has(id);

  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero Section - Full Screen with Video Background */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        {/* Video Background - Starts below navbar */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ marginTop: '-56px' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://res.cloudinary.com/diwa9giv2/image/upload/f_auto,q_auto,w_1920/v1761208133/Our_Network_image_zqkfph.png"
              className="w-full h-screen object-cover"
            >
              <source src="https://res.cloudinary.com/diwa9giv2/video/upload/v1761208126/4805615-hd_1920_1080_30fps_l2ueby.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Enhanced Gradient Overlay - Better visibility at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-secondary-dark/95 via-secondary-dark/70 to-transparent"></div>
        </div>

        {/* Hero Content - Positioned just above bottom */}
        <div className="relative z-10 w-full pb-4 sm:pb-6 lg:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Heading - Compact */}
            <h1 className={`font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white text-center mb-4 sm:mb-6 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Your Brand,{' '}
              <span className="bg-gradient-to-r from-primary-sky via-primary-bright-green to-primary-sky bg-clip-text text-transparent">
                Everywhere
              </span>
            </h1>

            {/* Horizontal Layout: Buttons + Stats */}
            <div className={`flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* CTA Buttons */}
              <div className="flex flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-primary-sky to-primary-deep-blue text-white font-display font-bold text-sm sm:text-base rounded-lg hover:shadow-2xl hover:shadow-primary-sky/50 transition-all duration-300 hover:scale-105"
                >
                  Book a Campaign
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/network"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white/10 backdrop-blur-xl border-2 border-white/40 text-white font-display font-bold text-sm sm:text-base rounded-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  Explore Network
                </Link>
              </div>

              {/* Divider - Hidden on mobile */}
              <div className="hidden lg:block h-12 w-px bg-white/30"></div>

              {/* Quick Stats - Horizontal */}
              <div className="flex items-center gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-primary-sky">50+</div>
                  <div className="font-sans text-xs text-gray-300 mt-0.5">Locations</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-primary-bright-green">2.5M+</div>
                  <div className="font-sans text-xs text-gray-300 mt-0.5">Impressions</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-primary-sky">24/7</div>
                  <div className="font-sans text-xs text-gray-300 mt-0.5">Visibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Advanced Modern Showcase */}
      <section id="services" ref={servicesRef} className="relative bg-white text-secondary-dark overflow-hidden py-12 md:py-20">
        {/* Animated Background Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-sky/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-bright-green/5 via-transparent to-transparent"></div>
        
        {/* Intro Panel - Compact */}
        <div className="relative mb-12 md:mb-20 overflow-hidden">
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-sky/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary-bright-green/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isSectionVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary-dark mb-4 sm:mb-6 leading-tight tracking-tight">
                <span className="inline-block">Advertising.</span>{' '}
                <span className="inline-block bg-gradient-to-r from-primary-sky via-primary-bright-green to-primary-sky bg-[length:200%_auto] animate-gradient-text bg-clip-text text-transparent">
                  Everywhere.
                </span>
              </h2>
              
              <p className="font-sans text-sm sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light mb-6 sm:mb-8">
                Transform your brand&apos;s presence with cutting-edge digital displays
                and strategic billboard placements that captivate audiences 24/7.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary-sky/10 to-primary-sky/5 backdrop-blur-sm rounded-full border border-primary-sky/20 hover:bg-primary-sky/15 hover:border-primary-sky/40 transition-all duration-300 group">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary-sky group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-medium text-secondary-dark">Real-time Updates</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary-bright-green/10 to-primary-bright-green/5 backdrop-blur-sm rounded-full border border-primary-bright-green/20 hover:bg-primary-bright-green/15 hover:border-primary-bright-green/40 transition-all duration-300 group">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-primary-bright-green group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-medium text-secondary-dark">Wide Reach</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary-deep-blue/10 to-primary-deep-blue/5 backdrop-blur-sm rounded-full border border-primary-deep-blue/20 hover:bg-primary-deep-blue/15 hover:border-primary-deep-blue/40 transition-all duration-300 group">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary-deep-blue group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-medium text-secondary-dark">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Screens Panel - Compact Design */}
        <div className="relative mb-12 md:mb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              {/* Content */}
              <div 
                data-animate
                className={`order-2 lg:order-1 space-y-4 transition-all duration-1000 flex flex-col justify-center ${isSectionVisible('services') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-primary-sky/15 to-primary-sky/10 backdrop-blur-xl rounded-full border border-primary-sky/30 shadow-lg shadow-primary-sky/10 w-fit">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary-sky rounded-full animate-pulse"></div>
                  <span className="text-[9px] md:text-[10px] font-bold tracking-wider text-primary-sky">DIGITAL SCREENS</span>
                </div>
                
                {/* Large Headline */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-secondary-dark leading-tight tracking-tight">
                  <span className="inline-block">Dynamic. Digital. </span>
                  <span className="inline-block bg-gradient-to-r from-primary-sky to-blue-400 bg-clip-text text-transparent">Dazzling.</span>
                </h3>
                
                {/* Description */}
                <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed font-light">
                  High-definition displays that bring your content to life with vibrant colors,
                  stunning clarity, and real-time updates that keep your message fresh and engaging.
                </p>
                
                {/* Technical Specifications */}
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-100 rounded-xl p-4 space-y-2">
                  <h4 className="font-bold text-xs md:text-sm text-primary-deep-blue mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-sky rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-secondary-dark">Screen Size:</span>
                        <span className="text-gray-600 ml-1">1920mm × 1080mm</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-sky rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-secondary-dark">File Format:</span>
                        <span className="text-gray-600 ml-1">MP4/JPEG/PNG</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-sky rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-secondary-dark">Max Size:</span>
                        <span className="text-gray-600 ml-1">20MB</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-sky rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-secondary-dark">Duration:</span>
                        <span className="text-gray-600 ml-1">10–35s creatives</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Feature Cards Grid - 2x2 */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="group p-3 md:p-4 bg-gradient-to-br from-primary-sky/10 to-primary-sky/5 backdrop-blur-sm rounded-lg border border-primary-sky/20 hover:border-primary-sky/50 hover:bg-primary-sky/15 transition-all duration-300">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-sky to-blue-500 rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-xs md:text-sm mb-0.5 text-secondary-dark">Ultra HD</h4>
                    <p className="text-[10px] md:text-xs text-gray-600">Crystal-clear visuals</p>
                  </div>
                  
                  <div className="group p-3 md:p-4 bg-gradient-to-br from-primary-sky/10 to-primary-sky/5 backdrop-blur-sm rounded-lg border border-primary-sky/20 hover:border-primary-sky/50 hover:bg-primary-sky/15 transition-all duration-300">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-sky to-blue-500 rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-xs md:text-sm mb-0.5 text-secondary-dark">Real-time</h4>
                    <p className="text-[10px] md:text-xs text-gray-600">Live content updates</p>
                  </div>
                  
                  <div className="group p-3 md:p-4 bg-gradient-to-br from-primary-sky/10 to-primary-sky/5 backdrop-blur-sm rounded-lg border border-primary-sky/20 hover:border-primary-sky/50 hover:bg-primary-sky/15 transition-all duration-300">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-sky to-blue-500 rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-xs md:text-sm mb-0.5 text-secondary-dark">Interactive</h4>
                    <p className="text-[10px] md:text-xs text-gray-600">Touch-enabled</p>
                  </div>
                  
                  <div className="group p-3 md:p-4 bg-gradient-to-br from-primary-sky/10 to-primary-sky/5 backdrop-blur-sm rounded-lg border border-primary-sky/20 hover:border-primary-sky/50 hover:bg-primary-sky/15 transition-all duration-300">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-sky to-blue-500 rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-xs md:text-sm mb-0.5 text-secondary-dark">30+ Min Dwell</h4>
                    <p className="text-[10px] md:text-xs text-gray-600">Extended engagement</p>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    href="/services/digital-screens"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-primary-sky to-blue-500 text-white font-bold text-sm md:text-base rounded-full shadow-lg shadow-primary-sky/30 hover:shadow-primary-sky/50 hover:scale-105 transition-all duration-300"
                  >
                    <span>Explore Digital Screens</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              {/* Image with Effects */}
              <div 
                data-animate
                className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ${isSectionVisible('services') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'}`}
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: `perspective(1000px) rotateY(${cardRotation.left}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >                
                <div className="relative group">
                  {/* Main Image Container */}
                  <div className="relative h-[280px] sm:h-[350px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-200 group-hover:border-primary-sky/30 transition-all duration-500" style={{ backfaceVisibility: 'hidden' }}>
                    <Image
                      src="https://res.cloudinary.com/diwa9giv2/image/upload/f_auto,q_auto,w_1200/v1761208531/DIGITAL_SCREENS_hmuc6h.png"
                      alt="Digital Screens"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Billboards Panel - Compact Design */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              {/* Image with Effects */}
              <div 
                data-animate
                className={`relative transition-all duration-1000 ${isSectionVisible('services') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'}`}
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: `perspective(1000px) rotateY(${cardRotation.right}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="relative group">
                  {/* Main Image Container */}
                  <div className="relative h-[280px] sm:h-[350px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-200 group-hover:border-primary-bright-green/30 transition-all duration-500" style={{ backfaceVisibility: 'hidden' }}>
                    <Image
                      src="https://res.cloudinary.com/diwa9giv2/image/upload/f_auto,q_auto,w_1200/v1761208565/BILLBOARDS_r9btux.png"
                      alt="Billboards"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div 
                data-animate
                className={`space-y-4 transition-all duration-1000 delay-200 flex flex-col justify-center ${isSectionVisible('services') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-primary-bright-green/15 to-primary-bright-green/10 backdrop-blur-xl rounded-full border border-primary-bright-green/30 shadow-lg shadow-primary-bright-green/10 w-fit">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary-bright-green rounded-full animate-pulse"></div>
                  <span className="text-[9px] md:text-[10px] font-bold tracking-wider text-primary-bright-green">BILLBOARDS</span>
                </div>
                
                {/* Large Headline */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-secondary-dark leading-tight tracking-tight">
                  <span className="inline-block">Bold. Brilliant. </span>
                  <span className="inline-block bg-gradient-to-r from-primary-bright-green to-emerald-400 bg-clip-text text-transparent">Unmissable.</span>
                </h3>
                
                {/* Description */}
                <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed font-light">
                  Strategic placements that command attention and dominate the landscape,
                  ensuring your brand message reaches thousands daily with maximum impact.
                </p>
                
                {/* Feature Cards Grid - 2x2 */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="group p-3 md:p-4 bg-gradient-to-br from-primary-bright-green/10 to-primary-bright-green/5 backdrop-blur-sm rounded-lg border border-primary-bright-green/20 hover:border-primary-bright-green/50 hover:bg-primary-bright-green/15 transition-all duration-300">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-bright-green to-emerald-500 rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-xs md:text-sm mb-0.5 text-secondary-dark">Prime Locations</h4>
                    <p className="text-[10px] md:text-xs text-gray-600">Maximum visibility</p>
                  </div>
                  
                  <div className="group p-3 md:p-4 bg-gradient-to-br from-primary-bright-green/10 to-primary-bright-green/5 backdrop-blur-sm rounded-lg border border-primary-bright-green/20 hover:border-primary-bright-green/50 hover:bg-primary-bright-green/15 transition-all duration-300">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-bright-green to-emerald-500 rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-xs md:text-sm mb-0.5 text-secondary-dark">LED Illumination</h4>
                    <p className="text-[10px] md:text-xs text-gray-600">24/7 impactful</p>
                  </div>
                  
                  <div className="group p-3 md:p-4 bg-gradient-to-br from-primary-bright-green/10 to-primary-bright-green/5 backdrop-blur-sm rounded-lg border border-primary-bright-green/20 hover:border-primary-bright-green/50 hover:bg-primary-bright-green/15 transition-all duration-300">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-bright-green to-emerald-500 rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-xs md:text-sm mb-0.5 text-secondary-dark">1.5M+ Monthly</h4>
                    <p className="text-[10px] md:text-xs text-gray-600">Massive impressions</p>
                  </div>
                  
                  <div className="group p-3 md:p-4 bg-gradient-to-br from-primary-bright-green/10 to-primary-bright-green/5 backdrop-blur-sm rounded-lg border border-primary-bright-green/20 hover:border-primary-bright-green/50 hover:bg-primary-bright-green/15 transition-all duration-300">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-bright-green to-emerald-500 rounded-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-xs md:text-sm mb-0.5 text-secondary-dark">Strategic Sites</h4>
                    <p className="text-[10px] md:text-xs text-gray-600">Soweto & metros</p>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    href="/services/billboards"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-primary-bright-green to-emerald-500 text-white font-bold text-sm md:text-base rounded-full shadow-lg shadow-primary-bright-green/30 hover:shadow-primary-bright-green/50 hover:scale-105 transition-all duration-300"
                  >
                    <span>Discover Billboards</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Compact Redesign */}
      <section id="why-choose-us" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(11, 180, 228, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: 'drift 20s linear infinite'
          }}></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-10 right-5 w-60 h-60 bg-primary-sky/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-5 w-72 h-72 bg-primary-bright-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${isSectionVisible('why-choose-us') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 backdrop-blur-xl rounded-full border border-primary-sky/20 mb-4">
              <Award className="w-4 h-4 text-primary-sky" />
              <span className="text-secondary-dark font-display font-semibold text-xs">Why We&apos;re Different</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-secondary-dark mb-3">
              Why Brands Choose{' '}
              <span className="bg-gradient-to-r from-primary-sky via-primary-bright-green to-primary-sky bg-clip-text text-transparent">
                Stake Digital
              </span>
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Real spaces. Real people. Real impact. We create experiences that resonate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Feature 1 */}
            <div 
              data-animate
              className={`group relative transition-all duration-1000 delay-100 ${isSectionVisible('why-choose-us') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="relative p-5 md:p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl md:rounded-2xl hover:bg-white hover:border-primary-sky/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative z-10 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary-sky/20">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base md:text-lg text-secondary-dark mb-1 group-hover:text-primary-sky transition-colors duration-300">Strategic Locations</h3>
                    <p className="font-sans text-xs md:text-sm text-gray-700 leading-snug">
                      Premium placements in high-traffic, high-dwell environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div 
              data-animate
              className={`group relative transition-all duration-1000 delay-200 ${isSectionVisible('why-choose-us') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="relative p-5 md:p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl md:rounded-2xl hover:bg-white hover:border-primary-bright-green/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative z-10 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary-bright-green/20">
                    <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base md:text-lg text-secondary-dark mb-1 group-hover:text-primary-bright-green transition-colors duration-300">Measurable Results</h3>
                    <p className="font-sans text-xs md:text-sm text-gray-700 leading-snug">
                      Data-driven insights and performance analytics for every campaign.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div 
              data-animate
              className={`group relative transition-all duration-1000 delay-300 ${isSectionVisible('why-choose-us') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="relative p-5 md:p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl md:rounded-2xl hover:bg-white hover:border-primary-sky/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative z-10 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary-sky/20">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base md:text-lg text-secondary-dark mb-1 group-hover:text-primary-sky transition-colors duration-300">Community Connection</h3>
                    <p className="font-sans text-xs md:text-sm text-gray-700 leading-snug">
                      Authentic engagement in township hubs and urban centers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div 
              data-animate
              className={`group relative transition-all duration-1000 delay-[400ms] ${isSectionVisible('why-choose-us') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="relative p-5 md:p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl md:rounded-2xl hover:bg-white hover:border-primary-bright-green/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative z-10 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary-bright-green/20">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base md:text-lg text-secondary-dark mb-1 group-hover:text-primary-bright-green transition-colors duration-300">24/7 Visibility</h3>
                    <p className="font-sans text-xs md:text-sm text-gray-700 leading-snug">
                      Continuous brand exposure with illuminated and digital displays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurWork />

      {/* Stats/Network Section - Compact Design */}
      <section id="network-preview" className="py-8 md:py-16 bg-white relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #0BB4E4 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-sky/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary-bright-green/10 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-6 md:mb-12 transition-all duration-1000 ${isSectionVisible('network-preview') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 rounded-full border border-primary-sky/20 mb-3 md:mb-4">
              <Globe className="w-3 h-3 md:w-4 md:h-4 text-primary-sky" />
              <span className="text-secondary-dark font-display font-semibold text-[10px] md:text-xs">Our Network</span>
            </div>

            <h2 className="font-display font-bold text-xl sm:text-3xl lg:text-5xl text-secondary-dark mb-2 md:mb-4 leading-tight">
              Nationwide Reach, <span className="gradient-text">Local Impact</span>
            </h2>
            
            <p className="font-sans text-xs sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our network spans South Africa&apos;s most dynamic markets—from <span className="text-primary-sky font-semibold">Soweto to Cape Town</span>, <span className="text-primary-bright-green font-semibold">Durban to Pretoria</span>. We position your brand where it matters most.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-start">
            {/* Image Column with Stats */}
            <div 
              data-animate
              className={`relative transition-all duration-1000 ${isSectionVisible('network-preview') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-16 scale-95'}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="relative h-[250px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="https://res.cloudinary.com/diwa9giv2/image/upload/f_auto,q_auto,w_1200/v1761208647/Our_Network_image_ol9enz.png"
                  alt="Our Network"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Column */}
            <div 
              data-animate
              className={`transition-all duration-1000 delay-200 ${isSectionVisible('network-preview') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-16 scale-95'}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="space-y-4">
                {/* Feature 1 */}
                <div 
                  data-animate
                  className={`group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary-sky/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${isSectionVisible('network-preview') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: '300ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-base sm:text-lg text-secondary-dark mb-1 group-hover:text-primary-sky transition-colors">High-Traffic Venues</h3>
                    <p className="font-sans text-sm text-gray-600 leading-snug">Supabets locations with <span className="font-semibold text-primary-deep-blue">30+ minute average dwell times</span> and consistent customer engagement.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div 
                  data-animate
                  className={`group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary-bright-green/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${isSectionVisible('network-preview') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: '400ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-base sm:text-lg text-secondary-dark mb-1 group-hover:text-primary-bright-green transition-colors">Premium Locations</h3>
                    <p className="font-sans text-sm text-gray-600 leading-snug">Strategic billboard placements on major commuter routes with <span className="font-semibold text-primary-deep-green">millions of monthly impressions</span>.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div 
                  data-animate
                  className={`group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary-sky/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${isSectionVisible('network-preview') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: '500ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-base sm:text-lg text-secondary-dark mb-1 group-hover:text-primary-sky transition-colors">Cultural Relevance</h3>
                    <p className="font-sans text-sm text-gray-600 leading-snug">Positioned where <span className="font-semibold text-primary-deep-blue">commerce and community converge</span> for authentic brand connections.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/network"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-sky to-primary-deep-blue text-white font-display font-bold text-base rounded-xl hover:shadow-xl hover:shadow-primary-sky/30 transition-all duration-300 hover:scale-105 mt-6"
              >
                <span>Explore Full Network</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Compact Design */}
      <section id="cta" className="relative py-12 md:py-16 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-deep-blue via-primary-sky to-primary-bright-green">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary-dark/50 via-transparent to-secondary-dark/30"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isSectionVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 mb-4 md:mb-6">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <span className="text-white font-display font-semibold text-[10px] md:text-xs tracking-wide">Start Your Journey</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-display font-bold text-xl sm:text-3xl lg:text-5xl text-white mb-3 md:mb-4 leading-tight max-w-4xl mx-auto">
              Ready to Make Your Brand{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Unmissable?</span>
                <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-white/30 blur-sm"></span>
              </span>
            </h2>

            {/* Subheading */}
            <p className="font-sans text-xs sm:text-base lg:text-lg text-white/95 mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Join South Africa&apos;s leading brands in leveraging the power of out-of-home advertising. Let&apos;s create campaigns that drive <span className="font-bold">real-world results</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-10">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-primary-deep-blue font-display font-bold text-sm md:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-white/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Campaign
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-xl border-2 border-white/50 text-white font-display font-bold text-sm md:text-lg rounded-xl hover:bg-white/20 hover:border-white transition-all duration-300"
              >
                <span>Learn About Us</span>
                <Eye className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>

            {/* Trust Indicators - 4 in one row on mobile */}
            <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto pt-4 md:pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="font-display font-bold text-base sm:text-2xl lg:text-3xl text-white mb-0.5 md:mb-1">50+</div>
                <div className="font-sans text-[9px] sm:text-xs lg:text-sm text-white/80">Active Locations</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-base sm:text-2xl lg:text-3xl text-white mb-0.5 md:mb-1">2.5M+</div>
                <div className="font-sans text-[9px] sm:text-xs lg:text-sm text-white/80">Monthly Views</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-base sm:text-2xl lg:text-3xl text-white mb-0.5 md:mb-1">100%</div>
                <div className="font-sans text-[9px] sm:text-xs lg:text-sm text-white/80">Brand Safe</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-base sm:text-2xl lg:text-3xl text-white mb-0.5 md:mb-1">24/7</div>
                <div className="font-sans text-[9px] sm:text-xs lg:text-sm text-white/80">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Icons - Hidden on Mobile */}
        <div className="hidden lg:flex absolute top-1/4 left-10 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl items-center justify-center animate-float">
          <MapPin className="w-7 h-7 text-white" />
        </div>
        <div className="hidden lg:flex absolute bottom-1/4 right-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
      </section>
    </main>
  );
}
