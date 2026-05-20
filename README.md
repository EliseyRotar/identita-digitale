# 🌐 Cittadinanza Digitale

> Una web app educativa interattiva sulla cittadinanza digitale, le competenze DigComp 2.2, i diritti GDPR e gli obiettivi dell'Agenda 2030.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deploy](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen?logo=github)](https://eliseyrotar.github.io/cittadinanza-digitale/)
[![License: MIT](https://img.shields.io/badge/Licenza-MIT-green)](LICENSE)

---

## 📖 Cos'è questo progetto

**Cittadinanza Digitale** è un sito web educativo a pagina singola (SPA) pensato per studenti, insegnanti e cittadini che vogliono capire cosa significa esistere e partecipare nel mondo digitale. Copre:

- Cosa si intende per **identità digitale** e come si costruisce online
- Il framework europeo **DigComp 2.2** — 5 aree, 21 competenze, 8 livelli
- **Diritti e doveri** del cittadino digitale (GDPR, SPID, eIDAS, CAD)
- Il legame tra cittadinanza digitale e **Agenda 2030** dell'ONU
- Come **educare** alla cittadinanza digitale per fascia d'età
- Una raccolta di **video risorse** selezionati

---

## 🖥️ Demo

🌐 **[eliseyrotar.github.io/cittadinanza-digitale](https://eliseyrotar.github.io/cittadinanza-digitale/)**

> Oppure clona il repo e avvia in locale (vedi [Avvio rapido](#-avvio-rapido)).

---

## 🗂️ Struttura del Progetto

```
cittadinanza-digitale/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Navigazione sticky con progress bar di lettura
│   │   ├── Hero.tsx             # Sezione hero con animazioni GSAP
│   │   ├── CosE.tsx             # Cos'è la cittadinanza digitale
│   │   ├── DigComp.tsx          # Framework DigComp 2.2 interattivo
│   │   ├── DirittieDeveri.tsx   # Diritti GDPR e doveri del cittadino
│   │   ├── Agenda2030.tsx       # 17 SDG e connessione al digitale
│   │   ├── Educare.tsx          # Percorsi educativi per fascia d'età
│   │   ├── VideoResources.tsx   # Video YouTube integrati
│   │   └── Footer.tsx           # Footer con link e risorse esterne
│   ├── App.tsx                  # Componente root
│   ├── main.tsx                 # Entry point
│   └── index.css                # Stili globali + Tailwind
├── risorse/
│   ├── pdf/                     # Documenti PDF di riferimento
│   └── video/                   # Lista video curati
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🚀 Avvio Rapido

### Prerequisiti

- [Node.js](https://nodejs.org) ≥ 18
- npm ≥ 9

### Installazione

```bash
# Clona il repository
git clone https://github.com/EliseyRotar/cittadinanza-digitale.git
cd cittadinanza-digitale

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:5173](http://localhost:5173) nel browser.

### Build per la produzione

```bash
npm run build
npm run preview
```

---

## 🛠️ Stack Tecnologico

| Tecnologia                                                             | Versione | Utilizzo                |
| ---------------------------------------------------------------------- | -------- | ----------------------- |
| [React](https://react.dev)                                             | 19       | UI framework            |
| [TypeScript](https://www.typescriptlang.org)                           | 6        | Type safety             |
| [Vite](https://vite.dev)                                               | 8        | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com)                                | 4        | Utility-first styling   |
| [Framer Motion](https://www.framer.com/motion/)                        | 12       | Animazioni UI           |
| [GSAP](https://gsap.com)                                               | 3        | Animazioni hero         |
| [Lucide React](https://lucide.dev)                                     | latest   | Icone SVG               |
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | —        | Font serif display      |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans)                   | —        | Font sans-serif corpo   |

---

## 📚 Contenuti e Fonti

I contenuti dell'app si basano su fonti ufficiali:

- 🇪🇺 **DigComp 2.2** — [Joint Research Centre, Commissione Europea](https://joint-research-centre.ec.europa.eu/digcomp)
- 🌍 **Agenda 2030** — [UNRIC Italia](https://unric.org/it/agenda-2030/)
- 🔒 **GDPR** — [Garante per la Protezione dei Dati Personali](https://www.garanteprivacy.it)
- 🇮🇹 **SPID / CAD** — [AGID — Agenzia per l'Italia Digitale](https://www.agid.gov.it)
- 📄 Documenti PDF nella cartella [`risorse/pdf/`](risorse/pdf/)

---

## 🤝 Contribuire

Contributi, segnalazioni e suggerimenti sono benvenuti! Leggi [CONTRIBUTING.md](CONTRIBUTING.md) per le linee guida.

1. Fai un fork del repository
2. Crea un branch: `git checkout -b feature/nuova-sezione`
3. Committa le modifiche: `git commit -m "feat: aggiungi sezione X"`
4. Apri una Pull Request

---

## 📄 Licenza

Distribuito sotto licenza **MIT**. Vedi [LICENSE](LICENSE) per i dettagli.

---

## 👥 Crediti

Progetto realizzato da **[eli6](https://github.com/EliseyRotar)** & **Giulio Verde**.

---

<p align="center">
  Fatto con ❤️ per la cittadinanza digitale italiana 🇮🇹
</p>
