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
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)

  // Progress bar + active section tracking
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

  // IntersectionObserver for active nav link
  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href)).filter(Boolean) as Element[]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const go = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#e8e0d0]/95 backdrop-blur-sm border-b border-[#c4bba8]' : 'bg-transparent'
      }`}>
        <div
          ref={progressRef}
          className="progress-bar absolute bottom-0 left-0 right-0"
          style={{ transform: 'scaleX(0)' }}
        />
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="w-6 h-6 bg-[#c8392b] flex items-center justify-center">
              <span className="text-[#e8e0d0] text-xs font-bold leading-none">CD</span>
            </div>
            <span className="font-serif font-bold text-sm tracking-wide text-[#0d0d0d] group-hover:text-[#c8392b] transition-colors">
              Cittadinanza Digitale
            </span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className={`text-xs font-medium tracking-widest uppercase transition-colors relative ${
                  active === l.href
                    ? 'text-[#c8392b]'
                    : 'text-[#6b6560] hover:text-[#0d0d0d]'
                }`}
              >
                {l.label}
                {active === l.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#c8392b]" />
                )}
              </button>
            ))}
          </div>

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
            <span className={`font-serif text-3xl transition-colors ${
              active === l.href ? 'text-[#c8392b]' : 'text-[#e8e0d0] group-hover:text-[#c8392b]'
            }`}>
              {l.label}
            </span>
          </button>
        ))}
      </div>
    </>
  )
}
