'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Ban, CheckCircle, DollarSign, Mail, Phone, ShieldCheck } from 'lucide-react';

const TermsOfServicePage = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing or using the Stake Digital Media website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page. Your continued use of our services after any modifications indicates your acceptance of the updated terms."
        }
      ]
    },
    {
      icon: FileText,
      title: "Services Description",
      content: [
        {
          subtitle: "Digital Screen Network",
          text: "We provide advertising services through our digital screen network, offering dynamic advertising solutions across various high-traffic locations. Campaign specifications, placement, and duration are subject to availability and our approval."
        },
        {
          subtitle: "Billboard Division",
          text: "Our billboard advertising services provide traditional outdoor advertising solutions. All billboard placements are subject to availability, local regulations, and our content approval process."
        },
        {
          subtitle: "Campaign Planning",
          text: "We offer comprehensive campaign planning services to optimize your advertising strategy. Final campaign execution is subject to client approval and availability of advertising inventory."
        }
      ]
    },
    {
      icon: Scale,
      title: "User Responsibilities",
      content: [
        {
          subtitle: "Account Information",
          text: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
        },
        {
          subtitle: "Accurate Information",
          text: "You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete."
        },
        {
          subtitle: "Lawful Use",
          text: "You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You shall not use our services in any way that violates any applicable laws or regulations."
        }
      ]
    },
    {
      icon: Ban,
      title: "Content Guidelines and Restrictions",
      content: [
        {
          subtitle: "Advertising Content",
          text: "All advertising content must comply with applicable laws, regulations, and industry standards. We reserve the right to reject or remove any content that we deem inappropriate, offensive, or in violation of these terms."
        },
        {
          subtitle: "Prohibited Content",
          text: "Content that is defamatory, obscene, pornographic, discriminatory, promotes violence, infringes intellectual property rights, or violates any laws is strictly prohibited. We reserve the right to remove such content immediately."
        },
        {
          subtitle: "Content Approval",
          text: "All advertising content is subject to our approval process. We may require modifications to content before it can be displayed on our digital screens or billboards. Approval timelines may vary."
        },
        {
          subtitle: "Intellectual Property",
          text: "You represent and warrant that you own or have the necessary rights to use all content you provide for advertising purposes, and that such use does not infringe upon the rights of any third party."
        }
      ]
    },
    {
      icon: DollarSign,
      title: "Payment and Billing",
      content: [
        {
          subtitle: "Pricing",
          text: "Prices for our services are subject to change without notice. We will provide you with pricing information before you commit to any service. All prices are quoted in South African Rand (ZAR) unless otherwise specified."
        },
        {
          subtitle: "Payment Terms",
          text: "Payment is required according to the terms specified in your service agreement. Late payments may result in suspension or cancellation of services and may incur additional fees."
        },
        {
          subtitle: "Refunds",
          text: "Refunds are handled on a case-by-case basis and are subject to the specific terms of your service agreement. Generally, payments for services already rendered or scheduled within 48 hours are non-refundable."
        },
        {
          subtitle: "Cancellations",
          text: "Campaign cancellations must be submitted in writing and are subject to our cancellation policy. Cancellations made less than 48 hours before the scheduled start date may incur cancellation fees."
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Service Availability",
          text: "While we strive to maintain uninterrupted service, we do not guarantee that our services will be available at all times. We are not liable for any interruptions, delays, or technical failures that may affect your advertising campaign."
        },
        {
          subtitle: "Disclaimer of Warranties",
          text: "Our services are provided 'as is' without any warranties, express or implied. We disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement."
        },
        {
          subtitle: "Limitation of Damages",
          text: "To the maximum extent permitted by law, Stake Digital Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services."
        },
        {
          subtitle: "Maximum Liability",
          text: "Our total liability to you for any claims arising out of or related to these Terms of Service or our services shall not exceed the amount you paid us in the twelve (12) months preceding the claim."
        }
      ]
    },
    {
      icon: ShieldCheck,
      title: "Indemnification",
      content: [
        {
          subtitle: "Your Indemnification",
          text: "You agree to indemnify, defend, and hold harmless Stake Digital Media, Keys Communication, and our affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, your violation of these terms, or your infringement of any third-party rights."
        },
        {
          subtitle: "Content Liability",
          text: "You are solely responsible for the content you provide for advertising purposes. You agree to indemnify us against any claims arising from your advertising content, including claims of copyright infringement, defamation, or violation of privacy rights."
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
            <Scale className="w-5 h-5 text-[#0BB4E4]" />
            <span className="text-sm font-medium">Legal Agreement</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0BB4E4] via-white to-[#6DCE2E] bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            Please read these terms carefully before using our services. By using our platform, you agree to these terms.
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
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Stake Digital Media website and services, including our digital screen network, billboard division, and campaign planning services. Stake Digital Media is a division of Keys Communication, operating in Johannesburg, South Africa.
            </p>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Additional Sections */}
          <motion.div
            variants={itemVariants}
            className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#0BB4E4]" />
              Termination
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use our services will immediately cease.
            </p>
            <p className="text-gray-400 leading-relaxed">
              All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Scale className="w-6 h-6 text-[#6DCE2E]" />
              Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts located in Johannesburg, Gauteng, South Africa.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-[#0BB4E4]" />
              Dispute Resolution
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              In the event of any dispute arising out of or relating to these Terms or our services, the parties agree to first attempt to resolve the dispute through good faith negotiations.
            </p>
            <p className="text-gray-400 leading-relaxed">
              If the dispute cannot be resolved through negotiation within thirty (30) days, either party may pursue resolution through mediation or arbitration before resorting to litigation.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Severability</h2>
            <p className="text-gray-400 leading-relaxed">
              If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect. The invalid or unenforceable provision shall be replaced with a valid and enforceable provision that most closely matches the intent of the original provision.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Entire Agreement</h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms of Service, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and Stake Digital Media regarding your use of our services and supersede all prior agreements and understandings.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-[#0BB4E4]/10 to-[#6DCE2E]/10 backdrop-blur-sm rounded-2xl border border-[#0BB4E4]/20 p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Questions About These Terms?</h2>
            <p className="text-gray-300 text-center mb-6">
              If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfServicePage;
