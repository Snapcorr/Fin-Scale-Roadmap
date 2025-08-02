const API_KEY = 'your_fmp_api_key_here'; // Замените на реальный API ключ

// Получение базового профиля компании
export async function getCompanyProfile(ticker) {
    const response = await fetch(
        `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${API_KEY}`
    );
    
    if (!response.ok) {
        throw new Error(`Ошибка при получении профиля компании: ${response.status}`);
    }
    
    const data = await response.json();
    return data[0]; // Возвращаем первый элемент массива
}

// Получение финансовых показателей
export async function getFinancialRatios(ticker) {
    const response = await fetch(
        `https://financialmodelingprep.com/api/v3/ratios-ttm/${ticker}?apikey=${API_KEY}`
    );
    
    if (!response.ok) {
        throw new Error(`Ошибка при получении финансовых показателей: ${response.status}`);
    }
    
    const data = await response.json();
    return data[0];
}

// Получение исторических данных
export async function getHistoricalData(ticker, period = 'daily') {
    const response = await fetch(
        `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?serietype=${period}&apikey=${API_KEY}`
    );
    
    if (!response.ok) {
        throw new Error(`Ошибка при получении исторических данных: ${response.status}`);
    }
    
    const data = await response.json();
    return data.historical;
}

// Поиск акций по критериям
export async function screenStocks(criteria) {
    const params = new URLSearchParams(criteria).toString();
    const response = await fetch(
        `https://financialmodelingprep.com/api/v3/stock-screener?${params}&apikey=${API_KEY}`
    );
    
    if (!response.ok) {
        throw new Error(`Ошибка при поиске акций: ${response.status}`);
    }
    
    return await response.json();
}
