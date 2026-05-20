import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowDown, Shield, Globe, Users } from 'lucide-react'

const stats = [
  { value: '4.9B', label: 'Utenti Internet', icon: Globe },
  { value: '193', label: 'Paesi ONU', icon: Users },
  { value: '5', label: 'Aree DigComp', icon: Shield },
]

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.from(titleRef.current, { opacity: 0, y: 60, duration: 1, ease: 'power3.out' })
      .from(subtitleRef.current, { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' }, '-=0.5')
  }, [])

  return (
    <section className="relative min-h-screen hero-bg flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-sky-500/10 animate-rotate-slow" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-indigo-500/10" style={{ animation: 'rotate-slow 15s linear infinite reverse' }} />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-amber-500/10 animate-rotate-slow" />
      </div>

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-sky-500/20 text-sky-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          Cittadinanza Digitale del XXI Secolo
        </motion.div>

        <h1 ref={titleRef} className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="text-white">La Tua</span>
          <br />
          <span className="shimmer-text">Identità</span>
          <br />
          <span className="text-white">Digitale</span>
        </h1>

        <p ref={subtitleRef} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Scopri chi sei nel mondo digitale. Competenze, diritti, doveri e il futuro 
          della cittadinanza nell'era dell'intelligenza artificiale.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(14,165,233,0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#cos-e')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl font-semibold text-white text-lg transition-all"
          >
            Esplora il Tema
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#video')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass border border-white/10 rounded-2xl font-semibold text-slate-300 text-lg hover:border-sky-500/40 transition-all"
          >
            Guarda i Video
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="glass rounded-2xl p-4 text-center">
              <Icon size={20} className="text-sky-400 mx-auto mb-2" />
              <div className="text-2xl font-black gradient-text">{value}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Scorri</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
