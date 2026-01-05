import { Box, Container, Heading, Text, VStack, useColorModeValue, Image, Button, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaBlog, FaBriefcase, FaFileDownload } from 'react-icons/fa'
import VoxelModel from '../three/VoxelModel'

const MotionBox = motion(Box)

export default function Hero() {
  const textColor = useColorModeValue('black', 'white')
  const headingColor = useColorModeValue('black', 'white')
  const buttonBg = useColorModeValue('#EBEBEB', 'gray.600')
  const buttonHoverBg = useColorModeValue('gray.300', 'gray.500')

  const handleResumeDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/resume.pdf')
      if (!response.ok) {
        throw new Error(`Failed to fetch resume: ${response.status} ${response.statusText}`)
      }
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Ibrahim_Abdinur_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Failed to download resume:', error)
      // Fallback: try direct download link
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'Ibrahim_Abdinur_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <Box py={{ base: 8, md: 12 }} px={{ base: 4, md: 0 }}>
      <Container 
        maxW="container.md"
        minH={{ base: "calc(100vh - 70px)", md: "calc(100vh - 80px)" }} 
        display="flex" 
        alignItems="flex-start"
        pt={{ base: 4, md: 8 }}
      >
        <VStack spacing={{ base: 6, md: 8 }} align="center" w="100%">
        <MotionBox
          w={{ base: "300px", md: "400px" }}
          aspectRatio={1}
          flexShrink={0}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <VoxelModel />
        </MotionBox>
        
        <motion.div
          style={{ width: '100%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            justifyContent="space-between"
            gap={{ base: 4, md: 6 }}
            w="100%"
          >
            <VStack spacing={1} align="flex-start" flex="1" textAlign="left">
              <Heading size="2xl" color={headingColor} fontWeight="bold" mb={1}>
                Ibrahim Abdinur
              </Heading>
              <Text fontSize="xl" color={textColor}>
                MCS @ Illinois
              </Text>
              <Text fontSize="xl" color={textColor}>
                Founder & Chief Engineer @ Hantiile
              </Text>
              <Text fontSize="xl" color={textColor}>
                Software Engineer ( Backend Developer / Cloud Architect )
              </Text>
              
              <HStack spacing={2} pt={4} flexWrap="wrap">
                <Button
                  as="a"
                  href="https://linkedin.com/in/ibrahim-abdinur"
                  target="_blank"
                  size="sm"
                  leftIcon={<FaLinkedin />}
                  bg={buttonBg}
                  color={textColor}
                  _hover={{ bg: buttonHoverBg }}
                >
                  LinkedIn
                </Button>
                <Button
                  as="a"
                  href="https://github.com/iabdinur"
                  target="_blank"
                  size="sm"
                  leftIcon={<FaGithub />}
                  bg={buttonBg}
                  color={textColor}
                  _hover={{ bg: buttonHoverBg }}
                >
                  GitHub
                </Button>
                <Button
                  as="a"
                  href="https://blog.iabdinur.com/"
                  target="_blank"
                  size="sm"
                  leftIcon={<FaBlog />}
                  bg={buttonBg}
                  color={textColor}
                  _hover={{ bg: buttonHoverBg }}
                >
                  Blog
                </Button>
                <Button
                  as="a"
                  href="https://portfolio.abdinur.com"
                  target="_blank"
                  size="sm"
                  leftIcon={<FaBriefcase />}
                  bg={buttonBg}
                  color={textColor}
                  _hover={{ bg: buttonHoverBg }}
                >
                  Portfolio
                </Button>
                <Button
                  onClick={handleResumeDownload}
                  size="sm"
                  leftIcon={<FaFileDownload />}
                  bg={buttonBg}
                  color={textColor}
                  _hover={{ bg: buttonHoverBg }}
                >
                  Resume
                </Button>
              </HStack>
            </VStack>
            <Box
              borderRadius="full"
              overflow="hidden"
              w={{ base: "100px", md: "120px" }}
              h={{ base: "100px", md: "120px" }}
              borderWidth="2px"
              borderColor={useColorModeValue('gray.200', '#202020')}
              flexShrink={0}
            >
              <Image
                src="/images/profile.jpg"
                alt="Ibrahim Abdinur"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </Box>
        </motion.div>
      </VStack>
      </Container>
    </Box>
  )
}

