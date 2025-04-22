"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, Linkedin, Mail } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  const aboutAnimation = useScrollAnimation()
  const projectsAnimation = useScrollAnimation()
  const resumeAnimation = useScrollAnimation()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-semibold">My Portfolio</div>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-secondary">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-secondary">
              Projects
            </Link>
            <Link href="#resume" className="text-sm font-medium transition-colors hover:text-secondary">
              Resume
            </Link>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90">Contact Me</Button>
        </div>
      </header>
      <main className="flex-1 bg-background">
        {/* About Section */}
        <section
          id="about"
          className="container py-12 md:py-24 lg:py-32"
          ref={aboutAnimation.ref as React.RefObject<HTMLElement>}
          style={{
            opacity: aboutAnimation.isVisible ? 1 : 0,
            transform: aboutAnimation.isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-1 lg:gap-16">
            <div className="relative w-full h-[400px] overflow-hidden rounded-lg border-4 border-primary">
              <Image
                src="/placeholder.svg?height=800&width=1600"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Hi, I'm <span className="text-primary">Your Name</span>
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">
                  I'm a passionate developer specializing in creating beautiful, functional web experiences.
                </p>
              </div>
              <p className="text-muted-foreground">
                With over 5 years of experience in web development, I focus on building responsive, accessible, and
                performant applications. I love solving complex problems and turning ideas into reality through code.
              </p>
              <div className="flex gap-4">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-secondary text-secondary hover:bg-secondary/10"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:your.email@example.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-secondary text-secondary hover:bg-secondary/10"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="bg-background py-12 md:py-24 lg:py-32"
          ref={projectsAnimation.ref as React.RefObject<HTMLElement>}
          style={{
            opacity: projectsAnimation.isVisible ? 1 : 0,
            transform: projectsAnimation.isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div className="container">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="mt-4 text-muted-foreground">
                A collection of projects I've worked on throughout my career.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden border-primary/20 bg-background">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-secondary">{project.title}</CardTitle>
                    <CardDescription>{project.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-accent text-accent hover:bg-accent/10 hover:text-accent"
                      >
                        View Project <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section
          id="resume"
          className="container py-12 md:py-24 lg:py-32"
          ref={resumeAnimation.ref as React.RefObject<HTMLElement>}
          style={{
            opacity: resumeAnimation.isVisible ? 1 : 0,
            transform: resumeAnimation.isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Resume</h2>
            <p className="mt-4 text-muted-foreground">My professional experience, education, and skills.</p>
            <div className="mt-6">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 bg-accent hover:bg-accent/90 text-white">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-16">
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-background border border-primary/30">
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Skills
                </TabsTrigger>
              </TabsList>
              <TabsContent value="experience" className="mt-6 space-y-8">
                {experiences.map((experience, index) => (
                  <div key={index} className="rounded-lg border border-primary/20 p-6 bg-background">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                      <div>
                        <h3 className="text-xl font-bold text-secondary">{experience.position}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="rounded-full bg-primary/10 px-4 py-1 text-sm text-primary">
                        {experience.period}
                      </div>
                    </div>
                    <p className="mt-4">{experience.description}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="education" className="mt-6 space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="rounded-lg border border-primary/20 p-6 bg-background">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                      <div>
                        <h3 className="text-xl font-bold text-secondary">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="rounded-full bg-primary/10 px-4 py-1 text-sm text-primary">{edu.period}</div>
                    </div>
                    <p className="mt-4">{edu.description}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="skills" className="mt-6">
                <div className="rounded-lg border border-primary/20 p-6 bg-background">
                  <h3 className="mb-4 text-xl font-bold text-secondary">Technical Skills</h3>
                  <p className="text-muted-foreground leading-relaxed">{skills.join(", ")}</p>
                </div>
                <div className="mt-8 rounded-lg border border-primary/20 p-6 bg-background">
                  <h3 className="mb-4 text-xl font-bold text-secondary">Languages</h3>
                  <p className="text-muted-foreground leading-relaxed">{languages.join(" • ")}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="border-t border-primary/20 py-6 md:py-0 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-secondary hover:text-secondary hover:bg-secondary/10">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data - replace with your own
const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A full-stack e-commerce platform built with Next.js and Stripe integration.",
    image: "/placeholder.svg?height=200&width=350",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "A secure banking application with real-time transaction tracking.",
    image: "/placeholder.svg?height=200&width=350",
    link: "#",
  },
  {
    title: "AI Content Generator",
    category: "Machine Learning",
    description: "An AI-powered tool that generates high-quality content for marketing teams.",
    image: "/placeholder.svg?height=200&width=350",
    link: "#",
  },
  {
    title: "Health & Fitness Tracker",
    category: "Mobile Development",
    description: "A comprehensive fitness tracking application with personalized recommendations.",
    image: "/placeholder.svg?height=200&width=350",
    link: "#",
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description: "A platform connecting property buyers with sellers, featuring virtual tours.",
    image: "/placeholder.svg?height=200&width=350",
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    category: "Data Visualization",
    description: "A dashboard for tracking and analyzing social media performance across platforms.",
    image: "/placeholder.svg?height=200&width=350",
    link: "#",
  },
]

const experiences = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description:
      "Lead the frontend development team in creating responsive and accessible web applications. Implemented modern frontend practices and improved performance by 40%.",
  },
  {
    position: "Web Developer",
    company: "Digital Creations",
    period: "2018 - 2020",
    description:
      "Developed and maintained client websites using React and Next.js. Collaborated with designers to implement pixel-perfect interfaces.",
  },
  {
    position: "Junior Developer",
    company: "StartUp Innovations",
    period: "2016 - 2018",
    description:
      "Assisted in the development of web applications. Gained experience in frontend technologies and agile development methodologies.",
  },
]

const education = [
  {
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2014 - 2016",
    description: "Specialized in web technologies and software engineering. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "State University",
    period: "2010 - 2014",
    description: "Focused on programming fundamentals, database management, and web development.",
  },
]

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "GraphQL",
  "SQL",
  "MongoDB",
]

const languages = ["English (Native)", "Spanish (Fluent)", "French (Basic)"]
