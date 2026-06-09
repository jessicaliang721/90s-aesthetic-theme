import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import About from './pages/About'
import Work from './pages/Work'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import ProjectDetail from './components/ProjectDetail'

function App() {
  return (
    <div className="container grid">
      <div className="content-wrapper">
        <div className="content-body">
          <BrowserRouter basename="/90s-aesthetic-theme">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<ProjectDetail />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
