import { motion } from 'framer-motion'
import { Target } from 'lucide-react'

const goals = [
  { num: 1, title: 'Povertà Zero', color: '#e5243b', emoji: '🏠' },
  { num: 2, title: 'Fame Zero', color: '#dda63a', emoji: '🌾' },
  { num: 3, title: 'Salute e Benessere', color: '#4c9f38', emoji: '❤️' },
  { num: 4, title: 'Istruzione di Qualità', color: '#c5192d', emoji: '📚' },
  { num: 5, title: 'Parità di Genere', color: '#ff3a21', emoji: '⚖️' },
  { num: 6, title: 'Acqua Pulita', color: '#26bde2', emoji: '💧' },
  { num: 7, title: 'Energia Pulita', color: '#fcc30b', emoji: '⚡' },
  { num: 8, title: 'Lavoro Dignitoso', color: '#a21942', emoji: '💼' },
  { num: 9, title: 'Industria & Innovazione', color: '#fd6925', emoji: '🏭' },
  { num: 10, title: 'Ridurre Disuguaglianze', color: '#dd1367', emoji: '🤝' },
  { num: 11, title: 'Città Sostenibili', color: '#fd9d24', emoji: '🏙️' },
  { num: 12, title: 'Consumo Responsabile', color: '#bf8b2e', emoji: '♻️' },
  { num: 13, title: 'Lotta al Clima', color: '#3f7e44', emoji: '🌍' },
  { num: 14, title: 'Vita Sott\'Acqua', color: '#0a97d9', emoji: '🐠' },
  { num: 15, title: 'Vita sulla Terra', color: '#56c02b', emoji: '🌿' },
  { num: 16, title: 'Pace & Giustizia', color: '#00689d', emoji: '🕊️' },
  { num: 17, title: 'Partnership', color: '#19486a', emoji: '🌐' },
]

const digitalLinks = [
  {
    goal: 'SDG 4',
    title: 'Istruzione di Qualità',
    desc: 'Le competenze digitali (DigComp) sono fondamentali per garantire un\'istruzione inclusiva e di qualità per tutti.',
    color: 'border-red-500/40 bg-red-500/10',
    icon: '📚',
  },
  {
    goal: 'SDG 9',
    title: 'Industria & Innovazione',
    desc: 'L\'identità digitale abilita l\'accesso a servizi innovativi, e-government e infrastrutture digitali inclusive.',
    color: 'border-orange-500/40 bg-orange-500/10',
    icon: '🏭',
  },
  {
    goal: 'SDG 10',
    title: 'Ridurre Disuguaglianze',
    desc: 'Il divario digitale amplifica le disuguaglianze. L\'accesso universale all\'identità digitale è un fattore di equità.',
    color: 'border-pink-500/40 bg-pink-500/10',
    icon: '🤝',
  },
  {
    goal: 'SDG 16',
    title: 'Pace & Giustizia',
    desc: 'Istituzioni digitali trasparenti, e-democracy e accesso ai servizi pubblici online rafforzano la democrazia.',
    color: 'border-blue-500/40 bg-blue-500/10',
    icon: '🕊️',
  },
  {
    goal: 'SDG 17',
    title: 'Partnership Globali',
    desc: 'La cooperazione internazionale sull\'identità digitale (eIDAS, SPID) costruisce ponti tra nazioni.',
    color: 'border-indigo-500/40 bg-indigo-500/10',
    icon: '🌐',
  },
]

export default function Agenda2030() {
  return (
    <section id="agenda" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            ONU · 2015–2030
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Agenda <span className="gradient-text">2030</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I 17 Obiettivi di Sviluppo Sostenibile dell'ONU guidano il mondo verso un futuro 
            più equo, sostenibile e digitale entro il 2030.
          </p>
        </motion.div>

        {/* 17 Goals Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 mb-20"
        >
          {goals.map((g, i) => (
            <motion.div
              key={g.num}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -4, zIndex: 10 }}
              className="sdg-card rounded-xl p-3 text-center cursor-default relative"
              style={{ backgroundColor: g.color + '22', border: `1px solid ${g.color}44` }}
            >
              <div className="text-2xl mb-1">{g.emoji}</div>
              <div className="text-xs font-black text-white">{g.num}</div>
              <div className="text-xs text-white/60 leading-tight mt-0.5 hidden md:block">{g.title}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Digital Identity & SDGs connection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Target size={24} className="text-amber-400" />
            <h3 className="text-2xl font-bold text-white">
              Identità Digitale & Obiettivi SDG
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {digitalLinks.map((link, i) => (
              <motion.div
                key={link.goal}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glass rounded-2xl p-6 border ${link.color} cursor-default`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{link.icon}</span>
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{link.goal}</span>
                    <h4 className="font-bold text-white">{link.title}</h4>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{link.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 border border-amber-500/20"
        >
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Tappe Chiave dell'Agenda Digitale Italiana
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 timeline-line hidden md:block" />
            <div className="space-y-6">
              {[
                { year: '2005', event: 'Codice dell\'Amministrazione Digitale (CAD)', side: 'left' },
                { year: '2014', event: 'Lancio SPID - Sistema Pubblico Identità Digitale', side: 'right' },
                { year: '2018', event: 'GDPR in vigore in tutta l\'UE', side: 'left' },
                { year: '2022', event: 'DigComp 2.2 pubblicato dalla Commissione Europea', side: 'right' },
                { year: '2030', event: 'Obiettivo: 80% cittadini con competenze digitali di base', side: 'left' },
              ].map((item) => (
                <div key={item.year} className={`flex items-center gap-4 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${item.side === 'right' ? 'md:text-right' : ''}`}>
                    <div className="glass rounded-xl p-4 inline-block border border-white/10">
                      <span className="text-amber-400 font-bold text-sm">{item.year}</span>
                      <p className="text-white text-sm mt-1">{item.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-amber-400 flex-shrink-0 z-10 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
