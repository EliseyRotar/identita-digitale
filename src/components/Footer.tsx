import { motion } from 'framer-motion'
import { Fingerprint, ExternalLink, Heart } from 'lucide-react'

const sections = [
  {
    title: 'Argomenti',
    links: [
      { label: "Cos'è l'Identità Digitale", href: '#cos-e' },
      { label: 'DigComp 2.2', href: '#digcomp' },
      { label: 'Diritti & Doveri', href: '#diritti' },
      { label: 'Agenda 2030', href: '#agenda' },
      { label: 'Educare', href: '#educare' },
      { label: 'Video Risorse', href: '#video' },
    ],
  },
  {
    title: 'Risorse Esterne',
    links: [
      { label: 'SPID - spid.gov.it', href: 'https://www.spid.gov.it', external: true },
      { label: 'DigComp - EU', href: 'https://joint-research-centre.ec.europa.eu/digcomp', external: true },
      { label: 'GDPR - Garante Privacy', href: 'https://www.garanteprivacy.it', external: true },
      { label: 'Agenda 2030 - ONU', href: 'https://unric.org/it/agenda-2030/', external: true },
      { label: 'AGID', href: 'https://www.agid.gov.it', external: true },
    ],
  },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                <Fingerprint size={20} className="text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">Identità Digitale</span>
            </motion.div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Una risorsa educativa sulla cittadinanza digitale, le competenze DigComp 2.2 
              e il futuro dell'identità nell'era digitale.
            </p>
            <div className="flex gap-3">
              {['🇮🇹', '🇪🇺', '🌐'].map((flag) => (
                <span key={flag} className="text-xl">{flag}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{s.title}</h4>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l.label}>
                    {'external' in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-sky-400 text-sm transition-colors flex items-center gap-1"
                      >
                        {l.label}
                        <ExternalLink size={10} />
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollTo(l.href)}
                        className="text-slate-500 hover:text-sky-400 text-sm transition-colors text-left"
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
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 Identità Digitale · Contenuti basati su DigComp 2.2, GDPR e Agenda 2030
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1">
            Fatto con <Heart size={12} className="text-rose-500" /> per la cittadinanza digitale italiana
          </p>
        </div>
      </div>
    </footer>
  )
}
