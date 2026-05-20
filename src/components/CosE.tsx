import { useEffect, useRef } from 'react'

const aspects = [
  { num: '01', title: 'Chi Sei Online', desc: "L'insieme di dati, comportamenti e rappresentazioni che ti identificano nel mondo digitale." },
  { num: '02', title: 'Reputazione Digitale', desc: 'Tutto ciò che pubblichi, condividi o commenti costruisce la tua immagine online permanente.' },
  { num: '03', title: 'Privacy & Sicurezza', desc: "Proteggere i tuoi dati personali è un diritto fondamentale nell'era digitale." },
  { num: '04', title: 'Presenza Sociale', desc: 'Profili social, account email, avatar: ogni piattaforma ospita una parte di te.' },
  { num: '05', title: 'SPID & CIE', desc: "Il Sistema Pubblico di Identità Digitale italiano permette l'accesso sicuro ai servizi PA." },
  { num: '06', title: 'Identità Autentica', desc: 'Essere autentici online significa allineare la propria identità digitale con i valori reali.' },
]

const layers = [
  { label: 'Dati Anagrafici', sub: 'Nome, CF, data di nascita' },
  { label: 'Credenziali', sub: 'SPID, CIE, password' },
  { label: 'Comportamenti', sub: 'Acquisti, ricerche, like' },
  { label: 'Reputazione', sub: 'Recensioni, post, commenti' },
]

export default function CosE() {
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
    <section id="cos-e" ref={sectionRef} className="bg-[#f5f0e8] border-t border-[#d4cfc6]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#d4cfc6]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="section-label mb-4 reveal">Fondamenti</p>
            <h2 className="font-serif font-black leading-tight text-[#0d0d0d] reveal delay-1"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Cos'è l'Identità<br />Digitale?
            </h2>
          </div>
          <div className="lg:col-span-5 reveal delay-2">
            <p className="text-[#6b6560] leading-relaxed text-base">
              L'identità digitale è la rappresentazione di una persona nel mondo online. È composta da dati, credenziali e comportamenti che ci definiscono nell'ecosistema digitale.
            </p>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#d4cfc6]">
        <div className="max-w-4xl reveal">
          <div className="text-[#c8392b] font-serif text-8xl leading-none mb-4 select-none">"</div>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#0d0d0d] leading-tight font-normal">
            Nel mondo digitale, la tua identità non è solo chi sei — è anche cosa fai, cosa condividi e come ti relazioni con gli altri.
          </blockquote>
        </div>
      </div>

      {/* Aspects grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#d4cfc6]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {aspects.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className={`reveal card-hover p-8 border-[#d4cfc6] cursor-default
                ${i % 3 !== 2 ? 'lg:border-r' : ''}
                ${i % 2 !== 1 ? 'md:border-r lg:border-r-0' : ''}
                ${i < 3 ? 'border-b' : ''}
                ${i < 4 ? 'md:border-b' : ''}
              `}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="num-label mb-4">{num}</div>
              <div className="w-8 h-px bg-[#c8392b] mb-4" />
              <h3 className="font-serif font-bold text-xl text-[#0d0d0d] mb-3">{title}</h3>
              <p className="text-[#6b6560] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Layers */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <p className="section-label mb-10 reveal">I Livelli dell'Identità Digitale</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {layers.map(({ label, sub }, i) => (
            <div key={label} className={`reveal p-8 ${i < 3 ? 'border-r border-[#d4cfc6]' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="display-num mb-4 select-none">{i + 1}</div>
              <div className="font-serif font-bold text-lg text-[#0d0d0d] mb-1">{label}</div>
              <div className="text-xs text-[#6b6560]">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
