import React, { useRef } from 'react';
import './App.css';
import './resets.css';
import data from "./assets/data.json";

function Logo() {
  return (
    <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle fill="#382314" cx="48" cy="24" r="24" />
        <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
      </g>
    </svg>
  );
}

let biggest = data[0].amount;
for (let i = 0; i < data.length; i++) {
  if (data[i].amount > biggest) {
    biggest = data[i].amount;
  } else {
    console.log(`${biggest} is bigger than ${data[i].amount}`);
  }
}

function Column(props) {
  let today = new Date().toLocaleString('en-US', { weekday: 'short' });
  today = today.toLowerCase();
  console.log(today);
  console.log(props.item.day);

  // Create a reference for the afterEl span
  const afterElRef = useRef(null);

  function enter() {
      afterElRef.current.style.opacity = "1"; // Make it visible
  }

  function leave() {
      afterElRef.current.style.opacity = "0"; // Hide it
    
  }

  return (
    <div className='bar-bar'>
		<span>{props.item.day}</span>

		<div
			onMouseEnter={enter} 
			onMouseLeave={leave}
			style={{ height: `${props.item.amount / biggest * 70}%` }}
			className={`bar ${(today === props.item.day) ? "active" : ""}`}
		></div>
	
	  


      <span 
		ref={afterElRef} 
		className='afterEl'
	  >{props.item.amount}</span>
      
      {/* Attach the ref to the span element */}
    </div>
  );
}

let bars = data.map((item) => {
  return (
    <Column item={item} key={item.day} />
  );
});

function App(props) {
	let total = 0;
	for(let i in data){
		console.log(`${total} + ${data[i].amount}`)
		total += data[i].amount
	}
  return (
    <div className='app'>
      <div className="app--top">
        <div className='app--top-balance'>
          <p>my balance</p>
          <h1>{props.balance}</h1>
        </div>
        <div className='app--top-logo'>
          <Logo />
        </div>
      </div>

      <div className="app--bottom">
        <h1>Spending - Last 7 days</h1>
        <div className='bars-container'>
          {bars}
        </div>

		<div className='line'></div>

		<div className='app--bottom-bottom'>
			<div className='bottom-bottom-first'>
				<p>total this month</p>
				<h1>{total}</h1>
			</div>
			<div className='bottom-bottom-second'>
				<span>+2.4%</span>
				<p>from last month</p>
			</div>
		</div>


      </div>
    </div>
  );
}

export default App;
