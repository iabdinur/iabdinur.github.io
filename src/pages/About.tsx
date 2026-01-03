import { Box, Container, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function About() {
  const textColor = useColorModeValue('black', 'white')

  return (
    <Container maxW="container.xl" py={20}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <VStack spacing={8} align="start">
          <Heading size="2xl">About</Heading>
          <Text fontSize="lg" color={textColor}>
            Welcome to my portfolio! I'm a passionate full-stack developer with a love for creating
            beautiful, functional web experiences.
          </Text>
          <Text fontSize="lg" color={textColor}>
            With expertise in modern JavaScript frameworks, TypeScript, and a keen eye for design,
            I bring ideas to life through code.
          </Text>
          <Text fontSize="lg" color={textColor}>
            When I'm not coding, you can find me exploring new technologies, contributing to open
            source projects, or sharing knowledge with the developer community.
          </Text>
        </VStack>
      </MotionBox>
    </Container>
  )
}

