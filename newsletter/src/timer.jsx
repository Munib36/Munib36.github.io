import React from "react";


let afterTwo = document.getElementById("after-two")
let beforeOne = document.getElementById("before-one")
// setInterval(() => {
//     beforeOne.classList.add("animate")
//     afterTwo.classList.add("animate")
// }, 2000);

export default function Timer(props){
    let [count1, setCount1] = React.useState(2)
    let [count2, setCount2] = React.useState(3)

    React.useEffect(()=>{
      console.log("peen")
      let interval = setInterval(()=>{
        console.log("increase first")
        setCount1(prevC => prevC+1)
      },1000)
      
      setTimeout(()=>{
        let interval2 = setInterval(()=>{
            console.log("increase second")
            setCount2(prevC2 => prevC2+1)
        },1000)
      }, 200)

      return () => clearInterval(interval);
    },[])
    


    return(
        <div className="timer">
            <div className="days">
            <div className="after">
                    <div id="before-one" className="time after-one">
                        <p>
                            {/* {props.afterNumb} */}
                            {count2}
                        </p>
                    </div>
                    <div className="time before-two">
                        <p>
                            {/* {props.beforeNumb} */}
                            {count1}

                        </p>
                    </div>
                    
                </div>
                
                <div className="before">
                    <div className="time before-one">
                        <p>
                            {/* {props.beforeNumb} */}
                            {count1}

                        </p>
                    </div>
                    <div id="after-two" className="time after-two">
                        <p>
                            {/* {props.afterNumb} */}
                            {count2}
                        </p>
                    </div>
                </div>
                
                
               

               
            </div>





            <div className="hours"></div>
            <div className="minutes"></div>
            <div className="seconds"></div>
        </div>
    )
}