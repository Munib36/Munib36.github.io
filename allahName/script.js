let canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d");

ctx.scale(1, -1);
ctx.translate(0, -canvas.height);

ctx.translate(canvas.width, 0);
ctx.scale(-1, 1);



ctx.beginPath();

let surah = 0;

function draw(verses){
    surah+=3.6;
    ctx.beginPath();


    ctx.arc(surah, verses, 1.5, 0, 2 * Math.PI);
    ctx.fill();
    
}
let verses = [7, 286, 200, 176, 120, 165, 206, 75, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 18, 12, 12, 30, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6]

verses.forEach((verse) => {
    draw(verse)
})


