var canvas = document.getElementById('game');
var canvasTwo = document.getElementById('gamepiece');
var context = canvas.getContext('2d');
var Hole = require('./holes');
var Token = require('./tokens');

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  holes.forEach(function(hole) {
    hole.draw()
  })

  tokens.forEach(function(token) {
    token.draw()
  })

  requestAnimationFrame(gameLoop);
});

var holes = [];
  var firstRow = 40;
  var secondRow = 40;
  var thirdRow = 40;
  var fourthRow = 40;
  var fifthRow = 40;
  var sixthRow = 40;
  for (var i = 0; i < 42; i++) {
    if (i < 7) {
      holes.push(new Hole(sixthRow, 550));
      sixthRow += 95;
    } else if (i < 14) {
      holes.push(new Hole(fifthRow, 470));
      fifthRow += 95;
    } else if (i < 21) {
      holes.push(new Hole(fourthRow, 390));
      fourthRow += 95;
    } else if (i < 28) {
      holes.push(new Hole(thirdRow, 310));
      thirdRow += 95;
    } else if (i < 35) {
      holes.push(new Hole(secondRow, 230));
      secondRow += 95;
    } else if (i < 42) {
      holes.push(new Hole(firstRow, 150));
      firstRow += 95;
    }
  }


var tokens = []

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) {
    tokens.forEach(function(token) {
      token.moveLeft();
    });
  }
  if(event.keyCode === 39) {
    tokens.forEach(function(token) {
      token.moveRight();
    });
  }
  if(event.keyCode === 13) {
    tokens.forEach(function(token) {
      token.moveDown();
    });
  }
});
