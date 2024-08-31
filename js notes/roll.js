function roll(min, max, floatFlag) {
    let r = Math.random() * ((max+1) - min) + min
    return floatFlag ? r : Math.floor(r)
    
}

let arr = [];
let rand;


for (let i = 0; i < 200; i++){
    let found = false;
    rand = roll(1, 4)
    if(arr.length == 0){
        arr.push({numb: rand, reps: 1})
    }else{
        for(let j = 0; j < arr.length; j++){
            if (arr[j].numb == rand){
                found = true;
                arr[j].reps+=1;
                break;
            }
        }
        if(!found){
            arr.push({numb: rand, reps: 1})
        }

        // if(arr.includes(rand)){
        //     console.log("out", rand)
        // }else{
        //     arr.push({numb: rand,})
        // }
    }
    
    console.log(arr)
}