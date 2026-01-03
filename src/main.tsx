import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import theme from './theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

// Set basename for React Router - use VITE_BASE_PATH if set, otherwise use '/'
// Remove trailing slash if present
const basePath = import.meta.env.VITE_BASE_PATH || '/'
const basename = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath

// Handle GitHub Pages 404.html redirect
// https://github.com/rafgraph/spa-github-pages
const path = (location.pathname).replace(/^\/[^/]+/, '').replace(/\/$/, '')
if (path) {
  const pathSegmentsToKeep = 0
  const l = window.location
  l.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
    l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/').replace(/\/$/, '') +
    '/' + path.replace(/&/g, '~and~').replace(/\?/g, '&') +
    (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)

