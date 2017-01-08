var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Slot(x, y, r, sAngle, eAngle) {
  this.x = x || 20;
  this.y = y || 20;
  this.r = r || 37.5;
  this.sAngle = sAngle || 0;
  this.eAngle = eAngle || 2 * Math.PI;
}

Slot.prototype.draw = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
  context.fillStyle = 'black';
  context.fill();
  return this;
};

module.exports = Slot;
