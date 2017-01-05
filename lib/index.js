var canvas = document.getElementById('game');
var canvasTwo = document.getElementById('gamepiece');
var context = canvas.getContext('2d');
var Hole = require('./holes');
var Token = require('./tokens');

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  holes.forEach(function(hole) {
    hole.draw();
  });

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

var column1 = [];
  column1.push(hole[0], hole[1], hole[2], hole[3], hole[4], hole[5]);
var column2 = [];
  column2.push(hole[6], hole[7], hole[8], hole[9], hole[10], hole[11]);
var column3 = [];
  column3.push(hole[12], hole[13], hole[14], hole[15], hole[16], hole[17]);
var column4 = [];
  column4.push(hole[18], hole[19], hole[20], hole[21], hole[22], hole[23]);
var column5 = [];
  column5.push(hole[24], hole[25], hole[26], hole[27], hole[28], hole[29]);
var column6 = [];
  column6.push(hole[30], hole[31], hole[32], hole[33], hole[34], hole[35]);
var column7 = [];
  column7.push(hole[36], hole[37], hole[38], hole[39], hole[40], hole[41]);

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
