const API_KEY = 'your_alpaca_api_key_here';
const API_SECRET = 'your_alpaca_api_secret_here';
const BASE_URL = 'https://paper-api.alpaca.markets'; // Для песочницы

// Создание ордера
export async function createOrder(orderData) {
    const response = await fetch(`${BASE_URL}/v2/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'APCA-API-KEY-ID': API_KEY,
            'APCA-API-SECRET-KEY': API_SECRET
        },
        body: JSON.stringify(orderData)
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Ошибка создания ордера: ${error.message}`);
    }
    
    return await response.json();
}

// Получение информации об активе
export async function getAsset(ticker) {
    const response = await fetch(`${BASE_URL}/v2/assets/${ticker}`, {
        headers: {
            'APCA-API-KEY-ID': API_KEY,
            'APCA-API-SECRET-KEY': API_SECRET
        }
    });
    
    if (!response.ok) {
        throw new Error(`Ошибка получения информации об активе: ${response.status}`);
    }
    
    return await response.json();
}

// Получение рыночных данных
export async function getMarketData(ticker, timeframe = '1Day', limit = 100) {
    const response = await fetch(
        `${BASE_URL}/v2/stocks/${ticker}/bars?timeframe=${timeframe}&limit=${limit}`,
        {
            headers: {
                'APCA-API-KEY-ID': API_KEY,
                'APCA-API-SECRET-KEY': API_SECRET
            }
        }
    );
    
    if (!response.ok) {
        throw new Error(`Ошибка получения рыночных данных: ${response.status}`);
    }
    
    const data = await response.json();
    return data.bars;
}

// Получение информации о портфеле
export async function getPortfolio() {
    const response = await fetch(`${BASE_URL}/v2/account`, {
        headers: {
            'APCA-API-KEY-ID': API_KEY,
            'APCA-API-SECRET-KEY': API_SECRET
        }
    });
    
    if (!response.ok) {
        throw new Error(`Ошибка получения информации о портфеле: ${response.status}`);
    }
    
    return await response.json();
}
