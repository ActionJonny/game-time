var canvas = document.getElementById('game');
var canvasTwo = document.getElementById('gamepiece');
var context = canvas.getContext('2d');

var Red = require('./red-marker')
var Black = require('./black-marker')

var teamRed = []

teamRed.push(new Red(this.x, this.y, this.width, this.height))

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  teamRed.forEach(function(red) {
    red.draw().move();
  });
  requestAnimationFrame(gameLoop);
});
