import React, { useState } from 'react'

const BasicForms = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [allentry, setAllEntry] = useState([])

  

  const submitForm = () => {

        const newEntry = {email : email, password : password}
        setAllEntry([...allentry, newEntry])

    }
 
  return (
    <div> 
         <>
            <form action='' onSubmit={submitForm}>
                <div>
                <label htmlFor='email'>Email</label>
              <input type="email" id="email" value={email} name="email" autoComplete='off' onChange={(e) => setemail(e.target.value)}/>          
                </div>
             
                <div>
                <label htmlFor='password'>Password</label>
              <input type="password" id="password" value={password} name="password" autoComplete='off' onChange={(e) => setpassword(e.target.value)} />

                </div>
              
            
             <button className='btn' type='submit'>Submit</button>
            </form>
         
         </>
      
    </div>
  )
}

export default BasicForms
