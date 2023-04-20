import React from 'react'

const ParseList = () => {

    const fruits = ["apple", "banana", "Jackfruit", "Mango", "Strawberry"]

  return (
    <>
         {
            fruits.map((curElem, index) => {
                return(
                    <li key={index}>{curElem}</li>
                )
            })
         }
    </>
  )
}

export default ParseList
