# Lëtz Play — Discover Luxembourg

A mobile-first gaming platform helping people living and working in Luxembourg discover the country's culture, language, history, institutions, and intercultural richness.

## 🎮 Games

### 1. Lëtz Quiz 🎯
Daily 5-question trivia quiz refreshed every day. Covers 6 categories:
- 🗣️ **Language** — Luxembourgish vocabulary, grammar, and linguistic facts
- 📚 **History** — Key events from 963 AD to today
- 🎭 **Culture** — Traditions, festivals, UNESCO heritage
- 👤 **Famous People** — Athletes, artists, scientists, politicians
- 🏛️ **Institutions** — Government, EU bodies, administration
- 📊 **Economy** — Finance, employment, statistics

Features: day streaks, result sharing, explanations with source links.

### 2. Lëtz Géo 🗺️
Location-guessing game using an interactive OpenStreetMap/Leaflet map of Luxembourg. Read a text clue, drop a pin, and score up to 1,000 points based on accuracy. Discover castles, nature parks, historic villages, and EU institutions.

### 3. Lëtz Connect 🔗
Weekly connections puzzle (NYT Connections-style). Group 16 Luxembourg-related items into 4 themed categories. 4 difficulty levels from yellow (easy) to purple (expert). New puzzle every Monday.

---

## 🌍 Languages Supported
English · Français · Deutsch · Lëtzebuergesch · Português

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Routing | React Router v6 |
| i18n | react-i18next (5 languages) |
| Maps | React Leaflet + OpenStreetMap |
| Persistence | localStorage (anonymous, no login) |
| Deployment | Railway |
| Media | Cloudinary-ready (image URLs configurable) |

---

## 🚀 Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 📦 Build

```bash
npm run build
# Output: /dist
```

## 🚂 Deploy on Railway

1. Push code to GitHub
2. Create a new Railway project from the GitHub repo
3. Railway detects `railway.toml` and builds automatically
4. The `serve` package serves the static `dist/` folder on port 8080

No environment variables required for the base setup.

---

## 📁 Project Structure

```
src/
├── App.jsx                    # Routes
├── main.jsx                   # Entry point
├── index.css                  # Global styles & design tokens
├── i18n/                      # Translation files (en, fr, de, lb, pt)
├── components/
│   ├── Navbar.jsx             # Top bar + bottom tab navigation
│   ├── Footer.jsx             # Links and credits
│   ├── HomePage.jsx           # Landing page with stats & Biergerpakt
│   ├── InfoHub.jsx            # Info: Biergerpakt, stats, links, language
│   ├── GameCard.jsx           # Reusable game card component
│   └── LanguageSelector.jsx   # Language switcher dropdown
├── games/
│   ├── quiz/
│   │   ├── QuizGame.jsx       # Daily quiz game component
│   │   └── data/questions.js  # 48 curated questions across 6 categories
│   ├── geo/
│   │   ├── GeoGame.jsx        # Map guessing game component
│   │   └── data/locations.js  # 10 Luxembourg locations with clues
│   └── connect/
│       ├── ConnectGame.jsx    # Connections puzzle component
│       └── data/puzzles.js    # 5 weekly puzzles (25 categories, 100 items)
├── hooks/
│   └── useLocalStorage.js     # Persistent state hook
└── utils/
    └── dateUtils.js           # Day/week index helpers for daily content
```

---

## 🔗 Integrated Sources

- [Visit Luxembourg](https://www.visitluxembourg.com/)
- [Gouvernement.lu](https://luxembourg.public.lu/en.html)
- [STATEC — Statistics](https://statistiques.public.lu/en/statistique-publique/statec.html)
- [Biergerpakt programme](https://luxembourg.public.lu/en/vivre/biergerpakt.html)
- [Guichet.lu](https://guichet.public.lu/en.html)
- [ADEM](https://adem.public.lu/en.html)

---

## 🤝 Contributing — Adding Content

### Add Quiz Questions
Edit `src/games/quiz/data/questions.js` — add an object to the `QUESTIONS` array:
```js
{
  id: 'unique-id',
  category: 'language|history|culture|people|institutions|economy',
  question: 'Your question',
  options: ['A', 'B', 'C', 'D'],
  answer: 0, // 0-based index of correct answer
  explanation: 'Educational explanation shown after answering',
  link: 'https://source-url.com' // optional
}
```

### Add Geo Locations
Edit `src/games/geo/data/locations.js`:
```js
{
  id: 'unique-id',
  name: 'Location Name',
  coords: [lat, lng],
  emoji: '🏰',
  clue: 'Text clue without revealing the name',
  fact: 'Fun fact shown after guessing',
  region: 'Canton name',
  link: 'https://visitluxembourg.com/...'
}
```

### Add Connect Puzzles
Edit `src/games/connect/data/puzzles.js` — add to the `PUZZLES` array.

### Add Translations
Update all 5 files in `src/i18n/` with matching key structures.

---

## 📄 Licence

Educational platform — not affiliated with the Luxembourg government.
Made with ❤️ for Luxembourg.
