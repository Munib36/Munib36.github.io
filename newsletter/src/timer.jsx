import React from "react";


let afterTwo = document.getElementById("after-two")
let beforeOne = document.getElementById("before-one")
// setInterval(() => {
//     beforeOne.classList.add("animate")
//     afterTwo.classList.add("animate")
// }, 2000);

export default function Timer(props){
    return(
        <div className="timer">
            <div className="days">
            <div className="after">
                    <div id="before-one" className="time after-one">
                        <p>
                            {props.afterNumb}

                        </p>
                    </div>
                    <div className="time before-two">
                        <p>
                            {props.beforeNumb}

                        </p>
                    </div>
                    
                </div>
                
                <div className="before">
                    <div className="time before-one">
                        <p>
                            {props.beforeNumb}

                        </p>
                    </div>
                    <div id="after-two" className="time after-two">
                        <p>
                            {props.afterNumb}

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