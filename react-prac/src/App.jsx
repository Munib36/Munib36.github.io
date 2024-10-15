import React, {useState} from "react"


export default function App() {
    const [counter, setCounter] = useState(0);
  
    setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);
  
    return (
      <p>{counter} seconds have passed.</p>
    );
}


