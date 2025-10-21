'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, MapPin, Users, Zap, BarChart3, Target, Eye, Sparkles, Globe, Award, Clock } from 'lucide-react';
import OurWork from '@/components/OurWork';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const isSectionVisible = (id: string) => visibleSections.has(id);

  return (
    <main className="overflow-x-hidden bg-white pt-14 lg:pt-16">
      {/* Hero Section - 80vh with Video Background */}
      <section className="relative h-[80vh] min-h-[600px] max-h-[900px] flex items-end justify-center overflow-hidden">
        {/* Video Background - Full Coverage */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/Images_gallery/white-billboard.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Herosection_video_sample1.mp4" type="video/mp4" />
          </video>
          
          {/* Enhanced Gradient Overlay - Better text visibility */}
          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-secondary-dark/95 via-secondary-dark/70 to-transparent"></div>
        </div>

        {/* Hero Content - Bottom Section */}
        <div className="relative z-10 w-full pb-12 sm:pb-16 lg:pb-20">
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Clean & Premium with Scroll Animations */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        {/* Animated Background Decorative Elements */}
        <div className={`absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-sky/10 to-transparent rounded-full blur-3xl transition-all duration-1000 ${isSectionVisible('services') ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
        <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-primary-bright-green/10 to-transparent rounded-full blur-3xl transition-all duration-1000 delay-200 ${isSectionVisible('services') ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
        
        {/* Animated Floating Circles */}
        <div className={`absolute top-20 right-20 w-32 h-32 border-4 border-primary-sky/20 rounded-full transition-all duration-1000 delay-300 ${isSectionVisible('services') ? 'opacity-100 rotate-0' : 'opacity-0 rotate-45'}`}></div>
        <div className={`absolute bottom-32 left-32 w-24 h-24 border-4 border-primary-bright-green/20 rounded-full transition-all duration-1000 delay-500 ${isSectionVisible('services') ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with Animation */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isSectionVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary-sky" />
              <span className="text-secondary-dark font-display font-semibold text-sm">Our Solutions</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-secondary-dark mb-4">
              Powerful <span className="gradient-text">Advertising Solutions</span>
            </h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic placements that drive results
            </p>
          </div>

          {/* Service Cards Grid - Clean & Minimal */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Digital Screens Card */}
            <div className={`transition-all duration-1000 delay-100 ${isSectionVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <Link href="/services/digital-screens" className="group block">
                <div className="relative h-[500px] rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image with Overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src="/Images_gallery/white-billboard.webp"
                      alt="Digital Screens"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Clean Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/90 via-secondary-dark/30 to-transparent"></div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-sky/60 rounded-2xl transition-all duration-500"></div>
                  
                  {/* Minimal Content - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-0">
                    {/* Small Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-sky/90 backdrop-blur-sm rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Zap className="w-4 h-4 text-white" />
                      <span className="text-white text-xs font-display font-semibold">Digital Innovation</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
                      Digital Screens
                    </h3>
                    
                    {/* Minimal Description - Shows on Hover */}
                    <p className="font-sans text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 max-h-0 group-hover:max-h-20 overflow-hidden">
                      High-traffic venues with 30-minute dwell times. Supabets locations, malls, and commuter hubs.
                    </p>
                    
                    {/* CTA Arrow */}
                    <div className="flex items-center gap-2 text-primary-sky font-display font-bold text-base">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">Explore</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Billboards Card */}
            <div className={`transition-all duration-1000 delay-200 ${isSectionVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <Link href="/services/billboards" className="group block">
                <div className="relative h-[500px] rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image with Overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src="/Images_gallery/blank-advertising-billboards-illuminated-highway-night (1).webp"
                      alt="Billboards"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Clean Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/90 via-secondary-dark/30 to-transparent"></div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-bright-green/60 rounded-2xl transition-all duration-500"></div>
                  
                  {/* Minimal Content - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-0">
                    {/* Small Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-bright-green/90 backdrop-blur-sm rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Target className="w-4 h-4 text-white" />
                      <span className="text-white text-xs font-display font-semibold">Maximum Impact</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
                      Billboards
                    </h3>
                    
                    {/* Minimal Description - Shows on Hover */}
                    <p className="font-sans text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 max-h-0 group-hover:max-h-20 overflow-hidden">
                      Soweto and major metros. Transform city arteries into brand landmarks. 1.5M+ monthly impressions.
                    </p>
                    
                    {/* CTA Arrow */}
                    <div className="flex items-center gap-2 text-primary-bright-green font-display font-bold text-base">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">Explore</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Compact Redesign */}
      <section id="why-choose-us" className="py-16 bg-gradient-to-br from-secondary-dark via-[#1a1a2e] to-secondary-dark relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(11, 180, 228, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: 'drift 20s linear infinite'
          }}></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-10 right-5 w-60 h-60 bg-primary-sky/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-5 w-72 h-72 bg-primary-bright-green/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isSectionVisible('why-choose-us') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-4">
              <Award className="w-4 h-4 text-primary-sky" />
              <span className="text-white font-display font-semibold text-xs">Why We&apos;re Different</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
              Why Brands Choose{' '}
              <span className="bg-gradient-to-r from-primary-sky via-primary-bright-green to-primary-sky bg-clip-text text-transparent">
                Stake Digital
              </span>
            </h2>
            <p className="font-sans text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Real spaces. Real people. Real impact. We create experiences that resonate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className={`group relative transition-all duration-1000 delay-100 ${isSectionVisible('why-choose-us') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary-sky/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-sky/20 h-full">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary-sky/40">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-primary-sky transition-colors duration-300">Strategic Locations</h3>
                    <p className="font-sans text-sm text-gray-400 leading-snug">
                      Premium placements in high-traffic, high-dwell environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className={`group relative transition-all duration-1000 delay-200 ${isSectionVisible('why-choose-us') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary-bright-green/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-bright-green/20 h-full">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary-bright-green/40">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-primary-bright-green transition-colors duration-300">Measurable Results</h3>
                    <p className="font-sans text-sm text-gray-400 leading-snug">
                      Data-driven insights and performance analytics for every campaign.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className={`group relative transition-all duration-1000 delay-300 ${isSectionVisible('why-choose-us') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary-sky/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-sky/20 h-full">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary-sky/40">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-primary-sky transition-colors duration-300">Community Connection</h3>
                    <p className="font-sans text-sm text-gray-400 leading-snug">
                      Authentic engagement in township hubs and urban centers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className={`group relative transition-all duration-1000 delay-[400ms] ${isSectionVisible('why-choose-us') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary-bright-green/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-bright-green/20 h-full">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary-bright-green/40">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-primary-bright-green transition-colors duration-300">24/7 Visibility</h3>
                    <p className="font-sans text-sm text-gray-400 leading-snug">
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
      <section id="network-preview" className="py-16 bg-white relative overflow-hidden">
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
          <div className={`text-center mb-12 transition-all duration-1000 ${isSectionVisible('network-preview') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 rounded-full border border-primary-sky/20 mb-4">
              <Globe className="w-4 h-4 text-primary-sky" />
              <span className="text-secondary-dark font-display font-semibold text-xs">Our Network</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-dark mb-4 leading-tight">
              Nationwide Reach, <span className="gradient-text">Local Impact</span>
            </h2>
            
            <p className="font-sans text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our network spans South Africa&apos;s most dynamic markets—from <span className="text-primary-sky font-semibold">Soweto to Cape Town</span>, <span className="text-primary-bright-green font-semibold">Durban to Pretoria</span>. We position your brand where it matters most.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Image Column with Stats */}
            <div className={`relative transition-all duration-1000 ${isSectionVisible('network-preview') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Images_gallery/blank-advertising-billboards-illuminated-highway-night (1).webp"
                  alt="Our Network"
                  fill
                  className="object-cover"
                />
                {/* Overlay with Stats */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep-blue/85 via-primary-sky/50 to-transparent"></div>
                
                {/* Floating Stats Cards */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="space-y-3">
                    <div className="inline-block p-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-display font-bold text-2xl text-secondary-dark">Soweto</div>
                          <div className="font-sans text-xs text-gray-600">Premium Locations</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="inline-block p-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ml-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-display font-bold text-2xl text-secondary-dark">2.5M+</div>
                          <div className="font-sans text-xs text-gray-600">Monthly Reach</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className={`transition-all duration-1000 delay-200 ${isSectionVisible('network-preview') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary-sky/30 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-sky to-primary-deep-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-base sm:text-lg text-secondary-dark mb-1 group-hover:text-primary-sky transition-colors">High-Traffic Venues</h3>
                    <p className="font-sans text-sm text-gray-600 leading-snug">Supabets locations with <span className="font-semibold text-primary-deep-blue">30+ minute average dwell times</span> and consistent customer engagement.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary-bright-green/30 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-base sm:text-lg text-secondary-dark mb-1 group-hover:text-primary-bright-green transition-colors">Premium Locations</h3>
                    <p className="font-sans text-sm text-gray-600 leading-snug">Strategic billboard placements on major commuter routes with <span className="font-semibold text-primary-deep-green">millions of monthly impressions</span>.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary-sky/30 hover:shadow-md transition-all duration-300">
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
      <section id="cta" className="relative py-16 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-display font-semibold text-xs tracking-wide">Start Your Journey</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight max-w-4xl mx-auto">
              Ready to Make Your Brand{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Unmissable?</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-white/30 blur-sm"></span>
              </span>
            </h2>

            {/* Subheading */}
            <p className="font-sans text-base sm:text-lg text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join South Africa&apos;s leading brands in leveraging the power of out-of-home advertising. Let&apos;s create campaigns that drive <span className="font-bold">real-world results</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-deep-blue font-display font-bold text-base sm:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-white/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Campaign
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/50 text-white font-display font-bold text-base sm:text-lg rounded-xl hover:bg-white/20 hover:border-white transition-all duration-300"
              >
                <span>Learn About Us</span>
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">50+</div>
                <div className="font-sans text-xs sm:text-sm text-white/80">Active Locations</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">2.5M+</div>
                <div className="font-sans text-xs sm:text-sm text-white/80">Monthly Views</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">100%</div>
                <div className="font-sans text-xs sm:text-sm text-white/80">Brand Safe</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">24/7</div>
                <div className="font-sans text-xs sm:text-sm text-white/80">Support</div>
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
