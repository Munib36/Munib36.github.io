const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d");

let snake = [
    {x: 150, y: 150}, 
    {x: 140, y: 150}, 
    {x: 130, y: 150}, 
    {x: 120, y: 150},
]
let dx = 0;
let dy = 0;

ctx.beginPath();

function log(x){
    console.log(x)
}
function drawSnakePart(snakePart){
    ctx.fillStyle = "lightgreen";
    ctx.strokestyle = "darkgreen";

    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10)

}
function drawSnake() {
    
    snake.forEach(drawSnakePart);

}
function advanceSnake(){
    const head = {x: snake[0].x + dx, y: snake[0].y + dy}
    snake.unshift(head)
    snake.pop();
    clearCanvas()
    drawSnake();

}
function clearCanvas() {
    ctx.fillStyle = "lightgray";
    ctx.strokeStyle = "black";

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}
function randomTen(min, max){
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}
let foodx;
let foody;
function createFood(){
    foodx = randomTen(0, canvas.width - 10);
    foody = randomTen(0, canvas.height - 10);


}
function isAte(){
    snake.forEach(function isFoodOnSnake(part) {
        const foodIsOnSnake = part.x == foodx && part.y == foody
        if (foodIsOnSnake){
            log("new")
            createFood();
        }
    })
}
function drawFood(){
    //the filled in part
    ctx.fillStyle = "red";
    ctx.fillRect(foodx, foody, 10, 10);
    log(foodx + " x")
    //outline
    ctx.strokeStyle = "blue";
    ctx.strokeRect(foodx, foody, 10, 10);
    log(foody + " y")
}
let goingup;
let goingleft;
let goingdown;
let goingright;
window.addEventListener("keydown", (event) => {

    switch (event.key.toLowerCase()){
        case "w":
            if(!goingdown){
                dx = 0;
                dy = -10;
    
                goingup = true;
                goingleft = false;
                goingdown = false;
                goingright = false;
            }else{
                log("err")
            }
            break;
        case "a":
            if(!goingright){
                dx = -10;
                dy = 0;
    
                goingup = false;
                goingleft = true;
                goingdown = false;
                goingright = false;
            }else{
                log("err")
            }
            break;
        case "s":
            if(!goingup){
                dx = 0;
                dy = 10;
    
                goingup = false;
                goingleft = false;
                goingdown = true;
                goingright = false;
            }else{
                log("err")
            }
            
            break;
        case "d":
            if(!goingleft){
                dx = 10
                dy = 0;
    
                goingup = false;
                goingleft = false;
                goingdown = false;
                goingright = true;
            }else{
                log("err")
            }
            
            break;
    }
})
drawSnake();
main();
createFood();
function main() {
    setTimeout(function onTick() {
        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();    
        main();  
    }, 100)
}