const input = document.getElementById("input")
const DOM = document.getElementById("DOM");
const DOM2 = document.getElementById("DOM2");
const SUBMIT = document.getElementById("submit");
let i = 0;
let array = [];
let a = 0;


    SUBMIT.onclick = function() {
        array[i] = Number(input.value);
        i++;

        for (let j = 0; j < array.length; j++) {
             a += array[j]
             console.log("ahmad")
        }
        DOM.innerHTML = a;
        a = 0;
        DOM2.innerHTML = array;
    }


/*
SUBMIT.onclick = function() {
    a = Number(a + Number(input.value)) ;
    DOM.innerText = a;
}
*/