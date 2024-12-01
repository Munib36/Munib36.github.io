let btn = document.getElementById("button-container")
let img = document.querySelector(".img")
let ecks = false;
btn.addEventListener("click", ()=>{
    console.log(ecks)
    if(ecks){
        console.log("hi " + ecks)
        img.src = "/hamburg.svg"
        ecks = false;
    }else{
        img.src = "/ecks.svg"
        ecks = true;
    }
    
})


