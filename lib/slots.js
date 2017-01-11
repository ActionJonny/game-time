var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Slot(x, y, r, sAngle, eAngle) {
// , context) {
  this.x = x || 20;
  this.y = y || 20;
  this.r = r || 37.5;
  this.sAngle = sAngle || 0;
  this.eAngle = eAngle || 2 * Math.PI;
  // this.context = context
}

// Slot.prototype.draw = function() {
//   this.context.beginPath();
//   this.context.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
//   this.context.fillStyle = '#d3d3d3';
//   this.context.fill();
//   return this;
// };

Slot.prototype.draw = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
  context.fillStyle = '#d3d3d3';
  context.fill();
  return this;
};
module.exports = Slot;
