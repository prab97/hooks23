import React, {useState, useEffect } from 'react'

const EffectAPI = () => {
    const [items, setitems] = useState([])
    const url = "https://jsonplaceholder.typicode.com/photos/"

    const getUserDetails = async () => {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        setitems(data)
    }

    useEffect(() => {
        getUserDetails()
    }, [])
  return (
    <>
       <h1>List of Users</h1>
       {   
            items.map((curElem) => {
              if(curElem.id <= 5){
               
                   return( 
                    <>
                      <h1>{curElem.id}</h1>
                      <h1>{curElem.title}</h1>
                      <h1>{ curElem.url}</h1>
                      </>
                   )
                
              }
            })

       }
    </>
  )
}

export default EffectAPI
