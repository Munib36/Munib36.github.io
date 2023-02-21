const button = document.getElementById("enter");
const label = document.getElementById("label");
let num = 0;

button.onclick = function() {
  num = Math.floor(Math.random() * 400 + 1);
  label.innerHTML = num;
  let answer = Math.sqrt(num);
  console.log(answer.toFixed(2));
};