function Winner() {}

function checkVerticle(newArray, p1Array, p2Array) {

  p1Array.forEach(function(e) {
    var count = 0
    compare(p1Array, e, count)
  })

  p2Array.forEach(function(e) {
    var count = 0
    compare(p2Array, e, count)
  })
}

module.exports = Winner
