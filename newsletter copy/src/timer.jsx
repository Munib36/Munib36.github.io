import React from "react";



function BixOpen(props){
    return(
        <div className="bix-open">
            <div className="bix-half2 bix-bottom2">
                <p>
                    <p>{props.count}</p>
                </p>
            </div>
            <div className="bix-half2 bix-top2">
                <p>{props.count-1}</p>
            </div>
            
        </div>
        
    )
}

function BixClose(props){
    let [realCount, setRealCount] = React.useState(99)
    React.useEffect(()=>{
        console.log("lets go " + props.count)

        let bixBottom = document.getElementById("bix-bottom")
        bixBottom.classList.add("bix-bottom-animation")
        setTimeout(()=>{
            bixBottom.classList.remove("bix-bottom-animation")
            console.log("1")

        }, 930)
        

        let bixTop = document.getElementById("bix-top")
        bixTop.classList.add("bix-top-animation")
        setTimeout(()=>{
            bixTop.classList.remove("bix-top-animation")
            console.log("2")
            setRealCount(props.count)
        }, 900)
        


    },[props.count])
    return(
        <div className="bix-close">
            <div id="bix-bottom" className="bix-half bix-bottom">
                <p>
                    <p>{realCount-1}</p>
                </p>
            </div>
            <div id="bix-top" className="bix-half bix-top ">
                <p>{realCount}</p>
            </div>
            
        </div>
        
    )
}



function Box(props){
    let [count, setCount] = React.useState(99)
    let [count2, setCount2] = React.useState(98)

    function countdown(){
        setCount(c => c-1)
    }

    React.useEffect(()=>{
        setTimeout(()=>{
            setInterval(()=>{
                countdown()
            },1000)
        }, 0)
        
    },[])


    // React.useEffect(()=>{
    //     setTimeout(()=>{
    //         setInterval(()=>{
    //             setCount2(c => c-1)
    //             console.log("COUNT")
    //         },1000)
    //     }, 200)
        
    // },[])

    // React.useEffect(()=>{
    //     setCount(count)
    // },[count])
    
    return(
        <div className="box">

            <BixOpen count={count} count2={count2}/>
            <BixClose count={count} count2={count2} />

            

        </div>
    )
}




export default function Timer(props){
    return(
        <div className="timer">
            <div className="days">
                <Box />
                
                
               

               
            </div>





            <div className="hours"></div>
            <div className="minutes"></div>
            <div className="seconds"></div>
        </div>
    )
}