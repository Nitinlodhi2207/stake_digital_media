'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Download, ArrowRight } from 'lucide-react';

interface LeadCaptureModalProps {
  showAfterScroll?: number;
  intervalSeconds?: number;
  maxShows?: number;
}

export default function LeadCaptureModal({
  showAfterScroll = 50,
  intervalSeconds = 30,
  maxShows = 3,
}: LeadCaptureModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check if user has already submitted
    const submitted = localStorage.getItem('leadModalSubmitted');
    
    if (submitted) {
      return;
    }

    // Get the current show count from localStorage
    const storedShowCount = localStorage.getItem('leadModalShowCount');
    const currentShowCount = storedShowCount ? parseInt(storedShowCount, 10) : 0;

    // If we've already shown the modal maxShows times, don't show again
    if (currentShowCount >= maxShows) {
      return;
    }

    let intervalId: NodeJS.Timeout;

    // Check scroll depth
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= showAfterScroll && !hasScrolledEnough) {
        setHasScrolledEnough(true);
        
        // Show modal immediately when scroll threshold is reached
        if (currentShowCount < maxShows) {
          setIsOpen(true);
          const newShowCount = currentShowCount + 1;
          localStorage.setItem('leadModalShowCount', newShowCount.toString());
          
          // Set up interval to show modal again every intervalSeconds
          if (newShowCount < maxShows) {
            intervalId = setInterval(() => {
              const latestShowCount = parseInt(localStorage.getItem('leadModalShowCount') || '0', 10);
              const submitted = localStorage.getItem('leadModalSubmitted');
              
              if (latestShowCount < maxShows && !submitted) {
                setIsOpen(true);
                const updatedShowCount = latestShowCount + 1;
                localStorage.setItem('leadModalShowCount', updatedShowCount.toString());
                
                // Clear interval if we've reached max shows
                if (updatedShowCount >= maxShows) {
                  clearInterval(intervalId);
                }
              } else {
                clearInterval(intervalId);
              }
            }, intervalSeconds * 1000);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (intervalId) clearInterval(intervalId);
    };
  }, [showAfterScroll, intervalSeconds, maxShows, hasScrolledEnough]);

  const handleClose = () => {
    setIsOpen(false);
    // Don't mark as dismissed permanently, just close this instance
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - Replace with your actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Store submission in localStorage to prevent future popups
    localStorage.setItem('leadModalSubmitted', 'true');
    setIsSuccess(true);
    setIsSubmitting(false);

    // Close modal after showing success message
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-md bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white transition-colors duration-200 shadow-sm"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>

            {/* Success State */}
            {isSuccess ? (
              <div className="p-6 sm:p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary-bright-green to-primary-deep-green rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-secondary-dark mb-2 sm:mb-3">
                  Thank You!
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  We&apos;ve received your information. Our team will contact you shortly.
                </p>
                <p className="text-xs sm:text-sm text-primary-bright-green font-semibold">
                  Check your email for our media kit!
                </p>
              </div>
            ) : (
              <>
                {/* Header with Gradient */}
                <div className="relative bg-gradient-to-br from-primary-sky to-primary-deep-blue p-4 sm:p-6 pb-6 sm:pb-8">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl sm:blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-primary-bright-green/20 rounded-full blur-xl sm:blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-2 sm:mb-3">
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      <span className="text-[10px] sm:text-xs font-bold text-white">FREE DOWNLOAD</span>
                    </div>
                    <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3">
                      Get Your Free Media Kit
                    </h2>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                      Premium advertising opportunities across South Africa.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-primary-sky focus:outline-none focus:ring-2 focus:ring-primary-sky/20 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5"
                    >
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-primary-sky focus:outline-none focus:ring-2 focus:ring-primary-sky/20 transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company Input */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-primary-sky focus:outline-none focus:ring-2 focus:ring-primary-sky/20 transition-all duration-200"
                      placeholder="Your Company (Optional)"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-primary-sky to-primary-deep-blue text-white font-bold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-primary-sky/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Download Media Kit</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="text-[10px] sm:text-xs text-gray-500 text-center leading-tight sm:leading-normal">
                    We respect your privacy. By submitting, you agree to our{' '}
                    <a href="/privacy" className="text-primary-sky hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
