import { useEffect, useRef } from 'react'

const goals = [
  { num: 1, title: 'Povertà Zero', color: '#e5243b' },
  { num: 2, title: 'Fame Zero', color: '#dda63a' },
  { num: 3, title: 'Salute e Benessere', color: '#4c9f38' },
  { num: 4, title: 'Istruzione di Qualità', color: '#c5192d' },
  { num: 5, title: 'Parità di Genere', color: '#ff3a21' },
  { num: 6, title: 'Acqua Pulita', color: '#26bde2' },
  { num: 7, title: 'Energia Pulita', color: '#fcc30b' },
  { num: 8, title: 'Lavoro Dignitoso', color: '#a21942' },
  { num: 9, title: 'Industria & Innovazione', color: '#fd6925' },
  { num: 10, title: 'Ridurre Disuguaglianze', color: '#dd1367' },
  { num: 11, title: 'Città Sostenibili', color: '#fd9d24' },
  { num: 12, title: 'Consumo Responsabile', color: '#bf8b2e' },
  { num: 13, title: 'Lotta al Clima', color: '#3f7e44' },
  { num: 14, title: "Vita Sott'Acqua", color: '#0a97d9' },
  { num: 15, title: 'Vita sulla Terra', color: '#56c02b' },
  { num: 16, title: 'Pace & Giustizia', color: '#00689d' },
  { num: 17, title: 'Partnership', color: '#19486a' },
]

const digitalLinks = [
  { goal: 'SDG 4', title: 'Istruzione di Qualità', desc: 'Le competenze digitali (DigComp) sono fondamentali per garantire un\'istruzione inclusiva e di qualità per tutti.' },
  { goal: 'SDG 9', title: 'Industria & Innovazione', desc: "L'identità digitale abilita l'accesso a servizi innovativi, e-government e infrastrutture digitali inclusive." },
  { goal: 'SDG 10', title: 'Ridurre Disuguaglianze', desc: 'Il divario digitale amplifica le disuguaglianze. L\'accesso universale all\'identità digitale è un fattore di equità.' },
  { goal: 'SDG 16', title: 'Pace & Giustizia', desc: 'Istituzioni digitali trasparenti, e-democracy e accesso ai servizi pubblici online rafforzano la democrazia.' },
  { goal: 'SDG 17', title: 'Partnership Globali', desc: 'La cooperazione internazionale sull\'identità digitale (eIDAS, SPID) costruisce ponti tra nazioni.' },
]

const timeline = [
  { year: '2005', event: "Codice dell'Amministrazione Digitale (CAD)" },
  { year: '2014', event: 'Lancio SPID — Sistema Pubblico Identità Digitale' },
  { year: '2018', event: 'GDPR in vigore in tutta l\'UE' },
  { year: '2022', event: 'DigComp 2.2 pubblicato dalla Commissione Europea' },
  { year: '2030', event: 'Obiettivo: 80% cittadini con competenze digitali di base' },
]

export default function Agenda2030() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left')
    if (!els) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="agenda" ref={sectionRef} className="bg-[#0d0d0d] border-t border-[#2a2a2a]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#2a2a2a]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="section-label mb-4 reveal">ONU · 2015–2030</p>
            <h2 className="font-serif font-black leading-tight text-[#f5f0e8] reveal delay-1"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Agenda <span className="text-[#c8392b]">2030</span>
            </h2>
          </div>
          <div className="lg:col-span-5 reveal delay-2">
            <p className="text-[#6b6560] leading-relaxed text-base">
              I 17 Obiettivi di Sviluppo Sostenibile dell'ONU guidano il mondo verso un futuro più equo, sostenibile e digitale entro il 2030.
            </p>
          </div>
        </div>
      </div>

      {/* 17 Goals — horizontal strip */}
      <div className="border-b border-[#2a2a2a] overflow-hidden">
        <div className="flex">
          {goals.map((g) => (
            <div
              key={g.num}
              className="flex-1 min-w-0 aspect-square flex flex-col items-center justify-center p-2 cursor-default group transition-all duration-300 hover:flex-[2]"
              style={{ backgroundColor: g.color + '18', borderRight: `1px solid ${g.color}30` }}
            >
              <div className="font-serif font-black text-2xl md:text-3xl" style={{ color: g.color }}>{g.num}</div>
              <div className="text-[8px] md:text-[10px] text-[#6b6560] text-center leading-tight mt-1 hidden md:block">{g.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital links */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#2a2a2a]">
        <p className="section-label text-[#6b6560] mb-10 reveal">Identità Digitale & Obiettivi SDG</p>
        <div className="space-y-0">
          {digitalLinks.map((link, i) => (
            <div key={link.goal}
              className="reveal py-6 border-b border-[#2a2a2a] last:border-0 grid grid-cols-12 gap-6 items-start group cursor-default"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="col-span-2 md:col-span-1">
                <span className="text-xs font-bold text-[#c8392b] tracking-wider">{link.goal}</span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h4 className="font-serif font-bold text-lg text-[#f5f0e8] group-hover:text-[#c8392b] transition-colors">{link.title}</h4>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="text-sm text-[#6b6560] leading-relaxed">{link.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <p className="section-label text-[#6b6560] mb-10 reveal">Tappe Chiave dell'Agenda Digitale Italiana</p>
        <div className="space-y-0">
          {timeline.map(({ year, event }, i) => (
            <div key={year}
              className="reveal flex items-center gap-8 py-5 border-b border-[#2a2a2a] last:border-0 group cursor-default"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="font-serif font-black text-3xl text-[#2a2a2a] w-20 shrink-0 group-hover:text-[#c8392b] transition-colors">{year}</div>
              <div className="w-px h-8 bg-[#2a2a2a] shrink-0" />
              <div className="text-[#f5f0e8] text-sm leading-relaxed">{event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
