import React, {useRef, useState} from 'react'

const UseRef = () => {
   //useref is same as useState the only and NO rerenders take place.
   const name = useRef(null)
   const [show, setshow] = useState(false)
   const submitForm = (e) => {
      e.preventDefault();
      const myname = name.current.value
    //   console.log(name) //will return the current referred field
    //  console.log(name.current) // will return entire input field
    console.log(name.current.value)
    myname === "" ? alert("please enter some value: ") : setshow(true)

   }
  return (
    <>
     <form action="" onSubmit={submitForm}> 
        <div>

            <label htmlFor="name">Enter the input: </label>
            <input id="name"  type="text" ref={name}/>
        </div>
           <br />
         <button type="submit">Submit</button>

     </form>
     <p>{show ? `Your Name is : ${name.current.value}` : ""}</p>
    
    
    </>
  )
}

export default UseRef
