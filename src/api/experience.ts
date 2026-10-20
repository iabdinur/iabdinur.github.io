import apiClient from './client'

export interface Experience {
  id: string
  title: string
  company?: string
  location?: string
  period: string
  description?: string
  bulletPoints?: string[]
  technologies?: string[]
}

export const fetchExperiences = async (): Promise<Experience[]> => {
  // If no API URL is configured, return static data immediately
  if (!import.meta.env.VITE_API_URL) {
    return staticExperiences
  }

  try {
    const { data } = await apiClient.get('/experience')
    if (Array.isArray(data)) {
      return data
    }
    return staticExperiences
  } catch (error) {
    console.warn('Failed to fetch experiences from API, using static data', error)
    return staticExperiences
  }
}

// Static data for development/demo
// Note: Education entries have been moved to Bio section
export const staticExperiences: Experience[] = [
  {
    id: '1',
    title: 'Graduate Software Engineer',
    company: 'UIUC Chemical Imaging and Structures Lab',
    location: 'Urbana, IL',
    period: 'Jan 2026 – Present',
    bulletPoints: [
      'Architected a distributed streaming viewer for QCL microscopy that decouples acquisition from visualization, so acquisition, processing, and viewing scale independently.',
      'Engineered a multi-resolution tile pyramid with Redis caching, cutting whole-slide load time from 5 minutes to 30 seconds on datasets of more than 1,000 tiles.',
      'Deployed microservices on Kubernetes (EKS) with horizontal autoscaling, scaling linearly from 1 to 5 instruments, and built a React and OpenSeadragon viewer for remote pathology.',
    ],
    technologies: ['C#', 'Python', 'TypeScript', 'React', 'Docker', 'Kubernetes', 'Redis'],
  },
  {
    id: '2',
    title: 'Founder & Lead Engineer',
    company: 'Hantiile',
    location: 'Urbana, IL',
    period: 'Jun 2024 – Present',
    bulletPoints: [
      'Built a real estate platform with two surfaces, a client marketplace (hantiile.com) and an agency CRM, for Gulf and East African markets in Arabic, English, and Somali.',
      'Designed 13 Spring Boot microservices behind an API gateway that enforces per-surface JWT audiences and Redis rate limiting, each owning its domain and Flyway migrations on PostgreSQL.',
      'Connected services through RabbitMQ events published via a transactional outbox, with dead-letter queues and capped retries.',
      'Tested against real PostgreSQL with JUnit 5 and Testcontainers, and automated image builds and deployments with GitHub Actions.',
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Redis', 'React', 'Docker', 'Kubernetes'],
  },
  {
    id: '3',
    title: 'Software and Development Support Engineer',
    company: 'Foxtons',
    location: 'London, UK',
    period: 'Jul 2022 – Jun 2024',
    bulletPoints: [
      'Built and supported legacy enterprise C#/.NET and ASP.NET MVC applications with REST APIs and SQL Server backends, from marketplace CRM systems to financial, HR, and property valuation tools used across the business.',
      'Optimized SQL Server queries and stored procedures, reduced redundant packages during modernization, and led the source-control migration from TFS to GitHub to strengthen CI/CD.',
      'Delivered production support through log analysis, root-cause investigation, and fix delivery, handling more than 100 technical inquiries a week in an Agile Scrum environment.',
    ],
    technologies: ['C#', '.NET', 'ASP.NET MVC', 'SQL Server', 'REST APIs', 'GitHub', 'CI/CD'],
  },
]

