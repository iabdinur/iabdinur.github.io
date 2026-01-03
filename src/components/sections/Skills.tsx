import { Box, Container, Heading, Text, SimpleGrid, Icon, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { 
  FaJava, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase, 
  FaReact, 
  FaAws, 
  FaDocker, 
  FaGithub, 
  FaGitlab, 
  FaLinux, 
  FaWindows,
  FaApple,
  FaCloud
} from 'react-icons/fa'
import { 
  SiSpringboot, 
  SiDotnet, 
  SiJunit5,
  SiSwagger
} from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'

const MotionBox = motion(Box)

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: FaJava, color: '#ED8B00' }, // Java orange
      { name: 'C#', icon: SiDotnet, color: '#512BD4' }, // .NET purple
      { name: 'SQL', icon: FaDatabase, color: '#336791' }, // SQL blue
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' }, // JavaScript yellow
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' }, // HTML orange-red
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' }, // CSS blue
    ],
  },
  {
    title: 'Frameworks & APIs',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' }, // Spring green
      { name: 'ASP.NET', icon: SiDotnet, color: '#512BD4' }, // .NET purple
      { name: 'React', icon: FaReact, color: '#61DAFB' }, // React cyan
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: BiLogoPostgresql, color: '#336791' }, // PostgreSQL blue
      { name: 'SQL Server', icon: FaDatabase, color: '#CC2927' }, // SQL Server red
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Azure', icon: FaCloud, color: '#0078D4' }, // Azure blue
      { name: 'AWS', icon: FaAws, color: '#FF9900' }, // AWS orange
      { name: 'Docker', icon: FaDocker, color: '#2496ED' }, // Docker blue
    ],
  },
  {
    title: 'Testing & Tools',
    skills: [
      { name: 'GitHub', icon: FaGithub, color: '#181717' }, // GitHub black (use white in dark mode)
      { name: 'GitLab', icon: FaGitlab, color: '#FC6D26' }, // GitLab orange
      { name: 'JUnit', icon: SiJunit5, color: '#25A162' }, // JUnit green
      { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' }, // Swagger green
    ],
  },
  {
    title: 'Systems',
    skills: [
      { name: 'Linux', icon: FaLinux, color: '#FCC624' }, // Linux yellow
      { name: 'Windows', icon: FaWindows, color: '#0078D4' }, // Windows blue
      { name: 'macOS', icon: FaApple, color: '#000000' }, // Apple black (use white in dark mode)
    ],
  },
]

export default function Skills() {
  const { colorMode } = useColorMode()
  const cardBg = useColorModeValue('white', '#212934')
  const cardHoverBg = useColorModeValue('gray.100', '#2a3d52')
  const textColor = useColorModeValue('black', 'white')
  const headingColor = useColorModeValue('black', 'white')
  const borderColor = useColorModeValue('gray.200', '#202020')
  
  // Helper function to get icon color based on color mode
  const getIconColor = (skillColor: string, skillName: string) => {
    // For dark icons (GitHub, macOS), use white in dark mode
    if ((skillName === 'GitHub' || skillName === 'macOS') && colorMode === 'dark') {
      return '#FFFFFF'
    }
    return skillColor
  }

  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 4, md: 0 }}>
      <Container maxW="container.md">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading size="lg" mb={4} color={headingColor}>Skills</Heading>
          <Text fontSize="lg" color={textColor} mb={{ base: 6, md: 8 }}>
            A comprehensive overview of my technical expertise and the technologies I work with.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }} w="100%">
            {skillCategories.map((category, categoryIndex) => (
              <MotionBox
                key={category.title}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                _hover={{ transform: 'translateY(-5px)', bg: cardHoverBg }}
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

