'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-flutter-blue/5 via-white to-flutter-cyan/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-flutter-blue/20 dark:bg-flutter-blue/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-flutter-cyan/20 dark:bg-flutter-cyan/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-flutter-lightBlue/10 dark:bg-flutter-lightBlue/5 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{' '}
                <span className="gradient-text animate-pulse-slow">Olumide Andre</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium animate-slide-down">
                Flutter Mobile App Developer
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl animate-slide-up">
                I craft beautiful, high-performance mobile applications for iOS and Android using Flutter. 
                Specializing in cross-platform development with pixel-perfect UI and smooth animations.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-left">
                <button 
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary transform hover:scale-105"
                >
                  View My Apps
                </button>
                <a
                  href="/Olumide-Andre-Resume.pdf"
                  download="Olumide-Andre-Resume.pdf"
                  className="btn-secondary transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 justify-center lg:justify-start animate-slide-right">
                <a
                  href="https://github.com/AndreNot3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-flutter-blue/10 dark:hover:bg-flutter-cyan/10 transition-all duration-200 group transform hover:scale-110 hover:rotate-12"
                >
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-flutter-blue dark:group-hover:text-flutter-cyan" />
                </a>
                <a
                  href="https://www.linkedin.com/in/olumide-andre-7a7688238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-flutter-blue/10 dark:hover:bg-flutter-cyan/10 transition-all duration-200 group transform hover:scale-110 hover:rotate-12"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-flutter-blue dark:group-hover:text-flutter-cyan" />
                </a>
                <a
                  href="mailto:andreolumide@gmail.com"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-flutter-blue/10 dark:hover:bg-flutter-cyan/10 transition-all duration-200 group transform hover:scale-110 hover:rotate-12"
                >
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-flutter-blue dark:group-hover:text-flutter-cyan" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/profile.jpg"
                  alt="Olumide Andre - Flutter Mobile App Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Flutter Logo */}
              <div className="absolute -top-4 -right-4 w-20 h-20 flutter-gradient rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                <span className="text-white font-bold text-2xl">📱</span>
              </div>
              {/* Floating Flutter Elements */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-flutter-cyan rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                <span className="text-white font-bold text-lg">🚀</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-flutter-lightBlue rounded-full flex items-center justify-center shadow-lg animate-wiggle">
                <span className="text-white font-bold">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
      </button>
    </section>
  )
}

export default Hero