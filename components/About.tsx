'use client'

import { useEffect, useRef, useState } from 'react'
import { Code, Coffee, Users, Award } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Code, label: 'Apps Published', value: '15+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '2000+' },
    { icon: Users, label: 'Happy Users', value: '50K+' },
    { icon: Award, label: 'Years Experience', value: '4+' },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Hello! I'm Olumide, a Flutter Mobile App Developer based in Lagos, Nigeria.
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm passionate about creating beautiful, performant mobile applications that work 
                  seamlessly across iOS and Android platforms. My goal is to build apps that provide 
                  exceptional user experiences with smooth animations and intuitive interfaces.
                </p>
                <p>
                  With 4+ years of experience in mobile development, I've shipped over 15 apps to 
                  the App Store and Google Play. I specialize in Flutter development but also have 
                  strong experience with native iOS (Swift) and Android (Kotlin) development.
                </p>
                <p>
                  Here are the technologies I work with to bring mobile apps to life:
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    'Flutter & Dart',
                    'iOS (Swift)',
                    'Android (Kotlin)',
                    'Firebase',
                    'REST APIs',
                    'SQLite',
                    'Provider/Bloc',
                    'Git & CI/CD'
                  ].map((tech) => (
                    <div key={tech} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-flutter-blue rounded-full"></div>
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop"
                    alt="Mobile app development workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 flutter-gradient rounded-lg flex items-center justify-center shadow-xl animate-pulse-slow">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Apps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-flutter-blue/10 dark:bg-flutter-blue/20 rounded-full mb-4 transform hover:scale-110 transition-transform duration-200">
                  <stat.icon className="w-8 h-8 text-flutter-blue dark:text-flutter-cyan" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About