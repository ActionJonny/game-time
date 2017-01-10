var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

// x (2, 97, 192, 287, 382, 477, 572) columns;
// y (513, 433, 353, 273, 193, 113) rows;


var board = [
  [0, 0, 3, 0, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 6, 0, 0, 0, 0],
  [0, 0, 7, 0, 0, 0, 0],
  [0, 0, 9, 0, 0, 0, 0],
];


function Token (player) {
  this.x = this.x || 287;
  this.y = this.y || 0;
  this.width = 75;
  this.height = 75;
  this.player = player;
  this.image = new Image();
}


Token.prototype.draw = function() {
  if (this.player === 'PlayerOne') {
    this.drawBlack();
  } else {
    this.drawRed();
  }
};

Token.prototype.drawRed = function() {
  this.image.src = '../lib/images/red_marker.jpg';
  context.drawImage(this.image,this.x, this.y, this.width, this.height);
  return this;
};

Token.prototype.drawBlack = function() {
  this.image.src = '../lib/images/black_marker.jpg';
  context.drawImage(this.image,this.x, this.y, this.width, this.height);
  return this;
};

Token.prototype.moveDown = function(player) {
  // column 1
  if (this.x == 2 && board[5][0] === 0) {
    board[5].splice(0, 1, this.player);
    this.y +=513;
  } else if (this.x == 2 && board[4][0] === 0) {
    board[4].splice(0, 1, this.player);
    this.y +=433;
  } else if (this.x == 2 && board[3][0] === 0) {
    board[3].splice(0, 1, this.player);
    this.y +=353;
  } else if (this.x == 2 && board[2][0] === 0) {
    board[2].splice(0, 1, this.player);
    this.y +=273;
  } else if (this.x == 2 && board[1][0] === 0) {
    board[1].splice(0, 1, this.player);
    this.y +=193;
  } else if (this.x == 2 && board[0][0] === 0) {
    board[0].splice(0, 1, this.player);
    this.y +=113;

    // column 2
  } else if (this.x == 97 && board[5][1] === 0) {
    board[5].splice(1, 1, this.player);
    this.y +=513;
  } else if (this.x == 97 && board[4][1] === 0) {
    board[4].splice(1, 1, this.player);
    this.y +=433;
  } else if (this.x == 97 && board[3][1] === 0) {
    board[3].splice(1, 1, this.player);
    this.y +=353;
  } else if (this.x == 97 && board[2][1] === 0) {
    board[2].splice(1, 1, this.player);
    this.y +=273;
  } else if (this.x == 97 && board[1][1] === 0) {
    board[1].splice(1, 1, this.player);
    this.y +=193;
  } else if (this.x == 97 && board[0][1] === 0) {
    board[0].splice(1, 1, this.player);
    this.y +=113;

    // column 3
  } else if (this.x == 192 && board[5][2] === 0) {
    board[5].splice(2, 1, this.player);
    this.y +=513;
  } else if (this.x == 192 && board[4][2] === 0) {
    board[4].splice(2, 1, this.player);
    this.y +=433;
  } else if (this.x == 192 && board[3][2] === 0) {
    board[3].splice(2, 1, this.player);
    this.y +=353;
  } else if (this.x == 192 && board[2][2] === 0) {
    board[2].splice(2, 1, this.player);
    this.y +=273;
  } else if (this.x == 192 && board[1][2] === 0) {
    board[1].splice(2, 1, this.player);
    this.y +=193;
  } else if (this.x == 192 && board[0][2] === 0) {
    board[0].splice(2, 1, this.player);
    this.y +=113;

    // column 4
  } else if (this.x == 287 && board[5][3] === 0) {
    board[5].splice(3, 1, this.player);
    this.y +=513;
  } else if (this.x == 287 && board[4][3] === 0) {
    board[4].splice(3, 1, this.player);
    this.y +=433;
  } else if (this.x == 287 && board[3][3] === 0) {
    board[3].splice(3, 1, this.player);
    this.y +=353;
  } else if (this.x == 287 && board[2][3] === 0) {
    board[2].splice(3, 1, this.player);
    this.y +=273;
  } else if (this.x == 287 && board[1][3] === 0) {
    board[1].splice(3, 1, this.player);
    this.y +=193;
  } else if (this.x == 287 && board[0][3] === 0) {
    board[0].splice(3, 1, this.player);
    this.y +=113;

    // column 5
  } else if (this.x == 382 && board[5][4] === 0) {
    board[5].splice(4, 1, this.player);
    this.y +=513;
  } else if (this.x == 382 && board[4][4] === 0) {
    board[4].splice(4, 1, this.player);
    this.y +=433;
  } else if (this.x == 382 && board[3][4] === 0) {
    board[3].splice(4, 1, this.player);
    this.y +=353;
  } else if (this.x == 382 && board[2][4] === 0) {
    board[2].splice(4, 1, this.player);
    this.y +=273;
  } else if (this.x == 382 && board[1][4] === 0) {
    board[1].splice(4, 1, this.player);
    this.y +=193;
  } else if (this.x == 382 && board[0][4] === 0) {
    board[0].splice(4, 1, this.player);
    this.y +=113;

    // column 6
  } else if (this.x == 477 && board[5][5] === 0) {
    board[5].splice(5, 1, this.player);
    this.y +=513;
  } else if (this.x == 477 && board[4][5] === 0) {
    board[4].splice(5, 1, this.player);
    this.y +=433;
  } else if (this.x == 477 && board[3][5] === 0) {
    board[3].splice(5, 1, this.player);
    this.y +=353;
  } else if (this.x == 477 && board[2][5] === 0) {
    board[2].splice(5, 1, this.player);
    this.y +=273;
  } else if (this.x == 477 && board[1][5] === 0) {
    board[1].splice(5, 1, this.player);
    this.y +=193;
  } else if (this.x == 477 && board[0][5] === 0) {
    board[0].splice(5, 1, this.player);
    this.y +=113;

    // column 7
  } else if (this.x == 572 && board[5][6] === 0) {
    board[5].splice(6, 1, this.player);
    this.y +=513;
  } else if (this.x == 572 && board[4][6] === 0) {
    board[4].splice(6, 1, this.player);
    this.y +=433;
  } else if (this.x == 572 && board[3][6] === 0) {
    board[3].splice(6, 1, this.player);
    this.y +=353;
  } else if (this.x == 572 && board[2][6] === 0) {
    board[2].splice(6, 1, this.player);
    this.y +=273;
  } else if (this.x == 572 && board[1][6] === 0) {
    board[1].splice(6, 1, this.player);
    this.y +=193;
  } else if (this.x == 572 && board[0][6] === 0) {
    board[0].splice(6, 1, this.player);
    this.y +=113;
  }
  console.log(board);
};


Token.prototype.moveLeft = function() {
  if(this.col > 1) {
    this.col--;
  }
  if(this.x < 650 && this.x >= 85 && this.y < 85) {
    this.x-=95;
  }
};

Token.prototype.moveRight = function() {
  if(this.col < 7) {
    this.col++;
  }
  if(this.x <= 565 && this.x >= 0 && this.y < 85) {
    this.x+=95;
  }
};




module.exports = Token;
