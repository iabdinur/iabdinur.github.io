import { useColorModeValue } from '@chakra-ui/react'

const FootprintIcon = () => {
  const fillColor = useColorModeValue('#202023', 'whiteAlpha.900')
  
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main pad */}
      <ellipse cx="10" cy="14" rx="3" ry="4" fill={fillColor} />
      {/* Toe pads */}
      <circle cx="7" cy="6" r="2" fill={fillColor} />
      <circle cx="10" cy="4" r="2" fill={fillColor} />
      <circle cx="13" cy="6" r="2" fill={fillColor} />
      {/* Side pads */}
      <circle cx="5" cy="10" r="1.5" fill={fillColor} />
      <circle cx="15" cy="10" r="1.5" fill={fillColor} />
    </svg>
  )
}

export default FootprintIcon

