var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Red (x, y, width, height) {
  this.x = 282.5
  this.y = 0
  this.width = 85
  this.height = 85

}

Red.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height)
  context.fillStyle = 'red'
  return this
}

Red.prototype.move = function() {
  if(this.y <= 509) {
    this.y++
  }
}

module.exports = Red
