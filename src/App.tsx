import './index.css'
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
    <div className="bg-[#e8e0d0]">
      <Navbar />
      <main>
        <Hero />
        <CosE />
        <DigComp />
        <DirittieDeveri />
        <Agenda2030 />
        <Educare />
        <VideoResources />
      </main>
      <Footer />
    </div>
  )
}
