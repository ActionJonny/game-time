var canvas = document.getElementById('game');
var canvasTwo = document.getElementById('gamepiece');
var context = canvas.getContext('2d');

var Red = require('./red-marker')
var Black = require('./black-marker')

var teamRed = []
var teamBlack = []

teamRed.push(new Red(this.x, this.y, this.width, this.height))
teamBlack.push(new Black(this.x, this.y, this.width, this.height))


requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  teamRed.forEach(function(red) {
    red.draw()
  });
  teamBlack.forEach(function(black) {
    black.draw()
  });
  requestAnimationFrame(gameLoop)
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) {
    teamBlack.forEach(function(black) {
      black.moveLeft()
    });
  }
  if(event.keyCode === 39) {
    teamBlack.forEach(function(black) {
      black.moveRight()
    });
  }
  if(event.keyCode === 40) {
    teamBlack.forEach(function(black) {
      black.moveDown()
    });
  }
})

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) {
    teamRed.forEach(function(red) {
      red.moveLeft()
    });
  }
  if(event.keyCode === 39) {
    teamRed.forEach(function(red) {
      red.moveRight()
    });
  }
  if(event.keyCode === 40) {
    teamRed.forEach(function(red) {
      red.moveDown()
    });
  }
})
