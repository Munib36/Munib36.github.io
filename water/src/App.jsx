import './App.css'
import "./resets.css"

import Nav from "./components/nav.jsx"
import Hero from "./components/hero.jsx"
import Explination from "./components/expl.jsx"
import First from "./components/first.jsx"
import Second from "./components/Second.jsx"

import Footer from "./components/footer.jsx"




export default function App() {
    return( 
        <div className='app'>
            <Hero />

            <First />

            <Second />


            <Footer />
        </div> 

    )
}