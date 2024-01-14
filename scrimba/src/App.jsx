import Die from "./components/Die"
import "./app.css"
import React, {
	useState,
} from 'react';
function ranNum() {
	return Math.ceil(Math.random() * 6)
	
}


function Title() {
	return ( 
		<div className = "Title" >
			<h2 > Tenzies </h2> 
			<p> 
				Roll until all dice are the same.Click each die to freeze it at its current value between rolls. 
			</p> 
		</div>
	)
}

function Dice(props) {
	let dices = props.diceArray.map(x => {
		return(
			<button className={x.on === true ? "active" : ""}>{x.value}</button>
		)
	})
	return ( 
		<div className="Dice" >
			{dices}
		</div>
	)
}



function Button(props) {
	return ( 
		<div className = "Button" >
			<button 
			onClick = {props.handleClick}> Roll </button> 
		</div>
	)
}






export default function App() {
	const [diceArray, setDiceArray] = useState([
		{on: true, value: 1},
		{on: false, value: 1},
		{on: false, value: 1},
		{on: false, value: 1},
		{on: false, value: 1},
		
		{on: false, value: 1},
		{on: false, value: 1},
		{on: false, value: 1},
		{on: false, value: 1},
		{on: false, value: 1}
	])

	
	function allNewDice() {	
		setDiceArray(prevDice => {
			return prevDice.map(x => { 
				if(x.on){
					return( {...x})
				}else{
					return( {...x, value: ranNum()} )
				}

			})
		})
		console.log(diceArray)
	}


	return ( 
		<main>
			<Title />
			<Dice 
				diceArray={diceArray}
				handleClick={changeDieToggle}
			/>
			<Button 
				handleClick={allNewDice}
			/>
		</main>
	)
}