import React, {useState} from "react"

export function ToggleHOC(comp, optionsObj){
    const Comp = comp
    
    
    return function(props){
        let [visible, setVisible] = useState(optionsObj || false)
        function toggleFunc(){
            setVisible((visible) => !visible); 
        }
        return(
            <Comp 
                on={visible}
                toggle={toggleFunc}
                {...props}
            
            
            />
        )
    }
}