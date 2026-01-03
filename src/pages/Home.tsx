import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Education from '../components/sections/Education'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Interests from '../components/sections/Interests'

const sectionMap: { [key: string]: string } = {
  '/me': 'me',
  '/education': 'education',
  '/skills': 'skills',
  '/experience': 'experience',
  '/interests': 'interests',
}

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const sectionId = sectionMap[location.pathname]
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname])

  return (
    <Box>
      <Hero />
      <Box 
        id="me" 
        css={{ scrollMarginTop: '80px' }}
        sx={{ '@media (max-width: 768px)': { scrollMarginTop: '70px' } }}
      >
        <About />
      </Box>
      <Box 
        id="education" 
        css={{ scrollMarginTop: '80px' }}
        sx={{ '@media (max-width: 768px)': { scrollMarginTop: '70px' } }}
      >
        <Education />
      </Box>
      <Box 
        id="skills" 
        css={{ scrollMarginTop: '80px' }}
        sx={{ '@media (max-width: 768px)': { scrollMarginTop: '70px' } }}
      >
        <Skills />
      </Box>
      <Box 
        id="experience" 
        css={{ scrollMarginTop: '80px' }}
        sx={{ '@media (max-width: 768px)': { scrollMarginTop: '70px' } }}
      >
        <Experience />
      </Box>
      <Box 
        id="interests" 
        css={{ scrollMarginTop: '80px' }}
        sx={{ '@media (max-width: 768px)': { scrollMarginTop: '70px' } }}
      >
        <Interests />
      </Box>
    </Box>
  )
}
