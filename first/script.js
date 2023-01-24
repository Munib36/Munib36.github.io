const INPUT1 = document.getElementById("input1")
const INPUT2 = document.getElementById("input2")
const INPUT3 = document.getElementById("input3")
const INPUT4 = document.getElementById("input4")
const DOM = document.getElementById("DOM");
const SUBMIT = document.getElementById("submit");
SUBMIT.onclick = function() {
    let x1 = INPUT1.value;
    let x2 = INPUT2.value;
    let y1 = INPUT3.value;
    let y2 = INPUT4.value;
    DOM.innerHTML = ((y2-y1)/(x2-x1));
}
