import { motion } from 'framer-motion'
import { ExternalLink, Video } from 'lucide-react'

const videos = [
  {
    id: 'EYwAY6y3OfM',
    title: "Cos'è l'Identità Digitale?",
    desc: 'Una panoramica completa sul concetto di identità digitale e il suo impatto sulla vita quotidiana.',
    tag: 'Introduzione',
    tagColor: 'bg-sky-500/20 text-sky-400',
  },
  {
    id: 'rM-mr5Fd1c0',
    title: 'Identità Digitale e Privacy',
    desc: 'Come proteggere la propria identità online e gestire la privacy nell\'era dei social media.',
    tag: 'Privacy',
    tagColor: 'bg-indigo-500/20 text-indigo-400',
  },
  {
    id: 'sSkt_d5kUk8',
    title: 'Cittadinanza Digitale',
    desc: 'Diritti e responsabilità del cittadino digitale nel contesto europeo e italiano.',
    tag: 'Cittadinanza',
    tagColor: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    id: 'TIdJGl0wKPM',
    title: 'DigComp e Competenze Digitali',
    desc: 'Il framework europeo DigComp 2.2 spiegato in modo semplice e accessibile.',
    tag: 'DigComp',
    tagColor: 'bg-violet-500/20 text-violet-400',
  },
  {
    id: 'Qzxklx6yEd8',
    title: 'Identità Digitale e Futuro',
    desc: 'Come l\'intelligenza artificiale e le nuove tecnologie stanno ridefinendo la nostra identità online.',
    tag: 'Futuro',
    tagColor: 'bg-amber-500/20 text-amber-400',
  },
]

export default function VideoResources() {
  return (
    <section id="video" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Risorse Multimediali
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Video <span className="gradient-text">Risorse</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Approfondisci i temi dell'identità digitale attraverso video selezionati 
            da esperti e istituzioni.
          </p>
        </motion.div>

        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="glass rounded-3xl overflow-hidden border border-rose-500/20">
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videos[0].id}`}
                title={videos[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${videos[0].tagColor} mb-3 inline-block`}>
                {videos[0].tag}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{videos[0].title}</h3>
              <p className="text-slate-400">{videos[0].desc}</p>
            </div>
          </div>
        </motion.div>

        {/* Other videos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.slice(1).map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="video-card glass rounded-2xl overflow-hidden border border-white/5 hover:border-rose-500/30"
            >
              <div className="relative aspect-video group">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-5">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${video.tagColor} mb-3 inline-block`}>
                  {video.tag}
                </span>
                <h3 className="font-bold text-white mb-2">{video.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{video.desc}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <Video size={14} />
                  Guarda su YouTube
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-rose-500/20 inline-block">
            <Video size={32} className="text-rose-400 mx-auto mb-4" />
            <p className="text-slate-300 mb-4">
              Vuoi approfondire ulteriormente? Esplora la playlist completa su YouTube.
            </p>
            <motion.a
              href="https://www.youtube.com/results?search_query=identit%C3%A0+digitale+cittadinanza"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl font-semibold text-white transition-all hover:shadow-lg hover:shadow-rose-500/25"
            >
              <Video size={18} />
              Esplora su YouTube
              <ExternalLink size={14} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
