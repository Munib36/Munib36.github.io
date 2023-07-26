function scrollElement(){
    window.scroll(0, 3000);
}

let x = window.innerWidth
if(x <= 500){
	headline.innerHTML = "Handyman <br> North York"
	headline.style.fontSize = 15 + "vw"
}else{
	headline.innerHTML = "Handyman North York"
	headline.style.fontSize = 9 + "vw"
}
let whatsapp = document.getElementById("whatsapp");
let encodedText = ""

const jobs = {
    electrical: "I need help with electrical work.",
    drywall: "I need assistance with drywall installation or repair.",
    filter: "I require assistance with water filter installation or replacement.",
    demoOut: "I need help with demolition work (outdoors).",
    demoIn: "I need help with demolition work (indoors).",
    painting: "I need assistance with painting or repainting.",
    plumbing: "I need help with plumbing installation or repair.",
    landscaping: "I need assistance with landscaping or garden maintenance.",
    renovation: "I require assistance with home renovation projects.",
};
function updateText() {
    // Get the selected option
    whatsapp.style.display = "flex"
    var options = document.getElementsByName('job');
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        selectedOption = options[i].value;
        break;
      }
    }
    
    // Update the text based on the selected option
    encodedText = jobs[selectedOption];
    whatsapp.href = 'https://wa.me/14373888367?text=' + encodedText;
    console.log(encodedText)
}
window.addEventListener("resize", ()=>{
	x = window.innerWidth
    if(x <= 500){
		headline.innerHTML = "Handyman <br> North York"
		headline.style.fontSize = 15 + "vw"
	}else{
		headline.innerHTML = "Handyman North York"
		headline.style.fontSize = 9 + "vw"
	}
})

