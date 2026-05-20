import { useState, useEffect, useRef } from 'react'

const areas = [
  {
    id: 1,
    title: 'Alfabetizzazione su Informazioni e Dati',
    competenze: [
      'Navigare, ricercare e filtrare dati, informazioni e contenuti digitali',
      'Valutare dati, informazioni e contenuti digitali',
      'Gestire dati, informazioni e contenuti digitali',
    ],
    desc: "Capacità di articolare i bisogni informativi, trovare dati negli ambienti digitali, valutarne la pertinenza e l'affidabilità.",
  },
  {
    id: 2,
    title: 'Comunicazione e Collaborazione',
    competenze: [
      'Interagire attraverso le tecnologie digitali',
      'Condividere attraverso le tecnologie digitali',
      'Impegnarsi nella cittadinanza attraverso le tecnologie digitali',
      'Collaborare attraverso le tecnologie digitali',
      'Netiquette',
      "Gestire l'identità digitale",
    ],
    desc: 'Interagire, comunicare e collaborare attraverso le tecnologie digitali, essere consapevoli della diversità culturale e generazionale.',
  },
  {
    id: 3,
    title: 'Creazione di Contenuti Digitali',
    competenze: [
      'Sviluppare contenuti digitali',
      'Integrare e rielaborare contenuti digitali',
      'Copyright e licenze',
      'Programmazione',
    ],
    desc: 'Creare e modificare contenuti digitali in diversi formati, esprimersi attraverso mezzi digitali, conoscere copyright e licenze.',
  },
  {
    id: 4,
    title: 'Sicurezza',
    competenze: [
      'Proteggere i dispositivi',
      'Proteggere i dati personali e la privacy',
      'Proteggere la salute e il benessere',
      "Proteggere l'ambiente",
    ],
    desc: 'Proteggere dispositivi, contenuti, dati personali e privacy negli ambienti digitali, proteggere la salute fisica e psicologica.',
  },
  {
    id: 5,
    title: 'Risolvere Problemi',
    competenze: [
      'Risolvere problemi tecnici',
      'Identificare bisogni e risposte tecnologiche',
      'Usare creativamente le tecnologie digitali',
      'Identificare lacune nelle competenze digitali',
    ],
    desc: 'Identificare i bisogni e i problemi, risolvere problemi concettuali e situazioni problematiche negli ambienti digitali.',
  },
]

const levels = [
  { num: 1, label: 'Base', sub: 'Con guida' },
  { num: 2, label: 'Base', sub: 'Autonomo' },
  { num: 3, label: 'Intermedio', sub: 'Con guida' },
  { num: 4, label: 'Intermedio', sub: 'Autonomo' },
  { num: 5, label: 'Avanzato', sub: 'Con guida' },
  { num: 6, label: 'Avanzato', sub: 'Autonomo' },
  { num: 7, label: 'Specialista', sub: 'Esperto' },
  { num: 8, label: 'Specialista', sub: 'Leader' },
]

export default function DigComp() {
  const [expanded, setExpanded] = useState<number | null>(null)
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
    <section id="digcomp" ref={sectionRef} className="bg-[#0d0d0d] border-t border-[#2a2a2a]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#2a2a2a]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="section-label mb-4 reveal">Framework Europeo</p>
            <h2 className="font-serif font-black leading-tight text-[#e8e0d0] reveal delay-1"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              DigComp <span className="text-[#c8392b]">2.2</span>
            </h2>
          </div>
          <div className="lg:col-span-5 reveal delay-2">
            <p className="text-[#6b6560] leading-relaxed text-base">
              Il Quadro Europeo delle Competenze Digitali per i Cittadini definisce{' '}
              <span className="text-[#e8e0d0]">5 aree</span> e{' '}
              <span className="text-[#e8e0d0]">21 competenze</span> su{' '}
              <span className="text-[#e8e0d0]">8 livelli di padronanza</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Areas accordion */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 border-b border-[#2a2a2a]">
        {areas.map((area, i) => (
          <div key={area.id} className={`reveal border-b border-[#2a2a2a] last:border-0`}
            style={{ animationDelay: `${i * 0.08}s` }}>
            <button
              className="w-full py-8 flex items-center justify-between gap-6 text-left group"
              onClick={() => setExpanded(expanded === area.id ? null : area.id)}
            >
              <div className="flex items-center gap-6">
                <span className="num-label text-[#6b6560] w-6 shrink-0">0{area.id}</span>
                <span className="font-serif font-bold text-xl md:text-2xl text-[#e8e0d0] group-hover:text-[#c8392b] transition-colors">
                  {area.title}
                </span>
              </div>
              <span className={`text-[#c8392b] text-2xl font-light transition-transform duration-300 shrink-0 ${
                expanded === area.id ? 'rotate-45' : ''
              }`}>+</span>
            </button>

            <div className={`accordion-content ${expanded === area.id ? 'open' : ''}`}>
              <div className="pb-8 pl-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6b6560] text-sm leading-relaxed mb-6">{area.desc}</p>
                  <ul className="space-y-3">
                    {area.competenze.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-sm text-[#e8e0d0]">
                        <span className="text-[#c8392b] mt-0.5 shrink-0">—</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="display-num text-[#1a1a1a] select-none">0{area.id}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Levels */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <p className="section-label text-[#6b6560] mb-10 reveal">8 Livelli di Padronanza</p>
        <div className="space-y-3">
          {levels.map((l, i) => (
            <div key={l.num}
              className={`reveal flex items-center gap-6 group`}
              style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="w-6 shrink-0 font-serif font-black text-2xl text-[#2a2a2a] group-hover:text-[#c8392b] transition-colors">{l.num}</div>
              <div
                className="h-10 flex items-center px-4 transition-all duration-500 group-hover:bg-[#c8392b]"
                style={{
                  width: `${20 + i * 10}%`,
                  background: `rgba(200,57,43,${0.08 + i * 0.1})`,
                  minWidth: '120px',
                }}
              >
                <span className="text-xs font-medium text-[#e8e0d0] tracking-wide">{l.label}</span>
                <span className="text-xs text-[#6b6560] ml-3 group-hover:text-[#e8e0d0] transition-colors">— {l.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
