import React, {useState, useEffect} from 'react'

const AutoCounter = () => {

    const [counter, setcounter] = useState(0)

    // const incrementCounter = () => {

       
    // }
     useEffect(()=> {
        //incrementCounter()
        setInterval(() =>{
            setcounter(counter+1)
        }, 1500)

    })

  return (
    <>
        {/* <h2>Counter - {counter}</h2> */}
        
    </>
  )
}

export default AutoCounter
