var canvas = document.getElementById('game');
var canvasTwo = document.getElementById('gamepiece');
var context = canvas.getContext('2d');
var Hole = require('./holes');

// var redToken = require('./red-marker');
// var blackToken = require('./black-marker');

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  holes.forEach(function(hole) {
    hole.draw()
  })

  requestAnimationFrame(gameLoop);
});

var holes = [];
  var firstRow = 50;
  var secondRow = 50;
  var thirdRow = 50;
  var fourthRow = 50;
  var fifthRow = 50;
  var sixthRow = 50;
  for (var i = 0; i < 42; i++) {
    if (i < 7) {
      holes.push(new Hole(sixthRow, 560));
      sixthRow += 95;
    } else if (i < 14) {
      holes.push(new Hole(fifthRow, 480));
      fifthRow += 95;
    } else if (i < 21) {
      holes.push(new Hole(fourthRow, 400));
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


// var newArray = [];
//   newArray.push(holes[0])
//   console.log(holes)


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
