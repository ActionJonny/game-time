var canvas = document.getElementById('game');
var canvasTwo = document.getElementById('gamepiece');
var context = canvas.getContext('2d');

function Red (x, y, width, height) {
  this.x = 285
  this.y = 0
  this.width = 75
  this.height = 75
  this.image = new Image();
}

Red.prototype.draw = function() {
  this.image.src = '../lib/images/red_marker.jpg';
  context.drawImage(this.image,this.x, this.y, this.width, this.height);
  return this
}

Red.prototype.move = function() {
  if(this.y <= 509) {
    this.y+=5
  }
}

module.exports = Red
