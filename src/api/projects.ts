import apiClient from './client'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  demo: string
  github: string
  tech: string[]
}

export const fetchProjects = async (): Promise<Project[]> => {
  // If no API URL is configured, return static data immediately
  if (!import.meta.env.VITE_API_URL) {
    return staticProjects
  }

  try {
    // Replace with your actual API endpoint
    const { data } = await apiClient.get('/projects')
    // Ensure data is an array
    if (Array.isArray(data)) {
      return data
    }
    // If API returns non-array, use static data
    return staticProjects
  } catch (error) {
    // Fallback to static data if API fails
    console.warn('Failed to fetch projects from API, using static data', error)
    return staticProjects
  }
}

// Static data for development/demo
export const staticProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'An amazing project showcasing modern web development practices with React and TypeScript.',
    image: 'https://via.placeholder.com/400x200/0ea5e9/ffffff?text=Project+1',
    demo: 'https://demo.com',
    github: 'https://github.com/iabdinur/project1',
    tech: ['React', 'TypeScript', 'Chakra UI'],
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'A full-stack application demonstrating advanced state management and API integration.',
    image: 'https://via.placeholder.com/400x200/0284c7/ffffff?text=Project+2',
    demo: 'https://demo.com',
    github: 'https://github.com/iabdinur/project2',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'An interactive 3D web experience built with React Three Fiber and modern graphics.',
    image: 'https://via.placeholder.com/400x200/0369a1/ffffff?text=Project+3',
    demo: 'https://demo.com',
    github: 'https://github.com/iabdinur/project3',
    tech: ['React', 'Three.js', 'Framer Motion'],
  },
]

