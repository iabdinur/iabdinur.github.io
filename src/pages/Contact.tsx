import { Container, Heading, useColorModeValue } from '@chakra-ui/react'
import ContactForm from '../components/forms/ContactForm'

export default function Contact() {
  const headingColor = useColorModeValue('gray.900', 'gray.100')

  return (
    <Container maxW="680px" px={{ base: 4, md: 8 }} py={{ base: 12, md: 20 }}>
      <Heading size="lg" mb={8} color={headingColor}>Contact</Heading>
      <ContactForm />
    </Container>
  )
}

