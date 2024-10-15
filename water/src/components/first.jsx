import React from "react";
import './first.css'


export default function First() {
    function imgClicked(){
        console.log("peen")
    }



    return (
        <div className="first">
            <h2>We offer solutions for houses, condos, offices and industrial sectors</h2>
        
            <div className="first--first">
                <div className="first--first--container">
                    <div onClick={imgClicked} className="container--image-container">
                        <img src={"/residential.png"} alt="" />
                    </div>
                    <h4>Residential water purifier</h4>
                </div>
                <div className="first--first--container">
                    <div onClick={imgClicked} className="container--image-container">
                        <img src={"/commercial.png"} alt="" />
                    </div>
                    <h4>Commercial water purifier</h4>
                </div>
                <div className="first--first--container">
                    <div onClick={imgClicked} className="container--image-container industrial--container">
                        <img src={"/industrial.png"} alt="" />
                    </div>
                    <h4>Industrial water purifier</h4>
                </div>
            </div>
        
        </div>
    )
}