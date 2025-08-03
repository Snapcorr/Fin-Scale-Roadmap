# API Integration

This project connects to external APIs for real-time data acquisition and portfolio decisioning.

## 1. Alpaca API
Used for:
- Asset pricing
- Historical candles
- Market status

Endpoint usage located in `/api/alpaca.js`

## 2. FMP (Financial Modeling Prep)
Used for:
- Company financials
- Ratios, EPS, P/E, volume

Endpoint usage located in `/api/fmp.js`

## 3. `.env` Required
You need to create a `.env` file in root with your keys:
```
ALPACA_API_KEY=your_key
FMP_API_KEY=your_key
```

Note: keys are **not provided** in this repo.
