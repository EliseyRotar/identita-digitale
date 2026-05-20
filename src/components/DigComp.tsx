import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, MessageSquare, Shield, Lightbulb, TrendingUp, ChevronDown } from 'lucide-react'

const areas = [
  {
    id: 1,
    icon: Monitor,
    title: 'Alfabetizzazione su Informazioni e Dati',
    color: 'from-sky-500 to-blue-600',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/10',
    competenze: [
      'Navigare, ricercare e filtrare dati, informazioni e contenuti digitali',
      'Valutare dati, informazioni e contenuti digitali',
      'Gestire dati, informazioni e contenuti digitali',
    ],
    desc: 'Capacità di articolare i bisogni informativi, trovare dati e informazioni negli ambienti digitali, valutarne la pertinenza e l\'affidabilità.',
  },
  {
    id: 2,
    icon: MessageSquare,
    title: 'Comunicazione e Collaborazione',
    color: 'from-indigo-500 to-purple-600',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/10',
    competenze: [
      'Interagire attraverso le tecnologie digitali',
      'Condividere attraverso le tecnologie digitali',
      'Impegnarsi nella cittadinanza attraverso le tecnologie digitali',
      'Collaborare attraverso le tecnologie digitali',
      'Netiquette',
      'Gestire l\'identità digitale',
    ],
    desc: 'Interagire, comunicare e collaborare attraverso le tecnologie digitali, essere consapevoli della diversità culturale e generazionale.',
  },
  {
    id: 3,
    icon: Lightbulb,
    title: 'Creazione di Contenuti Digitali',
    color: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    competenze: [
      'Sviluppare contenuti digitali',
      'Integrare e rielaborare contenuti digitali',
      'Copyright e licenze',
      'Programmazione',
    ],
    desc: 'Creare e modificare contenuti digitali in diversi formati, esprimersi attraverso mezzi digitali, conoscere copyright e licenze.',
  },
  {
    id: 4,
    icon: Shield,
    title: 'Sicurezza',
    color: 'from-rose-500 to-pink-600',
    border: 'border-rose-500/30',
    bg: 'bg-rose-500/10',
    competenze: [
      'Proteggere i dispositivi',
      'Proteggere i dati personali e la privacy',
      'Proteggere la salute e il benessere',
      'Proteggere l\'ambiente',
    ],
    desc: 'Proteggere dispositivi, contenuti, dati personali e privacy negli ambienti digitali, proteggere la salute fisica e psicologica.',
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Risolvere Problemi',
    color: 'from-amber-500 to-orange-600',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    competenze: [
      'Risolvere problemi tecnici',
      'Identificare bisogni e risposte tecnologiche',
      'Usare creativamente le tecnologie digitali',
      'Identificare lacune nelle competenze digitali',
    ],
    desc: 'Identificare i bisogni e i problemi, risolvere problemi concettuali e situazioni problematiche negli ambienti digitali.',
  },
]

const levels = [
  { num: 1, label: 'Base', desc: 'Con guida', color: 'bg-slate-600' },
  { num: 2, label: 'Base', desc: 'Autonomo', color: 'bg-sky-700' },
  { num: 3, label: 'Intermedio', desc: 'Con guida', color: 'bg-sky-600' },
  { num: 4, label: 'Intermedio', desc: 'Autonomo', color: 'bg-indigo-600' },
  { num: 5, label: 'Avanzato', desc: 'Con guida', color: 'bg-indigo-500' },
  { num: 6, label: 'Avanzato', desc: 'Autonomo', color: 'bg-violet-600' },
  { num: 7, label: 'Altamente Spec.', desc: 'Specialista', color: 'bg-violet-500' },
  { num: 8, label: 'Altamente Spec.', desc: 'Leader', color: 'bg-purple-500' },
]

export default function DigComp() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="digcomp" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Framework Europeo
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            DigComp <span className="gradient-text">2.2</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Il Quadro Europeo delle Competenze Digitali per i Cittadini definisce 
            <strong className="text-white"> 5 aree</strong> e <strong className="text-white">21 competenze</strong> su 
            <strong className="text-white"> 8 livelli di padronanza</strong>.
          </p>
        </motion.div>

        {/* 5 Areas */}
        <div className="space-y-4 mb-20">
          {areas.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-2xl border ${area.border} overflow-hidden`}
            >
              <button
                className="w-full p-6 flex items-center gap-4 text-left"
                onClick={() => setExpanded(expanded === area.id ? null : area.id)}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center flex-shrink-0`}>
                  <area.icon size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${area.bg} text-white/60`}>
                      Area {area.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{area.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: expanded === area.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-slate-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expanded === area.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-white/5 pt-4">
                      <p className="text-slate-400 mb-4 leading-relaxed">{area.desc}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {area.competenze.map((c) => (
                          <div key={c} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="text-sky-400 mt-0.5 flex-shrink-0">✦</span>
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Proficiency levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 border border-violet-500/20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            8 Livelli di Padronanza
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {levels.map((l, i) => (
              <motion.div
                key={l.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center"
              >
                <div className={`${l.color} rounded-xl p-3 mb-2`}>
                  <div className="text-2xl font-black text-white">{l.num}</div>
                </div>
                <div className="text-xs font-semibold text-white">{l.label}</div>
                <div className="text-xs text-slate-500">{l.desc}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 justify-center">
            <div className="h-2 flex-1 max-w-xs rounded-full bg-gradient-to-r from-slate-600 via-indigo-600 to-purple-500" />
            <span className="text-xs text-slate-400">Progressione della competenza</span>
            <div className="h-2 flex-1 max-w-xs rounded-full bg-gradient-to-r from-slate-600 via-indigo-600 to-purple-500" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
