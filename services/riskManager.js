import { RISK_LIMITS } from '../js/core.js';

// Расширенная функция для управления рисками
export function applyPortfolioRiskManagement(portfolio, marketData) {
    // Клонируем портфель, чтобы не изменять оригинал
    const updatedPortfolio = JSON.parse(JSON.stringify(portfolio));
    
    // Применяем стратегию риск-менеджмента
    applyStopLossStrategy(updatedPortfolio, marketData);
    applyPositionLimits(updatedPortfolio, marketData);
    
    return updatedPortfolio;
}

// Стратегия применения стоп-лоссов
function applyStopLossStrategy(portfolio, marketData) {
    portfolio.positions = portfolio.positions.filter(position => {
        const currentPrice = marketData[position.ticker] || position.buyPrice;
        const priceChange = (currentPrice - position.buyPrice) / position.buyPrice;
        
        // Оставляем только позиции, не достигшие стоп-лосса
        return priceChange > RISK_LIMITS.STOP_LOSS;
    });
}

// Стратегия ограничения размера позиций
function applyPositionLimits(portfolio, marketData) {
    const portfolioValue = calculatePortfolioValue(portfolio, marketData);
    let totalValue = portfolio.cash;
    
    const validPositions = [];
    
    portfolio.positions.forEach(position => {
        const currentPrice = marketData[position.ticker] || position.buyPrice;
        const positionValue = currentPrice * position.quantity;
        const positionShare = positionValue / portfolioValue;
        
        if (positionShare <= RISK_LIMITS.MAX_POSITION) {
            validPositions.push(position);
            totalValue += positionValue;
        } else {
            // Рассчитываем допустимое количество акций
            const maxPositionValue = portfolioValue * RISK_LIMITS.MAX_POSITION;
            const allowedQuantity = Math.floor(maxPositionValue / currentPrice);
            
            if (allowedQuantity > 0) {
                // Создаем новую позицию с допустимым количеством
                const adjustedPosition = {
                    ...position,
                    quantity: allowedQuantity
                };
                
                validPositions.push(adjustedPosition);
                totalValue += currentPrice * allowedQuantity;
                
                // Добавляем высвободившиеся средства в кэш
                portfolio.cash += (position.quantity - allowedQuantity) * currentPrice;
            } else {
                // Полностью продаем позицию
                portfolio.cash += positionValue;
            }
        }
    });
    
    portfolio.positions = validPositions;
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
