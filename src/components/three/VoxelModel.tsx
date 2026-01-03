import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useMemo } from 'react'
import { Box, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { makeVoxelCamel } from './models/camel'

function Model({ colorMode }: { colorMode: 'light' | 'dark' }) {
  // Create the voxel camel with color mode awareness - recreate when colorMode changes
  const camel = useMemo(() => {
    const camelGroup = makeVoxelCamel(0.05, colorMode)
    camelGroup.position.set(0, 0, 0)
    return camelGroup
  }, [colorMode])
  
  return <primitive object={camel} />
}

export default function VoxelModel() {
  const borderColor = useColorModeValue('gray.200', '#202020')
  const pageBg = useColorModeValue('white', '#212934')
  const { colorMode } = useColorMode()
  
  return (
    <Box
      w="100%"
      h="100%"
      bg={pageBg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      p={4}
      position="relative"
      display="block"
      aspectRatio={1}
      boxSizing="border-box"
    >
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ width: '100%', height: '100%', display: 'block' }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Suspense fallback={null} key={colorMode}>
          <Model colorMode={colorMode} />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </Box>
  )
}

