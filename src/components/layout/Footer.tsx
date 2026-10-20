import { Box, Container, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaBlog, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box as="footer" borderTop="1px" borderColor="gray.200" _dark={{ borderColor: 'gray.700' }} py={8} mt="auto">
      <Container maxW="680px" px={{ base: 4, md: 8 }}>
        <Flex direction={{ base: 'column', sm: 'row' }} justify="space-between" align="center" gap={4}>
          <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
            Ibrahim Abdinur © {new Date().getFullYear()}
          </Text>
          <HStack spacing={4}>
            <IconButton
              as="a"
              href="https://github.com/iabdinur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              colorScheme="gray"
              size="sm"
            />
            <IconButton
              as="a"
              href="https://linkedin.com/in/ibrahim-abdinur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              colorScheme="gray"
              size="sm"
            />
            <IconButton
              as="a"
              href="https://blog.iabdinur.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog"
              icon={<FaBlog />}
              variant="ghost"
              colorScheme="gray"
              size="sm"
            />
            <IconButton
              as="a"
              href="mailto:iabdinur@icloud.com"
              aria-label="Email"
              icon={<FaEnvelope />}
              variant="ghost"
              colorScheme="gray"
              size="sm"
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
