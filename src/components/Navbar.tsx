'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // Close services dropdown when toggling mobile menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
            onClick={closeMobileMenu}
          >
            <Image 
              src="/logo.svg" 
              alt="Stake Digital Media" 
              width={240} 
              height={60}
              className="h-12 lg:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="font-display text-secondary-dark hover:text-primary-sky transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="font-display text-secondary-dark hover:text-primary-sky transition-colors flex items-center gap-1"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link 
                  href="/services/digital-screens" 
                  className="block px-4 py-3 font-display text-secondary-dark hover:bg-primary-sky hover:text-white transition-colors"
                >
                  Digital Screens
                </Link>
                <Link 
                  href="/services/billboards" 
                  className="block px-4 py-3 font-display text-secondary-dark hover:bg-primary-sky hover:text-white transition-colors"
                >
                  Billboards
                </Link>
              </div>
            </div>

            <Link 
              href="/network" 
              className="font-display text-secondary-dark hover:text-primary-sky transition-colors"
            >
              Our Network
            </Link>

            <Link 
              href="/about" 
              className="font-display text-secondary-dark hover:text-primary-sky transition-colors"
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className="font-display text-secondary-dark hover:text-primary-sky transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop only */}
          <Link 
            href="/contact" 
            className="hidden lg:inline-block px-6 py-3 bg-primary-sky text-white font-display font-semibold rounded-md hover:bg-primary-deep-blue transition-colors shadow-md hover:shadow-lg"
          >
            Book a Campaign
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-secondary-dark hover:text-primary-sky transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-14 bg-white z-40 lg:hidden overflow-y-auto">
          <div className="flex flex-col items-center justify-center min-h-full px-4 py-8 space-y-6">
            <Link 
              href="/" 
              className="font-display text-2xl text-secondary-dark hover:text-primary-sky transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            {/* Mobile Services Section */}
            <div className="flex flex-col items-center space-y-4 w-full">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="font-display text-2xl text-secondary-dark hover:text-primary-sky transition-colors flex items-center gap-2"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="flex flex-col items-center space-y-3 pl-4">
                  <Link 
                    href="/services/digital-screens" 
                    className="font-display text-xl text-secondary-dark hover:text-primary-sky transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Digital Screens
                  </Link>
                  <Link 
                    href="/services/billboards" 
                    className="font-display text-xl text-secondary-dark hover:text-primary-sky transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Billboards
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/network" 
              className="font-display text-2xl text-secondary-dark hover:text-primary-sky transition-colors"
              onClick={closeMobileMenu}
            >
              Our Network
            </Link>

            <Link 
              href="/about" 
              className="font-display text-2xl text-secondary-dark hover:text-primary-sky transition-colors"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className="font-display text-2xl text-secondary-dark hover:text-primary-sky transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>

            {/* Mobile CTA Button */}
            <Link 
              href="/contact" 
              className="mt-8 px-8 py-4 bg-primary-sky text-white font-display font-semibold text-xl rounded-md hover:bg-primary-deep-blue transition-colors shadow-md"
              onClick={closeMobileMenu}
            >
              Book a Campaign
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
