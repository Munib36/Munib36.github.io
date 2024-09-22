import React from "react";
import "./app.css"
import {ToggleHOC} from "./assets/toggleHOC.jsx"
const image = "https://picsum.photos/200/120"

function App(props){
  return(
    <div className="card" style={{width: "18rem"}}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        {props.on && (
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        )}
        <button onClick={props.toggle} className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  )
}

export default ToggleHOC(App)