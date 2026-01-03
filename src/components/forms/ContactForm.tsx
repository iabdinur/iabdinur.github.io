import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  VStack,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import apiClient from '../../api/client'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const MotionBox = motion(Box)

export default function ContactForm() {
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const inputBg = useColorModeValue('white', '#212934')
  const inputBorder = useColorModeValue('gray.300', '#202020')
  const labelColor = useColorModeValue('black', 'white')
  const textColor = useColorModeValue('black', 'white')

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Replace with your actual API endpoint
      await apiClient.post('/contact', data)
      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      reset()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      console.error('Contact form error:', error)
    }
  }

  return (
    <MotionBox
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
          <VStack spacing={4}>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel color={labelColor}>Name</FormLabel>
          <Input
            {...register('name')}
                placeholder="Your name"
                bg={inputBg}
                borderColor={inputBorder}
                color={textColor}
                _hover={{ borderColor: 'brand.400' }}
                _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
              />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

            <FormControl isInvalid={!!errors.email}>
              <FormLabel color={labelColor}>Email</FormLabel>
          <Input
            type="email"
            {...register('email')}
                placeholder="your.email@example.com"
                bg={inputBg}
                borderColor={inputBorder}
                color={textColor}
                _hover={{ borderColor: 'brand.400' }}
                _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
              />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

            <FormControl isInvalid={!!errors.message}>
              <FormLabel color={labelColor}>Message</FormLabel>
          <Textarea
            {...register('message')}
                placeholder="Your message..."
                rows={6}
                bg={inputBg}
                borderColor={inputBorder}
                color={textColor}
                _hover={{ borderColor: 'brand.400' }}
                _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
              />
          <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          colorScheme="brand"
          size="lg"
          w="100%"
          isLoading={isSubmitting}
          loadingText="Sending..."
        >
          Send Message
        </Button>
      </VStack>
    </MotionBox>
  )
}

