import React, { useState } from 'react'

const UseStateArray = () => {
    
    const data = [
        {
            id  : 0,
            name : "prashant",
            city : "Delhi"
        },
        {
            id  : 1,
            name : "Ankit",
            city : "Kanpur"
        },

        {
            id  : 2,
            name : "Vishal",
            city : "Gwalior"
        },

    ]

    const [biodata, setbiodata] = useState(data)
    const clearArray = () => {
        setbiodata([])
    }

    // const display = data.map((ele) => console.log(ele))
  return (
    <div>
         {
             biodata.map((elem) => {
                return <h1 className='headings' key={elem.id}>Name: {elem.name} city : {elem.city} </h1>
                

             })
         }
         <button className='btn' onClick={clearArray}>Clear</button>
      
    </div>
  )
}

export default UseStateArray
