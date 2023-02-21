let numbers = [34,7,2,2,5,76,8,4,5,3,2]
numbers = numbers.sort(ascending) //type method here
numbers.forEach(print);
function ascending(x, y) {
  return x - y;   
}
function decending(x, y) {
  return y - x;   
}

function print(element) {
  console.log(element)
}