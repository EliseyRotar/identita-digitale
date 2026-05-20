import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { Fingerprint, Eye, Lock, Network, Smartphone, UserCheck } from 'lucide-react'

const aspects = [
  {
    icon: Fingerprint,
    title: 'Chi Sei Online',
    desc: "L'insieme di dati, comportamenti e rappresentazioni che ti identificano nel mondo digitale.",
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Eye,
    title: 'Reputazione Digitale',
    desc: 'Tutto ciò che pubblichi, condividi o commenti costruisce la tua immagine online permanente.',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: Lock,
    title: 'Privacy & Sicurezza',
    desc: 'Proteggere i tuoi dati personali è un diritto fondamentale nell\'era digitale.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Network,
    title: 'Presenza Sociale',
    desc: 'Profili social, account email, avatar: ogni piattaforma ospita una parte di te.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Smartphone,
    title: 'SPID & CIE',
    desc: 'Il Sistema Pubblico di Identità Digitale italiano permette l\'accesso sicuro ai servizi PA.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: UserCheck,
    title: 'Identità Autentica',
    desc: 'Essere autentici online significa allineare la propria identità digitale con i valori reali.',
    color: 'from-violet-500 to-indigo-600',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function CosE() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cos-e" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Fondamenti
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Cos'è l'Identità{' '}
            <span className="gradient-text">Digitale?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            L'identità digitale è la rappresentazione di una persona, organizzazione o dispositivo 
            nel mondo online. È composta da dati, credenziali e comportamenti che ci definiscono 
            nell'ecosistema digitale.
          </p>
        </motion.div>

        {/* Big quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-10 mb-20 text-center border border-sky-500/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-amber-500" />
          <div className="text-6xl text-sky-500/20 font-black absolute top-4 left-8">"</div>
          <p className="text-2xl md:text-3xl font-light text-slate-200 italic leading-relaxed relative z-10">
            Nel mondo digitale, la tua identità non è solo chi sei —{' '}
            <span className="text-sky-400 font-semibold">è anche cosa fai, cosa condividi e come ti relazioni</span>{' '}
            con gli altri.
          </p>
          <div className="text-6xl text-sky-500/20 font-black absolute bottom-0 right-8">"</div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {aspects.map(({ icon: Icon, title, desc, color }) => (
            <motion.div
              key={title}
              variants={item}
              className="glass glass-hover rounded-2xl p-6 card-3d cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Identity layers diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 glass rounded-3xl p-10 border border-indigo-500/20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            I Livelli dell'Identità Digitale
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { label: 'Dati Anagrafici', sub: 'Nome, CF, data di nascita', bg: 'bg-sky-500/20 border-sky-500/40' },
              { label: 'Credenziali', sub: 'SPID, CIE, password', bg: 'bg-indigo-500/20 border-indigo-500/40' },
              { label: 'Comportamenti', sub: 'Acquisti, ricerche, like', bg: 'bg-violet-500/20 border-violet-500/40' },
              { label: 'Reputazione', sub: 'Recensioni, post, commenti', bg: 'bg-amber-500/20 border-amber-500/40' },
            ].map((layer, i) => (
              <div key={layer.label} className="flex items-center gap-4">
                <div className={`${layer.bg} border rounded-2xl p-5 text-center min-w-[140px]`}>
                  <div className="text-3xl font-black text-white/20 mb-1">{i + 1}</div>
                  <div className="font-semibold text-white text-sm">{layer.label}</div>
                  <div className="text-xs text-slate-400 mt-1">{layer.sub}</div>
                </div>
                {i < 3 && <div className="text-slate-600 text-2xl hidden md:block">→</div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
