import { Box, Container, Heading, VStack, Text, HStack, Tag, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { fetchExperiences, staticExperiences } from '../../api/experience'

const MotionBox = motion(Box)

// Helper function to parse date from period string
const parseDate = (period: string): Date => {
  // Handle "Present" as current date
  if (period.includes('Present')) {
    return new Date()
  }
  
  // Handle formats like "Jun 2024 – Present" or "Sep 2023 – Jun 2024"
  const match = period.match(/(\w+)\s+(\d{4})/)
  if (match) {
    const month = match[1]
    const year = parseInt(match[2])
    const monthMap: { [key: string]: number } = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    }
    return new Date(year, monthMap[month] || 0, 1)
  }
  
  // Handle year ranges like "2025 – 2027" or "2014 – 2018"
  const yearRange = period.match(/(\d{4})\s*–\s*(\d{4})/)
  if (yearRange) {
    const startYear = parseInt(yearRange[1])
    return new Date(startYear, 0, 1)
  }
  
  // Handle single year like "2025"
  const singleYear = period.match(/(\d{4})/)
  if (singleYear) {
    return new Date(parseInt(singleYear[1]), 0, 1)
  }
  
  // Fallback to very old date
  return new Date(0)
}

// Sort experiences by date (most recent first)
const sortExperiencesByDate = (experiences: typeof staticExperiences) => {
  return [...experiences].sort((a, b) => {
    const dateA = parseDate(a.period)
    const dateB = parseDate(b.period)
    return dateB.getTime() - dateA.getTime()
  })
}

export default function Experience() {
  const { data: experiences = staticExperiences } = useQuery({
    queryKey: ['experiences'],
    queryFn: fetchExperiences,
    staleTime: 1000 * 60 * 5,
    initialData: staticExperiences,
    retry: false,
  })

  // Sort experiences by date
  const sortedExperiences = sortExperiencesByDate(experiences)

  const textColor = useColorModeValue('black', 'white')
  const headingColor = useColorModeValue('black', 'white')
  const borderColor = useColorModeValue('gray.200', '#202020')
  const yearColor = useColorModeValue('gray.600', 'gray.400')
  const tagBg = useColorModeValue('#EBEBEB', 'gray.600')
  const tagColor = useColorModeValue('black', 'white')
  const timelineDotColor = useColorModeValue('#004aad', '#FFFFFF')

  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 4, md: 0 }}>
      <Container maxW="container.md">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading size="lg" mb={4} color={headingColor}>Experience</Heading>
        </MotionBox>

        <VStack spacing={{ base: 6, md: 8 }} align="stretch" position="relative" mt={{ base: 6, md: 8 }}>
            {/* Timeline line */}
            <Box
              position="absolute"
              left="20px"
              top="0"
              bottom="0"
              w="2px"
              bg={borderColor}
              display={{ base: 'none', md: 'block' }}
            />

            {sortedExperiences.map((exp, index) => (
              <MotionBox
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                position="relative"
                pl={{ base: 0, md: 12 }}
              >
                {/* Timeline dot */}
                <Box
                  position="absolute"
                  left={{ base: 0, md: '14px' }}
                  top="6px"
                  w="12px"
                  h="12px"
                  borderRadius="full"
                  bg={timelineDotColor}
                  border="2px solid"
                  borderColor={useColorModeValue('white', '#212934')}
                  zIndex={1}
                  display={{ base: 'none', md: 'block' }}
                />

                <Box>
                  <HStack spacing={4} mb={2} flexWrap="wrap">
                    <Text fontWeight="bold" fontSize="lg" color={textColor}>
                      {exp.title}
                    </Text>
                    <Text fontSize="sm" color={yearColor}>
                      {exp.period}
                    </Text>
                  </HStack>
                  
                  {exp.company && (
                    <Text fontSize="md" color={yearColor} mb={2}>
                      {exp.company}
                      {exp.location && ` • ${exp.location}`}
                    </Text>
                  )}

                  {exp.description && (
                    <Text fontSize="lg" color={textColor} mb={3}>
                      {exp.description}
                    </Text>
                  )}

                  {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                    <List spacing={2} mb={3} pl={0}>
                      {exp.bulletPoints.map((point, idx) => (
                        <ListItem key={idx} fontSize="lg" color={textColor} display="flex" alignItems="flex-start">
                          <Text as="span" mr={2} mt={1}>•</Text>
                          <Text as="span" flex={1}>{point}</Text>
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <HStack spacing={2} flexWrap="wrap" mt={3}>
                      {exp.technologies.map((tech) => (
                        <Tag key={tech} size="sm" bg={tagBg} color={tagColor} borderRadius="md">
                          {tech}
                        </Tag>
                      ))}
                    </HStack>
                  )}
                </Box>
              </MotionBox>
            ))}
        </VStack>
      </Container>
    </Box>
  )
}

