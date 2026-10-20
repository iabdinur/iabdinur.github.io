import { Box, Container, Text, Link, HStack, Icon, VStack, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaBlog, FaEnvelope } from 'react-icons/fa'

const mutedLink = {
  color: 'gray.600',
  _dark: { color: 'gray.400' },
  _hover: { color: 'gray.900', _dark: { color: 'gray.200' } },
}

export default function Footer() {
  const bg = useColorModeValue('white', 'gray.900')
  const color = useColorModeValue('gray.900', 'gray.200')

  return (
    <Box bg={bg} color={color} mt="auto" py={8}>
      <Container maxW="680px" px={{ base: 4, md: 8 }}>
        <Box
          borderTop="1px"
          borderColor="gray.200"
          _dark={{ borderColor: 'gray.700' }}
          pt={4}
          mx={{ base: -4, md: -8 }}
          px={{ base: 4, md: 8 }}
        >
          <VStack spacing={3}>
            <Text textAlign="center" fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
              © {new Date().getFullYear()} Ibrahim Abdinur
            </Text>
            <HStack spacing={4} justify="center">
              <Link href="https://github.com/iabdinur" isExternal {...mutedLink}>
                <Icon as={FaGithub} boxSize={5} />
              </Link>
              <Link href="https://linkedin.com/in/ibrahim-abdinur" isExternal {...mutedLink}>
                <Icon as={FaLinkedin} boxSize={5} />
              </Link>
              <Link href="https://blog.iabdinur.dev/" isExternal {...mutedLink}>
                <Icon as={FaBlog} boxSize={5} />
              </Link>
              <Link href="mailto:iabdinur@icloud.com" {...mutedLink}>
                <Icon as={FaEnvelope} boxSize={5} />
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}
