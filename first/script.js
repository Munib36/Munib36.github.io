const INPUT1 = document.getElementById("input1")
const DOM = document.getElementById("DOM");
const SUBMIT = document.getElementById("submit");

SUBMIT.onclick = function() {
    for(let i = 0; i <= INPUT1.value; i++) {
        for(let j = 0; j <= i; j++){
            console.log("*")
        }
    }
}