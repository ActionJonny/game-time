var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


  var col = [col1, col2, col3, col4, col5, col6, col7];
  var col1 = [];
  var col2 = [];
  var col3 = [];
  var col4 = [];
  var col5 = [];
  var col6 = [];
  var col7 = [];


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
  var col = [col1, col2, col3, col4, col5, col6, col7];
  var currentToken = new Token(this.player);
  col.push(currentToken);
  if (this.x == 2 && col1.length === 0) {
    col1.push(currentToken);
    this.y +=513;
  } else if (this.x == 97 && col2.length === 0) {
    col2.push(currentToken);
    this.y +=513;
  } else if (this.x == 192 && col3.length === 0) {
    col3.push(currentToken);
    this.y +=513;
  } else if (this.x == 287 && col4.length === 0) {
    col4.push(currentToken);
    console.log(col4[0]);
    this.y +=513;
  } else if (this.x == 382 && col5.length === 0) {
    col5.push(currentToken);
    this.y +=513;
  } else if (this.x == 477 && col6.length === 0) {
    col6.push(currentToken);
    this.y +=513;
  } else if (this.x == 572 && col7.length === 0) {
    col7.push(currentToken);
    this.y +=513;
  } else if (this.x == 2 && col1.length == 1) {
    col1.push(currentToken);
    this.y +=433;
  } else if (this.x == 97 && col2.length == 1) {
    col2.push(currentToken);
    this.y +=433;
  } else if (this.x == 192 && col3.length == 1) {
    col3.push(currentToken);
    this.y +=433;
  } else if (this.x == 287 && col4.length == 1) {
    col4.push(currentToken);
    console.log(col4[1]);
    this.y +=433;
  } else if (this.x == 382 && col5.length == 1) {
    col5.push(currentToken);
    this.y +=433;
  } else if (this.x == 477 && col6.length == 1) {
    col6.push(currentToken);
    this.y +=433;
  } else if (this.x == 572 && col7.length == 1) {
    col7.push(currentToken);
    this.y +=433;
  } else if (this.x == 2 && col1.length == 2) {
    col1.push(currentToken);
    this.y +=353;
  } else if (this.x == 97 && col2.length == 2) {
    col2.push(currentToken);
    this.y +=353;
  } else if (this.x == 192 && col3.length == 2) {
    col3.push(currentToken);
    this.y +=353;
  } else if (this.x == 287 && col4.length == 2) {
    col4.push(currentToken);
    console.log(col4[2]);
    this.y +=353;
  } else if (this.x == 382 && col5.length == 2) {
    col5.push(currentToken);
    this.y +=353;
  } else if (this.x == 477 && col6.length == 2) {
    col6.push(currentToken);
    this.y +=353;
  } else if (this.x == 572 && col7.length == 2) {
    col7.push(currentToken);
    this.y +=353;
  } else if (this.x == 2 && col1.length == 3) {
    col1.push(currentToken);
    this.y +=273;
  } else if (this.x == 97 && col2.length == 3) {
    col2.push(currentToken);
    this.y +=273;
  } else if (this.x == 192 && col3.length == 3) {
    col3.push(currentToken);
    this.y +=273;
  } else if (this.x == 287 && col4.length == 3) {
    col4.push(currentToken);
    console.log(col4[3]);
    this.y +=273;
  } else if (this.x == 382 && col5.length == 3) {
    col5.push(currentToken);
    this.y +=273;
  } else if (this.x == 477 && col6.length == 3) {
    col6.push(currentToken);
    this.y +=273;
  } else if (this.x == 572 && col7.length == 3) {
    col7.push(currentToken);
    this.y +=273;
  } else if (this.x == 2 && col1.length == 4) {
    col1.push(currentToken);
    this.y +=193;
  } else if (this.x == 97 && col2.length == 4) {
    col2.push(currentToken);
    this.y +=193;
  } else if (this.x == 192 && col3.length == 4) {
    col3.push(currentToken);
    this.y +=193;
  } else if (this.x == 287 && col4.length == 4) {
    col4.push(currentToken);
    console.log(col4[4]);
    this.y +=193;
  } else if (this.x == 382 && col5.length == 4) {
    col5.push(currentToken);
    this.y +=193;
  } else if (this.x == 477 && col6.length == 4) {
    col6.push(currentToken);
    this.y +=193;
  } else if (this.x == 572 && col7.length == 4) {
    col7.push(currentToken);
    this.y +=193;
  } else if (this.x == 2 && col1.length == 5) {
    col1.push(currentToken);
    this.y +=113;
  } else if (this.x == 97 && col2.length == 5) {
    col2.push(currentToken);
    this.y +=113;
  } else if (this.x == 192 && col3.length == 5) {
    col3.push(currentToken);
    this.y +=113;
  } else if (this.x == 287 && col4.length == 5) {
    col4.push(currentToken);
    console.log(col4[5]);
    this.y +=113;
  } else if (this.x == 382 && col5.length == 5) {
    col5.push(currentToken);
    this.y +=113;
  } else if (this.x == 477 && col6.length == 5) {
    col6.push(currentToken);
    this.y +=113;
  } else if (this.x == 572 && col7.length == 5) {
    col7.push(currentToken);
    this.y +=113;
  }
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
