import { Box, Container, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const interests = [
  'software engineering',
  'cloud computing',
  'machine learning',
  'systems and reliability',
  'community engagement',
  'art',
  'music',
  'fitness',
  'hiking',
  'reading',
]

const interestsSentence = (() => {
  const text = `${interests.slice(0, -1).join(', ')}, and ${interests[interests.length - 1]}.`
  return text.charAt(0).toUpperCase() + text.slice(1)
})()

export default function Interests() {
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.900', 'gray.100')

  return (
    <Box pt={{ base: 4, md: 6 }} pb={{ base: 12, md: 20 }}>
      <Container maxW="680px" px={{ base: 4, md: 8 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading size="lg" mb={4} color={headingColor}>Interests</Heading>
          <Text fontSize="lg" color={textColor}>
            {interestsSentence}
          </Text>
        </MotionBox>
      </Container>
    </Box>
  )
}

