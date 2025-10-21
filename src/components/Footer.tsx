import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Mobile: Single column, Desktop: Multi-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Section 1: Logo & About */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-primary-sky">
              STAKE Digital Media
            </h2>
            <p className="font-sans text-gray-300 text-sm leading-relaxed">
              Your Brand, Everywhere.
            </p>
            <p className="font-sans text-gray-400 text-sm leading-relaxed">
              Premium out-of-home advertising solutions across South Africa. From digital screens to billboards, we deliver measurable results.
            </p>
          </div>

          {/* Section 2: Services */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">
              Services
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/services/digital-screens" 
                className="font-sans text-gray-300 hover:text-primary-sky transition-colors text-sm"
              >
                Digital Screens
              </Link>
              <Link 
                href="/services/billboards" 
                className="font-sans text-gray-300 hover:text-primary-sky transition-colors text-sm"
              >
                Billboards
              </Link>
              <Link 
                href="/network" 
                className="font-sans text-gray-300 hover:text-primary-sky transition-colors text-sm"
              >
                View Our Network
              </Link>
            </nav>
          </div>

          {/* Section 3: Quick Links (Company) */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">
              Company
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="font-sans text-gray-300 hover:text-primary-sky transition-colors text-sm"
              >
                Home
              </Link>
              <Link 
                href="/network" 
                className="font-sans text-gray-300 hover:text-primary-sky transition-colors text-sm"
              >
                Our Network
              </Link>
              <Link 
                href="/about" 
                className="font-sans text-gray-300 hover:text-primary-sky transition-colors text-sm"
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="font-sans text-gray-300 hover:text-primary-sky transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Section 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:info@stakedigital.co.za" 
                className="font-sans text-gray-300 hover:text-primary-sky transition-colors text-sm"
              >
                info@stakedigital.co.za
              </a>
              <Link 
                href="/contact" 
                className="inline-block mt-2 px-6 py-3 bg-primary-sky text-white font-display font-semibold text-sm rounded-md hover:bg-primary-deep-blue transition-colors shadow-md hover:shadow-lg"
              >
                Book a Campaign
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="font-sans text-gray-400 text-sm text-center">
            Copyright © 2025 Stake Digital Media (Pty) Ltd – All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
