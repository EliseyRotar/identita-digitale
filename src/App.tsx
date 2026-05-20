import './index.css'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CosE from './components/CosE'
import DigComp from './components/DigComp'
import DirittieDeveri from './components/DirittieDeveri'
import Agenda2030 from './components/Agenda2030'
import Educare from './components/Educare'
import VideoResources from './components/VideoResources'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="section-divider" />
        <CosE />
        <div className="section-divider" />
        <DigComp />
        <div className="section-divider" />
        <DirittieDeveri />
        <div className="section-divider" />
        <Agenda2030 />
        <div className="section-divider" />
        <Educare />
        <div className="section-divider" />
        <VideoResources />
      </main>
      <Footer />
    </div>
  )
}
