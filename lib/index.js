var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Slot = require('./slots');
var Token = require('./tokens');
var homeScreen = document.querySelector('.home-screen');
var restart = document.querySelector('.restart');

homeScreen.addEventListener('click', function() {
  homeScreen.style.display = 'none';
});

restart.addEventListener('click', function() {
  document.location.reload();
})


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
      // slots.push(new Slot(sixthRow, 550, context));
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



var newArray = [];
var playerOne = [];
var playerTwo = [];
var winner = "";
var currentToken = new Token("PlayerOne");

// playerOne.forEach(function() {
//     console.log(Object.keys(playerOne));
// })

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) {
      currentToken.moveLeft();
  }
  if(event.keyCode === 39) {
      currentToken.moveRight();
    }
  if(event.keyCode === 13) {
    currentToken = togglePlayer(currentToken);
    checkWinner(newArray);
  }
});


function togglePlayer(currentToken){
  if(currentToken.player === "PlayerOne"){
    var placedToken = currentToken.moveDown(currentToken, newArray)

    //refactor below
    if(placedToken) {
      newArray.push(placedToken);
      return new Token("PlayerTwo");
    } else {
      return new Token("PlayerOne");
    }
  } else {
    var placedToken = currentToken.moveDown(currentToken, newArray)
    if(placedToken) {
      newArray.push(placedToken);
      return new Token("PlayerOne");
    } else {
      return new Token("PlayerTwo");
    }
  }
}

function filter(arr, str) {
  return arr.filter(function(e){
    if(e.player === str){
      return e;
    }
  })
}

function checkWinner(newArray) {
  var p1Array = filter(newArray, "PlayerOne");
  var p2Array = filter(newArray, "PlayerTwo");
  checkDiagonal(newArray, p1Array, p2Array);
}

function checkDiagonal(newArray, p1Array, p2Array) {
  newArray.forEach(function(e){
    var arr = e.player === "PlayerOne" ? p1Array : p2Array;

    if(e.row < 4){
      var count = 0;
      checkLeft(arr, e, count);
      checkRight(arr, e, count);
    }
  })
}

function checkLeft(playerArr, playerObj, count) {
  playerArr.forEach(function(e, i){
    if(playerObj.row+1 === e.row
      && playerObj.col-1 === e.col){
        count++;
        checkLeft(playerArr, e, count);
      if(count === 3 ){
        winner = e.player;
      }
    }
  })
}

function checkRight(playerArr, playerObj, count) {
  playerArr.forEach(function(e, i){
    if(playerObj.row+1 === e.row
      && playerObj.col+1 === e.col){
        count++;
        checkRight(playerArr, e, count);
      if(count === 3 ){
        winner = e.player;
      }
    }
})
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  slots.forEach(function(slot) {
    slot.draw();
  });
  currentToken.draw();
  newArray.forEach(function(e) {
    e.draw();
  });
  if(winner)
    document.getElementById("winner").innerHTML = winner + " Wins!";
  requestAnimationFrame(gameLoop);
});
