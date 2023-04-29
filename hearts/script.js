const body = document.querySelector("body")

setInterval( () => {

    const heart = document.createElement("span")

    heart.style.top = window.innerHeight + "px"
    let ranNum = Math.random()*100;
    heart.style.width = ranNum + "px";
    heart.style.height = ranNum + "px";
    heart.style.zIndex = ranNum;
    let ranX = Math.random()*(window.innerWidth);
    heart.style.left = ranX + "px"
    body.appendChild(heart)
    heart.addEventListener("click", () => {
        heart.style.background = "url(\"./popped-bloon.png\")"
    })
    setTimeout(() => {
        heart.remove();
    }, 2000);


}, 1);



