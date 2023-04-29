const boatdiv = document.getElementById("boat")
const paddlediv = document.getElementById("paddle")

const boat = document.getElementById("boat-img")
const paddle = document.getElementById("paddle-img")

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.style.width = window.innerWidth + "px"
canvas.style.height = window.innerHeight + "px"

let maxx = window.innerWidth;
let maxy = window.innerHeight;

console.log(boat.left)

let running = false;
let x1;
let y1;
var d1;
canvas.addEventListener("mousedown", (event) => {
    running = true;
    if(running){
        const x = event.clientX-(maxx/2)-0.5;
        const y = -(event.clientY-(maxy/2));
        let angle = Math.atan(y/x) * (180 / Math.PI)

        x1 = x
        y1 = y
        d1 = angle
        if(x >= 0 && y >= 0){
            angle = angle + 0;
        }else if(x <= 0 && y >= 0){
            angle = angle + 180;
        }else if(x <= 0 && y <= 0){
            angle = angle + 180;
        }else if(x >= 0 && y <= 0){
            angle = angle + 360;
        }

        angle = Math.round(angle)
        console.log(`${x}, ${y}, ${angle} once`)

        paddle.style.transform = `rotate(${-angle + 90}deg)` + "";
        paddle.src = "./paddlewater.png"
    }

})

canvas.addEventListener("mousemove", (event) => {
    if(running){
        const x = event.clientX-(maxx/2)-0.5;
        const y = -(event.clientY-(maxy/2));
        let angle = Math.atan(y/x) * (180 / Math.PI)
        if(x >= 0 && y >= 0){
            angle = angle + 0;
        }else if(x <= 0 && y >= 0){
            angle = angle + 180;
        }else if(x <= 0 && y <= 0){
            angle = angle + 180;
        }else if(x >= 0 && y <= 0){
            angle = angle + 360;
        }

        angle = Math.round(angle)
        console.log(`${x}, ${y}, ${angle}`)

        paddle.style.transform = `rotate(${-angle + 90}deg)`;

        var x2 = event.clientX-(maxx/2)-0.5;
        var y2 = -(event.clientY-(maxy/2));
        var d2 = angle
        let differenceX = delta(x2, x1)
        let differenceY = delta(y2, y1)
        let differenceD = delta(d2, d1)






    }else{
        const x = event.clientX-(maxx/2)-0.5;
        const y = -(event.clientY-(maxy/2));
        let angle = Math.atan(y/x) * (180 / Math.PI)
        if(x >= 0 && y >= 0){
            angle = angle + 0;
        }else if(x <= 0 && y >= 0){
            angle = angle + 180;
        }else if(x <= 0 && y <= 0){
            angle = angle + 180;
        }else if(x >= 0 && y <= 0){
            angle = angle + 360;
        }

        angle = Math.round(angle)

        paddle.style.transform = `rotate(${-angle + 90}deg)` + "";
    }
    
})
canvas.addEventListener("mouseup", () => {
    running = false;
    document.getElementById("paddle-img").src = "./paddle.png"
})


function delta(x2, x1){
    return x2-x1;
}