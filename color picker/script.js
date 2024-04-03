let hexInput = document.getElementById("hex")
let slider = document.getElementById("slider")


//Create a keyup event handler for hexInput
//Check if hex color is valid
//If hex color is valid, update the background color of inputColor

hexInput.addEventListener("keyup", ()=>{
    console.log(isValidHex((hexInput.value)))
})


function isValidHex (hex) {
    if(!hex) return false;
    
    if(hex[0] == "#"){
        hex = hex.substring(1)
    }
    if( hex.length === 3 || hex.length === 6 ){
        for(let i = 0; i > hex.length; i++){
            if(/[0-9a-f]/i.test(hex[i])){

            }
        }
        
        return true
    }else{
        return false
    }
}
