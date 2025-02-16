// Функция для отрисовки кругового прогрессбара
function drawPercentageCircle(canvasId, percentage) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2 - 20;

    // Очистка холста
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисование фона круга
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = 10;
    ctx.stroke();

    // Рисование заполненной части круга
    const angle = (percentage / 100) * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + angle, false);
    ctx.strokeStyle = '#A086E9'; // Светло-фиолетовый цвет
    ctx.stroke();

    // Отображение текста с процентом
    const textElement = document.getElementById('percentageText');
    textElement.textContent = `${percentage}%`;
}

// Вызов функции для отрисовки кругового прогрессбара с заданным процентом
drawPercentageCircle('percentageCanvas', 15);