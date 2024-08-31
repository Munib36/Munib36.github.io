import React from "react"

import {favNumber} from "./assets/HOC"

function App(props) {

    return (
        <h1>{props.favorite}</h1>
    )
}
export default favNumber(App)