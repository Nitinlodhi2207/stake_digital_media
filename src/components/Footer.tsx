'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Mail, ArrowRight, Sparkles, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const footer = document.getElementById('footer-section');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const footer = document.getElementById('footer-section');
    footer?.addEventListener('mousemove', handleMouseMove);
    return () => footer?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer 
      id="footer-section"
      className="relative bg-gradient-to-br from-gray-900 via-secondary-dark to-black text-white overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Cursor Glow Effect */}
      {isHovering && (
        <div 
          className="pointer-events-none absolute z-10 rounded-full bg-gradient-to-r from-primary-sky/30 to-primary-bright-green/30 blur-3xl transition-opacity duration-300"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: '300px',
            height: '300px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(11, 180, 228, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Footer Content - Compact (Max 40vh) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Mobile: Single column, Desktop: Multi-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          
          {/* Section 1: Logo & About - Compact */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.svg" 
                alt="Stake Digital Media Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <h2 className="font-display font-bold text-lg bg-gradient-to-r from-primary-sky to-primary-bright-green bg-clip-text text-transparent">
                STAKE Digital
              </h2>
            </div>
            <p className="font-sans text-gray-400 text-xs leading-relaxed">
              Premium out-of-home advertising solutions. Your brand, everywhere.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a href="#" className="w-7 h-7 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-sky hover:to-blue-500 hover:border-transparent transition-all duration-300 group">
                <Facebook className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-7 h-7 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-sky hover:to-blue-500 hover:border-transparent transition-all duration-300 group">
                <Instagram className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-7 h-7 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-sky hover:to-blue-500 hover:border-transparent transition-all duration-300 group">
                <Linkedin className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-7 h-7 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-sky hover:to-blue-500 hover:border-transparent transition-all duration-300 group">
                <Twitter className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Section 2: Services - Compact */}
          <div className="space-y-2">
            <h3 className="font-display font-semibold text-sm text-white flex items-center gap-2">
              <div className="w-1 h-3 bg-gradient-to-b from-primary-sky to-primary-bright-green rounded-full"></div>
              Services
            </h3>
            <nav className="flex flex-col space-y-1.5">
              <Link 
                href="/services/digital-screens" 
                className="group font-sans text-gray-400 hover:text-primary-sky transition-colors text-xs flex items-center gap-2"
              >
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                Digital Screens
              </Link>
              <Link 
                href="/services/billboards" 
                className="group font-sans text-gray-400 hover:text-primary-bright-green transition-colors text-xs flex items-center gap-2"
              >
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                Billboards
              </Link>
              <Link 
                href="/network" 
                className="group font-sans text-gray-400 hover:text-primary-sky transition-colors text-xs flex items-center gap-2"
              >
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                View Network
              </Link>
            </nav>
          </div>

          {/* Section 3: Quick Links - Compact */}
          <div className="space-y-2">
            <h3 className="font-display font-semibold text-sm text-white flex items-center gap-2">
              <div className="w-1 h-3 bg-gradient-to-b from-primary-bright-green to-primary-sky rounded-full"></div>
              Company
            </h3>
            <nav className="flex flex-col space-y-1.5">
              <Link 
                href="/" 
                className="group font-sans text-gray-400 hover:text-primary-sky transition-colors text-xs flex items-center gap-2"
              >
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                Home
              </Link>
              <Link 
                href="/about" 
                className="group font-sans text-gray-400 hover:text-primary-sky transition-colors text-xs flex items-center gap-2"
              >
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="group font-sans text-gray-400 hover:text-primary-sky transition-colors text-xs flex items-center gap-2"
              >
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                Contact
              </Link>
            </nav>
          </div>

          {/* Section 4: Contact Info - Compact */}
          <div className="space-y-2">
            <h3 className="font-display font-semibold text-sm text-white flex items-center gap-2">
              <div className="w-1 h-3 bg-gradient-to-b from-primary-sky to-primary-bright-green rounded-full"></div>
              Get In Touch
            </h3>
            <div className="flex flex-col space-y-1.5">
              <a 
                href="mailto:info@stakedigital.co.za" 
                className="group font-sans text-gray-400 hover:text-primary-sky transition-colors text-xs flex items-center gap-2"
              >
                <Mail className="w-3 h-3 group-hover:scale-110 transition-transform" />
                info@stakedigital.co.za
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 mt-1 px-4 py-2 bg-gradient-to-r from-primary-sky to-blue-500 text-white font-display font-bold text-xs rounded-lg hover:from-primary-sky hover:to-blue-600 transition-all duration-300 shadow-lg shadow-primary-sky/30 hover:shadow-primary-sky/50 hover:scale-105 group relative overflow-hidden"
              >
                <span className="relative z-10">Book Campaign</span>
                <Sparkles className="w-3 h-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar - Compact */}
      <div className="relative z-20 border-t border-white/10 backdrop-blur-sm bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="font-sans text-gray-500 text-[10px] sm:text-xs text-center sm:text-left">
              © 2025 Stake Digital Media (Pty) Ltd. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3 text-[10px] sm:text-xs">
              <Link href="/privacy" className="text-gray-500 hover:text-primary-sky transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="/terms" className="text-gray-500 hover:text-primary-sky transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
