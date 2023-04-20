import React, { useRef} from 'react'

const GreetForm = () => {
    const fname = useRef(null)
    const lname = useRef(null)

    const submitForm = (e) => {
        e.preventDefault();
        const first_name = fname.current.value
        const last_name = lname.current.value
        // console.log()
        // console.log(lname.current.value)
        alert(`Hello ${first_name} ${last_name}`)

     }
    
  return (
    
    <>
       <form action="" onSubmit={submitForm}>
          <label htmlFor='fname'>First Name:</label>
          <input type='text' id="fname" ref={fname}/><br /> <br />
                
          <label htmlFor="lname">Last Name: </label>
          <input type="text" id="lname" ref={lname}/><br /> <br />
          <button type="submit">Submit</button>
       </form> 
       
    
    </>


  )
}

export default GreetForm
