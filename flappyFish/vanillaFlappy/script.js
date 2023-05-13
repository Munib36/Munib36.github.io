const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


ctx.beginPath();

let x = 30;
let y;
let sp = 100;
const g = 1.2;
function clearCanvas(){
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = "lime";
    ctx.fillRect(0, canvas.height-5, canvas.width, 5);

    ctx.strokestyle = "lightgray";
    ctx.strokeRect(0, canvas.height-5, canvas.width, 10);
}
function gravity(){
    sp += g;
}
function drawBird(){
    y = sp;
    ctx.fillStyle = "steelblue";
    ctx.fillRect(x, y, 20, 20);

    ctx.strokestyle = "black";
    ctx.strokeRect(x, y, 20, 20);
}
let running = false;
let count = 0;
window.addEventListener("keydown", (event) => {
    click();
})
document.body.addEventListener("click", click)

function click(){
    sp -= 40;
    if (count == 0){
        running = true;
        main();
        count++;
    }
}

//pillars
let pillars = []
let xp1 = 600;
let xp2 = 840;
let xp3 = 1080;
let ran = 50;
let ran1 = Math.round(Math.random() * 100) + 50;
let ran2 = Math.round(Math.random() * 100) + 50;
let ran3 = Math.round(Math.random() * 100) + 50;
let gap = 100;
function drawPillar1(){
    //top pillar
    ctx.fillStyle = "lime";
    ctx.fillRect(xp1, 0, 60, ran1);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp1, 0, 60, ran1);

    //bottom pillar
    ctx.fillStyle = "lime";
    ctx.fillRect(xp1, ran1+gap, 60, canvas.width);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp1, ran1+gap, 60, canvas.width);
}
function drawPillar2(){
    ctx.fillStyle = "green";
    ctx.fillRect(xp2, 0, 60, ran2);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp2, 0, 60, ran2);

    //bottom pillar
    ctx.fillStyle = "green";
    ctx.fillRect(xp2, ran2+gap, 60, canvas.width);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp2, ran2+gap, 60, canvas.width);
}
function drawPillar3(){
    ctx.fillStyle = "blue";
    ctx.fillRect(xp3, 0, 60, ran3);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp3, 0, 60, ran3);

    //bottom pillar
    ctx.fillStyle = "blue";
    ctx.fillRect(xp3, ran3+gap, 60, canvas.width);
    //outline
    ctx.strokestyle = "black";
    ctx.strokeRect(xp3, ran3+gap, 60, canvas.width);
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
function isCollision(){
    // 1st pillar
        // cornor #1
        const para11 = x >= xp1 && x <= xp1 + 60;
        if (para11){
            let para1 = y >= 0 && y <= ran1;
            let para2 = y >= ran1 + gap && y <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }

        // cornor #2
        const para21 = x+20 >= xp1 && x+20 <= xp1 + 60;
        if (para21){
            let para1 = y >= 0 && y <= ran1;
            let para2 = y >= ran1 + gap && y <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }

        // cornor #3
        const para31 = x+20 >= xp1 && x+20 <= xp1 + 60;
        if (para31){
            let para1 = y+20 >= 0 && y+20 <= ran1;
            let para2 = y+20 >= ran1 + gap && y+20 <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }

        // cornor #4
        const para41 = x >= xp1 && x <= xp1 + 60;
        if (para41){
            let para1 = y+20 >= 0 && y+20 <= ran1;
            let para2 = y+20 >= ran1 + gap && y+20 <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }

    // 2nd pillar
        // cornor #1
        const para12 = x >= xp2 && x <= xp2 + 60;
        if (para12){
            let para1 = y >= 0 && y <= ran2;
            let para2 = y >= ran2 + gap && y <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }
    
        // cornor #2
        const para22 = x+20 >= xp2 && x+20 <= xp2 + 60;
        if (para22){
            let para1 = y >= 0 && y <= ran2;
            let para2 = y >= ran2 + gap && y <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }
    
        // cornor #3
        const para32 = x+20 >= xp2 && x+20 <= xp2 + 60;
        if (para32){
            let para1 = y+20 >= 0 && y+20 <= ran2;
            let para2 = y+20 >= ran2 + gap && y+20 <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }
    
        // cornor #4
        const para42 = x >= xp2 && x <= xp2 + 60;
        if (para42){
            let para1 = y+20 >= 0 && y+20 <= ran2;
            let para2 = y+20 >= ran2 + gap && y+20 <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }
    
    // 3rd pillar
        // cornor #1
        const para13 = x >= xp3 && x <= xp3 + 60;
        if (para13){
            let para1 = y >= 0 && y <= ran3;
            let para2 = y >= ran3 + gap && y <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }
    
        // cornor #2
        const para23 = x+20 >= xp3 && x+20 <= xp3 + 60;
        if (para23){
            let para1 = y >= 0 && y <= ran3;
            let para2 = y >= ran3 + gap && y <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }
    
        // cornor #3
        const para33 = x+20 >= xp3 && x+20 <= xp3 + 60;
        if (para33){
            let para1 = y+20 >= 0 && y+20 <= ran3;
            let para2 = y+20 >= ran3 + gap && y+20 <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }
    
        // cornor #4
        const para43 = x >= xp3 && x <= xp3 + 60;
        if (para43){
            let para1 = y+20 >= 0 && y+20 <= ran3;
            let para2 = y+20 >= ran3 + gap && y+20 <= canvas.height;
            if (para1 == true || para2 == true){
                running = false;
            }
        }

    // floor
    if(y < 0 || y+20 > canvas.height){
        running = false;
        console.log('penis')
    }
}
function main(){
    if(running){
        setTimeout(function onTick10() {
            clearCanvas();
            gravity();
            drawBird();
            drawPillar1();
            drawPillar2();
            drawPillar3();
            movePillar();
    
            isCollision();
    
    
            main();
        }, 10)
    }
}