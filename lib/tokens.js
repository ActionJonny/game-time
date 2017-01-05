var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Token (x, y, width, height) {
  this.x = 285;
  this.y = 0;
  this.width = 75;
  this.height = 75;
  this.image = new Image();
}

Token.prototype.draw = function() {
  this.image.src = '../lib/images/red_marker.jpg';
  context.drawImage(this.image,this.x, this.y, this.width, this.height);
  return this;
};






Token.prototype.moveDown = function() {
  if(this.y <= 509) {
    this.y+=510;
    return this
  }
};

Token.prototype.moveLeft = function() {
  if(this.x < 650 && this.x >= 85) {
    this.x-=85;
    return this
  }
};

Token.prototype.moveRight = function() {
  if(this.x <= 565 && this.x >= 0) {
    this.x+=85;
    return this
  }
};

module.exports = Token;
