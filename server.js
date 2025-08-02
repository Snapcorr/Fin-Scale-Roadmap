import express from 'express';
import cors from 'cors';
import { applyPortfolioRiskManagement } from './services/riskManager.js';
import { optimizePortfolio } from './services/portfolioOptimizer.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Middleware для логирования запросов
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Эндпоинт для анализа рисков
app.post('/api/risk-analysis', async (req, res) => {
    try {
        const { portfolio, marketData } = req.body;
        const updatedPortfolio = applyPortfolioRiskManagement(portfolio, marketData);
        res.json(updatedPortfolio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Эндпоинт для оптимизации портфеля
app.post('/api/optimize-portfolio', async (req, res) => {
    try {
        const { portfolio, marketData, strategy } = req.body;
        const optimizedPortfolio = await optimizePortfolio(portfolio, marketData, strategy);
        res.json(optimizedPortfolio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    console.log(`Доступно по адресу: http://localhost:${PORT}`);
});
