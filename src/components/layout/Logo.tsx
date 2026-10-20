import { Link, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { GiCamel } from 'react-icons/gi'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const color = useColorModeValue('gray.900', 'gray.100')

  return (
    <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
      <LogoBox>
        <Icon as={GiCamel} boxSize={5} color={color} mr={2} />
        <Text color={color} fontWeight="bold" fontSize="xl">
          Ibrahim Abdinur
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
