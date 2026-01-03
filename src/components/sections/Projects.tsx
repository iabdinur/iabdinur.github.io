import { Box, Container, Heading, VStack, SimpleGrid, Card, CardBody, Image, Text, Button, HStack, Tag, Skeleton, SkeletonText, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query'
import { fetchProjects, staticProjects } from '../../api/projects'

// Using motion.div wrapper instead of motion(Card) to avoid type complexity
const MotionCardWrapper = motion.div

export default function Projects() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes
    initialData: staticProjects,
    retry: false, // Don't retry failed requests
  })

  // Ensure projects is always an array, fallback to staticProjects
  const projectsList = Array.isArray(projects) ? projects : staticProjects
  
  const cardBg = useColorModeValue('white', '#212934')
  const textColor = useColorModeValue('black', 'white')
  const borderColor = useColorModeValue('gray.200', '#202020')

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading size="xl">Featured Projects</Heading>
          {isLoading ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="100%">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <Skeleton height="200px" />
                  <CardBody>
                    <SkeletonText mt="4" noOfLines={3} spacing="4" />
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="100%">
              {projectsList.map((project, index) => (
                <MotionCardWrapper
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    _hover={{ transform: 'translateY(-5px)' }}
                    bg={cardBg}
                    h="100%"
                    borderWidth="1px"
                    borderColor={borderColor}
                  >
                    <Image src={project.image} alt={project.title} h="200px" objectFit="cover" />
                    <CardBody>
                      <Heading size="md" mb={2}>{project.title}</Heading>
                      <Text color={textColor} mb={4}>{project.description}</Text>
                      <HStack mb={4} flexWrap="wrap" gap={2}>
                        {Array.isArray(project.tech) ? project.tech.map((tech) => (
                          <Tag key={tech} size="sm" colorScheme="brand">{tech}</Tag>
                        )) : null}
                      </HStack>
                      <HStack>
                        <Button size="sm" as="a" href={project.demo} target="_blank" rightIcon={<FaExternalLinkAlt />}>
                          Demo
                        </Button>
                        <Button size="sm" variant="outline" as="a" href={project.github} target="_blank">
                          Code
                        </Button>
                      </HStack>
                    </CardBody>
                  </Card>
                </MotionCardWrapper>
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Container>
    </Box>
  )
}

