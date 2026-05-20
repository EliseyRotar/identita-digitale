import { useState, useEffect, useRef, useCallback } from 'react'

const index = [
  { section: "Cos'è", id: 'cos-e', terms: ['identità digitale', 'chi sei online', 'reputazione', 'privacy', 'spid', 'cie', 'presenza sociale', 'dati anagrafici', 'credenziali', 'comportamenti'] },
  { section: 'DigComp 2.2', id: 'digcomp', terms: ['digcomp', 'competenze digitali', 'alfabetizzazione', 'informazioni', 'comunicazione', 'collaborazione', 'creazione contenuti', 'sicurezza', 'risolvere problemi', 'livelli', 'framework europeo', 'padronanza'] },
  { section: 'Diritti & Doveri', id: 'diritti', terms: ['gdpr', 'diritto accesso', 'diritto rettifica', 'diritto oblio', 'portabilità', 'consenso', 'netiquette', 'cyberbullismo', 'password', 'responsabilità', 'normativa', 'eidas', 'cad'] },
  { section: 'Agenda 2030', id: 'agenda', terms: ['agenda 2030', 'sdg', 'obiettivi sviluppo sostenibile', 'onu', 'istruzione', 'innovazione', 'disuguaglianze', 'pace', 'partnership', 'timeline', 'digitale italiana'] },
  { section: 'Educare', id: 'educare', terms: ['educare', 'pensiero critico', 'fake news', 'cittadinanza', 'competenze tecniche', 'coding', 'fascia età', 'bambini', 'adolescenti', 'adulti', 'scuola', 'miur', 'piano nazionale'] },
  { section: 'Video Risorse', id: 'video', terms: ['video', 'youtube', 'risorse multimediali', 'playlist'] },
  { section: 'Quiz DigComp', id: 'quiz', terms: ['quiz', 'autovalutazione', 'livello', 'test', 'valutazione competenze'] },
  { section: 'Glossario', id: 'glossario', terms: ['glossario', 'spid', 'cie', 'gdpr', 'agid', 'cad', 'eidas', 'netiquette', 'phishing', 'fake news', 'divario digitale', '2fa', 'privacy by design'] },
  { section: 'Risorse PDF', id: 'risorse', terms: ['pdf', 'download', 'scarica', 'documenti', 'materiali', 'digcomp pdf', 'agenda 2030 pdf'] },
]

interface SearchProps {
  open: boolean
  onClose: () => void
}

export default function Search({ open, onClose }: SearchProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (!open) onClose() // toggle handled by parent
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const results = query.length > 1
    ? index.filter(item =>
        item.terms.some(t => t.includes(query.toLowerCase())) ||
        item.section.toLowerCase().includes(query.toLowerCase())
      )
    : []

  const go = useCallback((id: string) => {
    onClose()
    setTimeout(() => {
      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }, [onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0d0d0d]/70 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-xl bg-[#e8e0d0] border border-[#c4bba8]"
        onClick={e => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#c4bba8]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#6b6560] shrink-0">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Cerca nel sito..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-[#0d0d0d] placeholder-[#6b6560] focus:outline-none"
          />
          <button onClick={onClose} className="text-[#6b6560] hover:text-[#0d0d0d] transition-colors text-xs tracking-widest uppercase">
            Esc
          </button>
        </div>

        {/* Results */}
        {query.length > 1 && (
          <div className="max-h-80 overflow-y-auto">
            {results.length > 0 ? (
              results.map(r => (
                <button
                  key={r.id}
                  onClick={() => go(r.id)}
                  className="w-full px-5 py-4 text-left border-b border-[#c4bba8] last:border-0 hover:bg-[#dfd6c4] transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm text-[#0d0d0d] group-hover:text-[#c8392b] transition-colors">{r.section}</span>
                    <span className="text-xs text-[#6b6560]">→</span>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-5 py-6 text-sm text-[#6b6560]">
                Nessun risultato per "{query}"
              </div>
            )}
          </div>
        )}

        {query.length <= 1 && (
          <div className="px-5 py-4">
            <p className="num-label mb-3">Sezioni</p>
            <div className="flex flex-wrap gap-2">
              {index.map(item => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="text-xs px-3 py-1.5 border border-[#c4bba8] text-[#6b6560] hover:border-[#0d0d0d] hover:text-[#0d0d0d] transition-colors"
                >
                  {item.section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
