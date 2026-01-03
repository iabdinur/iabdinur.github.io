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
    title: 'Founder & Software Engineer',
    company: 'Hantiile',
    location: 'Urbana, IL',
    period: 'Jun 2024 – Present',
    bulletPoints: [
      'Designed and developed a modular CRM and marketplace platform using Java and Spring Boot.',
      'Built RESTful APIs and repository layers with PostgreSQL and Flyway-managed database migrations.',
      'Implemented authentication and role-based access control using Spring Security.',
      'Integrated external systems through APIs and batch imports to ensure data consistency and traceability.',
      'Containerized services with Docker and automated builds and deployments using CI/CD pipelines.',
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Spring Security', 'Docker', 'CI/CD', 'REST APIs'],
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'Foxtons',
    location: 'London, UK',
    period: 'Sep 2023 – Jun 2024',
    bulletPoints: [
      'Developed and supported enterprise systems using C#, ASP.NET MVC, SQL Server, and REST APIs.',
      'Refactored legacy applications, optimized SQL queries, and improved application performance.',
      'Migrated source control from TFS to GitHub, strengthening CI/CD and deployment workflows.',
      'Investigated and resolved production issues while collaborating with cross-functional Agile teams.',
    ],
    technologies: ['C#', 'ASP.NET MVC', 'SQL Server', 'REST APIs', 'GitHub', 'CI/CD', 'Agile'],
  },
  {
    id: '3',
    title: 'Development Support Engineer',
    company: 'Foxtons Group Ltd',
    location: 'London, UK',
    period: 'Jul 2023 – Sep 2023',
    bulletPoints: [
      'Assisted in development support capacity for in-house HR, property management and financial reporting tools.',
      'Participated in Agile Scrum ceremonies, sprint planning and backlog refinement.',
      'Followed senior engineers\' guidance to formulate technical tasks requirements for bug tickets.',
      'Performed system testing and troubleshooting, documenting issues and resolutions.',
      'Tracked down and resolved bugs in fast-paced production environment and documented fixes for future reference.',
      'SQL scripting, store procedures for various reports and data extractions.',
      'Delivered expert technical support, managing 100+ support tickets.',
    ],
    technologies: ['SQL', 'Agile', 'Scrum', 'System Testing', 'Troubleshooting', 'Technical Support'],
  },
]

