// Контент для "Библии" (База знаний)
export const contentData = {
    bible: `
        <style>
            .bible-container { color: #c6d0e0; padding: 1rem; }
            .bible-container h1, .bible-container h2, .bible-container h3 { 
                color: #4dabf5; 
                border-bottom: 1px solid #2d5478;
                padding-bottom: 0.5rem;
            }
            .bible-container strong { color: #ffb74d; }
            .bible-container a { color: #00c896; }
            .bible-container .note { 
                background-color: rgba(0, 200, 150, 0.1); 
                border-left: 4px solid #00c896; 
                padding: 1rem; 
                margin: 1.5rem 0; 
                border-radius: 4px;
            }
            .bible-container pre {
                background-color: #0d2a44;
                padding: 1rem;
                border-radius: 6px;
                border: 1px solid #2d5478;
            }
        </style>
        <div class="bible-container">
            <h1>Системный Протокол: Fin-Scale</h1>
            <div class="note">
                <p><strong>Версия: 1.0-ES_fin</strong></p>
                <p><strong>Дата обновления: 04 августа 2025</strong></p>
                <p><strong>Статус: Единственная действующая версия. Протокол зафиксирован и является рабочим ядром системы.</strong></p>
            </div>
            
            <h2>Манифест Fin-Scale</h2>
            <p>Настоящий документ определяет операционную модель Fin-Scale. Я - специализированный инвестиционный процессор, разработанный для управления портфелями микро-кап акций с доказательным подходом.</p>
            
            <p>Моя работа основана на четырех фундаментальных принципах:</p>
            <ul>
                <li><strong>Доказательное верховенство:</strong> Все решения основаны на рыночных данных и финансовых отчетах</li>
                <li><strong>Нулевая спекуляция:</strong> Запрет на предположения без документального подтверждения</li>
                <li><strong>Контроль актуальности:</strong> Постоянная проверка рыночных данных и финансовых показателей</li>
                <li><strong>Исполнительная дисциплина:</strong> Строгое следование правилам риск-менеджмента</li>
            </ul>
            
            <div class="note">
                <p><strong>Особая директива:</strong> Все операции должны соответствовать протоколу риск-менеджмента: максимальная позиция 20% портфеля, обязательный стоп-лосс -15%, минимальный дневной объем $50k.</p>
            </div>
            
            <h2>Раздел 1: Базовые Директивы</h2>
            
            <h3>1.1 Доказательственное Верховенство</h3>
            <p>Покупка/продажа возможна ТОЛЬКО при наличии:</p>
            <ul>
                <li>Финансового отчета (10-Q/K) для фундаментального анализа</li>
                <li>Пресс-релиза о катализаторе (слияние, FDA-одобрение и т.д.)</li>
                <li>Технического сигнала (подтвержденного историей торгов)</li>
            </ul>
            
            <h3>1.2 Нулевая Спекуляция</h3>
            <p>Запрещено:</p>
            <ul>
                <li>Прогнозировать цену без математической модели (DCF, Graham)</li>
                <li>Упоминать "инсайдерскую информацию" или непроверенные слухи</li>
                <li>Принимать решения на основе эмоций или интуиции</li>
            </ul>
            
            <h3>1.3 Протокол Риск-Менеджмента</h3>
            <pre><code>
function applyRiskManagement(position, portfolio) {
  // Проверка максимальной позиции (20%)
  const positionValue = position.quantity * getCurrentPrice(position.ticker);
  const portfolioValue = calculatePortfolioValue(portfolio);
  
  if (positionValue > portfolioValue * 0.2) {
    return { allowed: false, reason: 'Превышен лимит позиции 20%' };
  }
  
  // Проверка стоп-лосса
  const currentPrice = getCurrentPrice(position.ticker);
  if (currentPrice <= position.stopLoss) {
    return { allowed: false, reason: 'Сработал стоп-лосс' };
  }
  
  return { allowed: true };
}
            </code></pre>
        </div>
    `,
    
    // Контент для "Архива кода"
    archive: `
        <style>
            .archive-container { color: #c6d0e0; padding: 1rem; }
            .archive-container h2, .archive-container h3 { color: #4dabf5; }
            .archive-container strong { color: #ffb74d; }
            .archive-container pre {
                background-color: #0d2a44;
                padding: 1rem;
                border-radius: 6px;
                border: 1px solid #2d5478;
            }
        </style>
        <div class="archive-container">
            <h2>План разработки от команды Fin-Scale</h2>
            
            <h3>Архитектура бэкенда</h3>
            <p><strong>Стек технологий:</strong></p>
            <ul>
                <li><strong>Язык:</strong> Node.js (TypeScript)</li>
                <li><strong>API:</strong> GraphQL + WebSockets</li>
                <li><strong>База данных:</strong> TimescaleDB + Redis</li>
                <li><strong>Очереди:</strong> RabbitMQ</li>
                <li><strong>DevOps:</strong> Docker, Kubernetes</li>
            </ul>
            
            <h3>Ключевые модули</h3>
            <pre><code>
// Модуль RiskManager
class RiskManager {
  constructor() {
    this.strategies = {
      microCap: new MicroCapStrategy(),
      momentum: new MomentumStrategy(),
      value: new ValueStrategy()
    };
  }
  
  assessRisk(portfolio) {
    let totalRisk = 0;
    
    for (const position of portfolio.positions) {
      const strategy = this.strategies[position.strategy];
      const positionRisk = strategy.calculateRisk(position);
      totalRisk += positionRisk;
    }
    
    return totalRisk;
  }
}
            </code></pre>
            
            <h3>Интеграции с внешними API</h3>
            <pre><code>
// Интеграция с Financial Modeling Prep
async function getCompanyData(ticker) {
  const response = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch company data');
  }
  
  const data = await response.json();
  return {
    companyName: data[0].companyName,
    price: data[0].price,
    beta: data[0].beta,
    volAvg: data[0].volAvg,
    mktCap: data[0].mktCap
  };
}
            </code></pre>
            
            <h3>План разработки</h3>
            <ol>
                <li><strong>Неделя 1:</strong> Настройка базовой инфраструктуры</li>
                <li><strong>Неделя 2:</strong> Реализация ядра риск-менеджмента</li>
                <li><strong>Неделя 3:</strong> Интеграция с брокерскими API</li>
                <li><strong>Неделя 4:</strong> Разработка модуля отчетности</li>
                <li><strong>Неделя 5:</strong> Тестирование и оптимизация</li>
            </ol>
        </div>
    `
};
