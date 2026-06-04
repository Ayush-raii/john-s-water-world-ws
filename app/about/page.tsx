import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E0F2FE] to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-[#0F172A] mb-4 text-balance">
            About <span className="text-[#F97316]">John&apos;s Water World</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover the story behind India&apos;s most beloved water park destination.
          </p>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&h=400&fit=crop"
              alt="Heritage and history"
              width={500}
              height={400}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">50 Years of Excellence</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 1974 by John D&apos;Souza, John&apos;s Water World began as a small family-run pool facility with a vision to provide affordable family entertainment. Over five decades, we&apos;ve grown into a state-of-the-art water park destination, hosting over 500,000 visitors annually.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our commitment to safety, cleanliness, and innovation has made us a trusted name in the water park industry across India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#F97316]" size={24} />
                <span className="text-gray-700 font-medium">ISO 9001 Certified Quality Management</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#F97316]" size={24} />
                <span className="text-gray-700 font-medium">100% Recycled Water System</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#F97316]" size={24} />
                <span className="text-gray-700 font-medium">24/7 Safety & Security Protocols</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-[#0F172A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#F97316]">Safety First</h3>
              <p className="text-black leading-relaxed">
                Every decision we make prioritizes the well-being of our guests. Our safety standards exceed international requirements.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#F97316]">Family Values</h3>
              <p className="text-black leading-relaxed">
                We create inclusive spaces where families of all backgrounds can create lasting memories together in a welcoming environment.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#F97316]">Sustainability</h3>
              <p className="text-black leading-relaxed">
                Our eco-friendly water management systems ensure minimal environmental impact while maintaining premium water quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-12 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F97316] mb-2">500K+</div>
              <p className="text-gray-600 font-medium">Annual Visitors</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F97316] mb-2">25+</div>
              <p className="text-gray-600 font-medium">Attractions & Rides</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F97316] mb-2">100%</div>
              <p className="text-gray-600 font-medium">Water Recycled</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F97316] mb-2">50+</div>
              <p className="text-gray-600 font-medium">Years Legacy</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
