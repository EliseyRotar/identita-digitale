const sections = [
  {
    title: 'Argomenti',
    links: [
      { label: "Cos'è la Cittadinanza Digitale", href: '#cos-e' },
      { label: 'DigComp 2.2', href: '#digcomp' },
      { label: 'Diritti & Doveri', href: '#diritti' },
      { label: 'Agenda 2030', href: '#agenda' },
      { label: 'Educare', href: '#educare' },
      { label: 'Quiz DigComp', href: '#quiz' },
      { label: 'Glossario Digitale', href: '#glossario' },
      { label: 'Risorse PDF', href: '#risorse' },
      { label: 'Video Risorse', href: '#video' },
    ],
  },
  {
    title: 'Risorse Esterne',
    links: [
      { label: 'SPID — spid.gov.it', href: 'https://www.spid.gov.it', external: true },
      { label: 'DigComp — EU', href: 'https://joint-research-centre.ec.europa.eu/digcomp', external: true },
      { label: 'GDPR — Garante Privacy', href: 'https://www.garanteprivacy.it', external: true },
      { label: 'Agenda 2030 — ONU', href: 'https://unric.org/it/agenda-2030/', external: true },
      { label: 'AGID', href: 'https://www.agid.gov.it', external: true },
    ],
  },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#dfd6c4] border-t border-[#c4bba8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#c4bba8]">
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 mb-6 group"
            >
              <div className="w-8 h-8 bg-[#0d0d0d] flex items-center justify-center">
                <span className="text-[#e8e0d0] text-xs font-bold">CD</span>
              </div>
              <span className="font-serif font-bold text-[#0d0d0d] group-hover:text-[#c8392b] transition-colors">
                Cittadinanza Digitale
              </span>
            </button>
            <p className="text-[#6b6560] text-sm leading-relaxed mb-6 max-w-xs">
              Una risorsa educativa sulla cittadinanza digitale, le competenze DigComp 2.2, i diritti GDPR e gli obiettivi dell'Agenda 2030.
            </p>
            <div className="flex gap-2 text-lg">
              <span>🇮🇹</span>
              <span>🇪🇺</span>
              <span>🌐</span>
            </div>
          </div>

          {/* Links */}
          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="num-label mb-6">{s.title}</h4>
              <ul className="space-y-3">
                {s.links.map((l) => (
                  <li key={l.label}>
                    {'external' in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#6b6560] hover:text-[#0d0d0d] transition-colors hover-line"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollTo(l.href)}
                        className="text-sm text-[#6b6560] hover:text-[#0d0d0d] transition-colors hover-line text-left"
                      >
                        {l.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-[#c4bba8] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-[#6b6560]">
            © 2026 Cittadinanza Digitale · Contenuti basati su DigComp 2.2, GDPR e Agenda 2030
          </p>
          <p className="text-xs text-[#6b6560]">
            Realizzato da{' '}
            <a
              href="https://github.com/EliseyRotar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0d0d0d] hover:text-[#c8392b] transition-colors hover-line"
            >
              eli6
            </a>
            {' '}& Giulio Verde ·{' '}
            <a
              href="https://github.com/EliseyRotar/cittadinanza-digitale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0d0d0d] hover:text-[#c8392b] transition-colors hover-line"
            >
              GitHub →
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
