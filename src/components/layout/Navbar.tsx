import { ReactNode } from 'react'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  MenuDivider,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { FaBars, FaBlog } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'
import Logo from './Logo'
import ThemeToggleButton from './ThemeToggleButton'

interface LinkItemProps {
  href: string
  path: string
  target?: string
  children: ReactNode
  [key: string]: any
}


const LinkItem = ({ href, path, target, children, ...props }: LinkItemProps) => {
  const active = path === href || (path === '/' && href === '/me')
  const inactiveColor = useColorModeValue('black', 'white')
  const hoverBg = useColorModeValue('#EBEBEB', '#223244')
  const activeBg = useColorModeValue('#EBEBEB', 'gray.600')
  
  return (
    <Link
      as={RouterLink}
      to={href}
      p={2}
      bg={active ? activeBg : undefined}
      color={inactiveColor}
      target={target}
      borderRadius="md"
      _hover={{
        bg: hoverBg,
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

const navItems = [
  { href: '/me', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
]

interface NavbarProps {
  [key: string]: any
}

export default function Navbar(props: NavbarProps) {
  const location = useLocation()
  const path = location.pathname
  const menuHoverBg = useColorModeValue('#EBEBEB', '#223244')

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#21293480')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {navItems.map((item) => (
            <LinkItem key={item.href} href={item.href} path={path} target={undefined}>
              {item.label}
            </LinkItem>
          ))}
        </Stack>

        <Box flex={1} textAlign="right" display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
          <Stack
            direction="row"
            spacing={2}
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
          >
            <Link
              href="https://blog.iabdinur.com/"
              target="_blank"
              p={2}
              borderRadius="md"
              color={useColorModeValue('black', 'white')}
              _hover={{ bg: useColorModeValue('#EBEBEB', '#223244') }}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
            >
              <FaBlog />
              Blog
            </Link>
            <Link
              href="https://github.com/iabdinur/iabdinur.github.io"
              target="_blank"
              p={2}
              borderRadius="md"
              color={useColorModeValue('black', 'white')}
              _hover={{ bg: useColorModeValue('#EBEBEB', '#223244') }}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
            >
              <IoLogoGithub />
              Source
            </Link>
          </Stack>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<FaBars />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg={useColorModeValue('white', '#212934')}>
                {navItems.map((item, index) => (
                  <Box key={item.href}>
                    <MenuItem 
                      px={4}
                      py={3}
                      _hover={{ bg: menuHoverBg }}
                      as={RouterLink}
                      to={item.href}
                    >
                      {item.label}
                    </MenuItem>
                    {index < navItems.length - 1 && (
                      <MenuDivider borderColor={useColorModeValue('gray.200', '#202020')} />
                    )}
                  </Box>
                ))}
                <MenuDivider borderColor={useColorModeValue('gray.200', '#202020')} />
                <MenuItem
                  px={4}
                  py={3}
                  _hover={{ bg: menuHoverBg }}
                  as={Link}
                  href="https://blog.iabdinur.com/"
                  target="_blank"
                >
                  Blog
                </MenuItem>
                <MenuItem
                  px={4}
                  py={3}
                  _hover={{ bg: menuHoverBg }}
                  as={Link}
                  href="https://github.com/iabdinur/iabdinur.github.io"
                  target="_blank"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

