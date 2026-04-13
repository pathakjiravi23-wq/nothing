import { useState, useEffect } from 'react'
import './styles/globals.css'
import Loader from './components/Loader.tsx'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Lock scroll during load
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = ''
    }, 3400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="noise-overlay" />
      <Cursor />
      <Loader loading={loading} />
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Services />
            <About />
            <Gallery />
            <Testimonials />
            <Booking />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App