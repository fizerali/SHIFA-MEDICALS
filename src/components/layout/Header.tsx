'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 z-[-1]">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
    <div className="h-full rounded-2xl  shadow-2xl border border-white/20 backdrop-blur-md" />
  </div>
</div>
      {/* Teal-Green gradient background - same as hero section */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-teal-600/10 via-transparent to-emerald-600/10" />
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 via-transparent to-emerald-600/10" />
      
      {/* Glass morphism overlay */}
      <div className="relative z-10 backdrop-blur-xl bg-white/15 border-b border-white/25 shadow-lg">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/">
              <span className="text-4xl font-bimini tracking-[0.1em] text-white drop-shadow-lg 
                            bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent " style={{ fontFamily: 'BiminiBold, sans-serif' }}>
                SHIFA MEDICALS
              </span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-white/95 hover:text-white transition-all duration-300 font-medium
                           drop-shadow-sm hover:drop-shadow-lg
                           px-3 py-2 rounded-md hover:bg-white/10
                           before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
                           before:bg-teal-200 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              {/* <Link
                href="/contact"
                className="backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white font-medium
                         px-6 py-2 rounded-full border border-white/30 hover:border-white/50
                         transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md backdrop-blur-sm bg-white/20 hover:bg-white/30 
                         transition-all duration-300 border border-white/30"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden">
              <div 
                className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20" 
                onClick={() => setMobileMenuOpen(false)} 
              />
              <div className="fixed top-24 right-4 left-4 z-50 rounded-2xl overflow-hidden">
                {/* Teal-Green gradient background for mobile menu */}
                <div className="absolute inset-0 bg-teal-green" />
                {/* Glass overlay */}
                <div className="relative backdrop-blur-2xl bg-white/15 border border-white/25 shadow-2xl">
                  <div className="p-6 space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-3 px-4 text-white font-medium 
                                 hover:bg-white/20 rounded-lg transition-all duration-300
                                 border border-transparent hover:border-white/20"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      className="block py-3 px-4 text-center text-white font-medium 
                               bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300
                               border border-white/30 hover:border-white/50 mt-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}