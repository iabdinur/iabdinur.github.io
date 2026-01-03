import { Box, Container, Heading, VStack, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const educationEntries = [
  {
    year: '2027',
    text: 'Master of Computer Science (MCS), University of Illinois Urbana-Champaign',
  },
  {
    year: '2018',
    text: 'Master of Engineering in Chemical Engineering (MEng), University College London',
  },
]

export default function Education() {
  const textColor = useColorModeValue('black', 'white')
  const headingColor = useColorModeValue('black', 'white')
  const yearColor = useColorModeValue('black', 'white')

  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 4, md: 0 }}>
      <Container maxW="container.md">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading size="lg" mb={4} color={headingColor}>Education</Heading>
          <VStack spacing={3} align="stretch">
            {educationEntries.map((entry, index) => (
              <Box key={index} display="flex" gap={2} alignItems="flex-start">
                <Text fontSize="lg" fontWeight="bold" color={yearColor} minW="60px" flexShrink={0}>
                  {entry.year}
                </Text>
                <Text fontSize="lg" color={textColor} flex={1}>
                  {entry.text}
                </Text>
              </Box>
            ))}
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}

