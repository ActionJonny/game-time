function Black (x, y, width, height) {
  this.x = 275
  this.y = 85
  this.width = 85
  this.height = 85
}

Black.prototype.draw = function(context) {
  context.fillRect = (this.x, this.y, this.width, this.height)
  context.fillStyle = 'black'
  return this
}

Black.prototype.move = function() {

}

module.exports = Black
