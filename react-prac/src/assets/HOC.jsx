import React from "react"

export function favNumber(comp){
    const Comp = comp;

    return (
        function(props){
            return <Comp favorite={36} {...props} />
        }
    )
}