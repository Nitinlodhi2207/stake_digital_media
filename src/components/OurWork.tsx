"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const workData = [
  {
    title: "Digital Billboards",
    image: "/Images_gallery/white-billboard.webp",
    category: "Digital Screens",
    textPosition: "left",
  },
  {
    title: "Highway Advertising",
    image: "/Images_gallery/blank-advertising-billboards-illuminated-highway-night (1).webp",
    category: "Billboards",
    textPosition: "right",
  },
  {
    title: "LED Displays",
    image: "/Images_gallery/white-billboard.webp",
    category: "Digital Screens",
    textPosition: "left",
  },
  {
    title: "Night Illumination",
    image: "/Images_gallery/blank-advertising-billboards-illuminated-highway-night (1).webp",
    category: "Billboards",
    textPosition: "right",
  },
  {
    title: "Premium Locations",
    image: "/Images_gallery/white-billboard.webp",
    category: "Digital Screens",
    textPosition: "left",
  },
  {
    title: "Strategic Sites",
    image: "/Images_gallery/blank-advertising-billboards-illuminated-highway-night (1).webp",
    category: "Billboards",
    textPosition: "right",
  },
];

const OurWork = () => {
  return (
    <section className="bg-black text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider mb-6 md:mb-8 bg-gradient-to-r from-primary-sky to-primary-bright-green bg-clip-text text-transparent">
          See some of our work
        </h2>
        
        {/* Mobile: Row Style, Desktop: Grid */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-1">
          {workData.map((item, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <div className="space-y-2 transform transition-all duration-500 group-hover:translate-y-0">
                  <span className="inline-block text-xs font-semibold tracking-wider text-primary-sky uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary-sky/20 backdrop-blur-sm border border-primary-sky/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowRight className="w-4 h-4 text-primary-sky" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Row Style */}
        <div className="lg:hidden space-y-3">
          {workData.map((item, index) => (
            <div
              key={index}
              className="relative h-32 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              {/* Text Content - Stuck to Bottom */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 z-10 ${item.textPosition === 'right' ? 'text-right' : 'text-left'}`}>
                <div className="space-y-1.5">
                  <span className="inline-block text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-primary-sky/20 border border-primary-sky/30 text-primary-sky uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                {/* Arrow Icon - Opposite Side */}
                <div className={`absolute bottom-4 ${item.textPosition === 'right' ? 'left-4' : 'right-4'} w-8 h-8 rounded-full bg-primary-sky/20 backdrop-blur-sm border border-primary-sky/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500`}>
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
