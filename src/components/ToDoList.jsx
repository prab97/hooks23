import React, { useState } from 'react'

const ToDoList = () => {
    const [item, setitem] = useState([])
    const handleClick = () => {
        const tp = document.getElementById("listbox").textContent
        item.push(tp)
        console.log(tp)

    }
    console.log(item)
  return (
    <div>
        <label>Enter the Item: </label>
         <input id="listbox" type='text' name="list"/>
         <button className='btn'  onClick={handleClick}>Add it</button>
    </div>
  )
}

export default ToDoList
