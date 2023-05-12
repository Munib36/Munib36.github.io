const body = document.querySelector("body")
const canvas = document.querySelector("canvas");
canvas.style.width = window.innerWidth + "px"
canvas.style.height = window.innerHeight + "px"
const ctx = canvas.getContext("2d");
let unit = 25;
let one = 1 * unit;
ctx.beginPath();
ctx.moveTo(0*unit, 0*unit);
ctx.lineTo(one, one)


ctx.stroke();



//button to show covers or not
const button = document.getElementById("btn")
const covers = document.getElementsByClassName("cover")
button.innerText = "hide";
let i = 1;
button.addEventListener("click", () => {
    if(i % 2){
        button.innerText = "show";
        i++;
        [...covers].forEach((cover) => {
            cover.style.display = "none"
        })
    }else{
        button.innerText = "hide";
        i++;
        [...covers].forEach((cover) => {
            cover.style.display = "block"
        })
    }
})





// moving
let x1;
let x2;
let y1;
let y2;
let running = false;
let currentX = 0;
let currentY = 0;
window.addEventListener("keydown", (key) => {
    
    console.log(key.key)
    if(key.key == "w"){
        currentY -= 1;
        canvas.style.top = currentY*unit + "px"
        console.log(key)
    }else if(key.key == "a"){
        currentX -= 1;
        canvas.style.left = currentX*unit + "px"
        console.log(key)
    }else if(key.key == "s"){
        currentY += 1;
        canvas.style.top = currentY*unit + "px"
        console.log(key)
    }else if(key.key == "d"){
        currentX += 1;
        canvas.style.left = currentX*unit + "px"
        console.log(key)
    }
})
body.addEventListener("mousedown", (event) => {
    running = true;
    if(running){
        const x = event.clientX;
        const y = event.clientY;
        canvas.style.cursor = "grab"

        x1 = x;
        y1 = y;
    }

})

body.addEventListener("mousemove", (event) => {
    if(running){
        const x = event.clientX;
        const y = event.clientY;

        //calculate differences for X
        x2 = x;
        let differenceX = x2 - x1;
        currentX += differenceX;
        canvas.style.left = currentX/unit + "px"

        //calculate differences for Y
        y2 = y;
        let differenceY = y2 - y1;
        currentY += differenceY;
        canvas.style.top = currentY/unit + "px"

    }else{
        const x = event.clientX;
        const y = event.clientY;
    }
    
})
body.addEventListener("mouseup", () => {
    running = false;
    canvas.style.cursor = "default"
})