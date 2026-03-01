export interface ProjectLinks {
  github?: string
  demo?: string
  docs?: string
}

export interface CaseStudyContent {
  problem: string[]
  solution: string[]
  architecture: string[]
  decisions: string[]
  impact: string[]
  challenges: string[]
  nextSteps: string[]
}

export interface Project {
  slug: string
  title: string
  tagline: string
  category: string
  featured: boolean
  award?: string
  role?: string
  tech: string[]
  highlights: string[]
  links: ProjectLinks
  caseStudy: CaseStudyContent
}
