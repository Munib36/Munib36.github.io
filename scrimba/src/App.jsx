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
		{on: true, value: 1, id: 1},
		{on: false, value: 1, id: 2},
		{on: false, value: 1, id: 3},
		{on: false, value: 1, id: 4},
		{on: false, value: 1, id: 5},

		{on: false, value: 1, id: 6},
		{on: false, value: 1, id: 7},
		{on: false, value: 1, id: 8},
		{on: false, value: 1, id: 9},
		{on: false, value: 1, id: 10},

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



	function toggle(id) {	
        setDiceArray(prevDice => {
            return prevDice.map(die =>{
                return (die.id === id ? {...die, on: !die.on} : die)
                
            })
        })


	}

	let dices = diceArray.map(x => {
		return(
			<Die 
				key={x.id}
				id={x.id}
				on={x.on}
				value={x.value}

				handleClick={toggle}
			/>
		)
	})



	return ( 
		<main>
			<Title />
			<div className="Dice">
				{dices}
			</div>
			<Button 
				handleClick={allNewDice}
			/>
		</main>
	)
}