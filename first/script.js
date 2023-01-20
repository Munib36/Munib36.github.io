const input = document.getElementById("input")
const DOM = document.getElementById("DOM");
const SUBMIT = document.getElementById("submit");
const total = document.getElementById("total");
let a = 0;

SUBMIT.onclick = function() {
    a = Number(a + Number(input.value)) ;
    DOM.innerText = a;
}