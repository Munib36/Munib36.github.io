
import Die from "./components/Die"
import "./app.css"
import { useState } from "react";

const [ diceArray, setDiceArray ] = useState([
	{on: false, value: 1},
	{on: false, value: 1},
	{on: false, value: 1},
	{on: false, value: 1},
	{on: false, value: 1},
	
	{on: false, value: 1},
	{on: false, value: 1},
	{on: false, value: 1},
	{on: false, value: 1},
	{on: false, value: 1},
])


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
      <button onClick={allNewDice}>Roll</button>
    </div>
  )
}

function ranNum(){
	return Math.ceil(Math.random()*6)
}

function allNewDice(){

	for(let i = 0; i < 10; i++){
		
		diceArray[i].value = ranNum();
	}
	
	console.log(diceArray)
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