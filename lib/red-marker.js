function Red (x, y, width, height) {
  this.x = 275
  this.y = 85
  this.width = 85
  this.height = 85
}

Red.prototype.draw = function() {
  context.fillRect = (this.x, this.y, this.width, this.height)
  context.fillStyle = 'red'
  return this
}

Red.prototype.move = function() {

}

module.exports = Red
