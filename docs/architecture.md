# System Architecture

The Fin-Scale project is structured as a modular Node.js application with the following components:

## 1. Frontend
- `index.html`: Entry point.
- Uses plain JS to fetch and render JSON-based asset data.

## 2. Backend
- `server.js`: Core server logic.
- Future GraphQL endpoint support is planned.

## 3. Data Layer
- `/json/`: Directory for asset metadata in JSON format.
- Each file represents an individual microcap stock with attributes: expected return, risk, sector, liquidity.

## 4. API Layer
- Alpaca and Financial Modeling Prep (FMP) modules used for live data acquisition.

## 5. Core Logic
- Optimizer: allocates weights based on return and risk.
- RiskManager: filters or adjusts based on thresholds.

System flow:
```
[JSON] → [Optimizer + RiskManager] → [Portfolio Allocation] → [UI]
```
