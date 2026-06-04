'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/attractions', label: 'Attractions' },
    { href: '/rates', label: 'Rates & Hours' },
    { href: '/location', label: 'Location' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0F172A] rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <span className="font-bold text-[#0F172A]">John&apos;s Water World</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-[#F97316]'
                  : 'text-[#0F172A] hover:text-[#F97316]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/917022545813"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F97316] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#EA6317] transition-colors"
          >
            Book Tickets
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium ${
                  pathname === link.href
                    ? 'text-[#F97316]'
                    : 'text-[#0F172A] hover:text-[#F97316]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/917022545813"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#F97316] text-white px-6 py-2 rounded-lg text-sm font-medium text-center hover:bg-[#EA6317] transition-colors"
            >
              Book Tickets
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
