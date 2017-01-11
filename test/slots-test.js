var chai = require('chai')
var assert = chai.assert;

var Slot = require('../lib/slots');
var Token = require('../lib/tokens')


describe('Slot', function() {

  it('should be a object', function() {
    var slot = new Slot()
    assert.isObject(slot)
  })

  it('the first argument should be the "x" value', function() {
    var slot = new Slot(15)
    assert.equal(slot.x, 15)
  })

  it('the second argument should be the "y" value', function() {
    var slot = new Slot(15, 30)
    assert.equal(slot.y, 30)
  })

  it('the third argument should be the "r" value', function() {
    var slot = new Slot(15, 30, 15)
    assert.equal(slot.r, 15)
  })

  it('the fourth argument should be the "sAngle" value', function() {
    var slot = new Slot(15, 30, 15, 30)
    assert.equal(slot.sAngle, 30)
  })

  it('the fifth argument should be the "eAngle" value', function() {
    var slot = new Slot(15, 30, 15, 30, 12)
    assert.equal(slot.eAngle, 12)
  })

  it('should have a "draw()"', function() {
    var slot = new Slot()
    assert.isFunction(slot.draw)
  })
})

describe('Token', function() {
  it('should be a object', function() {
    var token = new Token()
    assert.isObject(token)
  })

  it('the first argument should be the "width" value', function() {
    var token = new Token(75)
    assert.equal(token.width, 75)
  })

  it('the second argument should be the "height" value', function() {
    var token = new Token(75, 75)
    assert.equal(token.height, 75)
  })

  it('the default column should be four', function() {
    var token = new Token(75, 75, 4)
    assert.equal(token.col, 4)
  })

  it('the default row value should be 7.4125', function() {
    var token = new Token(75, 75, 4, 7.4125)
    assert.equal(token.row, 7.4125)
  })

  it('should have a default "x" value of 287', function() {
    var token = new Token(75, 75, 4, 7.4125, 287)
    assert.equal(token.x, 287)
  })

  it('should have a default "y" value of zero', function() {
    var token = new Token(75, 75, 4, 7.4125, 15, 0)
    assert.equal(token.y, 0)
  })

  it('should have a "draw()"', function() {
    var token = new Token()
    assert.isFunction(token.draw)
  })

  it('should have a "drawRed" token function', function() {
    var token = new Token()
    assert.isFunction(token.drawRed)
  })

  it('should have a "drawBlack" token function', function() {
    var token = new Token()
    assert.isFunction(token.drawBlack)
  })

  it('when current player is "playerOne" the "draw()" should return a black token', function() {
    var token = new Token('playerOne')

    token.draw()
    assert.equal(token.player, "playerOne")
    token.drawBlack()
  })

  it('when current player is "playerOne" the "draw()" should return a black token', function() {
    var token = new Token('playerTwo')

    token.draw()
    assert.equal(token.player, "playerTwo")
    token.drawRed()
  })

  it('should have a "moveDown()"', function() {
    var token = new Token()
    assert.isFunction(token.moveDown)
  })

  it('should have a "moveLeft()"', function() {
    var token = new Token()
    assert.isFunction(token.moveLeft)
  })

  it('when you move left the column counter should decrease', function() {
    var token = new Token(4)

    token.moveLeft()
    assert.equal(token.col, 3)
  })

  it('should have a "moveRight()"', function() {
    var token = new Token()
    assert.isFunction(token.moveRight)
  })

  it('when you move left the column counter should increase', function() {
    var token = new Token(4)

    token.moveRight()
    assert.equal(token.col, 5)
  })
})
