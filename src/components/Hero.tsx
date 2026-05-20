import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const stats = [
  { value: 4.9, suffix: 'B', label: 'Utenti Internet nel mondo', decimals: 1 },
  { value: 21, suffix: '', label: 'Competenze DigComp 2.2', decimals: 0 },
  { value: 17, suffix: '', label: 'Obiettivi Agenda 2030 ONU', decimals: 0 },
]

function useCountUp(target: number, decimals: number, trigger: boolean, duration = 1800) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [trigger, target, decimals, duration])
  return val
}

function StatItem({ value, suffix, label, decimals, trigger }: typeof stats[0] & { trigger: boolean }) {
  const count = useCountUp(value, decimals, trigger)
  return (
    <div className="font-serif font-black text-5xl text-[#0d0d0d] leading-none tabular-nums">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
      <div className="num-label mt-2 font-sans">{label}</div>
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: '110%',
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
        delay: 0.2,
      })
      gsap.from('.hero-meta', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.9,
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  // Trigger count-up when stats column enters view
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#e8e0d0] flex flex-col pt-14">
      <div className="border-b border-[#c4bba8] px-6 py-3 flex items-center justify-between">
        <span className="hero-meta section-label">Cittadinanza Digitale · 2026</span>
        <span className="hero-meta num-label">Vol. I — Essere Cittadini nel Digitale</span>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="overflow-hidden mb-2">
              <p className="hero-line section-label mb-4">La tua presenza nel mondo digitale</p>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-line font-serif font-black leading-[0.9] text-[#0d0d0d]"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}>
                Cittadinanza
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-line font-serif font-black leading-[0.9] text-[#c8392b]"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}>
                Digitale
              </h1>
            </div>
            <div className="overflow-hidden mt-6">
              <p className="hero-line text-[#6b6560] text-lg md:text-xl max-w-xl leading-relaxed font-light">
                Competenze, diritti, doveri e il futuro della cittadinanza nell'era dell'intelligenza artificiale.
              </p>
            </div>
          </div>

          <div ref={statsRef} className="lg:col-span-4 flex flex-col gap-0 border-l border-[#c4bba8] pl-8">
            {stats.map(({ value, suffix, label, decimals }, i) => (
              <div key={label} className={`hero-meta py-6 ${i > 0 ? 'border-t border-[#c4bba8]' : ''}`}>
                <StatItem value={value} suffix={suffix} label={label} decimals={decimals} trigger={statsVisible} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[#c4bba8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex gap-4">
            <button
              onClick={() => document.querySelector('#cos-e')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-meta px-6 py-3 bg-[#0d0d0d] text-[#e8e0d0] text-xs font-medium tracking-widest uppercase hover:bg-[#c8392b] transition-colors duration-300"
            >
              Esplora il tema
            </button>
            <button
              onClick={() => document.querySelector('#video')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-meta px-6 py-3 border border-[#0d0d0d] text-[#0d0d0d] text-xs font-medium tracking-widest uppercase hover:bg-[#0d0d0d] hover:text-[#e8e0d0] transition-colors duration-300"
            >
              Guarda i video
            </button>
          </div>
          <div className="hero-meta flex items-center gap-2 text-[#6b6560]">
            <span className="text-xs tracking-widest uppercase">Scorri</span>
            <div className="w-8 h-px bg-[#6b6560]" />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v10M1 6l5 5 5-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
