import { useEffect, useRef } from 'react'

const diritti = [
  { title: 'Diritto di Accesso', desc: "Puoi richiedere quali dati personali vengono trattati da un'organizzazione." },
  { title: 'Diritto di Rettifica', desc: 'Puoi correggere dati inesatti o incompleti che ti riguardano.' },
  { title: "Diritto all'Oblio", desc: 'Puoi richiedere la cancellazione dei tuoi dati personali (GDPR Art. 17).' },
  { title: 'Portabilità dei Dati', desc: 'Puoi ricevere i tuoi dati in formato strutturato e trasferirli ad altri servizi.' },
  { title: 'Diritto di Opposizione', desc: 'Puoi opporti al trattamento dei tuoi dati per finalità di marketing diretto.' },
  { title: 'Consenso Informato', desc: 'Il trattamento dei dati richiede il tuo consenso esplicito, libero e revocabile.' },
]

const doveri = [
  { title: 'Rispettare la Privacy Altrui', desc: 'Non condividere dati, foto o informazioni di altri senza consenso.' },
  { title: 'Usare Identità Reale', desc: 'Evitare profili falsi o anonimi usati per danneggiare altri.' },
  { title: 'Netiquette', desc: 'Rispettare le regole di comportamento civile nelle comunicazioni digitali.' },
  { title: 'Proteggere le Credenziali', desc: 'Non condividere password e mantenere sicuri i propri account.' },
  { title: 'Segnalare Abusi', desc: 'Denunciare contenuti illegali, cyberbullismo e violazioni online.' },
  { title: 'Responsabilità Digitale', desc: 'Ogni azione online ha conseguenze reali: agire con consapevolezza.' },
]

const normative = [
  { label: 'GDPR', full: 'Regolamento Generale sulla Protezione dei Dati', year: '2018' },
  { label: 'CAD', full: "Codice dell'Amministrazione Digitale", year: '2005' },
  { label: 'SPID', full: 'Sistema Pubblico di Identità Digitale', year: '2014' },
  { label: 'eIDAS', full: 'Identificazione Elettronica e Servizi Fiduciari', year: '2014' },
]

export default function DirittieDeveri() {
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
    <section id="diritti" ref={sectionRef} className="bg-[#f5f0e8] border-t border-[#d4cfc6]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#d4cfc6]">
        <p className="section-label mb-4 reveal">Cittadinanza Digitale</p>
        <h2 className="font-serif font-black leading-tight text-[#0d0d0d] reveal delay-1"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          Diritti &<br /><span className="text-[#c8392b]">Doveri</span>
        </h2>
      </div>

      {/* Two columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 border-b border-[#d4cfc6]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Diritti */}
          <div className="py-12 lg:border-r border-[#d4cfc6] lg:pr-12">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="w-2 h-2 bg-[#0d0d0d]" />
              <h3 className="font-serif font-bold text-2xl text-[#0d0d0d]">I Tuoi Diritti</h3>
            </div>
            <div className="space-y-0">
              {diritti.map((d, i) => (
                <div key={d.title}
                  className="reveal py-5 border-b border-[#d4cfc6] last:border-0 group cursor-default"
                  style={{ animationDelay: `${i * 0.07}s` }}>
                  <div className="flex items-start gap-4">
                    <span className="num-label w-6 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div className="font-medium text-[#0d0d0d] mb-1 group-hover:text-[#c8392b] transition-colors">{d.title}</div>
                      <div className="text-sm text-[#6b6560] leading-relaxed">{d.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Doveri */}
          <div className="py-12 lg:pl-12">
            <div className="flex items-center gap-4 mb-8 reveal">
              <div className="w-2 h-2 bg-[#c8392b]" />
              <h3 className="font-serif font-bold text-2xl text-[#0d0d0d]">I Tuoi Doveri</h3>
            </div>
            <div className="space-y-0">
              {doveri.map((d, i) => (
                <div key={d.title}
                  className="reveal py-5 border-b border-[#d4cfc6] last:border-0 group cursor-default"
                  style={{ animationDelay: `${i * 0.07}s` }}>
                  <div className="flex items-start gap-4">
                    <span className="num-label w-6 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div className="font-medium text-[#0d0d0d] mb-1 group-hover:text-[#c8392b] transition-colors">{d.title}</div>
                      <div className="text-sm text-[#6b6560] leading-relaxed">{d.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Normative */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <p className="section-label mb-10 reveal">Quadro Normativo di Riferimento</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {normative.map(({ label, full, year }, i) => (
            <div key={label}
              className={`reveal p-8 card-hover cursor-default ${i < 3 ? 'border-r border-[#d4cfc6]' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="font-serif font-black text-4xl text-[#0d0d0d] mb-3">{label}</div>
              <div className="text-xs text-[#6b6560] leading-relaxed mb-4">{full}</div>
              <div className="text-xs font-medium text-[#c8392b]">{year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
