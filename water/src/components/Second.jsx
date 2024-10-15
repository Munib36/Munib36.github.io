import React from "react";
import './second.css'
export default function Second(){
    return(
        <div className="second">
            <div className="second--second">
                <h2>Representative of <a href="https://www.aquathin.com/" target="_blank">Aquathin Corp USA!</a></h2>
                <p>Pure Water Clean Air in Toronto proudly is an authorized representative of <span className="highlight">Aquathin Corp USA</span>. We are specialized in residential, commercial and industrial water filtration systems. We offer free water testing, free installation and free inspection.</p>
            </div>
            <div className="second--image">
                <img src="/residential.png" alt="" />
            </div>
        </div>
    )
}