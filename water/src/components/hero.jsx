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
      

    let [opacity, setOpacity] = React.useState(1);
    let circle = React.useRef(null)
    let YMax = 200;

    React.useEffect(()=>{
      const handleScroll = () => {
        
        let YScroll = window.scrollY;
  
        if (YScroll > YMax) {
          setOpacity(0)
        } else {
          setOpacity(1 - (YScroll / YMax));
        }
  
        
  
        
      }
      window.addEventListener("scroll", handleScroll)

      return () => {window.removeEventListener("scroll", handleScroll)}
    }, [])

    React.useEffect(()=>{
      if (circle.current) {
        circle.current.style.opacity = opacity;
      }
    }, [opacity])
    


    return(
        <div className="chevron-container">
            <div ref={circle} className="chevron"></div>
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