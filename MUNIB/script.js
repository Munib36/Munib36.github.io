let numbs = [1,2,3,4,5,6,7,8]
let squares = numbs.map(square);
console.log(squares)
function square (x) {
  return Math.pow(x, 2)
}