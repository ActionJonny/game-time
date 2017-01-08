var canvas = document.getElementById('game');
var canvasTwo = document.getElementById('gamepiece');
var context = canvas.getContext('2d');
var Slot = require('./slots');
var Token = require('./tokens');

var slots = [];
  var firstRow = 40;
  var secondRow = 40;
  var thirdRow = 40;
  var fourthRow = 40;
  var fifthRow = 40;
  var sixthRow = 40;
  for (var i = 0; i < 42; i++) {
    if (i < 7) {
      slots.push(new Slot(sixthRow, 550));
      sixthRow += 95;
    } else if (i < 14) {
      slots.push(new Slot(fifthRow, 470));
      fifthRow += 95;
    } else if (i < 21) {
      slots.push(new Slot(fourthRow, 390));
      fourthRow += 95;
    } else if (i < 28) {
      slots.push(new Slot(thirdRow, 310));
      thirdRow += 95;
    } else if (i < 35) {
      slots.push(new Slot(secondRow, 230));
      secondRow += 95;
    } else if (i < 42) {
      slots.push(new Slot(firstRow, 150));
      firstRow += 95;
    }
  }

// var col1, col2, col3, col4, col5, col6, col7  = 0;



var newArray = []
var currentToken = new Token("PlayerOne");

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) {
      currentToken.moveLeft();
  }
  if(event.keyCode === 39) {
      currentToken.moveRight();

  }
  if(event.keyCode === 13) {

    currentToken.moveDown();
    newArray.push(currentToken)
    if(currentToken.player === "PlayerOne"){
      currentToken = new Token("PlayerTwo")
      // console.log(currentToken);
      // console.log(newArray);
    } else {
      currentToken = new Token("PlayerOne")
      // console.log(currentToken);
      // console.log(newArray);
    }
  }
});



requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  slots.forEach(function(slot) {
    slot.draw();
  });
  currentToken.draw();
  newArray.forEach(function(e) {
    e.draw();
  })
  requestAnimationFrame(gameLoop);
});
