"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Download,
  Calendar,
  Award,
  Mail,
  Phone,
  Linkedin,
  Github,
  Facebook,
  Menu,
  X,
  Code,
  Globe,
  Database,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "experience", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const projects = [
    {
      title: "Wedding Management System",
      description:
        "A comprehensive wedding planning platform with vendor management, guest tracking, and event coordination features.",
      tech: ["React", "FastAPI", "PostgreSQL"],
      category: "Full Stack",
      githubUrl: "https://github.com/abdulahad-cyber/wedding-management-system", // Add your actual repo URL
    },
    {
      title: "TF-IDF Vectorization with OpenMP & MPI",
      description:
        "High-performance text processing system using parallel computing techniques for large-scale document analysis.",
      tech: ["C++", "OpenMP", "MPI"],
      category: "Systems Programming",
      githubUrl: "https://github.com/abdulahad-cyber/tfidf-vectorization", // Add your actual repo URL
    },
    {
      title: "Employee Management System",
      description:
        "Low-level employee database system built entirely in Assembly language with custom data structures.",
      tech: ["Assembly", "x86"],
      category: "Systems Programming",
      githubUrl: "https://github.com/abdulahad-cyber/employee-management-assembly", // Add your actual repo URL
    },
    {
      title: "Centralized Messaging System",
      description:
        "Real-time messaging platform with multi-threading support and efficient message routing algorithms.",
      tech: ["C++", "Networking"],
      category: "Systems Programming",
      githubUrl: "https://github.com/abdulahad-cyber/centralized-messaging", // Add your actual repo URL
    },
    {
      title: "Alphabetic Shopify Store",
      description:
        "Custom e-commerce theme with advanced product filtering, responsive design, and optimized performance.",
      tech: ["Liquid", "HTML", "CSS", "JavaScript"],
      category: "E-commerce",
      githubUrl: "https://github.com/abdulahad-cyber/alphabetic-shopify-store", // Add your actual repo URL
    },
  ]

  // Updated skills data structure
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: Code,
      iconColor: "text-blue-400", // Example color, adjust as needed
      skills: ["C", "C++", "Python", "JavaScript"],
    },
    {
      name: "Web Development",
      icon: Globe,
      iconColor: "text-green-400", // Example color, adjust as needed
      skills: ["HTML", "CSS"],
    },
    {
      name: "Databases",
      icon: Database,
      iconColor: "text-purple-400", // Example color, adjust as needed
      skills: ["PostgreSQL", "Oracle", "MongoDB"],
    },
  ]

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Abdul_Ahad_Resume.pdf"
    link.download = "Abdul_Ahad_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">abdulahad.dev</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Projects", "Experience", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-green-400 ${
                    activeSection === item.toLowerCase() ? "text-green-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                {["Home", "Projects", "Experience", "Education", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left text-sm font-medium transition-colors hover:text-green-400 ${
                      activeSection === item.toLowerCase() ? "text-green-400" : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Nice to meet you!
                <br />
                I'm <span className="text-green-400">Abdul Ahad</span>.
              </h1>
              <div className="text-xl text-gray-300 leading-relaxed">
                <p className="mb-2">A passionate</p>
                {/* Re-added text-glow-green and corrected spelling */}
                <div className="text-2xl font-semibold text-green-400 min-h-[2rem] text-glow-green">
                  Software Developer
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <Image
                src="/abdul-ahad-photo.png"
                alt="Abdul Ahad - Software Developer"
                width={320}
                height={320}
                className="relative z-10 rounded-full object-cover border-4 border-gray-800 hover:border-green-400/50 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2> {/* Centered heading */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className={`h-6 w-6 mr-3 ${category.iconColor}`} />
                    <h3 className={`text-xl font-bold ${category.iconColor}`}>{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 hover:bg-green-400/20 hover:text-green-400 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Projects</h2>
            <Button
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-green-400/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-green-400/10"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 hover:bg-green-400/20 hover:text-green-400 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-green-400 font-medium">{project.category}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
          <Card className="bg-gray-900 border-gray-800 hover:border-green-400/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-400">Operations Development Intern</h3>
                  <p className="text-xl text-gray-300">SIAR Digital</p>
                </div>
                <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 mr-2" />
                  June 2024 – August 2024
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Developed and maintained Shopify e-commerce solutions with custom themes and functionality
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Collaborated with DevOps team on deployment pipelines and CI/CD processes
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Implemented responsive front-end interfaces using modern web technologies
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800 hover:border-green-400/50 transition-all duration-300 mt-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-400">IT Intern</h3>
                  <p className="text-xl text-gray-300">K-Electric</p>
                </div>
                <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 mr-2" />
                  July 2025 – August 2025
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Assisted in network maintenance and troubleshooting for internal systems.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300">Supported IT infrastructure operations and user technical support.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Gained practical experience in IT service management and system administration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <Card className="bg-gray-900 border-gray-800 hover:border-green-400/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-400">BS Computer Science</h3>
                  <p className="text-xl text-gray-300">FAST NUCES</p>
                </div>
                <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 mr-2" />
                  Sep 2022 – Present
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">
                      CCPA: <span className="text-green-400 font-semibold">3.57 / 4.0</span>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">Dean's List Award</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    Achieved Dean's List recognition in 4 out of 5 semesters, demonstrating consistent academic
                    excellence in computer science fundamentals, algorithms, and software engineering.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Contact</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I would love to hear about your project and how I could help. Please fill in the form, and I'll get back
                to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <Mail className="h-5 w-5 text-green-400 mr-3" />
                  <a
                    href="mailto:abdulahadyousf82@gmail.com"
                    className="text-gray-300 hover:text-green-400 transition-colors group-hover:underline"
                  >
                    abdulahadyousf82@gmail.com
                  </a>
                </div>
                <div className="flex items-center group">
                  <Phone className="h-5 w-5 text-green-400 mr-3" />
                  <a
                    href="tel:+923323614519"
                    className="text-gray-300 hover:text-green-400 transition-colors group-hover:underline"
                  >
                    +92 332 3614519
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://linkedin.com/in/abdulahadyousfi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/abdulahad-cyber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Input
                    placeholder="Name"
                    className="bg-gray-900 border-gray-700 focus:border-green-400 text-white placeholder-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-900 border-gray-700 focus:border-green-400 text-white placeholder-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    rows={6}
                    className="bg-gray-900 border-gray-700 focus:border-green-400 text-white placeholder-gray-400 resize-none transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 mb-4 md:mb-0">© 2024 Abdul Ahad. All rights reserved.</div>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/abdulahadyousfi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/abdulahad-cyber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
