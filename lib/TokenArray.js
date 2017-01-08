// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');
// var Token = require('./tokens');
//
// var token = new Token()
//
// function TokenArray (array) {
//   this.array = [token]
//   this.image = new Image()
// }
//
// TokenArray.prototype.drawRed = function() {
//   this.image.src = '../lib/images/red_marker.jpg';
//   context.drawImage(this.image,this.x, this.y, this.width, this.height);
//   return this;
// }
//
// Token.prototype.drawBlack = function() {
//   this.image.src = '../lib/images/black_marker.jpg';
//   context.drawImage(this.image,this.x, this.y, this.width, this.height);
//   return this;
// };
//
// TokenArray.prototype.draw = function() {
//   array = this.array
//
//   for (var i = 0; i <= 10; i+=2) {
//     array.push(new Token(this.drawRed()))
//   } else {
//     array.push(new Token(this.drawBlack()))
//   }
// }
//
//
// module.exports = TokenArray;
