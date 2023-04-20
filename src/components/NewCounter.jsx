import React, { useState } from 'react'

const NewCounter = () => {
  const [counter, setcounter] = useState(0)
  const counterHandler = (e) => {
    e.preventDefault()
    const choice = e.target.value
    if(choice === "increment"){
        setcounter(counter+1)
    }else if (choice === "decrement"){
        setcounter(counter - 1)
    }else{
        setcounter(0)
    }
  }
  return (
    <>
      <h2>Counter = {counter}</h2>
      <button value="increment" onClick={counterHandler}>Increment</button>
      <button value = "decrement" onClick={counterHandler}>Decrement</button>
      <button value = "reset" onClick={counterHandler}>Reset</button>
    </>
  )
}

export default NewCounter
