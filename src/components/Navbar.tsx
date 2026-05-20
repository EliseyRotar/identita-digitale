import { useState, useEffect, useRef } from 'react'

const links = [
  { href: '#cos-e', label: "Cos'è" },
  { href: '#digcomp', label: 'DigComp 2.2' },
  { href: '#diritti', label: 'Diritti & Doveri' },
  { href: '#agenda', label: 'Agenda 2030' },
  { href: '#educare', label: 'Educare' },
  { href: '#video', label: 'Video' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const total = document.body.scrollHeight - window.innerHeight
      setProgress(total > 0 ? window.scrollY / total : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${progress})`
    }
  }, [progress])

  const go = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#d4cfc6]' : 'bg-transparent'
      }`}>
        {/* Progress bar */}
        <div
          ref={progressRef}
          className="progress-bar absolute bottom-0 left-0 right-0"
          style={{ transform: 'scaleX(0)' }}
        />

        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="w-6 h-6 bg-[#c8392b] flex items-center justify-center">
              <span className="text-[#f5f0e8] text-xs font-bold leading-none">ID</span>
            </div>
            <span className="font-serif font-bold text-sm tracking-wide text-[#0d0d0d] group-hover:text-[#c8392b] transition-colors">
              Identità Digitale
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-xs font-medium tracking-widest uppercase text-[#6b6560] hover:text-[#0d0d0d] transition-colors hover-line"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-[#0d0d0d] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-[#0d0d0d] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-[#0d0d0d] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-[#0d0d0d] flex flex-col justify-center px-10 transition-all duration-500 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="border-b border-[#2a2a2a] pb-6 mb-8">
          <span className="section-label" style={{ color: '#6b6560' }}>Navigazione</span>
        </div>
        {links.map((l, i) => (
          <button
            key={l.href}
            onClick={() => go(l.href)}
            className="text-left py-4 border-b border-[#2a2a2a] group"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <span className="font-serif text-3xl text-[#f5f0e8] group-hover:text-[#c8392b] transition-colors">
              {l.label}
            </span>
          </button>
        ))}
      </div>
    </>
  )
}
