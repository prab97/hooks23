import React, {useRef} from 'react'

const ButtonHandlers = () => {
    const choice = useRef(null)


  return (
   <>
    <button onClick={() => alert("Button 1 pressed")}>Button 1</button>
    <button onClick={() => alert("Button 2 pressed")}>Button 2</button>
    <button onClick={() => alert("Button 3 pressed")}>Button 3</button>
   
   </>
  )
}

export default ButtonHandlers
