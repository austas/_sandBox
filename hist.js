'use strict';

window.renderStatistics = function (ctx, names, times) {

  function getRandom() {
    return parseInt(((Math.random() * 5) * 50), 10);
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }

  for (i = 0; i < names.length; i++) {
    var stepX = 155 + 90 * i;
    var heightHist = (150 / max) * times[i];
    var stepHist = 245 - heightHist;

    var randomColor = ['rgb(' + getRandom() + ', ' + getRandom() + ', ' + getRandom() + ')'];
    var colorHist = (names[i] === 'Вы') ? 'red' : randomColor;

    ctx.fillStyle = colorHist;
    ctx.fillRect(stepX, stepHist, 40, heightHist);

    ctx.fillStyle = 'black';
    ctx.fillText(names[i], stepX, 255);
    ctx.fillText(parseInt(times[i], 10), stepX, 225 - heightHist);
  }
};
