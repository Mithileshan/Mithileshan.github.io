import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CaseStudy from './pages/CaseStudy'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
