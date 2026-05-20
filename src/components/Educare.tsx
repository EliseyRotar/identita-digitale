import { useEffect, useRef } from 'react'

const pillars = [
  { num: '01', title: 'Pensiero Critico', desc: 'Insegnare a valutare le fonti, riconoscere fake news e disinformazione online.', tags: ['Fact-checking', 'Analisi delle fonti', 'Media literacy'] },
  { num: '02', title: 'Cittadinanza Digitale', desc: 'Formare cittadini responsabili, empatici e rispettosi nelle comunità online.', tags: ['Netiquette', 'Rispetto online', 'Partecipazione civica'] },
  { num: '03', title: 'Competenze Tecniche', desc: "Sviluppare abilità pratiche nell'uso sicuro e creativo degli strumenti digitali.", tags: ['Coding', 'Sicurezza informatica', 'Creatività digitale'] },
  { num: '04', title: 'Privacy & Sicurezza', desc: 'Educare alla protezione dei dati personali e alla sicurezza online fin da piccoli.', tags: ['Gestione password', 'Privacy settings', 'Riconoscere truffe'] },
]

const ageGroups = [
  { age: '6–10', title: 'Primi Passi Digitali', activities: ['Introduzione sicura a internet', 'Regole base della netiquette', 'Distinguere reale da virtuale', 'Giochi educativi digitali'] },
  { age: '11–14', title: 'Identità in Costruzione', activities: ['Gestione dei profili social', 'Privacy e dati personali', 'Cyberbullismo: riconoscere e reagire', 'Pensiero critico sui media'] },
  { age: '15–18', title: 'Cittadino Digitale', activities: ['GDPR e diritti digitali', 'Reputazione online e futuro lavorativo', 'Competenze DigComp avanzate', 'Partecipazione democratica digitale'] },
  { age: 'Adulti', title: 'Aggiornamento Continuo', activities: ['SPID e servizi PA digitali', 'Sicurezza informatica avanzata', 'Intelligenza artificiale e lavoro', 'Lifelong digital learning'] },
]

const resources = [
  { name: 'Piano Nazionale Scuola Digitale', org: 'MIUR' },
  { name: 'DigComp Framework', org: 'Commissione Europea' },
  { name: 'Generazioni Connesse', org: 'MIUR & AGCOM' },
  { name: 'Internet Safer Day', org: 'Insafe Network' },
]

export default function Educare() {
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
    <section id="educare" ref={sectionRef} className="bg-[#f5f0e8] border-t border-[#d4cfc6]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#d4cfc6]">
        <p className="section-label mb-4 reveal">Formazione & Consapevolezza</p>
        <h2 className="font-serif font-black leading-tight text-[#0d0d0d] reveal delay-1"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          Educare all'Identità<br /><span className="text-[#c8392b]">Digitale</span>
        </h2>
      </div>

      {/* 4 Pillars */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 border-b border-[#d4cfc6]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {pillars.map(({ num, title, desc, tags }, i) => (
            <div key={num}
              className={`reveal p-10 card-hover cursor-default
                ${i % 2 === 0 ? 'border-r border-[#d4cfc6]' : ''}
                ${i < 2 ? 'border-b border-[#d4cfc6]' : ''}
              `}
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="num-label mb-6">{num}</div>
              <h3 className="font-serif font-bold text-2xl text-[#0d0d0d] mb-4">{title}</h3>
              <p className="text-[#6b6560] text-sm leading-relaxed mb-6">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 border border-[#d4cfc6] text-[#6b6560]">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Age groups */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#d4cfc6]">
        <p className="section-label mb-10 reveal">Percorsi per Fascia d'Età</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {ageGroups.map(({ age, title, activities }, i) => (
            <div key={age}
              className={`reveal p-8 card-hover cursor-default ${i < 3 ? 'border-r border-[#d4cfc6]' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="font-serif font-black text-4xl text-[#ede8dc] mb-2 select-none">{age}</div>
              <div className="w-6 h-px bg-[#c8392b] mb-4" />
              <h4 className="font-medium text-[#0d0d0d] mb-4 text-sm">{title}</h4>
              <ul className="space-y-2">
                {activities.map(act => (
                  <li key={act} className="flex items-start gap-2 text-xs text-[#6b6560]">
                    <span className="text-[#c8392b] shrink-0 mt-0.5">—</span>
                    {act}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <p className="section-label mb-10 reveal">Risorse & Iniziative Nazionali</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {resources.map(({ name, org }, i) => (
            <div key={name}
              className={`reveal p-8 card-hover cursor-default ${i < 3 ? 'border-r border-[#d4cfc6]' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-4 h-4 bg-[#0d0d0d] mb-6" />
              <div className="font-medium text-[#0d0d0d] text-sm mb-2">{name}</div>
              <div className="text-xs text-[#6b6560]">{org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
