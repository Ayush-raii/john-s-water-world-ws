import Image from 'next/image'

const attractions = [
  {
    name: 'Wave Pool',
    description: 'Experience the thrill of artificial waves in our state-of-the-art wave pool with capacity for 2,000 guests.',
    image: 'https://images.unsplash.com/photo-1501307081519-a21fb89cb341?w=500&h=400&fit=crop',
    features: ['2,000 capacity', 'Temperature controlled', 'Wave height: up to 2.5m'],
  },
  {
    name: 'Water Slides',
    description: 'Adrenaline-pumping slides ranging from beginner-friendly to extreme, with twists and turns.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
    features: ['7 different slides', 'Heights: 10m - 30m', 'Speed zones'],
  },
  {
    name: 'Kids Zone',
    description: 'A dedicated safe space for children with age-appropriate rides and play areas.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=400&fit=crop',
    features: ['Splash pool', 'Gentle slides', 'Interactive play areas'],
  },
  {
    name: 'Rain Dance Floor',
    description: 'Dance under cascading water fountains during special rain dance sessions.',
    image: 'https://images.unsplash.com/photo-1504681869696-d977211a0519?w=500&h=400&fit=crop',
    features: ['Music synchronized', 'LED lighting', 'Group events available'],
  },
  {
    name: 'Jacuzzi & Spa Pools',
    description: 'Relax in heated jacuzzi pools with therapeutic water jets and massage facilities.',
    image: 'https://images.unsplash.com/photo-1522764970951-ec2e0c2e4e71?w=500&h=400&fit=crop',
    features: ['Temperature: 35-38°C', 'Massage jets', 'Private cabins'],
  },
  {
    name: 'Lazy River',
    description: 'Float along our 800m lazy river with gentle currents and scenic landscape views.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
    features: ['800m length', 'Gentle current', 'Underwater caves'],
  },
  {
    name: 'Adventure Park',
    description: 'Rock climbing, rope courses, and zip-lining for the ultimate thrill-seekers.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    features: ['Height: 15m', 'Certified instructors', 'All ages welcome'],
  },
  {
    name: 'Olympic Swimming Pool',
    description: 'Olympic-sized lap pool for serious swimmers and swimming lessons.',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=500&h=400&fit=crop',
    features: ['50m length', 'Professional coaching', 'Competition standard'],
  },
]

export default function Attractions() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E0F2FE] to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-[#0F172A] mb-4 text-balance">
            Explore Our <span className="text-[#F97316]">Attractions</span>
          </h1>
          <p className="text-xl text-gray-600">
            Choose from 25+ world-class attractions designed for thrills, relaxation, and family fun.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {attractions.map((attraction) => (
              <div
                key={attraction.name}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="relative h-72">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-[#F8F9FA]">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{attraction.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {attraction.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-block bg-[#E0F2FE] text-[#0F172A] text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0F172A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Book your tickets now and make unforgettable memories.</p>
          <a
            href="https://wa.me/917022545813"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#EA6317] transition-colors"
          >
            Book Tickets Now
          </a>
        </div>
      </section>
    </main>
  )
}
