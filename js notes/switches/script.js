let count = 0;
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
function yourFunction(){
    if(one.checked && two.checked && three.checked){
        let random = Math.floor(Math.random()*3+1);
        if (random == 1){
            document.getElementById("one").checked = false;
        }
        else if (random == 2){
            document.getElementById("two").checked = false;
        }
        else if (random == 3){
            document.getElementById("three").checked = false;
        }
        else{
            console.log("error");
        }
    }
    setTimeout(yourFunction, 100);
}
yourFunction();