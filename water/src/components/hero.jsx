import "../css/hero.css"
import Card from "./sub-component/card"
import React from 'react';
import Typed from 'typed.js';


function Typing() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Pure water', "Clean air"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 1000,
      startDelay: 300,

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
      <span className="typing" ref={el} />
  );
}


function Chevron(){
    return(
        <div className="chevron-container">
            <div className="chevron"></div>
        </div>
    )
}

export default function Hero(){


    return(
            <div className="Hero">
                <Typing />
                <Chevron />
            </div>
    )
}