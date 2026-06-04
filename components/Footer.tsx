import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white mt-16 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#F97316] rounded flex items-center justify-center">
                <span className="font-bold">W</span>
              </div>
              <span className="font-bold text-lg">John&apos;s Water World</span>
            </div>
            <p className="text-gray-300 text-sm">
              Premium water park experience with world-class attractions for the whole family.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <Link href="/" className="hover:text-[#F97316] transition-colors">
                Home
              </Link>
              <Link href="/about" className="block hover:text-[#F97316] transition-colors">
                About Us
              </Link>
              <Link href="/attractions" className="block hover:text-[#F97316] transition-colors">
                Attractions
              </Link>
              <Link href="/location" className="block hover:text-[#F97316] transition-colors">
                Location
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+917022545813" className="hover:text-[#F97316] transition-colors">
                  +91 70225 45813
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@johnswaterworld.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Karkala, Karnataka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 John&apos;s Water World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
