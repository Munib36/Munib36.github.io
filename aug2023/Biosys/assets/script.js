let opacity = 1;
let y = window.pageYOffset;
let circle = document.getElementById("circle")

if(y > 400){
    opacity = 0;
    circle.style.opacity = opacity;
}else{
    opacity = 1 - (y/400);
    circle.style.opacity = opacity;
}

window.addEventListener("scroll",()=>{
    y = window.pageYOffset;
    if(y > 400){
        opacity = 0;
        circle.style.opacity = opacity;
    }else{
        opacity = 1 - (y/400);
        circle.style.opacity = opacity;
    }
})



















//^ COPYING TO CLIPBOARD

// Get references to the phone number element and copy button
const phoneNumberElement = document.getElementById("phone-number");
const copyButton = document.getElementById("copy-button");


// Add a click event listener to the copy button
copyButton.addEventListener("click", () => {
  // Create a range and selection object
  const range = document.createRange();
  const selection = window.getSelection();

  // Select the text inside the phone number element
  range.selectNodeContents(phoneNumberElement);
  selection.removeAllRanges();
  selection.addRange(range);

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  selection.removeAllRanges();

  // Alert the user that the text has been copied (optional)
  SAY();
});
const alert = document.getElementById("alert")
function SAY(){
    let opacity = 0;
    // Call setInterval to execute showMessage every 2 seconds (2000 milliseconds).
    const intervalId = setInterval(()=>{
        opacity += 0.1;
        alert.style.opacity = opacity;
        console.log(opacity)
        if(opacity >= 1){
            clearInterval(intervalId);
        }
        
    }, 3);
      
    // To stop the interval after a certain number of executions or at any point, you can use clearInterval.
    // For example, to stop it after 10 seconds (10 * 1000 milliseconds):
    setTimeout(()=>{
        const intervalId = setInterval(()=>{
            opacity -= 0.1;
            alert.style.opacity = opacity;
            console.log(opacity)
            if(opacity <= 0){
                clearInterval(intervalId);
            }
            
        }, 3);
    }, 1500)
}