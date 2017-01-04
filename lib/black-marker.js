var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Black (x, y, width, height) {
  this.x = 187
  this.y = 0
  this.width = 75
  this.height = 75
  this.image = new Image();
}

Black.prototype.draw = function() {
  this.image.src = '../lib/images/black_marker.jpg';
  context.drawImage(this.image,this.x, this.y, this.width, this.height);
  return this
}

Black.prototype.moveDown = function() {
  if(this.y <= 509) {
    this.y+=510
  }
}

Black.prototype.moveLeft = function() {
  if(this.x < 650 && this.x >= 85) {
    this.x-=85
  }
}

Black.prototype.moveRight = function() {
  if(this.x <= 565 && this.x >= 0) {
    this.x+=85
  }
}

module.exports = Black
