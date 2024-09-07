

function doChores(){
    setTimeout(()=>{
        console.log("u did the chores")
    }, 1500)
}
function doHw(){
    setTimeout(()=>{
        console.log("u did the homework")
    }, 1500)
}

function useless(){
    setTimeout(()=>{
        console.log("u did the useless")
    }, 1500)
}

async function baboonej(){
    try{
        let result1 = await doChores();
        console.log(result1)
    
        let result2 = await doHw();
        console.log(result2)
    
        let result3 = await useless();
        console.log(result3)
    }
    catch(err){
        console.error(err)
    }
}
baboonej();
