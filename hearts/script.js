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
    setTimeout(() => {
        heart.remove();
    }, 7000);

}, 50);





