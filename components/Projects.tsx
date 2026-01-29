'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
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

  const projects = [
    {
      title: 'SmatPay - Bill Payment Platform',
      description: 'SmatPay, a bill payment digital platform aimed at simplifying essential financial transactions for users. Built with Flutter to provide secure, fast, and user-friendly bill payment solutions across multiple service providers.',
      image: '/smatpay.jpeg',
      technologies: ['Flutter', 'Payment Gateway', 'Security', 'Financial APIs', 'User Authentication'],
      liveUrl: 'https://apps.apple.com/app/smatpay',
      githubUrl: 'https://github.com/AndreNot3000/smatpay-flutter',
      date: '2024',
      featured: true
    },
    {
      title: 'FitTracker - Fitness & Health App',
      description: 'A comprehensive fitness tracking app with workout plans, nutrition tracking, progress analytics, and social features. Built with Flutter and integrated with HealthKit and Google Fit.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'SQLite', 'HealthKit', 'Google Fit', 'Charts'],
      liveUrl: 'https://play.google.com/store/apps/fittracker',
      githubUrl: 'https://github.com/AndreNot3000/fittracker-flutter',
      date: '2023',
      featured: true
    },
    {
      title: 'SNCF Connect - Travel & Transport App',
      description: 'With Flutter, Wallet, and NFC combined, it is now possible to use a single app to travel in France by train and bus, rent a car, book a hotel, use city transport in venues like Paris, Bordeaux, or Chateauroux, store tickets in the Google Wallet, chat with a bot and switch to customer support in the same in-app conversation.',
      image: '/sncfconnect.jpeg',
      technologies: ['Flutter', 'NFC Integration', 'Google Wallet', 'Payment Systems', 'Real-time Tracking'],
      liveUrl: 'https://apps.apple.com/app/sncfconnect',
      githubUrl: 'https://github.com/AndreNot3000/sncf-connect-flutter',
      date: '2023',
      featured: false
    },
    {
      title: 'ExpenseTracker - Finance Manager',
      description: 'Personal finance management app with expense tracking, budget planning, bill reminders, and financial insights. Features beautiful charts and export functionality.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'SQLite', 'Charts', 'PDF Export', 'Biometric Auth'],
      liveUrl: 'https://play.google.com/store/apps/expensetracker',
      githubUrl: 'https://github.com/AndreNot3000/expense-tracker-flutter',
      date: '2023',
      featured: false
    },
    {
      title: 'Holla Vox - Communication App',
      description: 'Get connected with hollavox - the ultimate communication app! Enjoy crystal-clear voice calls, messaging, and amazing plans to stay connected with your loved ones. Built with Flutter for seamless cross-platform communication.',
      image: '/hollavox.jpg',
      technologies: ['Flutter', 'Voice Calls', 'Real-time Messaging', 'Audio Processing', 'Cross-platform'],
      liveUrl: 'https://apps.apple.com/app/hollavox',
      githubUrl: 'https://github.com/AndreNot3000/holla-vox-flutter',
      date: '2024',
      featured: false
    },
    {
      title: 'Social Bee - AI-Powered Community Tool',
      description: 'Social Bee emerges as a groundbreaking AI-powered tool, meticulously designed to address a critical need within the refugee community. Built with Flutter to provide accessible community support and resources.',
      image: '/social-bee-screenshot.jpeg',
      technologies: ['Flutter', 'AI Integration', 'Firebase', 'Community Features', 'Accessibility'],
      liveUrl: 'https://apps.apple.com/app/socialbee',
      githubUrl: 'https://github.com/AndreNot3000/social-bee-flutter',
      date: '2024',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Mobile applications I've built and published to App Store & Google Play
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-20 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                } ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="overflow-hidden rounded-xl shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-primary-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="w-4 h-4 text-primary-600" />
                    <span className="text-primary-600 font-medium">{project.date}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-flutter-blue/10 dark:bg-flutter-blue/20 text-flutter-blue dark:text-flutter-cyan rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-flutter-blue hover:bg-flutter-lightBlue text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View on Store</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-flutter-blue dark:hover:border-flutter-cyan text-gray-700 dark:text-gray-300 hover:text-flutter-blue dark:hover:text-flutter-cyan px-6 py-3 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden card-hover ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.1 * index + 0.8}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h4>
                      <span className="text-sm text-primary-600 font-medium">
                        {project.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects