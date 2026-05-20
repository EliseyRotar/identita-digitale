import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CosE from './components/CosE'
import DigComp from './components/DigComp'
import DirittieDeveri from './components/DirittieDeveri'
import Agenda2030 from './components/Agenda2030'
import Educare from './components/Educare'
import QuizDigComp from './components/QuizDigComp'
import Glossario from './components/Glossario'
import Risorse from './components/Risorse'
import VideoResources from './components/VideoResources'
import Footer from './components/Footer'
import Search from './components/Search'

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  // Global Ctrl+K shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(prev => !prev)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="bg-[#e8e0d0]">
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <Search open={searchOpen} onClose={() => setSearchOpen(false)} />
      <main>
        <Hero />
        <CosE />
        <DigComp />
        <DirittieDeveri />
        <Agenda2030 />
        <Educare />
        <QuizDigComp />
        <Glossario />
        <Risorse />
        <VideoResources />
      </main>
      <Footer />
    </div>
  )
}
