'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Briefcase, Phone, Monitor, Megaphone } from 'lucide-react';

export default function MobileBottomNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: '/', icon: Home, label: 'Home', type: 'link' as const },
    { href: '/about', icon: Info, label: 'About', type: 'link' as const },
    { href: '/services', icon: Briefcase, label: 'Services', type: 'button' as const },
    { href: '/contact', icon: Phone, label: 'Contact', type: 'link' as const },
  ];

  const serviceOptions = [
    {
      href: '/services/digital-screens',
      icon: Monitor,
      label: 'Digital Screens',
      description: 'HD displays in high-traffic venues',
    },
    {
      href: '/services/billboards',
      icon: Megaphone,
      label: 'Billboards',
      description: 'Premium outdoor advertising',
    },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    if (path === '/services') {
      return pathname.startsWith('/services');
    }
    return pathname.startsWith(path);
  };

  const handleServicesClick = () => {
    setShowServicesMenu(!showServicesMenu);
  };

  const handleServiceOptionClick = () => {
    setShowServicesMenu(false);
  };

  return (
    <>
      {/* Services Menu Overlay */}
      {showServicesMenu && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setShowServicesMenu(false)}
        >
          <div
            className="absolute bottom-20 left-4 right-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-gradient-to-r from-primary-sky/10 to-primary-deep-blue/10 border-b border-gray-200">
              <h3 className="font-display font-bold text-lg text-secondary-dark">
                Choose a Service
              </h3>
              <p className="text-xs text-gray-600 mt-1">Select the service you want to explore</p>
            </div>
            <div className="p-2">
              {serviceOptions.map((service) => {
                const ServiceIcon = service.icon;
                const isServiceActive = pathname === service.href;
                
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={handleServiceOptionClick}
                    className={`
                      flex items-center gap-4 p-4 rounded-xl mb-2 transition-all duration-300
                      ${
                        isServiceActive
                          ? 'bg-gradient-to-r from-primary-sky/20 to-primary-deep-blue/20 border-2 border-primary-sky/50'
                          : 'hover:bg-gray-50 active:bg-gray-100 border-2 border-transparent'
                      }
                    `}
                  >
                    <div
                      className={`
                        p-3 rounded-xl transition-all duration-300
                        ${
                          isServiceActive
                            ? 'bg-gradient-to-br from-primary-sky to-primary-deep-blue shadow-lg'
                            : 'bg-gray-100'
                        }
                      `}
                    >
                      <ServiceIcon
                        className={`w-6 h-6 ${
                          isServiceActive ? 'text-white' : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-display font-bold text-base ${
                          isServiceActive ? 'text-primary-deep-blue' : 'text-secondary-dark'
                        }`}
                      >
                        {service.label}
                      </h4>
                      <p className="text-xs text-gray-600">{service.description}</p>
                    </div>
                    {isServiceActive && (
                      <div className="w-2 h-2 bg-primary-sky rounded-full animate-pulse"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <nav
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Backdrop Blur Container */}
        <div className="relative">
        {/* Gradient Border Top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-sky to-transparent opacity-50"></div>
        
        {/* Main Navigation */}
        <div className="bg-white/80 backdrop-blur-xl border-t border-gray-200/50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-around px-2 py-2 safe-area-inset-bottom">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              
              const content = (
                <>
                  {/* Active Indicator - Floating pill */}
                  {active && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-sky/10 to-primary-deep-blue/10 rounded-2xl scale-95 transition-transform duration-300"></div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary-sky to-primary-deep-blue rounded-full shadow-lg"></div>
                    </>
                  )}
                  
                  {/* Icon Container */}
                  <div className="relative z-10">
                    <div
                      className={`
                        relative p-2 rounded-xl transition-all duration-300
                        ${
                          active
                            ? 'bg-gradient-to-br from-primary-sky to-primary-deep-blue shadow-lg shadow-primary-sky/30 scale-110'
                            : 'bg-transparent group-hover:bg-gray-100 group-active:scale-95'
                        }
                      `}
                    >
                      <Icon
                        className={`
                          w-5 h-5 transition-all duration-300
                          ${
                            active
                              ? 'text-white'
                              : 'text-gray-600 group-hover:text-primary-sky'
                          }
                        `}
                      />
                      
                      {/* Ripple effect on tap */}
                      {!active && (
                        <div className="absolute inset-0 rounded-xl bg-primary-sky/0 group-active:bg-primary-sky/20 transition-colors duration-150"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <span
                    className={`
                      relative z-10 text-[10px] font-semibold transition-all duration-300 whitespace-nowrap
                      ${
                        active
                          ? 'text-primary-deep-blue font-bold'
                          : 'text-gray-600 group-hover:text-primary-sky'
                      }
                    `}
                  >
                    {item.label}
                  </span>
                  
                  {/* Glow effect for active item */}
                  {active && (
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-sky/10 to-transparent rounded-2xl blur-sm"></div>
                  )}
                </>
              );

              if (item.type === 'button') {
                return (
                  <button
                    key={item.href}
                    onClick={handleServicesClick}
                    className="relative flex flex-col items-center justify-center gap-1 py-2 px-3 min-w-[60px] group"
                  >
                    {content}
                  </button>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex flex-col items-center justify-center gap-1 py-2 px-3 min-w-[60px] group"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Safe area for devices with home indicator */}
        <div className="bg-white/80 backdrop-blur-xl h-safe-area-inset-bottom"></div>
      </div>
      </nav>
    </>
  );
}
