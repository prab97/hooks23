import React, { useState } from 'react'

const UseStateObject = () => {
   const [mydata, setmydata] = useState({ name : "Prashant", age : 26, city : "New Delhi"})
   
   const handleClick = () => {
     setmydata({...mydata, age : 30, city : "Kolkatta"}) //spread operator updating only age value.
   }
  
   return (
    <div>
        <h1 className='headings'>Name: {mydata.name}, Age: {mydata.age}, City : {mydata.city}</h1>
        <button className='btn' onClick={handleClick}>Update</button>
    </div>
  )
}

export default UseStateObject
