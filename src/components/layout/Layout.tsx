import { Box, useColorModeValue } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const bg = useColorModeValue('white', 'gray.900')

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg={bg}>
      <Navbar />
      <Box flex="1">{children}</Box>
      <Footer />
    </Box>
  )
}
