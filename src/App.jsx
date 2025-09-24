import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Plans from './components/Plans'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="bg-surface text-slate-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Plans />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phone="51926896924" />
    </div>
  )
}
