import React from 'react'
import Component from "./component.jsx"

import './App.css'
function Card(props){
  return(
    <div className="card">
      <div className="card-img-container">
        <img src={`${props.img}.svg`} />
      </div>
      <div className='card-text'>
        <p className="card-title">{props.title}</p>
        <p className="card-desc">{props.text}</p>
      </div>
    </div>
  )
}

export default function App() {

  return (
    <div className='app'>
      <Component 
        title={"You do the business, \nwe’ll handle the money."}
        text="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
        custom={<button className='comp-button'>Get Started</button>}
      >
        <div className="card-container">
          <Card 
            img="star"
            title="Rewards"
            text="The best credit cards offer some tantalizing combinations of promotions and prizes"
          />
          <Card 
            img="shield"
            title="100% Secured"
            text="We take proactive steps make sure your information and transactions are secure."
          />
          <Card 
            img="plane"
            title="Balance Transfer"
            text="A balance transfer credit card can save you a lot of money in interest charges."
          />
        </div>
        
      </Component>
      <Component
		title={"Easily control your \nbilling & invoicing."}
		text="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
		custom={
			<>
				<a><img src="/applestore.svg" alt="apple store" /></a>
				<a><img src="/googleplay.svg" alt="google play" /></a>
			</>
		}
>
        <img src="/comp2.png" />
      </Component>
      <Component
	  		title={"Find a better card deal \n we’ll handle the in few easy steps."}
			text="Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."
			custom={<button className='comp-button'>Get Started</button>}
	  >
		<img src="/comp3.png" alt="" />
	  </Component>
    </div>
  )
}

