import { motion } from 'framer-motion'
import { Scale, CheckCircle, AlertTriangle, FileText, Lock, Eye, Trash2, Download } from 'lucide-react'

const diritti = [
  { icon: Eye, title: 'Diritto di Accesso', desc: 'Puoi richiedere quali dati personali vengono trattati da un\'organizzazione.' },
  { icon: FileText, title: 'Diritto di Rettifica', desc: 'Puoi correggere dati inesatti o incompleti che ti riguardano.' },
  { icon: Trash2, title: 'Diritto all\'Oblio', desc: 'Puoi richiedere la cancellazione dei tuoi dati personali (GDPR Art. 17).' },
  { icon: Download, title: 'Portabilità dei Dati', desc: 'Puoi ricevere i tuoi dati in formato strutturato e trasferirli ad altri servizi.' },
  { icon: Lock, title: 'Diritto di Opposizione', desc: 'Puoi opporti al trattamento dei tuoi dati per finalità di marketing diretto.' },
  { icon: CheckCircle, title: 'Consenso Informato', desc: 'Il trattamento dei dati richiede il tuo consenso esplicito, libero e revocabile.' },
]

const doveri = [
  { title: 'Rispettare la Privacy Altrui', desc: 'Non condividere dati, foto o informazioni di altri senza consenso.' },
  { title: 'Usare Identità Reale', desc: 'Evitare profili falsi o anonimi usati per danneggiare altri.' },
  { title: 'Netiquette', desc: 'Rispettare le regole di comportamento civile nelle comunicazioni digitali.' },
  { title: 'Proteggere le Credenziali', desc: 'Non condividere password e mantenere sicuri i propri account.' },
  { title: 'Segnalare Abusi', desc: 'Denunciare contenuti illegali, cyberbullismo e violazioni online.' },
  { title: 'Responsabilità Digitale', desc: 'Ogni azione online ha conseguenze reali: agire con consapevolezza.' },
]

const normative = [
  { label: 'GDPR', full: 'Regolamento Generale sulla Protezione dei Dati', year: '2018', color: 'border-sky-500/40 bg-sky-500/10' },
  { label: 'CAD', full: 'Codice dell\'Amministrazione Digitale', year: '2005', color: 'border-indigo-500/40 bg-indigo-500/10' },
  { label: 'SPID', full: 'Sistema Pubblico di Identità Digitale', year: '2014', color: 'border-emerald-500/40 bg-emerald-500/10' },
  { label: 'eIDAS', full: 'Identificazione Elettronica e Servizi Fiduciari', year: '2014', color: 'border-amber-500/40 bg-amber-500/10' },
]

export default function DirittieDeveri() {
  return (
    <section id="diritti" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Cittadinanza Digitale
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Diritti & <span className="gradient-text">Doveri</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Il cittadino digitale ha diritti fondamentali garantiti dalla legge e doveri 
            etici verso la comunità online.
          </p>
        </motion.div>

        {/* Scale icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="flex justify-center mb-16"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center glow">
            <Scale size={36} className="text-white" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Diritti */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                <CheckCircle size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">I Tuoi Diritti</h3>
            </motion.div>
            <div className="space-y-4">
              {diritti.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="glass rounded-xl p-4 flex items-start gap-4 border border-sky-500/10 hover:border-sky-500/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                    <d.icon size={16} className="text-sky-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">{d.title}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{d.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Doveri */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <AlertTriangle size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">I Tuoi Doveri</h3>
            </motion.div>
            <div className="space-y-4">
              {doveri.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ x: -6 }}
                  className="glass rounded-xl p-4 flex items-start gap-4 border border-amber-500/10 hover:border-amber-500/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">{d.title}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{d.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Normative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Quadro Normativo di Riferimento
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {normative.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`glass rounded-2xl p-6 text-center border ${n.color} cursor-default`}
              >
                <div className="text-3xl font-black text-white mb-2">{n.label}</div>
                <div className="text-xs text-slate-400 leading-relaxed mb-3">{n.full}</div>
                <div className="text-xs font-semibold text-slate-500">{n.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
