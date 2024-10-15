import React , { useState, useEffect } from 'react'


function App() {
  const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0})

  useEffect(()=>{
    console.log("peen")
    setInterval(()=>{
      setTime(t => ({...t, seconds: (t.seconds + 1)}))
    }, 30)
  },[])

  function DD(x){
    if(x < 10){
      return `0${x}`
    }else{
      return x
    }
  }

  useEffect(()=>{
    if(time.seconds >= 60){
      setTime(t => ({...t, minutes: (t.minutes + 1), seconds: 0}))

    }

    if(time.minutes >= 10){
      setTime(t => ({hours: (t.hours + 1), minutes: 0, seconds: 0}))

    }

    if(time.hours > 99){
      setTime(t => ({hours: 0, minutes: 0, seconds: 0}))

    }
  },[time])
  let clock = `${DD(time.hours)} : ${DD(time.minutes)} : ${DD(time.seconds)}`

  return (
    <>
    <div className="blurer"></div>
    <div className='holder'>
      <h1 className='cock'>{clock}</h1>
    </div>
    </>
    
  )
}

export default App
