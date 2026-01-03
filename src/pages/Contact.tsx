import { Container, Heading, useColorModeValue } from '@chakra-ui/react'
import ContactForm from '../components/forms/ContactForm'

export default function Contact() {
  const headingColor = useColorModeValue('black', 'white')
  
  return (
    <Container maxW="container.md" py={{ base: 12, md: 20 }}>
      <Heading size="lg" mb={8} color={headingColor}>Contact</Heading>
      <ContactForm />
    </Container>
  )
}

