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
  column1.push(holes[0], holes[1], holes[2], holes[3], holes[4], holes[5]);
var column2 = [];
  column2.push(holes[6], holes[7], holes[8], holes[9], holes[10], holes[11]);
var column3 = [];
  column3.push(holes[12], holes[13], holes[14], holes[15], holes[16], holes[17]);
var column4 = [];
  column4.push(holes[18], holes[19], holes[20], holes[21], holes[22], holes[23]);
var column5 = [];
  column5.push(holes[24], holes[25], holes[26], holes[27], holes[28], holes[29]);
var column6 = [];
  column6.push(holes[30], holes[31], holes[32], holes[33], holes[34], holes[35]);
var column7 = [];
  column7.push(holes[36], holes[37], holes[38], holes[39], holes[40], holes[41]);

var tokens = []
  tokens.push(new Token())

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
      tokens.push(new Token())
    });
  }
});
