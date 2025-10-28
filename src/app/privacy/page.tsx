'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle, Mail, Phone } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect personal information that you voluntarily provide to us when you contact us, request information about our services, or engage with our advertising solutions. This may include your name, email address, phone number, company name, and business details."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. We also collect information about how you interact with our website."
        },
        {
          subtitle: "Campaign Data",
          text: "For clients using our digital screen network and billboard services, we may collect campaign performance data, audience metrics, and advertising analytics to optimize your advertising campaigns."
        }
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our advertising services, including managing your campaigns on our digital screen network and billboard placements."
        },
        {
          subtitle: "Communication",
          text: "To communicate with you about our services, send you updates, marketing materials, and respond to your inquiries and requests."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "To understand how our services are used, analyze trends, and improve our advertising solutions and website functionality."
        },
        {
          subtitle: "Legal Compliance",
          text: "To comply with legal obligations, protect our rights, prevent fraud, and ensure the security of our services."
        }
      ]
    },
    {
      icon: Lock,
      title: "Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with third-party service providers who assist us in operating our business, such as email service providers, analytics platforms, and advertising technology partners."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or governmental regulation, or if we believe such action is necessary to comply with legal obligations or protect our rights."
        },
        {
          subtitle: "With Your Consent",
          text: "We may share your information with third parties when you have given us explicit consent to do so."
        }
      ]
    },
    {
      icon: Eye,
      title: "Data Security",
      content: [
        {
          subtitle: "Protection Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls."
        },
        {
          subtitle: "Limitations",
          text: "While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data."
        }
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information. Contact us to request access to or modification of your data."
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal information, subject to certain legal exceptions and retention requirements."
        },
        {
          subtitle: "Marketing Communications",
          text: "You can opt out of receiving marketing communications from us by following the unsubscribe link in our emails or contacting us directly."
        },
        {
          subtitle: "Cookies",
          text: "You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our website."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "Cookies and Tracking Technologies",
      content: [
        {
          subtitle: "What We Use",
          text: "We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze website traffic, and understand user behavior."
        },
        {
          subtitle: "Types of Cookies",
          text: "We use essential cookies for website functionality, analytics cookies to understand usage patterns, and marketing cookies to deliver relevant advertising content."
        },
        {
          subtitle: "Your Control",
          text: "Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, though this may impact your website experience."
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1419] via-[#1a2332] to-[#0F1419] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#0BB4E4] to-[#6DCE2E] rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#0064C8] to-[#4BA948] rounded-full blur-3xl animate-float-slower"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Shield className="w-5 h-5 text-[#0BB4E4]" />
            <span className="text-sm font-medium">Your Privacy Matters</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0BB4E4] via-white to-[#6DCE2E] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            At Stake Digital Media, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>

          <p className="text-sm text-gray-500">
            Last Updated: October 24, 2025
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introduction */}
          <motion.div
            variants={itemVariants}
            className="mb-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <p className="text-gray-300 leading-relaxed">
              This Privacy Policy describes how Stake Digital Media, a division of Keys Communication (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), collects, uses, and shares your personal information when you visit our website or use our advertising services, including our digital screen network and billboard division.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-[#0BB4E4]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0BB4E4] to-[#6DCE2E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mt-2">{section.title}</h2>
                </div>

                <div className="space-y-6 ml-16">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold text-[#0BB4E4] mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Data Retention */}
          <motion.div
            variants={itemVariants}
            className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Database className="w-6 h-6 text-[#0BB4E4]" />
              Data Retention
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Campaign data and analytics may be retained for business analysis and service improvement purposes.
            </p>
          </motion.div>

          {/* International Data Transfers */}
          <motion.div
            variants={itemVariants}
            className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#6DCE2E]" />
              International Data Transfers
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your personal information in accordance with this Privacy Policy and applicable data protection laws.
            </p>
          </motion.div>

          {/* Children's Privacy */}
          <motion.div
            variants={itemVariants}
            className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-[#0BB4E4]" />
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </motion.div>

          {/* Changes to Privacy Policy */}
          <motion.div
            variants={itemVariants}
            className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new &quot;Last Updated&quot; date.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-[#0BB4E4]/10 to-[#6DCE2E]/10 backdrop-blur-sm rounded-2xl border border-[#0BB4E4]/20 p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
            <p className="text-gray-300 text-center mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="mailto:info@stakedigital.co.za"
                className="flex items-center gap-2 text-[#0BB4E4] hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@stakedigital.co.za</span>
              </a>
              <a
                href="tel:+27766400024"
                className="flex items-center gap-2 text-[#6DCE2E] hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+27 76 640 0024</span>
              </a>
            </div>
            <p className="text-gray-400 text-center mt-6 text-sm">
              Stake Digital Media - A division of Keys Communication
              <br />
              Johannesburg, Gauteng, South Africa
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Bottom Spacing for Mobile Nav */}
      <div className="h-20 lg:h-0"></div>
    </div>
  );
};

export default PrivacyPolicyPage;
