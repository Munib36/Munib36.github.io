let a = 2; //1
let b = 5; //2
let c = 75; //3
let d = 2; //4
let e = 7; //5
let f = 5; //6
let g = 12; //7
let h = 78; //8

console.log(sum(a,b,c,d,e,f,g,h))

function sum(...nums) {
    let total = 0;
    for(let number of nums){
        total += number
    }
    return total;
}