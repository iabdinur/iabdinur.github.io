import { Box, Container, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function About() {
  const textColor = useColorModeValue('black', 'white')
  const headingColor = useColorModeValue('black', 'white')

  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 4, md: 0 }}>
      <Container maxW="container.md">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading size="lg" mb={4} color={headingColor}>Me</Heading>
          <VStack spacing={4} align="stretch">
            <Text fontSize="lg" color={textColor}>
              I am a Master of Computer Science student at the University of Illinois Urbana-Champaign with a background in Chemical Engineering from University College London. I have previously worked as a Software Engineer at Foxtons and currently lead the development of Hantiile, where I build cloud-native services, APIs, and data-driven systems end to end.
            </Text>
            <Text fontSize="lg" color={textColor}>
              My favorite part of software engineering is turning complex ideas into systems people can actually rely on. I enjoy the process of designing, building, debugging, and eventually shipping software that solves real problems. My core experience spans Java, Spring Boot, C#, SQL, RESTful services, and cloud development, with a strong focus on reliability and maintainability.
            </Text>
            <Text fontSize="lg" color={textColor}>
              Outside of coding, I enjoy learning new technologies, problem solving, and working as a Broista at Dutch Bros, where I value the fast-paced environment and connecting with people in the community.
            </Text>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}

