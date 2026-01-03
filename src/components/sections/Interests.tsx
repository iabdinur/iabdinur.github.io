import { Box, Container, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const interests = [
  'Software Engineering',
  'Cloud Computing',
  'Machine Learning',
  'Systems & Reliability',
  'Community Engagement',
  'Art',
  'Music',
  'Fitness',
  'Hiking',
  'Reading',
]

export default function Interests() {
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
          <Heading size="lg" mb={4} color={headingColor}>Interests</Heading>
          <Text fontSize="lg" color={textColor}>
            {interests.join(', ')}
          </Text>
        </MotionBox>
      </Container>
    </Box>
  )
}

