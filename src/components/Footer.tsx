'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { 
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Track scroll for back to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "#E4405F" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn", color: "#0077B5" },
    { icon: FaYoutube, href: "#", label: "YouTube", color: "#FF0000" },
    { icon: FaWhatsapp, href: "#", label: "WhatsApp", color: "#25D366" }
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services/digital-screens", label: "Digital Screens" },
    { href: "/services/billboards", label: "Billboards" },
    { href: "/contact", label: "Contact" }
  ];

  const services = [
    { href: "/services/digital-screens", label: "Digital Screen Network", icon: Zap },
    { href: "/services/billboards", label: "Billboard Division", icon: Target },
    { href: "/contact", label: "Campaign Planning", icon: Sparkles }
  ];

  return (
    <>
      <footer 
        ref={footerRef}
        className="relative bg-gradient-to-br from-[#0F1419] via-[#1a2332] to-[#0F1419] text-white overflow-hidden z-10 pb-20 lg:pb-0"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-5 left-10 w-24 h-24 bg-gradient-to-r from-[#0BB4E4] to-[#6DCE2E] rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[#0064C8] to-[#4BA948] rounded-full blur-3xl animate-float-slower"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1419]/95 via-[#0F1419]/80 to-[#0F1419]/60"></div>

        <motion.div
          className="relative z-10 container mx-auto px-4 py-6 lg:py-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-6 items-start flex-1">
            {/* Brand Section */}
            <motion.div 
              className="col-span-4"
              variants={itemVariants}
            >
              {/* Logo */}
              <div className="mb-4">
                <Image
                  src="/logo.svg"
                  alt="Stake Digital Media"
                  width={200}
                  height={80}
                  className="h-14 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              {/* Highlighted Description */}
              <div className="relative mb-4">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0BB4E4] to-[#6DCE2E] rounded-full"></div>
                <p className="text-sm text-gray-300 leading-relaxed pl-2">
                  <span className="font-semibold text-white">Stake Digital Media</span>
                  <br />
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#0BB4E4]/20 via-[#6DCE2E]/20 to-[#0BB4E4]/20 bg-[length:200%_100%] animate-gradient-shift rounded px-1 -mx-1"></span>
                    <span className="relative bg-gradient-to-r from-[#0BB4E4] via-[#6DCE2E] to-[#0BB4E4] bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-shift font-semibold">
                      A division of Keys Communication
                    </span>
                  </span>
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <a 
                  href="mailto:info@stakedigital.co.za" 
                  className="flex items-center text-gray-400 hover:text-[#0BB4E4] transition-colors duration-300 cursor-pointer group"
                >
                  <Mail className="w-4 h-4 mr-2 text-[#0BB4E4] group-hover:scale-110 transition-transform" />
                  info@stakedigital.co.za
                </a>
                <a 
                  href="tel:+27766400024"
                  className="flex items-center text-gray-400 cursor-pointer hover:text-[#6DCE2E] transition-colors duration-300 group"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#6DCE2E] group-hover:scale-110 transition-transform" />
                  <span>+27 76 640 0024</span>
                </a>
                <div className="flex items-start text-gray-400">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 text-[#0BB4E4] flex-shrink-0" />
                  <span className="text-xs">Johannesburg, Gauteng, South Africa</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="col-span-2"
              variants={itemVariants}
            >
              <h4 className="text-sm font-semibold mb-3 text-white flex items-center">
                <div className="w-1.5 h-1.5 bg-[#0BB4E4] rounded-full mr-2"></div>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#0BB4E4] transition-all duration-300 flex items-center group cursor-pointer"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div 
              className="col-span-3"
              variants={itemVariants}
            >
              <h4 className="text-sm font-semibold mb-3 text-white flex items-center">
                <div className="w-1.5 h-1.5 bg-[#6DCE2E] rounded-full mr-2"></div>
                Our Services
              </h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={service.href}
                      className="text-sm text-gray-400 hover:text-white transition-all duration-300 flex items-center group p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 cursor-pointer"
                    >
                      <service.icon className="w-4 h-4 mr-2 text-[#0BB4E4] group-hover:text-[#6DCE2E] transition-colors duration-300" />
                      <span className="group-hover:font-medium transition-all duration-300">
                        {service.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media & CTA */}
            <motion.div 
              className="col-span-3"
              variants={itemVariants}
            >
              <h4 className="text-sm font-semibold mb-3 text-white flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#0BB4E4] to-[#6DCE2E] rounded-full mr-2"></div>
                Connect
              </h4>
              
              {/* Social Icons */}
              <div className="grid grid-cols-6 gap-2 mb-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300 group border border-white/5 cursor-pointer"
                    whileHover={{ 
                      scale: 1.15,
                      backgroundColor: social.color + '15'
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon 
                      className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" 
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#0BB4E4] to-[#6DCE2E] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#0BB4E4]/30 transition-all duration-300 group cursor-pointer"
                >
                  Start Campaign
                  <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-4 mb-3">
              {/* Brand Section - Mobile */}
              <motion.div variants={itemVariants} className="col-span-2">
                <div className="flex items-start justify-between mb-4">
                  {/* Logo */}
                  <div>
                    <Image
                      src="/logo.svg"
                      alt="Stake Digital Media"
                      width={140}
                      height={50}
                      className="h-10 w-auto mb-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                  
                  {/* Mobile CTA */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0BB4E4] to-[#6DCE2E] text-white text-xs font-semibold rounded-lg hover:shadow-lg hover:shadow-[#0BB4E4]/30 transition-all duration-300 cursor-pointer"
                    >
                      Start
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </motion.div>
                </div>

                {/* Centered Company Name & Tagline with Advanced Styling */}
                <div className="text-center py-3 px-2 relative">
                  {/* Decorative Elements */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#0BB4E4] to-transparent"></div>
                  
                  {/* Company Name with Glow Effect */}
                  <motion.div
                    className="relative mb-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-sm font-bold tracking-wide relative inline-block">
                      {/* Glow Background */}
                      <span className="absolute inset-0 bg-gradient-to-r from-[#0BB4E4] via-[#6DCE2E] to-[#0BB4E4] blur-lg opacity-30 animate-pulse"></span>
                      
                      {/* Main Text with Gradient */}
                      <span className="relative bg-gradient-to-r from-[#0BB4E4] via-white to-[#6DCE2E] bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-shift font-extrabold">
                        Stake Digital Media
                      </span>
                    </h3>
                  </motion.div>

                  {/* Animated Divider */}
                  <div className="flex items-center justify-center mb-2">
                    <motion.div 
                      className="h-px w-8 bg-gradient-to-r from-transparent via-[#0BB4E4] to-transparent"
                      animate={{ 
                        scaleX: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    ></motion.div>
                    <div className="mx-2 w-1 h-1 rounded-full bg-[#0BB4E4] animate-pulse"></div>
                    <motion.div 
                      className="h-px w-8 bg-gradient-to-r from-transparent via-[#6DCE2E] to-transparent"
                      animate={{ 
                        scaleX: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    ></motion.div>
                  </div>

                  {/* Tagline with Premium Styling */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {/* Premium Background Card */}
                    <div className="relative inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-[#0BB4E4]/10 via-[#6DCE2E]/10 to-[#0BB4E4]/10 backdrop-blur-sm border border-[#0BB4E4]/20">
                      {/* Animated Border Glow */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0BB4E4] via-[#6DCE2E] to-[#0BB4E4] opacity-20 blur-sm animate-pulse"></div>
                      
                      {/* Tagline Text */}
                      <p className="relative text-xs font-semibold tracking-wider">
                        <span className="inline-block">
                          <span className="bg-gradient-to-r from-[#0BB4E4] via-[#6DCE2E] to-[#0BB4E4] bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-shift">
                            A division of
                          </span>
                        </span>
                        {" "}
                        <span className="inline-block">
                          <span className="relative">
                            <span className="absolute inset-0 bg-gradient-to-r from-[#6DCE2E] to-[#0BB4E4] blur-md opacity-40"></span>
                            <span className="relative text-white font-bold drop-shadow-[0_0_8px_rgba(11,180,228,0.5)]">
                              Keys Communication
                            </span>
                          </span>
                        </span>
                      </p>

                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#0BB4E4] rounded-tl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#6DCE2E] rounded-br-lg"></div>
                    </div>
                  </motion.div>

                  {/* Bottom Decorative Line */}
                  <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#6DCE2E] to-transparent"></div>
                </div>
              </motion.div>

              {/* Mobile Quick Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xs font-semibold mb-2.5 text-white flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#0BB4E4] rounded-full mr-2"></div>
                  Quick Links
                </h4>
                <ul className="space-y-1.5">
                  {quickLinks.slice(0, 3).map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-[#0BB4E4] transition-colors duration-300 cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Mobile Services */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xs font-semibold mb-2.5 text-white flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#6DCE2E] rounded-full mr-2"></div>
                  Services
                </h4>
                <ul className="space-y-1.5">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="text-xs text-gray-400 hover:text-white transition-colors duration-300 flex items-center cursor-pointer"
                      >
                        <service.icon className="w-3.5 h-3.5 mr-1.5 text-[#0BB4E4]" />
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Mobile Contact & Social */}
              <motion.div variants={itemVariants} className="col-span-2">
                {/* Contact Info */}
                <div className="flex flex-col gap-2 text-xs mb-3">
                  <a 
                    href="mailto:info@stakedigital.co.za" 
                    className="flex items-center text-gray-400 hover:text-[#0BB4E4] transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 mr-2 text-[#0BB4E4]" />
                    info@stakedigital.co.za
                  </a>
                  <a 
                    href="tel:+27766400024"
                    className="flex items-center text-gray-400 hover:text-[#6DCE2E] transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2 text-[#6DCE2E]" />
                    <span>+27 76 640 0024</span>
                  </a>
                </div>

                {/* Mobile Social Icons */}
                <div className="flex gap-2.5">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-9 h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/5 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" style={{ color: social.color }} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Copyright Section */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-white/5 pt-2.5 mt-3"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-[10px] lg:text-xs">
              <p className="text-gray-500 text-center md:text-left">
                © {new Date().getFullYear()} Stake Digital Media. All rights reserved.
              </p>
              <div className="flex space-x-3 lg:space-x-4">
                <Link href="/privacy" className="text-gray-500 hover:text-[#0BB4E4] transition-colors duration-300 cursor-pointer">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-[#0BB4E4] transition-colors duration-300 cursor-pointer">
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-[#0BB4E4] to-[#6DCE2E] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#0BB4E4]/30 transition-all duration-300 cursor-pointer ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
        onClick={scrollToTop}
        whileHover={{ 
          scale: 1.15,
          rotate: 360
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5 mx-auto" />
      </motion.button>
    </>
  );
};

export default Footer;