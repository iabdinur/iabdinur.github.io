import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Home />} />
        <Route path="/education" element={<Home />} />
        <Route path="/skills" element={<Home />} />
        <Route path="/experience" element={<Home />} />
        <Route path="/interests" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App

