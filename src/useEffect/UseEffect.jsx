import React, { useEffect, useState } from 'react'

const UseEffect = () => {
   //priority is given to variables and functions declared outside of useEffect
    
    
    const [count, setcount] = useState(0)
   useEffect( () => {
      if(count == 0){
        document.title = "Chats"
      }else{
        document.title = `Chats (${count})`
      }
         
    }, [count])
    // console.log("Outside") //processed first
    return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setcount(count + 1)}>Click</button>
    </div>
  

 
 )
}

export default UseEffect


/*
  NOTE : remember useEffect run every time you update something 
       if dependency array is used with the hook it will going to render only once. until page is refreshed

       if some variable is mentioned inside the dependency array then useEffect will come to play only if the variable is changed.


*/ 