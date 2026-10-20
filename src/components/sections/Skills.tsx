import { Box, Container, Heading, Text, SimpleGrid, Icon, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaJava,
  FaDatabase,
  FaReact,
  FaAws,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaCloud,
  FaVial,
  FaBoxes,
} from 'react-icons/fa'
import {
  SiSpringboot,
  SiDotnet,
  SiPython,
  SiTypescript,
  SiHaskell,
  SiRedis,
  SiRabbitmq,
  SiKubernetes,
  SiGithubactions,
  SiJunit5,
} from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'

const MotionBox = motion(Box)

// Mirrors the Technical Skills section of the resume (public/resume.pdf).
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: FaJava, color: '#ED8B00' }, // Java orange
      { name: 'C#', icon: SiDotnet, color: '#512BD4' }, // .NET purple
      { name: 'Python', icon: SiPython, color: '#3776AB' }, // Python blue
      { name: 'SQL', icon: FaDatabase, color: '#336791' }, // SQL blue
      { name: 'Haskell', icon: SiHaskell, color: '#5D4F85' }, // Haskell purple (UIUC MCS, CS 421)
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }, // TypeScript blue
    ],
  },
  {
    title: 'Frameworks & Services',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' }, // Spring green
      { name: 'ASP.NET', icon: SiDotnet, color: '#512BD4' }, // .NET purple
      { name: 'React', icon: FaReact, color: '#61DAFB' }, // React cyan
    ],
  },
  {
    title: 'Data & Messaging',
    skills: [
      { name: 'PostgreSQL', icon: BiLogoPostgresql, color: '#336791' }, // PostgreSQL blue
      { name: 'SQL Server', icon: FaDatabase, color: '#CC2927' }, // SQL Server red
      { name: 'Redis', icon: SiRedis, color: '#DC382D' }, // Redis red
      { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' }, // RabbitMQ orange
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' }, // AWS orange
      { name: 'Azure', icon: FaCloud, color: '#0078D4' }, // Azure blue
      { name: 'Docker', icon: FaDocker, color: '#2496ED' }, // Docker blue
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' }, // Kubernetes blue
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' }, // GitHub Actions blue
    ],
  },
  {
    title: 'Testing & Tools',
    skills: [
      { name: 'JUnit', icon: SiJunit5, color: '#25A162' }, // JUnit green
      { name: 'Mockito', icon: FaVial, color: '#78A641' }, // generic icon, Mockito green
      { name: 'Testcontainers', icon: FaBoxes, color: '#2E9E95' }, // generic icon, Testcontainers teal
      { name: 'Git', icon: FaGitAlt, color: '#F05032' }, // Git orange
      { name: 'GitHub', icon: FaGithub, color: '#181717' }, // GitHub black (use white in dark mode)
    ],
  },
]

export default function Skills() {
  const { colorMode } = useColorMode()
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.900', 'gray.100')


  // Helper function to get icon color based on color mode
  const getIconColor = (skillColor: string, skillName: string) => {
    // For dark icons (GitHub), use white in dark mode
    if (skillName === 'GitHub' && colorMode === 'dark') {
      return '#FFFFFF'
    }
    return skillColor
  }

  return (
    <Box pt={{ base: 4, md: 6 }} pb={{ base: 12, md: 20 }}>
      <Container maxW="680px" px={{ base: 4, md: 8 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading size="lg" mb={4} color={headingColor}>Skills</Heading>
          <Text fontSize="lg" color={textColor} mb={{ base: 6, md: 8 }}>
            The languages, frameworks, and tools I use most often, grouped by where they fit.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} w="100%">
            {skillCategories.map((category, categoryIndex) => (
              <MotionBox
                key={category.title}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                _hover={{ boxShadow: 'lg' }}
              >
                <Heading size="md" mb={4} color={headingColor}>{category.title}</Heading>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
                  {category.skills.map((skill) => (
                    <Box
                      key={skill.name}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      textAlign="center"
                      p={3}
                    >
                      <Icon as={skill.icon} boxSize={8} color={getIconColor(skill.color, skill.name)} mb={2} />
                      <Text fontSize="sm" fontWeight="medium" color={textColor}>{skill.name}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </MotionBox>
            ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

