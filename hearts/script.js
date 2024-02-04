let body = document.getElementById("body")
let xPos;
let yPos;






//! BACKGROUND
setInterval( () => {

    const heart = document.createElement("span")

    
    heart.style.top = window.innerHeight + "px"
    let ranNum = (Math.random()*65) + 5;
    heart.style.width = ranNum + "px";
    heart.style.height = ranNum + "px";
    let ranX = Math.random()*(window.innerWidth);
    heart.style.left = ranX + "px"
    heart.style.zIndex = ranNum;
    body.appendChild(heart)
    setTimeout(() => {
        heart.remove();
    }, 7000);

}, 50);





//! MOUSE


body.addEventListener("mousemove", (event)=>{
    xPos = event.offsetX;
    yPos = event.offsetY;

    let heart = document.createElement("span")
    heart.style.left = xPos + "px";
    heart.style.top = yPos + "px";
    let size = (Math.random() * 85) + 15;
    heart.style.width = size + "px"
    heart.style.zIndex = size;

    body.appendChild(heart);

    
    setInterval(()=>{
        heart.remove();
    }, 3000)
})


setInterval(() => {
    let heart = document.createElement("span")
    heart.style.left = xPos + "px";
    heart.style.top = yPos + "px";
    let size = (Math.random() * 75) + 25;
    heart.style.width = size + "px"
    heart.style.zIndex = size;

    body.appendChild(heart);

    
    setInterval(()=>{
        heart.remove();
    }, 5000)

}, 100);










































function log(x){
    console.log(x)
}
