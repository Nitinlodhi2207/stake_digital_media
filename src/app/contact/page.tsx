'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Clock,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  User,
  Building2,
  MessageSquare,
  Sparkles,
  Zap,
  TrendingUp
} from 'lucide-react';

// Animated section component
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Floating orb background
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary-sky/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-40 right-10 w-56 h-56 md:w-96 md:h-96 bg-primary-deep-blue/20 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute bottom-20 left-1/3 w-52 h-52 md:w-80 md:h-80 bg-primary-bright-green/20 rounded-full blur-3xl animate-float-slow" />
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending contact form:', error);
      setFormStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@stakedigital.co.za',
      href: 'mailto:info@stakedigital.co.za',
      gradient: 'from-primary-sky to-primary-deep-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 76 640 0024',
      href: 'tel:+27766400024',
      gradient: 'from-primary-deep-blue to-primary-bright-green'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Johannesburg, South Africa',
      href: 'https://maps.google.com',
      gradient: 'from-primary-bright-green to-primary-deep-green'
    }
  ];

  const services = [
    { value: 'digital-screens', label: 'Digital Screens', icon: '📺' },
    { value: 'billboards', label: 'Billboards', icon: '🗺️' },
    { value: 'both', label: 'Both Services', icon: '⚡' },
    { value: 'consultation', label: 'Consultation', icon: '💡' }
  ];

  const quickLinks = [
    { icon: Zap, label: 'Fast Response', description: 'Within 24 hours' },
    { icon: TrendingUp, label: 'ROI Focused', description: 'Measurable results' },
    { icon: Sparkles, label: 'Premium Service', description: 'White-glove treatment' }
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-dark via-primary-deep-blue to-secondary-dark py-24 sm:py-32 md:py-20 lg:py-0">
        <FloatingOrbs />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-block px-4 py-2 md:px-6 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs md:text-sm font-semibold tracking-wider">
              LET&apos;S WORK TOGETHER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-2"
          >
            Let&apos;s Create
            <span className="block mt-2 bg-gradient-to-r from-primary-sky via-primary-bright-green to-primary-sky bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto]">
              Something Amazing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mb-8 sm:mb-12 md:mb-8"
          >
            Ready to amplify your brand? Get in touch with our team and start your journey to maximum visibility.
          </motion.p>

          {/* Scroll indicator - visible on desktop only - REMOVED */}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-8 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 md:gap-12">
            {/* Left Column - Contact Info & Quick Links (Compact Mobile) */}
            <div className="lg:col-span-2 space-y-4 md:space-y-8">
              {/* Contact Information Cards */}
              <AnimatedSection>
                <h2 className="text-xl md:text-2xl font-bold text-secondary-dark mb-4 md:mb-6">Get In Touch</h2>
                <div className="space-y-3 md:space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={index}
                        href={item.href}
                        target={item.icon === MapPin ? '_blank' : undefined}
                        rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className={`group flex items-center gap-3 md:gap-4 p-3 md:p-5 rounded-xl md:rounded-2xl bg-white border-2 border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${item.gradient}" />
                        
                        <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg relative z-10`}>
                          <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        
                        <div className="flex-1 relative z-10">
                          <div className="text-xs md:text-sm text-gray-600 font-semibold">{item.label}</div>
                          <div className="text-sm md:text-base font-bold text-secondary-dark group-hover:text-primary-deep-blue transition-colors">
                            {item.value}
                          </div>
                        </div>

                        <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-primary-sky group-hover:translate-x-1 transition-all relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.a>
                    );
                  })}
                </div>
              </AnimatedSection>

              {/* Business Hours - Compact Mobile */}
              <AnimatedSection delay={0.3}>
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary-sky/10 to-primary-deep-blue/10 border-2 border-primary-sky/20">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary-deep-blue" />
                    <h3 className="text-base md:text-lg font-bold text-secondary-dark">Business Hours</h3>
                  </div>
                  <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-semibold text-secondary-dark">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-semibold text-secondary-dark">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-semibold text-secondary-dark">Closed</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Links - Hidden on smallest mobile, compact on tablet */}
              <AnimatedSection delay={0.4} className="hidden sm:block">
                <h3 className="text-base md:text-lg font-bold text-secondary-dark mb-3 md:mb-4">Why Choose Us</h3>
                <div className="space-y-2 md:space-y-3">
                  {quickLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3 p-2 md:p-3 rounded-lg bg-white border border-gray-200"
                      >
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary-sky flex-shrink-0" />
                        <div>
                          <div className="text-xs md:text-sm font-bold text-secondary-dark">{link.label}</div>
                          <div className="text-xs text-gray-600">{link.description}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </AnimatedSection>

              {/* Social Links - Compact */}
              <AnimatedSection delay={0.5} className="hidden md:block">
                <h3 className="text-lg font-bold text-secondary-dark mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: '#', color: 'hover:bg-blue-600' },
                    { icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
                    { icon: Facebook, href: '#', color: 'hover:bg-blue-700' },
                    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-3 rounded-xl bg-gray-100 text-gray-600 ${social.color} hover:text-white transition-all duration-300`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Contact Form (Compact Mobile) */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="sticky top-20">
                  <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border-2 border-gray-100 p-4 md:p-8 lg:p-10">
                    <div className="mb-4 md:mb-8">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-dark mb-2 md:mb-3">
                        Book Your
                        <span className="block bg-gradient-to-r from-primary-sky to-primary-deep-blue bg-clip-text text-transparent">
                          Campaign Today
                        </span>
                      </h2>
                      <p className="text-sm md:text-base text-gray-600">
                        Fill out the form below and our team will get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      {/* Name & Email Row - Stack on mobile */}
                      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:border-primary-sky focus:ring-4 focus:ring-primary-sky/10 transition-all outline-none"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:border-primary-sky focus:ring-4 focus:ring-primary-sky/10 transition-all outline-none"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone & Company Row - Stack on mobile */}
                      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:border-primary-sky focus:ring-4 focus:ring-primary-sky/10 transition-all outline-none"
                              placeholder="+27 76 640 0024"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                            Company Name
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:border-primary-sky focus:ring-4 focus:ring-primary-sky/10 transition-all outline-none"
                              placeholder="Your Company"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Service Selection - Compact buttons */}
                      <div>
                        <label htmlFor="service" className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                          Service Interest *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                          {services.map((service) => (
                            <button
                              key={service.value}
                              type="button"
                              onClick={() => setFormData({ ...formData, service: service.value })}
                              className={`p-2.5 md:p-3 rounded-lg md:rounded-xl border-2 transition-all duration-300 text-left ${
                                formData.service === service.value
                                  ? 'border-primary-sky bg-primary-sky/10 shadow-lg'
                                  : 'border-gray-200 hover:border-primary-sky/50 hover:bg-gray-50'
                              }`}
                            >
                              <div className="text-lg md:text-2xl mb-0.5 md:mb-1">{service.icon}</div>
                              <div className={`text-[10px] md:text-xs font-semibold ${
                                formData.service === service.value ? 'text-primary-deep-blue' : 'text-gray-700'
                              }`}>
                                {service.label}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message - Compact on mobile */}
                      <div>
                        <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                          Your Message *
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 text-sm md:text-base border-2 border-gray-200 rounded-xl focus:border-primary-sky focus:ring-4 focus:ring-primary-sky/10 transition-all outline-none resize-none"
                            placeholder="Tell us about your campaign goals..."
                          />
                        </div>
                      </div>

                      {/* Submit Button - Full width on mobile */}
                      <motion.button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 md:py-4 px-6 md:px-8 bg-gradient-to-r from-primary-sky to-primary-deep-blue text-white font-bold text-sm md:text-base rounded-xl hover:shadow-[0_0_30px_rgba(11,180,228,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {formStatus === 'sending' ? (
                            <>
                              <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : formStatus === 'success' ? (
                            <>
                              <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                              Message Sent!
                            </>
                          ) : formStatus === 'error' ? (
                            <>
                              <AlertCircle className="w-4 h-4 md:w-5 md:h-5" />
                              Try Again
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      </motion.button>

                      {/* Status Messages */}
                      {formStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 md:p-4 bg-green-50 border-2 border-green-200 rounded-xl"
                        >
                          <div className="flex items-start gap-2 md:gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm md:text-base font-semibold text-green-900">Success!</div>
                              <div className="text-xs md:text-sm text-green-700">Your message has been sent. We&apos;ll get back to you within 24 hours.</div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {formStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 md:p-4 bg-red-50 border-2 border-red-200 rounded-xl"
                        >
                          <div className="flex items-start gap-2 md:gap-3">
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm md:text-base font-semibold text-red-900">Error!</div>
                              <div className="text-xs md:text-sm text-red-700">{errorMessage}</div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </form>

                    {/* Trust Indicators - Compact */}
                    <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t-2 border-gray-100">
                      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-xs md:text-sm text-gray-600">24h Response Time</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary-sky" />
                          <span className="text-xs md:text-sm text-gray-600">No Obligation Quote</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary-bright-green" />
                          <span className="text-xs md:text-sm text-gray-600">Nationwide Coverage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Compact mobile */}
      <AnimatedSection>
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-dark mb-3 md:mb-4">
                Common
                <span className="block bg-gradient-to-r from-primary-sky to-primary-bright-green bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-sm md:text-base text-gray-600">Quick answers to questions you might have</p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {[
                {
                  q: 'How quickly can I start my campaign?',
                  a: 'Most campaigns can be launched within 48-72 hours after creative approval and payment confirmation.'
                },
                {
                  q: 'What are the minimum campaign durations?',
                  a: 'We offer flexible options starting from 1 week for digital screens and 1 month for billboards.'
                },
                {
                  q: 'Do you provide creative design services?',
                  a: 'Yes! Our team can help design compelling creative that maximizes impact on our digital and static formats.'
                },
                {
                  q: 'How do you measure campaign performance?',
                  a: 'We provide detailed traffic reports, impression counts, and optional QR code tracking for digital campaigns.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-primary-sky/50 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-sm md:text-base font-bold text-secondary-dark mb-2">{faq.q}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
