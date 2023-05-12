const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


ctx.beginPath();

let x = 30;
let y;
let sp = 100;
const g = 1.6;
function clearCanvas(){
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function gravity(){
    sp += g;
}
function drawBird(){
    y = sp;
    ctx.fillStyle = "yellow";
    ctx.fillRect(x, y, 20, 20);

    ctx.strokestyle = "black";
    ctx.strokeRect(x, y, 20, 20);
}
let running = false;
let count = 0;
window.addEventListener("keydown", (event) => {
    sp -= 40;
    running = true;
    if (count == 0){
        main();
        count++;
    }
})


//pillars
let pillars = []
let xp1 = 600;
let xp2 = 840;
let xp3 = 1080;
let ran = 50;
let ran1 = Math.round(Math.random() * 100) + 50;
let ran2 = Math.round(Math.random() * 100) + 50;
let ran3 = Math.round(Math.random() * 100) + 50;
function drawPillar1(){
    //top pillar
    ctx.fillStyle = "lime";
    ctx.fillRect(xp1, 0, 60, ran1);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp1, 0, 60, ran1);

    //bottom pillar
    ctx.fillStyle = "lime";
    ctx.fillRect(xp1, ran1+100, 60, canvas.width);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp1, ran1+100, 60, canvas.width);
}
function drawPillar2(){
    ctx.fillStyle = "green";
    ctx.fillRect(xp2, 0, 60, ran2);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp2, 0, 60, ran2);

    //bottom pillar
    ctx.fillStyle = "green";
    ctx.fillRect(xp2, ran2+100, 60, canvas.width);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp2, ran2+100, 60, canvas.width);
}
function drawPillar3(){
    ctx.fillStyle = "blue";
    ctx.fillRect(xp3, 0, 60, ran3);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp3, 0, 60, ran3);

    //bottom pillar
    ctx.fillStyle = "blue";
    ctx.fillRect(xp3, ran3+100, 60, canvas.width);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp3, ran3+100, 60, canvas.width);
}
function movePillar(){
    let spp = 2;
    xp1-=spp;
    xp2-=spp;
    xp3-=spp;
    if(xp1 <= -60){
        xp1 = 600;
        ran1 = Math.round(Math.random() * 100) + 50
    }
    if(xp2 <= -60){
        xp2 = 600;
        ran2 = Math.round(Math.random() * 100) + 50
    }
    if(xp3 <= -60){
        xp3 = 600;
        ran3 = Math.round(Math.random() * 100) + 50
    }
}
let score = 0;
function addScore(){
    score++;
    document.getElementById("scoreEl").innerText = score
}
setInterval(() => {
    if(running == true){
        addScore();
    }
}, 100);

function main(){
    setTimeout(function onTick10() {
        clearCanvas();
        gravity();
        drawBird();
        drawPillar1();
        drawPillar2();
        drawPillar3();
        movePillar();


        main();
    }, 10)
}


