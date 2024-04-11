let hexInput = document.getElementById("hex")
let slider = document.getElementById("slider")
let sliderValue = slider.value*5
let sliderText = document.getElementById("sliderText")
let alteredLabel = document.getElementById("alteredLabel")
sliderText.innerText = `${sliderValue}%`;

let inputColor = document.getElementById("input-color")
let alteredColor = document.getElementById("altered-color")

//* update
if(isValidHex(hexInput.value)) {
    strippedHex =  hexInput.value.replace('#','');
    inputColor.style.backgroundColor = "#" + strippedHex;

    action()     //? updates the altered color box too
}



slider.addEventListener("input",()=>{
    sliderValue = slider.value*5
    sliderText.innerText = `${sliderValue}%`
    if(isValidHex(hexInput.value)){
        action();
    }
    
})


hexInput.addEventListener("keyup", ()=>{
    if(!isValidHex(hexInput.value)) return false;
    
    inputColor.style.backgroundColor = "#" + hexInput.value
})



inputColor.addEventListener("mousedown", ()=>{
    console.log(`#${hexInput.value}`)
    navigator.clipboard.writeText(`#${hexInput.value}`)
        .then(() => {
            console.log('Background color copied to clipboard successfully:', `#${hexInput.value}`);
        })
        .catch((error) => {
            console.error('Unable to copy background color to clipboard:', error);
        });
})
// alteredColor.addEventListener("mousedown", ()=>{
//     console.log(`#${hexInput.value}`)
//     navigator.clipboard.writeText(`#${hexInput.value}`)
//         .then(() => {
//             console.log('Background color copied to clipboard successfully:', `#${hexInput.value}`);
//         })
//         .catch((error) => {
//             console.error('Unable to copy background color to clipboard:', error);
//         });
// })

//! valid checkers
function isValidHex (hex) {
    if(!hex) return false;
    
    let tempHex = hex.replace('#','');
    if( tempHex.length === 3 || tempHex.length === 6 ){
        for(let i = 0; i < tempHex.length; i++){
            if(!/[0-9a-f]/i.test(tempHex[i])){
                console.log( `%cinvalid char ${tempHex[i]}`, 'color: red; font-weight: bold; font-size: 16px');
                return false;
            }
        }


        return true
    }else{
        return false
    }
}
function isValidRGB({r, g, b}){
    if(!(r+1) || !(g+1) || !(b+1)) return false;

    if((r >= 0 && r <= 255) && (g >= 0 && g <= 255) && (b >= 0 && b <= 255)){
        return true
    }else{
        return false
    }
}

//! converters
function hexToRGB(hex){
    let r, g, b;
    if(isValidHex(hex)){
        let strippedHex = hex.replace('#','');
        if(strippedHex.length === 3){
            strippedHex = `${strippedHex[0]}${strippedHex[0]}${strippedHex[1]}${strippedHex[1]}${strippedHex[2]}${strippedHex[2]}`
        }
        r = parseInt(strippedHex.substring(0,2), 16)
        g = parseInt(strippedHex.substring(2,4), 16)
        b = parseInt(strippedHex.substring(4,6), 16)
    }
    return {r, g, b}
}

function RGBToHex({r, g, b}){
    let hex = "";
    if(isValidRGB({r, g, b})){
        //TODO    ({r, g, b}[i])
        for (let i in {r, g, b}){
            if( ({r, g, b}[i]).toString(16).length > 1 ){
                hex += {r, g, b}[i].toString(16)
            }else{
                hex += `0${{r, g, b}[i].toString(16)}`
            }
        }
        
        // hex = `#${}`
        
    }
    return `#${hex}`
}



//! action
function action(){
    let hex = hexInput.value
    let perc = sliderValue

    let rgb = hexToRGB(hex)
    

    for(let i in rgb){
        if(  (Math.floor(rgb[i] + ((perc/100)*(255-rgb[i])))) < 0  ){
            rgb[i] = 0;
            
        }else{
            rgb[i] = Math.floor(rgb[i] + ((perc/100)*(255-rgb[i])))
        }
    }
    alteredColor.style.backgroundColor = RGBToHex(rgb);
    alteredLabel.innerText = "Altered Color: #" + RGBToHex(rgb);
    // console.log(`altered color ${rgb.r} ${rgb.g} ${rgb.b}  ${RGBToHex(rgb)}`)
}