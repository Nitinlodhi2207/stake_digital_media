import { Metadata } from 'next';
import Link from 'next/link';
import { Monitor, MapPin, TrendingUp, Zap } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Digital Screen Advertising (OOH) | Stake Digital Media',
    description: 'High-impact digital screen solutions in malls, Supabets venues, and commuter hubs. Drive real-world engagement with Stake Digital Media.',
  };
}

export default function DigitalScreensPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-secondary-dark text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Digital Screens That Drive{' '}
            <span className="text-primary-sky">Real-World Engagement</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Stake Digital Media is a fast-growing OOH advertising company specializing in digital screen solutions. Our focus is on creating high-impact, high-visibility campaigns that immerse consumers in your message. We strategically place digital screens in high-dwell environments—from shopping malls to entertainment venues—ensuring your brand reaches engaged audiences where they naturally spend time.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-24">
        <div className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-secondary-dark">
            Where Visibility Meets Opportunity
          </h2>
          <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
            Our digital network includes Supabets betting screens and mall displays in some of South Africa's most frequented locations. These screens deliver dynamic content to captive audiences, creating memorable brand moments in real-world settings. Whether it's a shopper taking a break in a mall or a sports enthusiast at a Supabets venue, your brand connects with consumers when they're most receptive.
          </p>

          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 mt-16 text-secondary-dark">
            Nationwide Presence, Local Relevance
          </h2>
          <p className="font-sans text-lg text-gray-700 mb-6 leading-relaxed">
            Stake Digital Media's screens are located in urban centres and commuter hubs across South Africa, giving brands the ability to engage diverse audiences in culturally rich, high-traffic locations.
          </p>

          <ul className="font-sans text-lg text-gray-700 space-y-3 ml-6 list-disc">
            <li>Durban CBD</li>
            <li>Johannesburg Taxi Ranks</li>
            <li>Soweto Community Hubs</li>
            <li>Shopping Malls Nationwide</li>
          </ul>
        </div>
      </section>

      {/* Campaign Capabilities Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-16 text-secondary-dark">
            Campaign Capabilities
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Drive Awareness & Engagement */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary-sky/10 rounded-full">
                  <Zap className="w-10 h-10 text-primary-sky" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-4 text-center text-secondary-dark">
                Drive Awareness & Engagement
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed text-center">
                Perfect for product launches and seasonal campaigns. Our screens turn foot traffic into brand conversations.
              </p>
            </div>

            {/* Build Community Connection */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary-bright-green/10 rounded-full">
                  <Monitor className="w-10 h-10 text-primary-bright-green" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-4 text-center text-secondary-dark">
                Build Community Connection
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed text-center">
                Our screens are embedded in the daily lives of South African communities—connecting brands to real people in real moments.
              </p>
            </div>

            {/* Reinforce Brand Leadership */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary-deep-blue/10 rounded-full">
                  <TrendingUp className="w-10 h-10 text-primary-deep-blue" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-4 text-center text-secondary-dark">
                Reinforce Brand Leadership
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed text-center">
                Consistent visibility in high-traffic, high-dwell spaces reinforces market positioning and keeps your brand top-of-mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-16 text-secondary-dark">
            Why Brands Choose Stake Digital Media
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Strategic Placements */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-sky/10 rounded-full">
                  <MapPin className="w-10 h-10 text-primary-sky" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg sm:text-xl mb-3 text-secondary-dark">
                Strategic Placements
              </h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                High-dwell locations in malls, Supabets venues, and commuter hubs ensure maximum exposure.
              </p>
            </div>

            {/* Nationwide Network */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-deep-blue/10 rounded-full">
                  <Monitor className="w-10 h-10 text-primary-deep-blue" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg sm:text-xl mb-3 text-secondary-dark">
                Nationwide Network
              </h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                From Durban to Johannesburg and Soweto, reach diverse audiences across South Africa.
              </p>
            </div>

            {/* Measurable Impressions */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-bright-green/10 rounded-full">
                  <TrendingUp className="w-10 h-10 text-primary-bright-green" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg sm:text-xl mb-3 text-secondary-dark">
                Measurable Impressions
              </h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Data-driven insights help you track campaign performance and optimize ROI.
              </p>
            </div>

            {/* Seamless Creative Formatting */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-deep-green/10 rounded-full">
                  <Zap className="w-10 h-10 text-primary-deep-green" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg sm:text-xl mb-3 text-secondary-dark">
                Seamless Creative Formatting
              </h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Our team ensures your content looks stunning on every screen, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-secondary-dark text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
            Your Brand. Our Screens.{' '}
            <span className="text-primary-sky">Maximum Impact.</span>
          </h2>
          <p className="font-sans text-lg sm:text-xl mb-10 text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Whether you're launching a new product, promoting an event, or building long-term brand awareness, Stake Digital Media's digital screens deliver results where it matters most—in the real world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-primary-sky text-white font-display font-bold text-lg rounded-md hover:bg-primary-deep-blue hover:shadow-lg hover:shadow-primary-sky/50 transition-all duration-300"
            >
              Book a Campaign
            </Link>
            <Link
              href="/media-kit.pdf"
              className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white font-display font-semibold text-lg rounded-md hover:bg-white hover:text-secondary-dark transition-all duration-300"
            >
              Download Media Kit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
