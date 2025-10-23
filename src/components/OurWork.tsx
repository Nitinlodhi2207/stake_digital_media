"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const workData = [
  {
    title: "Digital Billboards",
    image: "https://res.cloudinary.com/diwa9giv2/image/upload/v1761154189/previous_work_1_lk2lno.png",
    category: "Digital Screens",
    textPosition: "left",
  },
  {
    title: "Highway Advertising",
    image: "https://res.cloudinary.com/diwa9giv2/image/upload/v1761154182/previous_work_2_tbtx5o.png",
    category: "Billboards",
    textPosition: "right",
  },
  {
    title: "LED Displays",
    image: "https://res.cloudinary.com/diwa9giv2/image/upload/v1761154203/previous_work_3_vgdhwz.png",
    category: "Digital Screens",
    textPosition: "left",
  },
  {
    title: "Night Illumination",
    image: "https://res.cloudinary.com/diwa9giv2/image/upload/v1761154216/previous_work_4_nvntiw.png",
    category: "Billboards",
    textPosition: "right",
  },
  {
    title: "Premium Locations",
    image: "https://res.cloudinary.com/diwa9giv2/image/upload/v1761154218/previous_work_5_bzqerk.png",
    category: "Digital Screens",
    textPosition: "left",
  },
  {
    title: "Strategic Sites",
    image: "https://res.cloudinary.com/diwa9giv2/image/upload/v1761154215/previous_work_6_ku6vag.png",
    category: "Billboards",
    textPosition: "right",
  },
];

const OurWork = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50/40 to-emerald-50/40 text-secondary-dark py-12 md:py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #0BB4E4 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-bl from-primary-sky/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-primary-bright-green/15 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 backdrop-blur-xl rounded-full border border-primary-sky/20 mb-4">
            <div className="w-2 h-2 bg-primary-sky rounded-full animate-pulse"></div>
            <span className="text-secondary-dark font-display font-semibold text-xs">PORTFOLIO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-secondary-dark mb-3">
            See Some of{' '}
            <span className="bg-gradient-to-r from-primary-sky via-primary-bright-green to-primary-sky bg-clip-text text-transparent">
              Our Work
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl">
            Explore our diverse portfolio of high-impact advertising campaigns across South Africa.
          </p>
        </div>
        
        {/* Desktop: Grid */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-2">
          {workData.map((item, index) => (
            <div
              key={index}
              className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-primary-sky/50"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/95 via-secondary-dark/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <div className="space-y-2.5 transform transition-all duration-500 group-hover:translate-y-0">
                  <span className="inline-block text-xs font-bold tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-primary-sky/20 to-primary-sky/10 border border-primary-sky/40 text-primary-sky uppercase backdrop-blur-sm shadow-lg shadow-primary-sky/10">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-gradient-to-r from-primary-sky/20 to-blue-500/20 backdrop-blur-sm border border-primary-sky/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 shadow-lg shadow-primary-sky/20">
                  <ArrowRight className="w-5 h-5 text-primary-sky" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Row Style */}
        <div className="lg:hidden space-y-4">
          {workData.map((item, index) => (
            <div
              key={index}
              className="relative h-40 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-primary-sky/50"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/95 via-secondary-dark/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Text Content - Stuck to Bottom */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 z-10 ${item.textPosition === 'right' ? 'text-right' : 'text-left'}`}>
                <div className="space-y-2">
                  <span className="inline-block text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-primary-sky/20 to-primary-sky/10 border border-primary-sky/40 text-primary-sky uppercase backdrop-blur-sm shadow-lg shadow-primary-sky/10">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                {/* Arrow Icon - Opposite Side */}
                <div className={`absolute bottom-4 ${item.textPosition === 'right' ? 'left-4' : 'right-4'} w-9 h-9 rounded-full bg-gradient-to-r from-primary-sky/20 to-blue-500/20 backdrop-blur-sm border border-primary-sky/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg shadow-primary-sky/20`}>
                  <ArrowRight className={`w-4 h-4 text-primary-sky ${item.textPosition === 'right' ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
