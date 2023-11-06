import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Footer />
        </>
    )
}

export default App
