import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaRocket, FaDatabase, FaCloud, FaMobile } from 'react-icons/fa'

const MotionBox = motion(Box)

const skills = [
  { icon: FaCode, title: 'Frontend', description: 'React, TypeScript, Next.js, Vue.js' },
  { icon: FaPalette, title: 'Design', description: 'UI/UX, Figma, Design Systems' },
  { icon: FaRocket, title: 'Backend', description: 'Node.js, Python, APIs, Microservices' },
  { icon: FaDatabase, title: 'Database', description: 'PostgreSQL, MongoDB, Redis' },
  { icon: FaCloud, title: 'DevOps', description: 'AWS, Docker, CI/CD, Kubernetes' },
  { icon: FaMobile, title: 'Mobile', description: 'React Native, iOS, Android' },
]

export default function Skills() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Container maxW="680px" px={{ base: 4, md: 8 }} py={20}>
      <VStack spacing={12}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
        >
          <Heading size="2xl" mb={4}>Skills</Heading>
          <Text fontSize="lg" color={textColor} maxW="2xl" mx="auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
          {skills.map((skill, index) => (
            <MotionBox
              key={skill.title}
              p={6}
              bg={cardBg}
              borderRadius="lg"
              boxShadow="md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              _hover={{ boxShadow: 'lg' }}
            >
              <Icon as={skill.icon} boxSize={8} color="brand.600" mb={4} />
              <Heading size="md" mb={2}>{skill.title}</Heading>
              <Text color={textColor}>{skill.description}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

