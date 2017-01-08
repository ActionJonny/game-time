var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Token (player) {
  this.x = this.x || 287;
  this.y = this.y || 0;
  this.width = 75;
  this.height = 75;
  this.player = player
  this.image = new Image();
  this.col = 4;
  this.row = 0
}


Token.prototype.draw = function() {
  if (this.player === 'PlayerOne') {
    this.drawBlack()
  } else {
    this.drawRed()
  }
}

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

Token.prototype.moveDown = function() {
  // var col1, col2, col3, col4, col5, col6, col7  = 0;

  this.y += 513;
  var yPos = this.row

  // col4++;

  // var yPos = col4.length / 513;

  // this.y += 513 - (yPos);

  // if(this.y <= 509 && this.y < 85) {
  //   this.y+=513;
  // } else {
  //   new Token(this.x = 287, this.y = 0)
  // }
};

Token.prototype.moveLeft = function() {
  if(this.col > 1) {
    this.col--
  }
  if(this.x < 650 && this.x >= 85 && this.y < 85) {
    this.x-=95;
    console.log(this.col);
  }
};

Token.prototype.moveRight = function() {
  if(this.col < 7) {
    this.col++
  }
  if(this.x <= 565 && this.x >= 0 && this.y < 85) {
    this.x+=95;
    console.log(this.col);

  }
};

module.exports = Token;
