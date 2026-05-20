# 🤝 Come Contribuire

Grazie per l'interesse nel contribuire a **Identità Digitale**! Ogni contributo è benvenuto, che si tratti di correzioni, nuovi contenuti o miglioramenti tecnici.

## Tipi di Contributo

- 🐛 **Bug fix** — Segnala o correggi un problema
- ✨ **Nuova funzionalità** — Proponi o implementa una nuova sezione
- 📚 **Contenuti** — Migliora o aggiorna i testi educativi
- 🎬 **Video** — Suggerisci nuovi video da aggiungere alla raccolta
- 🌐 **Traduzioni** — Aiuta a tradurre i contenuti in altre lingue
- 📄 **Documentazione** — Migliora README o altri documenti

## Flusso di Lavoro

```bash
# 1. Fai un fork e clona
git clone https://github.com/TUO-USERNAME/identita-digitale.git
cd identita-digitale

# 2. Installa le dipendenze
npm install

# 3. Crea un branch descrittivo
git checkout -b fix/navbar-mobile
# oppure
git checkout -b feat/sezione-ai-identita

# 4. Fai le modifiche e testa
npm run dev
npm run lint

# 5. Committa seguendo Conventional Commits
git commit -m "fix: correggi menu mobile su iOS"
git commit -m "feat: aggiungi sezione AI e identità digitale"
git commit -m "docs: aggiorna lista video risorse"

# 6. Apri una Pull Request verso main
git push origin nome-del-tuo-branch
```

## Convenzioni per i Commit

Usiamo [Conventional Commits](https://www.conventionalcommits.org/it/):

| Prefisso    | Quando usarlo                     |
| ----------- | --------------------------------- |
| `feat:`     | Nuova funzionalità                |
| `fix:`      | Correzione di un bug              |
| `docs:`     | Solo documentazione               |
| `style:`    | Formattazione, nessuna logica     |
| `refactor:` | Refactoring senza nuove feature   |
| `content:`  | Aggiornamento contenuti educativi |

## Segnalare un Bug

Apri una [issue](../../issues/new) con:

- Descrizione del problema
- Passi per riprodurlo
- Browser e sistema operativo
- Screenshot (se utile)

## Proporre un Video

Apri una issue con il tag `video` e includi:

- URL YouTube
- Titolo e descrizione breve
- Argomento (Privacy, DigComp, Cittadinanza, ecc.)

## Codice di Condotta

Sii rispettoso, costruttivo e inclusivo. Questo progetto è uno spazio educativo aperto a tutti.
