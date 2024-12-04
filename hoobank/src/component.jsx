import React from "react"
import "./css/component.css"

export default function Component({title, text, custom, children}){
    return(
        <div className="component">
            <div className="comp-half1">
                <h2 className="comp-title">
                    {title}
                </h2>
                <p className="comp-text">
                    {text}
                </p>
                <div className="comp-custom">
                    {custom}
                </div>
            </div>  
            <div className="comp-half2">
                {children}
            </div>
        </div>
    )
}