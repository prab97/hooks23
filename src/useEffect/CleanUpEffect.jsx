import React, {useEffect, useState} from 'react'

const CleanUpEffect = () => {
   const [widthcount, setwidthcount] = useState(window.screen.width)
  
    const actualwidth = () => {
        // console.log(window.innerWidth);
        setwidthcount(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", actualwidth)
        return () => {
            window.removeEventListener("resize", actualwidth )

        }
        
    })
   return (
    <div> 
        <p>The screen width currently is: </p>
        <h2>{widthcount}</h2>
      
    </div>
  )
}

export default CleanUpEffect
