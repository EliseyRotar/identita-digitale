const pdfs = [
  {
    title: 'Identità Digitale',
    desc: 'Documento introduttivo sul concetto di identità digitale, la sua costruzione e il suo impatto nella vita quotidiana.',
    file: 'identita-digitale.pdf',
    tag: 'Introduzione',
    pages: '~20 pag.',
  },
  {
    title: 'DigComp 2.2 — Italiano',
    desc: 'Il Quadro Europeo delle Competenze Digitali per i Cittadini nella versione italiana ufficiale. 5 aree, 21 competenze, 8 livelli.',
    file: 'digcomp-2.2-italiano.pdf',
    tag: 'Framework EU',
    pages: '~60 pag.',
  },
  {
    title: 'Diritti e Doveri del Cittadino Digitale',
    desc: 'Guida completa ai diritti garantiti dal GDPR e ai doveri etici e legali del cittadino nell\'ecosistema digitale.',
    file: 'diritti-e-doveri-cittadino-digitale.pdf',
    tag: 'Normativa',
    pages: '~30 pag.',
  },
  {
    title: 'Educare all\'Identità Digitale',
    desc: 'Percorsi educativi, metodologie didattiche e risorse per insegnanti e formatori sulla cittadinanza digitale.',
    file: 'educare-identita-digitale.pdf',
    tag: 'Educazione',
    pages: '~25 pag.',
  },
  {
    title: 'Agenda 2030 — 17 Obiettivi',
    desc: 'I 17 Obiettivi di Sviluppo Sostenibile dell\'ONU con focus sul legame tra digitale, equità e sviluppo globale.',
    file: 'agenda-2030-17-obiettivi.pdf',
    tag: 'ONU / SDG',
    pages: '~15 pag.',
  },
]

// Base path for GitHub Pages
const BASE = import.meta.env.BASE_URL

export default function Risorse() {
  return (
    <section id="risorse" className="bg-[#dfd6c4] border-t border-[#c4bba8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#c4bba8]">
        <p className="section-label mb-4">Materiali Didattici</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-serif font-black leading-tight text-[#0d0d0d]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Scarica le<br /><span className="text-[#c8392b]">Risorse</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#6b6560] leading-relaxed text-base">
              Tutti i documenti di riferimento utilizzati in questo sito, disponibili gratuitamente per studio, ricerca e didattica.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {pdfs.map(({ title, desc, file, tag, pages }, i) => (
          <div
            key={file}
            className="py-8 border-b border-[#c4bba8] last:border-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group"
          >
            <div className="md:col-span-1">
              <span className="num-label">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="md:col-span-7">
              <span className="section-label mb-2 block">{tag}</span>
              <h3 className="font-serif font-bold text-xl text-[#0d0d0d] mb-2 group-hover:text-[#c8392b] transition-colors">
                {title}
              </h3>
              <p className="text-sm text-[#6b6560] leading-relaxed">{desc}</p>
            </div>
            <div className="md:col-span-2 text-right">
              <span className="num-label">{pages}</span>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <a
                href={`${BASE}risorse/pdf/${file}`}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#0d0d0d] text-[#0d0d0d] text-xs font-medium tracking-widest uppercase hover:bg-[#0d0d0d] hover:text-[#e8e0d0] transition-colors duration-300"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v7M3 6l3 3 3-3M1 11h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Print note */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 border-t border-[#c4bba8]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#6b6560] max-w-lg">
            Puoi anche stampare qualsiasi sezione del sito usando <kbd className="px-1.5 py-0.5 border border-[#c4bba8] text-xs font-mono">Ctrl+P</kbd> — il layout è ottimizzato per la stampa.
          </p>
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 border border-[#6b6560] text-[#6b6560] text-xs font-medium tracking-widest uppercase hover:border-[#0d0d0d] hover:text-[#0d0d0d] transition-colors duration-300 shrink-0"
          >
            Stampa pagina
          </button>
        </div>
      </div>
    </section>
  )
}
