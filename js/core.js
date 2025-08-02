export const RISK_LIMITS = {
    MAX_POSITION: 0.2,
    STOP_LOSS: -0.15,
    MIN_VOLUME: 50000
};

export function calculatePortfolioValue(portfolio, marketData) {
    let totalValue = portfolio.cash;
    portfolio.positions.forEach(position => {
        const currentPrice = marketData[position.ticker] || position.buyPrice;
        totalValue += currentPrice * position.quantity;
    });
    return totalValue;
}

export function validatePosition(position, portfolio, marketData) {
    const portfolioValue = calculatePortfolioValue(portfolio, marketData);
    const positionValue = (marketData[position.ticker] || position.buyPrice) * position.quantity;
    const positionShare = positionValue / portfolioValue;
    
    const violations = [];
    if (positionShare > RISK_LIMITS.MAX_POSITION) {
        violations.push(`Position limit exceeded (${(positionShare * 100).toFixed(2)}% > ${RISK_LIMITS.MAX_POSITION * 100}%)`);
    }
    
    const currentPrice = marketData[position.ticker] || position.buyPrice;
    const priceChange = (currentPrice - position.buyPrice) / position.buyPrice;
    if (priceChange < RISK_LIMITS.STOP_LOSS) {
        violations.push(`Stop-loss triggered (${(priceChange * 100).toFixed(2)}% < ${RISK_LIMITS.STOP_LOSS * 100}%)`);
    }
    
    return {
        isValid: violations.length === 0,
        violations
    };
}
