import { Clock, Calendar } from 'lucide-react'

export default function Rates() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E0F2FE] to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-[#0F172A] mb-4 text-balance">
            Rates & <span className="text-[#F97316]">Hours</span>
          </h1>
          <p className="text-xl text-gray-600">
            Flexible pricing options and convenient operating hours for your family.
          </p>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-8 flex items-center gap-3">
            <Clock className="text-[#F97316]" size={32} />
            Operating Hours
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E0F2FE] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Regular Days</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>9:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday</span>
                  <span>9:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday</span>
                  <span>9:30 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F97316] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Special Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Open 7 Days</span>
                  <span>9:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Summer Vacation</span>
                  <span>7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Night Events</span>
                  <span>5:00 PM - 12:00 AM</span>
                </div>
              </div>
              <p className="text-sm mt-4 opacity-90">*Limited attractions available during night events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-8 flex items-center gap-3">
            <Calendar className="text-[#F97316]" size={32} />
            Admission Rates
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Adult Tickets</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-[#0F172A] mb-2">Weekday</h4>
                  <div className="text-4xl font-bold text-[#F97316] mb-2">₹499</div>
                  <p className="text-sm text-gray-600">Monday - Friday</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#F97316]">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-[#0F172A] mb-2">Weekend</h4>
                  <div className="text-4xl font-bold text-[#F97316] mb-2">₹699</div>
                  <p className="text-sm text-gray-600">Saturday & Sunday</p>
                  <span className="inline-block bg-[#F97316] text-white px-3 py-1 rounded-full text-xs font-semibold mt-4">Popular</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-[#0F172A] mb-2">Holiday</h4>
                  <div className="text-4xl font-bold text-[#F97316] mb-2">₹799</div>
                  <p className="text-sm text-gray-600">Special Days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Children & Senior Tickets (Age 3-12 & 60+)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-[#0F172A] mb-2">Weekday</h4>
                  <div className="text-4xl font-bold text-[#F97316] mb-2">₹299</div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#F97316]">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-[#0F172A] mb-2">Weekend</h4>
                  <div className="text-4xl font-bold text-[#F97316] mb-2">₹399</div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-[#0F172A] mb-2">Holiday</h4>
                  <div className="text-4xl font-bold text-[#F97316] mb-2">₹499</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Group & Package Rates</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-2">Group (10+ People)</h4>
                  <p className="text-gray-600 mb-2">20% discount on total admission</p>
                  <p className="text-sm text-gray-500">Free guide service included</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-2">Family Pack</h4>
                  <p className="text-gray-600 mb-2">2 Adults + 2 Children</p>
                  <p className="text-2xl font-bold text-[#F97316]">₹1,699</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-2">Annual Pass</h4>
                  <p className="text-gray-600 mb-2">Unlimited entry for 1 year</p>
                  <p className="text-2xl font-bold text-[#F97316]">₹4,999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-8">What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E0F2FE] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Standard Ticket Includes:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316] font-bold">✓</span>
                  Access to all attractions
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316] font-bold">✓</span>
                  Life jackets & floats free
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316] font-bold">✓</span>
                  Locker facilities
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316] font-bold">✓</span>
                  Changing rooms
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#F97316] font-bold">✓</span>
                  First aid services
                </li>
              </ul>
            </div>

            <div className="bg-[#F97316] text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Not Included:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="font-bold">•</span>
                  Food & beverages
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold">•</span>
                  Photography services
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold">•</span>
                  Private cabins (extra charge)
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold">•</span>
                  Personal locker deposit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us on WhatsApp for instant bookings and group reservations.</p>
          <a
            href="https://wa.me/917022545813"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#EA6317] transition-colors"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
