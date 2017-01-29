'use strict';

window.renderStatistics = function (ctx, names, times) {

// Функция генерирует случайное число. Будем использовать ее для генерации случайного цвета
  function getRandom() {
    return parseInt(((Math.random() * 5) * 50), 10);
  }

// Функция для рисования прямоугольников по заданным параметрам
  function drawRect(x1, y1, widthRect, heightRect, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x1, y1, widthRect, heightRect);
  }

// Функция для рисования текста
  function drawText(message, x1, y1, color) {
    ctx.fillStyle = color || 'black';
    ctx.textBaseline = 'hanging';
    ctx.font = '16px PT Mono';
    ctx.fillText(message, x1, y1);
  }

// Рисуем подложку + тень + текст
  drawRect(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  drawRect(99, 9, 422, 272); // этот прямоугольник для того, чтобы создать границу, используя уже заданную функцию
  drawRect(100, 10, 420, 270, 'white');

  drawText('Ура вы победили!', 120, 30);
  drawText('Список результатов:', 120, 50);

// Ищем максимальное время среди игроков, далее будем использовать его для подсчета макс. высоты гистограммы
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }

// Отрисовываем гистограммы в соот. с временем прохождения игроками игры + выводим эти значения
  for (i = 0; i < names.length; i++) {
    var stepX = 155 + 90 * i;
    var heightHist = (150 / max) * times[i];

    var randomColor = ['rgb(0, ' + getRandom() + ', ' + getRandom() + ')'];
    var color = (names[i] === 'Вы') ? 'red' : randomColor;

    drawRect(stepX, 245 - heightHist, 40, heightHist, color);
    drawText(names[i], stepX, 255);
    drawText(parseInt(times[i], 10), stepX, 225 - heightHist);

  }
};
