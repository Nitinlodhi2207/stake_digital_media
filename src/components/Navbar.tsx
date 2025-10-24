'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-md shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo with Animation */}
          <Link 
            href="/" 
            className="flex items-center group relative"
            onClick={closeMobileMenu}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-sky/20 to-primary-bright-green/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
            <Image 
              src="/logo.svg" 
              alt="Stake Digital Media" 
              width={48} 
              height={48}
              className="h-12 lg:h-12 w-auto relative z-10 transform group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              href="/" 
              className="relative px-4 py-2 font-display text-sm font-bold text-secondary-dark hover:text-primary-sky transition-colors group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="relative px-4 py-2 font-display text-sm font-bold text-secondary-dark hover:text-primary-sky transition-colors flex items-center gap-1"
              >
                <span className="relative z-10">Services</span>
                <ChevronDown className="w-4 h-4 relative z-10 group-hover:rotate-180 transition-transform duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-300 overflow-hidden">
                <div className="p-2 space-y-1">
                  <Link 
                    href="/services/digital-screens" 
                    className="block px-4 py-3 font-display text-sm font-semibold text-secondary-dark rounded-lg hover:bg-gradient-to-r hover:from-primary-sky hover:to-blue-500 hover:text-white transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 group-hover/item:animate-pulse" />
                      <span>Digital Screens</span>
                    </div>
                  </Link>
                  <Link 
                    href="/services/billboards" 
                    className="block px-4 py-3 font-display text-sm font-semibold text-secondary-dark rounded-lg hover:bg-gradient-to-r hover:from-primary-bright-green hover:to-emerald-500 hover:text-white transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 group-hover/item:animate-pulse" />
                      <span>Billboards</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              className="relative px-4 py-2 font-display text-sm font-bold text-secondary-dark hover:text-primary-sky transition-colors group"
            >
              <span className="relative z-10">About Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>

            <Link 
              href="/contact" 
              className="relative px-4 py-2 font-display text-sm font-bold text-secondary-dark hover:text-primary-sky transition-colors group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>
          </div>

          {/* CTA Button - Desktop only */}
          <Link 
            href="/contact" 
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-sky to-blue-500 text-white font-display font-bold text-sm rounded-lg hover:from-primary-sky hover:to-blue-600 transition-all duration-300 shadow-lg shadow-primary-sky/30 hover:shadow-primary-sky/50 hover:scale-105 group relative overflow-hidden"
          >
            <span className="relative z-10">Book Campaign</span>
            <Sparkles className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </Link>

          {/* Mobile - Attractive UI Element replacing hamburger */}
          <div className="lg:hidden">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-primary-sky to-blue-500 text-white font-display font-bold text-xs rounded-lg hover:shadow-lg hover:shadow-primary-sky/30 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <Sparkles className="w-3.5 h-3.5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu with Modern Design - Not needed anymore */}
      {isMobileMenuOpen && (
        <div className="hidden fixed inset-0 top-14 bg-gradient-to-br from-white via-gray-50 to-white z-40 lg:hidden overflow-y-auto backdrop-blur-xl">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-sky/10 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-bright-green/10 rounded-full blur-3xl animate-float-slower"></div>
          </div>

          <div className="relative flex flex-col items-center justify-center min-h-full px-6 py-8 space-y-4">
            <Link 
              href="/" 
              className="group relative px-6 py-3 font-display text-xl font-semibold text-secondary-dark hover:text-primary-sky transition-colors"
              onClick={closeMobileMenu}
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>

            {/* Mobile Services Section */}
            <div className="flex flex-col items-center space-y-3 w-full">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="group relative px-6 py-3 font-display text-xl font-semibold text-secondary-dark hover:text-primary-sky transition-colors flex items-center gap-2"
              >
                <span className="relative z-10">Services</span>
                <ChevronDown className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </button>
              
              {isServicesOpen && (
                <div className="flex flex-col items-center space-y-2 w-full max-w-xs animate-fadeIn">
                  <Link 
                    href="/services/digital-screens" 
                    className="group w-full text-center px-6 py-3 font-display text-base font-semibold text-secondary-dark rounded-lg hover:bg-gradient-to-r hover:from-primary-sky hover:to-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={closeMobileMenu}
                  >
                    <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                    <span>Digital Screens</span>
                  </Link>
                  <Link 
                    href="/services/billboards" 
                    className="group w-full text-center px-6 py-3 font-display text-base font-semibold text-secondary-dark rounded-lg hover:bg-gradient-to-r hover:from-primary-bright-green hover:to-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={closeMobileMenu}
                  >
                    <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                    <span>Billboards</span>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className="group relative px-6 py-3 font-display text-xl font-semibold text-secondary-dark hover:text-primary-sky transition-colors"
              onClick={closeMobileMenu}
            >
              <span className="relative z-10">About Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>

            <Link 
              href="/contact" 
              className="group relative px-6 py-3 font-display text-xl font-semibold text-secondary-dark hover:text-primary-sky transition-colors"
              onClick={closeMobileMenu}
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-bright-green/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>

            {/* Mobile CTA Button */}
            <Link 
              href="/contact" 
              className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-sky to-blue-500 text-white font-display font-bold text-lg rounded-xl hover:from-primary-sky hover:to-blue-600 transition-all duration-300 shadow-xl shadow-primary-sky/30 hover:shadow-primary-sky/50 hover:scale-105 group relative overflow-hidden"
              onClick={closeMobileMenu}
            >
              <span className="relative z-10">Book a Campaign</span>
              <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
