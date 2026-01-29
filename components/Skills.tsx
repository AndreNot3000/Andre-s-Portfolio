'use client'

import { useEffect, useRef, useState } from 'react'

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 95, color: 'bg-flutter-blue' },
        { name: 'Dart', level: 92, color: 'bg-flutter-lightBlue' },
        { name: 'iOS (Swift)', level: 85, color: 'bg-gray-800' },
        { name: 'Android (Kotlin)', level: 88, color: 'bg-green-600' },
        { name: 'React Native', level: 75, color: 'bg-blue-500' },
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Firebase', level: 90, color: 'bg-orange-500' },
        { name: 'REST APIs', level: 88, color: 'bg-purple-600' },
        { name: 'GraphQL', level: 75, color: 'bg-pink-500' },
        { name: 'Node.js', level: 80, color: 'bg-green-600' },
        { name: 'SQLite', level: 85, color: 'bg-blue-700' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 92, color: 'bg-orange-600' },
        { name: 'Figma', level: 88, color: 'bg-purple-500' },
        { name: 'Xcode', level: 85, color: 'bg-blue-600' },
        { name: 'Android Studio', level: 87, color: 'bg-green-500' },
        { name: 'CI/CD', level: 78, color: 'bg-gray-600' },
      ]
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The mobile technologies and tools I use to build amazing apps
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-8 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 * categoryIndex}s` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${0.1 * skillIndex + 0.3 * categoryIndex}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Also Experienced With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Provider', 'Bloc', 'GetX', 'Riverpod', 'Hive', 'Shared Preferences',
                'HTTP', 'Dio', 'WebSocket', 'Push Notifications', 'In-App Purchases', 'Maps Integration'
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-flutter-blue/10 dark:bg-flutter-blue/20 text-flutter-blue dark:text-flutter-cyan rounded-full text-sm font-medium hover:bg-flutter-blue/20 dark:hover:bg-flutter-blue/30 transition-colors duration-200 cursor-default transform hover:scale-105"
                  style={{ animationDelay: `${0.05 * index + 1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills