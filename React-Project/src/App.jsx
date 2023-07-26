import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Navbar() {
	return(
		<nav className="navbar">
			<img src={reactLogo} alt="" /> 
			<p className='nav-title'>ReactFacts</p>
			<p className="second">
				React Course - Project 9m
			</p>
		</nav>
	)
}
function Main() {
	return(
		<main>
			<h1>Fun fax abt React</h1>
			<ul>
				<li>agustus</li>
				<li>munib is learning it</li>
				<li>maintain by fusbook</li>

			</ul>
		</main>
	)
}
function Footer() {
	return(
		<div>
			<p>
				@ Boniph Sondak 2030, Some rights reserved
			</p>
		</div>
	)
}

function App() {
	return (
		<>
			<Navbar />
			<Main />
			<Footer />
		</>
	)
}

export default App
