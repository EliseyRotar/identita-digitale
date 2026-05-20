import { useState, useEffect, useRef } from 'react'

const termini = [
  { term: 'Agenda 2030', def: 'Piano d\'azione globale adottato dall\'ONU nel 2015 con 17 Obiettivi di Sviluppo Sostenibile (SDG) da raggiungere entro il 2030.' },
  { term: 'AGID', def: 'Agenzia per l\'Italia Digitale. Ente pubblico che coordina la trasformazione digitale della Pubblica Amministrazione italiana.' },
  { term: 'CAD', def: 'Codice dell\'Amministrazione Digitale (D.Lgs. 82/2005). Norma italiana che regola l\'uso delle tecnologie digitali nella PA.' },
  { term: 'CIE', def: 'Carta d\'Identità Elettronica. Documento d\'identità italiano con chip NFC che permette l\'autenticazione ai servizi digitali.' },
  { term: 'Cittadinanza Digitale', def: 'L\'insieme di diritti, doveri, competenze e comportamenti che definiscono la partecipazione responsabile di una persona nella società digitale.' },
  { term: 'Cyberbullismo', def: 'Forma di bullismo che avviene attraverso strumenti digitali (social media, messaggistica, giochi online) con l\'intento di danneggiare, molestare o umiliare.' },
  { term: 'DigComp', def: 'Digital Competence Framework for Citizens. Quadro europeo delle competenze digitali per i cittadini, pubblicato dalla Commissione Europea. La versione 2.2 è del 2022.' },
  { term: 'Divario Digitale', def: 'Disparità nell\'accesso e nell\'uso delle tecnologie digitali tra individui, gruppi sociali o aree geografiche diverse.' },
  { term: 'eIDAS', def: 'Electronic IDentification, Authentication and trust Services. Regolamento UE (910/2014) che stabilisce un quadro per l\'identificazione elettronica e i servizi fiduciari.' },
  { term: 'Fake News', def: 'Informazioni false o fuorvianti presentate come notizie reali, diffuse intenzionalmente per ingannare o manipolare l\'opinione pubblica.' },
  { term: 'GDPR', def: 'General Data Protection Regulation (Reg. UE 2016/679). Regolamento europeo sulla protezione dei dati personali, in vigore dal 25 maggio 2018.' },
  { term: 'Garante Privacy', def: 'Autorità Garante per la Protezione dei Dati Personali. Autorità indipendente italiana che vigila sul rispetto del GDPR e della normativa privacy.' },
  { term: 'Identità Digitale', def: 'L\'insieme di dati, credenziali e comportamenti che identificano una persona, organizzazione o dispositivo nel mondo digitale.' },
  { term: 'Netiquette', def: 'Insieme di regole non scritte di comportamento civile e rispettoso nelle comunicazioni digitali (email, forum, social media, chat).' },
  { term: 'PA Digitale', def: 'Pubblica Amministrazione Digitale. L\'insieme dei servizi e processi della PA italiana erogati attraverso canali digitali.' },
  { term: 'Phishing', def: 'Tecnica di truffa informatica che usa email, SMS o siti web falsi per sottrarre dati personali, credenziali o denaro.' },
  { term: 'Privacy by Design', def: 'Approccio che integra la protezione dei dati personali fin dalla progettazione di sistemi e servizi, non come aggiunta successiva.' },
  { term: 'Reputazione Digitale', def: 'L\'immagine che una persona costruisce online attraverso i propri contenuti, comportamenti e interazioni digitali nel tempo.' },
  { term: 'SDG', def: 'Sustainable Development Goals. I 17 Obiettivi di Sviluppo Sostenibile dell\'Agenda 2030 dell\'ONU.' },
  { term: 'SPID', def: 'Sistema Pubblico di Identità Digitale. Sistema italiano di autenticazione che permette ai cittadini di accedere ai servizi online della PA con un\'unica identità digitale.' },
  { term: '2FA', def: 'Two-Factor Authentication (Autenticazione a Due Fattori). Metodo di sicurezza che richiede due forme di verifica per accedere a un account.' },
]

export default function Glossario() {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.05 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const filtered = termini.filter(t =>
    t.term.toLowerCase().includes(search.toLowerCase()) ||
    t.def.toLowerCase().includes(search.toLowerCase())
  )

  // Group by first letter
  const grouped = filtered.reduce<Record<string, typeof termini>>((acc, t) => {
    const letter = t.term[0].toUpperCase()
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(t)
    return acc
  }, {})

  return (
    <section id="glossario" ref={sectionRef} className="bg-[#e8e0d0] border-t border-[#c4bba8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#c4bba8]">
        <p className="section-label mb-4 reveal">Terminologia</p>
        <h2 className="font-serif font-black leading-tight text-[#0d0d0d] reveal delay-1"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          Glossario<br /><span className="text-[#c8392b]">Digitale</span>
        </h2>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 border-b border-[#c4bba8]">
        <div className="relative max-w-md reveal">
          <input
            type="text"
            placeholder="Cerca un termine..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-transparent border-b border-[#0d0d0d] py-3 pr-8 text-sm text-[#0d0d0d] placeholder-[#6b6560] focus:outline-none focus:border-[#c8392b] transition-colors"
          />
          <svg className="absolute right-0 top-3.5 text-[#6b6560]" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
        {search && (
          <p className="num-label mt-3">{filtered.length} risultat{filtered.length === 1 ? 'o' : 'i'}</p>
        )}
      </div>

      {/* Terms */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        {Object.keys(grouped).sort().map(letter => (
          <div key={letter} className="mb-8">
            <div className="font-serif font-black text-6xl text-[#d4c9b4] mb-4 select-none leading-none">{letter}</div>
            <div className="space-y-0">
              {grouped[letter].map(({ term, def }) => (
                <div key={term} className="reveal border-b border-[#c4bba8] last:border-0">
                  <button
                    className="w-full py-4 flex items-center justify-between gap-4 text-left group"
                    onClick={() => setOpen(open === term ? null : term)}
                  >
                    <span className="font-medium text-[#0d0d0d] group-hover:text-[#c8392b] transition-colors">{term}</span>
                    <span className={`text-[#c8392b] text-xl font-light transition-transform duration-300 shrink-0 ${open === term ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`accordion-content ${open === term ? 'open' : ''}`}>
                    <p className="pb-4 text-sm text-[#6b6560] leading-relaxed max-w-2xl">{def}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-[#6b6560] text-sm py-8">Nessun termine trovato per "{search}".</p>
        )}
      </div>
    </section>
  )
}
