import Image from 'next/image'
import Link from 'next/link'
import { Waves, Zap, Users, Music } from 'lucide-react'

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-[#E0F2FE] to-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6 text-balance leading-tight">
              Dive Into<br />
              <span className="text-[#F97316]">Pure Joy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the ultimate water park adventure with world-class attractions designed for families of all ages.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/917022545813"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F97316] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#EA6317] transition-colors"
              >
                Book Tickets Now
              </a>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <Image
              src="/john-water-park.jpg"
              alt="Water park swimming pool"
              width={500}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-[#0F172A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#F97316] mb-2">500K+</div>
            <p className="text-gray-300">Happy Visitors Annually</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#F97316] mb-2">50+</div>
            <p className="text-gray-300">Years of Excellence</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#F97316] mb-2">24/7</div>
            <p className="text-gray-300">Safety Standards</p>
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Featured Attractions</h2>
            <p className="text-gray-600 text-lg">Experience our most popular rides and attractions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#E0F2FE] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <Image
                  src="pool.jpg"
                  alt="Pool img"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Waves className="text-[#F97316]" size={24} />
                  <h3 className="text-2xl font-bold text-[#0F172A]">6.5 feet pool</h3>
                </div>
                <p className="text-gray-600">Experience the thrill in the deep pool</p>
              </div>
            </div>

            <div className="bg-[#E0F2FE] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <Image
                  src="/water slide.jpg"
                  alt="Water Slides"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-[#F97316]" size={24} />
                  <h3 className="text-2xl font-bold text-[#0F172A]">Water Slides</h3>
                </div>
                <p className="text-gray-600">Adrenaline-pumping slides ranging from beginner to extreme levels.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/attractions"
              className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#EA6317] transition-colors"
            >
              View All Attractions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F97316] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for an Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Book your tickets now and create unforgettable memories with your loved ones.</p>
          <a
            href="https://wa.me/917022545813"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#F97316] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
