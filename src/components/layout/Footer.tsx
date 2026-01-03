import { Box, Text, Center, HStack, Link, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaBlog, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const bgColor = useColorModeValue('gray.100', '#212934')
  const borderColor = useColorModeValue('gray.200', '#202020')
  const textColor = useColorModeValue('gray.600', 'white')
  const iconColor = useColorModeValue('gray.700', 'white')

  return (
    <Box bg={bgColor} py={{ base: 6, md: 8 }} borderTop="1px" borderColor={borderColor} mt={{ base: 12, md: 20 }}>
      <Center>
        <Box textAlign="center">
          <HStack spacing={6} justify="center" mb={4}>
            <Link href="https://github.com/iabdinur" isExternal _hover={{ color: 'brand.400' }}>
              <Icon as={FaGithub} boxSize={6} color={iconColor} />
            </Link>
            <Link href="https://linkedin.com/in/ibrahim-abdinur" isExternal _hover={{ color: 'brand.400' }}>
              <Icon as={FaLinkedin} boxSize={6} color={iconColor} />
            </Link>
                <Link href="https://blog.abdinur.com" isExternal _hover={{ color: 'brand.400' }}>
                  <Icon as={FaBlog} boxSize={6} color={iconColor} />
                </Link>
            <Link href="mailto:iabdinur@icloud.com" _hover={{ color: 'brand.400' }}>
              <Icon as={FaEnvelope} boxSize={6} color={iconColor} />
            </Link>
          </HStack>
          <Text fontSize="sm" color={textColor}>
            © {new Date().getFullYear()} Ibrahim Abdiinur
          </Text>
        </Box>
      </Center>
    </Box>
  )
}

