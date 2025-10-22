'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  accentColor: string;
}

export default function FAQSection({ faqs, accentColor }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-br from-secondary-dark via-[#1a1a2e] to-secondary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${accentColor} rounded-full border border-white/20 backdrop-blur-xl mb-4`}>
            <HelpCircle className="w-4 h-4 text-white" />
            <span className="text-xs md:text-sm font-bold tracking-wider text-white">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Got Questions? We&apos;ve Got{' '}
            <span className={`bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>
              Answers
            </span>
          </h2>
          <p className="font-sans text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our services, pricing, and process.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'border-white/30 shadow-lg' : 'hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-white pr-8 group-hover:text-gray-200 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-0">
                        <div className="pt-4 border-t border-white/10">
                          <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="font-sans text-gray-400 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="/contact"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${accentColor} text-white font-bold text-sm rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105`}
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
