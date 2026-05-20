import { useEffect, useRef, useState, useCallback } from 'react'

const videos = [
  { id: 'EYwAY6y3OfM', title: "Cos'è l'Identità Digitale?", desc: 'Una panoramica completa sul concetto di identità digitale e il suo impatto sulla vita quotidiana.', tag: 'Introduzione' },
  { id: 'rM-mr5Fd1c0', title: 'Identità Digitale e Privacy', desc: "Come proteggere la propria identità online e gestire la privacy nell'era dei social media.", tag: 'Privacy' },
  { id: 'sSkt_d5kUk8', title: 'Cittadinanza Digitale', desc: 'Diritti e responsabilità del cittadino digitale nel contesto europeo e italiano.', tag: 'Cittadinanza' },
  { id: 'TIdJGl0wKPM', title: 'DigComp e Competenze Digitali', desc: 'Il framework europeo DigComp 2.2 spiegato in modo semplice e accessibile.', tag: 'DigComp' },
  { id: 'Qzxklx6yEd8', title: 'Identità Digitale e Futuro', desc: "Come l'intelligenza artificiale e le nuove tecnologie stanno ridefinendo la nostra identità online.", tag: 'Futuro' },
]

function VideoThumbnail({ id, title, onClick }: { id: string; title: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative w-full aspect-video bg-[#1a1a1a] group overflow-hidden block"
      aria-label={`Guarda: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d0d0d]/30 group-hover:bg-[#0d0d0d]/10 transition-colors duration-300" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-[#c8392b] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M5 3l11 6-11 6V3z" fill="#e8e0d0" />
          </svg>
        </div>
      </div>
    </button>
  )
}

function VideoModal({ id, title, onClose }: { id: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0d0d0d]/90 flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#e8e0d0] font-serif font-bold text-lg truncate pr-4">{title}</span>
          <button
            onClick={onClose}
            className="text-[#6b6560] hover:text-[#e8e0d0] transition-colors text-2xl leading-none shrink-0"
            aria-label="Chiudi"
          >
            ✕
          </button>
        </div>
        <div className="aspect-video bg-[#1a1a1a]">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default function VideoResources() {
  const sectionRef = useRef<HTMLElement>(null)
  const [modal, setModal] = useState<{ id: string; title: string } | null>(null)
  const openModal = useCallback((id: string, title: string) => setModal({ id, title }), [])
  const closeModal = useCallback(() => setModal(null), [])

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <section id="video" ref={sectionRef} className="bg-[#0d0d0d] border-t border-[#2a2a2a]">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#2a2a2a]">
          <p className="section-label mb-4 reveal">Risorse Multimediali</p>
          <h2 className="font-serif font-black leading-tight text-[#e8e0d0] reveal delay-1"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Video <span className="text-[#c8392b]">Risorse</span>
          </h2>
        </div>

        {/* Featured */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 border-b border-[#2a2a2a]">
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <VideoThumbnail id={videos[0].id} title={videos[0].title} onClick={() => openModal(videos[0].id, videos[0].title)} />
            </div>
            <div className="lg:col-span-4 pt-2">
              <span className="section-label mb-3 block">{videos[0].tag}</span>
              <h3 className="font-serif font-bold text-2xl text-[#e8e0d0] mb-4">{videos[0].title}</h3>
              <p className="text-[#6b6560] text-sm leading-relaxed">{videos[0].desc}</p>
              <button
                onClick={() => openModal(videos[0].id, videos[0].title)}
                className="inline-flex items-center gap-2 mt-6 text-xs font-medium tracking-widest uppercase text-[#c8392b] hover-line"
              >
                Guarda il video →
              </button>
            </div>
          </div>
        </div>

        {/* Other videos */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {videos.slice(1).map((video, i) => (
            <div key={video.id}
              className="reveal border-b border-[#2a2a2a] last:border-0 py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="md:col-span-5">
                <VideoThumbnail id={video.id} title={video.title} onClick={() => openModal(video.id, video.title)} />
              </div>
              <div className="md:col-span-7 pt-1">
                <span className="section-label mb-2 block">{video.tag}</span>
                <h3 className="font-serif font-bold text-xl text-[#e8e0d0] mb-3 group-hover:text-[#c8392b] transition-colors">{video.title}</h3>
                <p className="text-[#6b6560] text-sm leading-relaxed mb-4">{video.desc}</p>
                <button
                  onClick={() => openModal(video.id, video.title)}
                  className="text-xs font-medium tracking-widest uppercase text-[#c8392b] hover-line"
                >
                  Guarda il video →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-t border-[#2a2a2a]">
          <div className="reveal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[#6b6560] text-sm max-w-md">
              Vuoi approfondire ulteriormente? Esplora la playlist completa su YouTube.
            </p>
            <a
              href="https://www.youtube.com/results?search_query=cittadinanza+digitale+italia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#e8e0d0] text-[#e8e0d0] text-xs font-medium tracking-widest uppercase hover:bg-[#e8e0d0] hover:text-[#0d0d0d] transition-colors duration-300 shrink-0"
            >
              Esplora su YouTube →
            </a>
          </div>
        </div>
      </section>

      {modal && <VideoModal id={modal.id} title={modal.title} onClose={closeModal} />}
    </>
  )
}
