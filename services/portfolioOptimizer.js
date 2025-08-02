import { getHistoricalData } from '../api/fmp.js';
import { RISK_LIMITS } from '../js/core.js';

// Основная функция оптимизации портфеля
export async function optimizePortfolio(portfolio, marketData, strategy = 'sharpe') {
    // Клонируем портфель
    const optimizedPortfolio = JSON.parse(JSON.stringify(portfolio));
    
    // Применяем выбранную стратегию оптимизации
    switch (strategy.toLowerCase()) {
        case 'sharpe':
            return await applySharpeOptimization(optimizedPortfolio, marketData);
        case 'minimal-risk':
            return await applyMinimalRiskOptimization(optimizedPortfolio, marketData);
        case 'equal-weight':
            return applyEqualWeightOptimization(optimizedPortfolio, marketData);
        default:
            throw new Error(`Неизвестная стратегия оптимизации: ${strategy}`);
    }
}

// Оптимизация по коэффициенту Шарпа
async function applySharpeOptimization(portfolio, marketData) {
    // Реализация будет добавлена в следующих версиях
    console.log('Применение оптимизации по коэффициенту Шарпа...');
    return portfolio;
}

// Оптимизация для минимального риска
async function applyMinimalRiskOptimization(portfolio, marketData) {
    // Реализация будет добавлена в следующих версиях
    console.log('Применение оптимизации для минимального риска...');
    return portfolio;
}

// Оптимизация с равными весами
function applyEqualWeightOptimization(portfolio, marketData) {
    const portfolioValue = calculatePortfolioValue(portfolio, marketData);
    const targetPositionValue = portfolioValue * RISK_LIMITS.MAX_POSITION * 0.9;
    
    portfolio.positions.forEach(position => {
        const currentPrice = marketData[position.ticker] || position.buyPrice;
        const targetQuantity = Math.floor(targetPositionValue / currentPrice);
        
        if (targetQuantity < position.quantity) {
            // Продаем излишек
            const sellQuantity = position.quantity - targetQuantity;
            portfolio.cash += sellQuantity * currentPrice;
            position.quantity = targetQuantity;
        } else if (targetQuantity > position.quantity) {
            // Покупаем недостающее
            const buyQuantity = targetQuantity - position.quantity;
            const buyCost = buyQuantity * currentPrice;
            
            if (buyCost <= portfolio.cash) {
                portfolio.cash -= buyCost;
                position.quantity = targetQuantity;
            }
        }
    });
    
    return portfolio;
}

// Вспомогательная функция для расчета стоимости портфеля
function calculatePortfolioValue(portfolio, marketData) {
    let totalValue = portfolio.cash;
    
    portfolio.positions.forEach(position => {
        const currentPrice = marketData[position.ticker] || position.buyPrice;
        totalValue += currentPrice * position.quantity;
    });
    
    return totalValue;
}
