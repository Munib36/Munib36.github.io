let body = document.getElementById("body")
let xPos;
let yPos;

body.addEventListener("mousemove", (event)=>{
    xPos = event.offsetX;
    yPos = event.offsetY;
})

setInterval(() => {

    let heart = document.createElement("span")

    heart.style.left = xPos + "px";
    heart.style.top = yPos + "px";
    let size = (Math.random() * 75) + 25;
    heart.style.width = size + "px"

    body.appendChild(heart);

    
    setTimeout(()=>{
        heart.remove();
    }, 3000)
}, 30);














































function log(x){
    console.log(x)
}
