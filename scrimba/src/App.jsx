import Die from "./components/Die"
import "./app.css"


function Title(){
  return(
      <div className="Title">
          <h2>Tenzies</h2>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls. </p>
      </div>
  )
}

function Dice(){
  return(
      <div className="Dice">
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />

          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
      </div>
  )
}

function Button(){
  return(
    <div className="Button">
      <button>Roll</button>
    </div>
  )
}




export default function App() {
  return (
      <main>  
          <Title />
          <Dice />
          <Button />
      </main>
  )
}