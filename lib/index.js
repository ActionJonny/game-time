var canvas = document.getElementById('game');
var canvasTwo = document.getElementById('gamepiece');
var context = canvas.getContext('2d');
var Holes = require('./holes');

// var redToken = require('./red-marker');
// var blackToken = require('./black-marker');

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(gameLoop);
});


var holes = [];
  var firstRow = 20;
  var secondRow = 20;
  var thirdRow = 20;
  var fourthRow = 20;
  var fifthRow = 20;
  var sixthRow = 20;
  for (var i = 0; i < 41; i++) {
    if (i < 7) {
      holes.push(new Holes(sixthRow, 580));
      sixthRow += 85;
    }
    if (i < 14) {
      holes.push(new Holes(fifthRow, 500));
      fifthRow += 85;
    }
    if (i < 21) {
      holes.push(new Holes(fourthRow, 420));
      fourthRow += 85;
    }
    if (i < 28) {
      holes.push(new Holes(thirdRow, 340));
      thirdRow += 85;
    }
    if (i < 35) {
      holes.push(new Holes(secondRow, 260));
      secondRow += 85;
    }
    if (i < 42) {
      holes.push(new Holes(firstRow, 180));
      firstRow += 85;
    }
  }


var newArray = [];
  newArray.push(holes[0])
  console.log(holes)


document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) {
    teamBlack.forEach(function(black) {
      black.moveLeft();
    });
  }
  if(event.keyCode === 39) {
    teamBlack.forEach(function(black) {
      black.moveRight();
    });
  }
  if(event.keyCode === 40) {
    teamBlack.forEach(function(black) {
      black.moveDown();
      teamRed.forEach(function(red) {
        red.draw();
      });
    });
  }
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) {
    teamRed.forEach(function(red) {
      red.moveLeft();
    });
  }
  if(event.keyCode === 39) {
    teamRed.forEach(function(red) {
      red.moveRight();
    });
  }
  if(event.keyCode === 40) {
    teamRed.forEach(function(red) {
      red.moveDown();
    });
  }
});
