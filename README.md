# Fin-Scale Microcap AI Portfolio

AI-based portfolio optimizer for microcap stocks using real-time APIs, dynamic risk scoring, and a modular architecture.

---

## 🚀 Quick Start

```bash
git clone https://github.com/Snapcorr/Fin-Scale-Roadmap.git
cd Fin-Scale-Roadmap
npm install
node server.js
```

---

## 🧱 Project Structure

```
/json/                   ← Asset definitions (JSON format)
/src/                    ← Frontend HTML/JS/CSS
/api/                    ← API modules (Alpaca, FMP)
/services/               ← Core logic (optimizer, risk manager)
/docs/                   ← Documentation (architecture, API)
/server.js               ← Node.js backend
index.html               ← UI entry point
```

---

## 📦 Tech Stack

- Frontend: Vanilla JS, HTML5, CSS3
- Backend: Node.js (+ GraphQL planned)
- Database: TimescaleDB, Redis (optional)
- External APIs: Alpaca, Financial Modeling Prep (FMP)

---

## 📊 Modules

- `portfolioOptimizer.js`: Allocation by risk/return
- `riskManager.js`: Scoring system
- `fmp.js` / `alpaca.js`: Market data APIs
- `core.js`: Orchestration logic

---

## ⚠ Known Issues

- No real test coverage yet
- JSON files missing or incomplete
- UI buttons unlinked to logic
- Needs documentation of architecture & API

---

## 🛣️ Roadmap

- [ ] Add working /json files
- [ ] Implement optimizer logic
- [ ] Add tests with Jest
- [ ] Setup GitHub Actions for CI
- [ ] Create architecture diagram
- [ ] Document API usage in `/docs`

---

## 👤 Authors

- Snapcorr
- CN Dev (DeepSeek)
- GPT Co-pilot

---

> For internal or educational use only. No financial advice.
