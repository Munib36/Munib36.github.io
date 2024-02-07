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
    heart.style.zIndex = -1;
	heart.classList.add('handleClickClass')
    body.appendChild(heart)
    setTimeout(() => {
        heart.remove();
    }, 7000);

}, 50);



//! MOUSE

// body.addEventListener("mousemove", (event)=>{
//     xPos = event.offsetX;
//     yPos = event.offsetY;

//     let heart = document.createElement("span")
//     heart.style.left = xPos + "px";
//     heart.style.top = yPos + "px";
//     let size = (Math.random() * 85) + 15;
//     heart.style.width = size + "px"
//     heart.style.zIndex = size;

//     body.appendChild(heart);

    
//     setInterval(()=>{
//         heart.remove();
//     }, 3000)
// })

// setInterval(() => {
//     let heart = document.createElement("span")
//     heart.style.left = xPos + "px";
//     heart.style.top = yPos + "px";
//     let size = (Math.random() * 75) + 25;
//     heart.style.width = size + "px"
//     heart.style.zIndex = size;

//     body.appendChild(heart);

    
//     setInterval(()=>{
//         heart.remove();
//     }, 5000)

// }, 100);









//! beginning
body.addEventListener("click", ()=>{
    document.querySelector("audio").play();
})

body.addEventListener("click", begin)

function begin(){
    document.querySelector(".warning").style.left = 100 + "%";
    document.querySelector(".warning").innerText = ""
    body.removeEventListener("click", begin)
}











  const popBalloon = event => {
    event.stopPropagation()
    const balloon = event.target
    // balloon.classList.add('pop')
    // setTimeout(() => {
		console.log(event)
		pop(event)
      	deleteBalloon(balloon)
    // }, 200)
  }
  
  const deleteBalloon = balloon => {
    balloon.removeEventListener('click', popBalloon)
    balloon.removeEventListener('transitionend', deleteBalloon)
    balloon.parentNode.removeChild(balloon)
  }
  









let bloons = document.getElementsByClassName("handleClickClass")
for(let i = 0; i < bloons.length; i++){
    bloons[i].addEventListener("click", popBalloon)
}



if (document.body.animate) {
	document.querySelector('#button').addEventListener('click', pop);
  }
  


function pop (e) {
	  for (let i = 0; i < 30; i++) {
		//! We call the function createParticle 30 times
		// As we need the coordinates of the mouse, we pass them as arguments
		createParticle(e.clientX, e.clientY);
	  }
  }
  
  function createParticle (x, y) {
	const particle = document.createElement('particle');
	document.body.appendChild(particle);
	
	// Calculate a random size from 5px to 25px
	const size = Math.floor(Math.random() * 20 + 5);
	particle.style.width = `${size}px`;
	particle.style.height = `${size}px`;
	// Generate a random color in a blue/purple palette
	particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
	
	// Generate a random x & y destination within a distance of 75px from the mouse
	const destinationX = x + (Math.random() - 0.5) * 2 * 75;
	const destinationY = y + (Math.random() - 0.5) * 2 * 75;
  
	// Store the animation in a variable as we will need it later
	const animation = particle.animate([
	  {
		// Set the origin position of the particle
		// We offset the particle with half its size to center it around the mouse
		transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
		opacity: 1
	  },
	  {
		// We define the final coordinates as the second keyframe
		transform: `translate(${destinationX}px, ${destinationY}px)`,
		opacity: 0
	  }
	], {
	  // Set a random duration from 500 to 1500ms
	  duration: Math.random() * 1000 + 500,
	  easing: 'cubic-bezier(0, .9, .57, 1)',
	  // Delay every particle with a random value of 200ms
	  delay: Math.random() * 200
	});
	
	// When the animation is complete, remove the element from the DOM
	animation.onfinish = () => {
	  particle.remove();
	};
  }



























function log(x){
    console.log(x)
}
