'use client'

import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Olumide Andre
              </h3>
              <p className="text-gray-400 mb-4">
                Flutter Mobile App Developer passionate about creating beautiful, 
                high-performance mobile applications for iOS and Android.
              </p>
              <p className="text-gray-400 text-sm">
                Based in Lagos, Nigeria
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>andreolumide@gmail.com</p>
                <p>+234 903 398 7126</p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
                <span>© {currentYear} Olumide Andre. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>and lots of Flutter magic.</span>
              </div>
              <div className="text-gray-400 text-sm">
                Built with Next.js & Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer