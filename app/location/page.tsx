'use client'

import { useEffect, useState } from 'react'
import importDynamic from 'next/dynamic'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import 'leaflet/dist/leaflet.css'

const MapContainer = importDynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
) as any

const TileLayer = importDynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
) as any

const Marker = importDynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
) as any

const Popup = importDynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
) as any
export default function Location() {
  const [customIcon, setCustomIcon] = useState<any>(null)
  const coordinates: [number, number] = [13.192626953125, 75.00312805175781]

  // 2. Initialize the Leaflet Icon inside useEffect so it safely bypasses the server build
  useEffect(() => {
    const initIcon = async () => {
      //@ts-ignore
      const leafletModule = await import('leaflet') as any;
      const L = leafletModule.default || leafletModule;
      
      const icon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      setCustomIcon(icon);
    };

    initIcon();
  }, []);

  // 3. Prevent rendering the map components until the custom icon is ready in the browser
  if (!customIcon) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-gray-500 font-medium">Loading Map Details...</p>
      </div>
    )
  }
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E0F2FE] to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-[#0F172A] mb-4 text-balance">
            Find <span className="text-[#F97316]">Us</span>
          </h1>
          <p className="text-xl text-gray-600">
            Located in the scenic Pulkeri area of Karkala, easily accessible from all parts of Karnataka.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-lg overflow-hidden shadow-lg mb-8" style={{ height: '500px' }}>
            <MapContainer
              center={coordinates}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={coordinates} icon={customIcon}>
                <Popup>
                  <div className="font-semibold">John&apos;s Water World</div>
                  <div className="text-sm">Karkala, Karnataka</div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-8">Location Details</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="text-[#F97316]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Address</h3>
                  <p className="text-gray-600">
                    John&apos;s Water World<br />
                    Pulkeri, Karkala<br />
                    Karnataka 574104, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="text-[#F97316]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Phone</h3>
                  <a href="tel:+917022545813" className="text-[#F97316] hover:underline">
                    +91 70225 45813
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="text-[#F97316]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Email</h3>
                  <a href="mailto:info@johnswaterworld.com" className="text-[#F97316] hover:underline">
                    info@johnswaterworld.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="text-[#F97316]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Daily: 9:30 AM - 6:00 PM<br />
                    7 Days a Week
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#E0F2FE] p-6 rounded-lg">
              <h3 className="font-semibold text-[#0F172A] mb-3">Nearby Landmarks</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 14 km from Nandikoor Railway Station</li>
                <li>• Scenic coastal region near Western Ghats</li>
                <li>• Close to Karkala town center</li>
                <li>• Access via NH44 highway</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-8">Getting Here</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-[#0F172A] mb-3 flex items-center gap-2">
                  <span className="bg-[#F97316] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">🚗</span>
                  By Car
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Well-connected via NH44 highway. Free parking available. GPS Coordinates: 13.1988°N, 75.2833°E. About 1.5 hours from Mangalore, 3 hours from Bangalore.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-[#0F172A] mb-3 flex items-center gap-2">
                  <span className="bg-[#F97316] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">🚂</span>
                  By Train
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nandikoor Railway Station is approximately 14 km away. Regular train connections to major cities like Bangalore and Mangalore.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-[#0F172A] mb-3 flex items-center gap-2">
                  <span className="bg-[#F97316] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">🚌</span>
                  By Bus
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Regular bus services from Bangalore, Mangalore, and other nearby towns. State transport and private buses available.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-[#0F172A] mb-3 flex items-center gap-2">
                  <span className="bg-[#F97316] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">🚕</span>
                  By Taxi
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Accessible via Uber, Ola, or local taxis. Auto-rickshaws available in Karkala town for final leg of journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-12 text-center">Parking & Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#E0F2FE] p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🅿️</div>
              <h3 className="font-semibold text-[#0F172A] mb-2">Free Parking</h3>
              <p className="text-gray-600 text-sm">Spacious parking lot with 500+ spaces available</p>
            </div>
            <div className="bg-[#E0F2FE] p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">♿</div>
              <h3 className="font-semibold text-[#0F172A] mb-2">Accessible</h3>
              <p className="text-gray-600 text-sm">Wheelchair accessible routes and facilities throughout</p>
            </div>
            <div className="bg-[#E0F2FE] p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="font-semibold text-[#0F172A] mb-2">Amenities</h3>
              <p className="text-gray-600 text-sm">Restaurants, shops, and medical facilities on-site</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F97316] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Plan Your Visit</h2>
          <p className="text-xl mb-8 opacity-90">Ready to make a splash? Book your tickets now!</p>
          <a
            href="https://wa.me/917022545813"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#F97316] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Tickets Now
          </a>
        </div>
      </section>
    </main>
  )
}
