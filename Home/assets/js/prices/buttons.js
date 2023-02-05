document.getElementById("first").onclick = function() {
    document.getElementById("buttons-js").style.opacity = "1";
    document.getElementById("buttons-js1").style.opacity = "0.7";
    document.getElementById("buttons-js2").style.opacity = "0.7";
    console.log("ahmadfirst")
    document.getElementById("full").style.display = "block";
    document.getElementById("back").style.display = "none";
    document.getElementById("other").style.display = "none";
    document.getElementById("full-body-selector").style.display = "block";
    document.getElementById("back-selector").style.display = "none";
    document.getElementById("other-selector").style.display = "none";
    document.getElementById("length-selector-full-body").style.display = "block";
    document.getElementById("length-selector-back").style.display = "none";
    document.getElementById("length-selector-other").style.display = "none";
}
document.getElementById("second").onclick = function() {
    document.getElementById("buttons-js").style.opacity = "0.7";
    document.getElementById("buttons-js1").style.opacity = "1";
    document.getElementById("buttons-js2").style.opacity = "0.7";
    console.log("ahmadsecond")
    document.getElementById("full").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("other").style.display = "none";
    document.getElementById("full-body-selector").style.display = "none";
    document.getElementById("back-selector").style.display = "block";
    document.getElementById("other-selector").style.display = "none";
    document.getElementById("length-selector-full-body").style.display = "none";
    document.getElementById("length-selector-back").style.display = "block";
    document.getElementById("length-selector-other").style.display = "none";
}
document.getElementById("third").onclick = function() {
    document.getElementById("buttons-js").style.opacity = "0.7";
    document.getElementById("buttons-js1").style.opacity = "0.7";
    document.getElementById("buttons-js2").style.opacity = "1";
    console.log("ahmadthird")
    
    document.getElementById("full").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("other").style.display = "block";
    document.getElementById("full-body-selector").style.display = "none";
    document.getElementById("back-selector").style.display = "none";
    document.getElementById("other-selector").style.display = "block";
    document.getElementById("length-selector-full-body").style.display = "none";
    document.getElementById("length-selector-back").style.display = "none";
    document.getElementById("length-selector-other").style.display = "block";
}

