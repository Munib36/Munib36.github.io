import React from 'react'
import Timer from "./timer.jsx"
import Footer from "./footer.jsx"
import "./resets.css";

function App() {


  return (
    <>
      <h3>bombing ur house in:</h3>
      <Timer 
        beforeNumb={2}
        afterNumb={3}
      />
      <Footer />
    </>
  )
}

export default App
