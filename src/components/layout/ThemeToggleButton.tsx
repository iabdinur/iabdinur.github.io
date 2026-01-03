import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue, Icon } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggleButton = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  
  const bgColor = useColorModeValue('#EBEBEB', '#2b3b4f')
  const hoverBg = useColorModeValue('#EBEBEB', '#2b3b4f')
  const iconColor = useColorModeValue('#004aad', '#FFFFFF')

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={colorMode}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          onClick={toggleColorMode}
          w="48px"
          h="48px"
          borderRadius="lg"
          bg={bgColor}
          _hover={{ bg: hoverBg }}
          icon={
            <Icon
              as={colorMode === 'light' ? FaMoon : FaSun}
              boxSize="22px"
              color={iconColor}
            />
          }
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton

