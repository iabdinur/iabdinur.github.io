import { Box, Container, Heading, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function About() {
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
          <Heading size="lg" mb={4} color={headingColor}>Me</Heading>
          <VStack spacing={4} align="stretch">
            <Text fontSize="lg" color={textColor} lineHeight="tall">
              I am a Master of Computer Science student at the University of Illinois Urbana-Champaign, graduating in December 2026, with a background in chemical engineering from University College London. I work as a graduate software engineer in the Chemical Imaging and Structures Lab at UIUC, where I build distributed systems for microscopy imaging, and I previously built and supported legacy C#/.NET applications at Foxtons, from marketplace CRM systems to internal finance, HR, and property valuation tools.
            </Text>
            <Text fontSize="lg" color={textColor} lineHeight="tall">
              My favorite part of software engineering is turning complex ideas into systems people can actually rely on. I am also the founder and lead engineer of Hantiile, a real estate marketplace and agency CRM that I built end to end on a modern stack: Java and Spring Boot microservices, PostgreSQL, RabbitMQ, and React. Most of my work is in Java, C#, SQL, and TypeScript, with a strong focus on reliability and maintainability. I also write about what I learn on{' '}
              <Link href="https://blog.iabdinur.dev/" isExternal color="inherit" _hover={{ textDecoration: 'underline' }}>
                my blog
              </Link>
              , from UIUC MCS course reviews to software engineering and system design, and I am a big proponent of open source development.
            </Text>
            <Text fontSize="lg" color={textColor} lineHeight="tall">
              Outside of my coding projects, I love the art of making good coffee and the care that goes into every cup. I also enjoy taking part in hackathons, learning new technologies, and connecting with like-minded people in the community.
            </Text>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}

