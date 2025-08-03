# Legacy Notes and Development Philosophy

> Extracted design principles, guidance and planning notes based on initial architecture sessions and prototyping efforts.

---

## 🎯 Core Concepts

- **Project Codename:** Fin-Scale
- **Primary Objective:** AI-assisted portfolio management for microcap equities
- **Core Flow:** Filter → Score → Optimize → Display
- **Philosophy:** 
  - No heavyweight frameworks
  - Focus on speed and modular clarity
  - Small, replaceable components

---

## ⚙ Implementation Guidelines

- Every asset JSON must include:
  - `expected_return`
  - `risk`
  - `liquidity`
  - `sector`
- Risk scoring based on percentile bucketing
- Normalize all inputs before optimization
- Final output: list of asset weights (float percentages)

---

## 🧠 Future Ideas (From Initial Brainstorm)

- Add visual dashboards: pie, bar, radar charts
- Use Redis to cache optimization runs
- Allow saving session states
- Option for multi-timeframe optimization: daily / weekly

---

## 🧩 Dropzone

`<!-- DROPZONE: supplemental files to be added here -->`

This section reserved for archive uploads, additional guides, or implementation logs.

---

*Use this document to align with original goals, technical boundaries, and philosophical guardrails when extending the Fin-Scale system.*
