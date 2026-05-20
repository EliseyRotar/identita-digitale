import { useState } from 'react'

const questions = [
  {
    q: 'Quando cerchi informazioni online, come valuti se una fonte è affidabile?',
    options: [
      { text: 'Non ci penso, uso la prima cosa che trovo', level: 1 },
      { text: 'Guardo se il sito sembra professionale', level: 2 },
      { text: 'Confronto più fonti e verifico l\'autore', level: 4 },
      { text: 'Applico criteri sistematici: autore, data, fonti citate, bias', level: 6 },
    ],
  },
  {
    q: 'Come gestisci la tua privacy sui social media?',
    options: [
      { text: 'Non ho mai modificato le impostazioni privacy', level: 1 },
      { text: 'Ho impostato il profilo privato', level: 3 },
      { text: 'Controllo regolarmente le app autorizzate e i dati condivisi', level: 5 },
      { text: 'Uso strumenti avanzati (VPN, 2FA, pseudonimi) e formo altri', level: 7 },
    ],
  },
  {
    q: 'Hai mai creato contenuti digitali (video, articoli, grafica)?',
    options: [
      { text: 'No, non so come si fa', level: 1 },
      { text: 'Sì, qualche post o foto con app semplici', level: 2 },
      { text: 'Sì, creo contenuti con strumenti specifici e conosco le licenze', level: 4 },
      { text: 'Sì, produco contenuti professionali e aiuto altri a farlo', level: 7 },
    ],
  },
  {
    q: 'Cosa fai se il tuo computer si comporta in modo strano?',
    options: [
      { text: 'Chiedo aiuto a qualcuno, non so cosa fare', level: 1 },
      { text: 'Riavvio e sperò che si risolva', level: 2 },
      { text: 'Cerco online la soluzione e la applico autonomamente', level: 4 },
      { text: 'Diagnostico il problema, lo risolvo e prevengo future occorrenze', level: 6 },
    ],
  },
  {
    q: 'Come usi i servizi digitali della Pubblica Amministrazione (SPID, CIE)?',
    options: [
      { text: 'Non li ho mai usati', level: 1 },
      { text: 'Ho lo SPID ma lo uso raramente', level: 2 },
      { text: 'Uso regolarmente SPID per accedere a servizi PA', level: 4 },
      { text: 'Uso tutti i servizi digitali PA e aiuto altri a farlo', level: 6 },
    ],
  },
  {
    q: 'Sai cosa sono i tuoi diritti secondo il GDPR?',
    options: [
      { text: 'No, non ne so nulla', level: 1 },
      { text: 'Ho sentito parlare del GDPR ma non conosco i dettagli', level: 2 },
      { text: 'Conosco i principali diritti (accesso, rettifica, oblio)', level: 4 },
      { text: 'Conosco tutti i diritti e so come esercitarli concretamente', level: 6 },
    ],
  },
  {
    q: 'Come ti comporti nelle comunicazioni digitali con persone che non conosci?',
    options: [
      { text: 'Non ci penso, scrivo come mi viene', level: 1 },
      { text: 'Cerco di essere educato', level: 3 },
      { text: 'Applico la netiquette e rispetto le norme della piattaforma', level: 5 },
      { text: 'Promuovo attivamente una cultura digitale rispettosa', level: 7 },
    ],
  },
  {
    q: 'Hai mai partecipato a iniziative civiche o democratiche online?',
    options: [
      { text: 'No, non saprei come', level: 1 },
      { text: 'Ho firmato qualche petizione online', level: 2 },
      { text: 'Partecipo a consultazioni pubbliche e forum civici digitali', level: 5 },
      { text: 'Organizzo o promuovo attivamente la partecipazione civica digitale', level: 8 },
    ],
  },
]

const levelDescriptions: Record<number, { label: string; desc: string; color: string }> = {
  1: { label: 'Base — Con guida', desc: 'Sei agli inizi del percorso digitale. Con il supporto giusto puoi sviluppare rapidamente le competenze fondamentali.', color: '#6b6560' },
  2: { label: 'Base — Autonomo', desc: 'Hai le basi e puoi svolgere compiti semplici in autonomia. È il momento di approfondire e ampliare le tue competenze.', color: '#6b6560' },
  3: { label: 'Intermedio — Con guida', desc: 'Stai crescendo. Con un po\' di supporto riesci ad affrontare situazioni più complesse.', color: '#c8392b' },
  4: { label: 'Intermedio — Autonomo', desc: 'Buon livello! Gestisci autonomamente la maggior parte delle situazioni digitali quotidiane.', color: '#c8392b' },
  5: { label: 'Avanzato — Con guida', desc: 'Ottimo livello. Hai competenze solide e riesci ad affrontare sfide complesse con minimo supporto.', color: '#0d0d0d' },
  6: { label: 'Avanzato — Autonomo', desc: 'Eccellente. Sei un utente digitale competente e autonomo, capace di adattarti a nuovi contesti.', color: '#0d0d0d' },
  7: { label: 'Altamente Specializzato — Esperto', desc: 'Sei un esperto. Le tue competenze vanno oltre l\'uso quotidiano: puoi risolvere problemi complessi e formare altri.', color: '#0d0d0d' },
  8: { label: 'Altamente Specializzato — Leader', desc: 'Sei un leader digitale. Contribuisci all\'innovazione e guidi lo sviluppo delle competenze digitali nella tua comunità.', color: '#0d0d0d' },
}

export default function QuizDigComp() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [done, setDone] = useState(false)

  const answer = (level: number) => {
    const next = [...answers, level]
    setAnswers(next)
    if (current + 1 >= questions.length) {
      setDone(true)
    } else {
      setCurrent(current + 1)
    }
  }

  const reset = () => {
    setCurrent(0)
    setAnswers([])
    setDone(false)
  }

  const avgLevel = done
    ? Math.round(answers.reduce((a, b) => a + b, 0) / answers.length)
    : 0

  const result = done ? levelDescriptions[Math.min(8, Math.max(1, avgLevel))] : null
  const progress = ((current) / questions.length) * 100

  return (
    <section id="quiz" className="bg-[#e8e0d0] border-t border-[#c4bba8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 border-b border-[#c4bba8]">
        <p className="section-label mb-4">Autovalutazione</p>
        <h2 className="font-serif font-black leading-tight text-[#0d0d0d]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          Qual è il tuo<br /><span className="text-[#c8392b]">Livello DigComp?</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {!done ? (
          <>
            {/* Progress */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="num-label">Domanda {current + 1} di {questions.length}</span>
                <span className="num-label">{Math.round(progress)}%</span>
              </div>
              <div className="h-px bg-[#c4bba8] relative">
                <div
                  className="absolute top-0 left-0 h-px bg-[#c8392b] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="font-serif font-bold text-2xl text-[#0d0d0d] mb-10 leading-snug">
              {questions[current].q}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => answer(opt.level)}
                  className="w-full text-left p-5 border border-[#c4bba8] hover:border-[#0d0d0d] hover:bg-[#dfd6c4] transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="num-label w-5 shrink-0 mt-0.5 group-hover:text-[#c8392b] transition-colors">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm text-[#0d0d0d] leading-relaxed">{opt.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          /* Result */
          <div>
            <div className="border-t-2 border-[#c8392b] pt-10 mb-10">
              <p className="section-label mb-4">Il tuo risultato</p>
              <div className="font-serif font-black text-[#e8e0d0] select-none mb-4"
                style={{ fontSize: 'clamp(5rem, 15vw, 10rem)', lineHeight: 0.85 }}>
                {avgLevel}
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#0d0d0d] mb-4">
                {result?.label}
              </h3>
              <p className="text-[#6b6560] leading-relaxed mb-8">{result?.desc}</p>
            </div>

            {/* Breakdown */}
            <div className="mb-10">
              <p className="num-label mb-6">Dettaglio per domanda</p>
              <div className="space-y-2">
                {answers.map((lvl, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="num-label w-24 shrink-0">Domanda {i + 1}</span>
                    <div className="flex-1 h-6 bg-[#dfd6c4] relative">
                      <div
                        className="h-full bg-[#c8392b] transition-all duration-700"
                        style={{ width: `${(lvl / 8) * 100}%` }}
                      />
                    </div>
                    <span className="num-label w-8 text-right">Lv.{lvl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={reset}
                className="px-6 py-3 bg-[#0d0d0d] text-[#e8e0d0] text-xs font-medium tracking-widest uppercase hover:bg-[#c8392b] transition-colors duration-300"
              >
                Rifai il quiz
              </button>
              <button
                onClick={() => document.querySelector('#digcomp')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-[#0d0d0d] text-[#0d0d0d] text-xs font-medium tracking-widest uppercase hover:bg-[#0d0d0d] hover:text-[#e8e0d0] transition-colors duration-300"
              >
                Esplora DigComp 2.2
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
