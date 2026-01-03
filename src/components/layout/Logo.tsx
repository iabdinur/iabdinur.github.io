import { Link, Icon } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { GiCamel } from 'react-icons/gi'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const iconColor = useColorModeValue('black', 'white')
  const textColor = useColorModeValue('black', 'white')
  
  return (
    <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
      <LogoBox>
        <Icon as={GiCamel} boxSize={5} color={iconColor} mr={2} />
        <Text
          color={textColor}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
        >
          Ibrahim Abdinur
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo

