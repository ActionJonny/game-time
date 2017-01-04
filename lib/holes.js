function Holes(x, y, r, sAngle, eAngle) {
  this.x = x || 35;
  this.y = y || 35;
  this.r = r || 42.5;
  this.sAngle = sAngle || 0;
  this.eAngle = eAngle || 1.5 * Math.PI;
}

Holes.prototype.draw = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
  context.fillStyle = 'black';
  context.fill();
  return this;
};

module.exports = Holes;
