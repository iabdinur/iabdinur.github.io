import {
  Box,
  type BoxProps,
  Flex,
  HStack,
  Link,
  IconButton,
  Stack,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaBlog } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'
import Logo from './Logo'
import ThemeToggleButton from './ThemeToggleButton'

const navItems = [
  { href: '/me', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
]

const externalItems = [
  { href: 'https://blog.iabdinur.dev/', label: 'Blog', icon: FaBlog },
  { href: 'https://github.com/iabdinur/iabdinur.github.io', label: 'Source', icon: IoLogoGithub },
]

export default function Navbar(props: BoxProps) {
  const { isOpen, onToggle } = useDisclosure()
  const location = useLocation()
  const bg = useColorModeValue('white', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const isActive = (href: string) =>
    location.pathname === href || (location.pathname === '/' && href === '/me')

  return (
    <Box
      as="nav"
      bg={bg}
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={1000}
      {...props}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
        maxW="680px"
        mx="auto"
      >
        <HStack spacing={8} alignItems="center">
          <Logo />
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                as={RouterLink}
                to={item.href}
                pb={1}
                borderBottom="2px solid"
                borderColor={isActive(item.href) ? 'brand.600' : 'transparent'}
                _hover={{ textDecoration: 'none', borderColor: 'brand.600' }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems="center" gap={2}>
          <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
            {externalItems.map((item) => (
              <IconButton
                key={item.href}
                as={Link}
                href={item.href}
                isExternal
                aria-label={item.label}
                icon={<item.icon />}
                variant="ghost"
              />
            ))}
          </HStack>
          <ThemeToggleButton />
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <FaTimes /> : <FaBars />}
            variant="ghost"
            aria-label="Toggle menu"
          />
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }} px={4} maxW="680px" mx="auto">
          <Stack as="nav" spacing={4}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                as={RouterLink}
                to={item.href}
                onClick={onToggle}
                fontWeight={isActive(item.href) ? 'semibold' : 'normal'}
                color={isActive(item.href) ? 'brand.600' : 'inherit'}
              >
                {item.label}
              </Link>
            ))}
            {externalItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                isExternal
                onClick={onToggle}
                color="gray.600"
                _dark={{ color: 'gray.400' }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  )
}
