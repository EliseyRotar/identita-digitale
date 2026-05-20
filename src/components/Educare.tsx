import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Users, Laptop, Brain, Star } from 'lucide-react'

const pillars = [
  {
    icon: Brain,
    title: 'Pensiero Critico',
    desc: 'Insegnare a valutare le fonti, riconoscere fake news e disinformazione online.',
    color: 'from-sky-500 to-blue-600',
    tips: ['Fact-checking', 'Analisi delle fonti', 'Media literacy'],
  },
  {
    icon: Users,
    title: 'Cittadinanza Digitale',
    desc: 'Formare cittadini responsabili, empatici e rispettosi nelle comunità online.',
    color: 'from-indigo-500 to-purple-600',
    tips: ['Netiquette', 'Rispetto online', 'Partecipazione civica'],
  },
  {
    icon: Laptop,
    title: 'Competenze Tecniche',
    desc: 'Sviluppare abilità pratiche nell\'uso sicuro e creativo degli strumenti digitali.',
    color: 'from-emerald-500 to-teal-600',
    tips: ['Coding', 'Sicurezza informatica', 'Creatività digitale'],
  },
  {
    icon: BookOpen,
    title: 'Privacy & Sicurezza',
    desc: 'Educare alla protezione dei dati personali e alla sicurezza online fin da piccoli.',
    color: 'from-rose-500 to-pink-600',
    tips: ['Gestione password', 'Privacy settings', 'Riconoscere truffe'],
  },
]

const ageGroups = [
  {
    age: '6-10 anni',
    title: 'Primi Passi Digitali',
    activities: [
      'Introduzione sicura a internet',
      'Regole base della netiquette',
      'Distinguere reale da virtuale',
      'Giochi educativi digitali',
    ],
    color: 'border-sky-500/40',
    badge: 'bg-sky-500/20 text-sky-400',
  },
  {
    age: '11-14 anni',
    title: 'Identità in Costruzione',
    activities: [
      'Gestione dei profili social',
      'Privacy e dati personali',
      'Cyberbullismo: riconoscere e reagire',
      'Pensiero critico sui media',
    ],
    color: 'border-indigo-500/40',
    badge: 'bg-indigo-500/20 text-indigo-400',
  },
  {
    age: '15-18 anni',
    title: 'Cittadino Digitale',
    activities: [
      'GDPR e diritti digitali',
      'Reputazione online e futuro lavorativo',
      'Competenze DigComp avanzate',
      'Partecipazione democratica digitale',
    ],
    color: 'border-violet-500/40',
    badge: 'bg-violet-500/20 text-violet-400',
  },
  {
    age: 'Adulti',
    title: 'Aggiornamento Continuo',
    activities: [
      'SPID e servizi PA digitali',
      'Sicurezza informatica avanzata',
      'Intelligenza artificiale e lavoro',
      'Lifelong digital learning',
    ],
    color: 'border-amber-500/40',
    badge: 'bg-amber-500/20 text-amber-400',
  },
]

const resources = [
  { name: 'Piano Nazionale Scuola Digitale', org: 'MIUR', url: '#', icon: '🏫' },
  { name: 'DigComp Framework', org: 'Commissione Europea', url: '#', icon: '🇪🇺' },
  { name: 'Generazioni Connesse', org: 'MIUR & AGCOM', url: '#', icon: '🔗' },
  { name: 'Internet Safer Day', org: 'Insafe Network', url: '#', icon: '🛡️' },
]

export default function Educare() {
  return (
    <section id="educare" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Formazione & Consapevolezza
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Educare all'Identità{' '}
            <span className="gradient-text">Digitale</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Formare cittadini digitali consapevoli è una responsabilità condivisa tra 
            scuola, famiglia e istituzioni.
          </p>
        </motion.div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5`}>
                <p.icon size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tips.map((tip) => (
                  <span key={tip} className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {tip}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Age groups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <GraduationCap size={24} className="text-violet-400" />
            <h3 className="text-2xl font-bold text-white">Percorsi per Fascia d'Età</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ageGroups.map((group, i) => (
              <motion.div
                key={group.age}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`glass rounded-2xl p-5 border ${group.color} cursor-default`}
              >
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${group.badge} mb-3 inline-block`}>
                  {group.age}
                </span>
                <h4 className="font-bold text-white mb-4">{group.title}</h4>
                <ul className="space-y-2">
                  {group.activities.map((act) => (
                    <li key={act} className="flex items-start gap-2 text-xs text-slate-400">
                      <Star size={10} className="text-amber-400 mt-1 flex-shrink-0" />
                      {act}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 border border-violet-500/20"
        >
          <h3 className="text-xl font-bold text-white text-center mb-6">
            Risorse & Iniziative Nazionali
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 text-center border border-white/5 hover:border-violet-500/30 transition-all cursor-default"
              >
                <div className="text-3xl mb-2">{r.icon}</div>
                <div className="font-semibold text-white text-sm mb-1">{r.name}</div>
                <div className="text-xs text-slate-500">{r.org}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
