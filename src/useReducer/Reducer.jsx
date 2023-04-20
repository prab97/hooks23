import React, {useReducer} from 'react'
// const initialstate = 0

// const reducer = (state, action) => {
//     // console.log(state, action)
//      if(action.type === "INCREMENT"){
//         return state  + 1
//      }else if(action.type === "DECREMENT"){
//         return state - 1
//      }
// }

// const Reducer = () => {
    
//     const [state, dispatch] =  useReducer(reducer, initialstate)
//     return (
//     <>
//       <h2>{state}</h2>
//     <button onClick={() => dispatch({type : "INCREMENT"})}>Increment</button>
//     <button onClick={() => dispatch({type : "DECREMENT"})}>Decrement</button>
    
 
//     </>
//   )
// }

// export default Reducer

/* NOTE : dispatch is used to dispatch some action has two propertties type and value.

   reducer is a function 
   initialstate is the value to start from 


*/


const initialState = " "
const reducer = (state, action) => {
    if(action.type === "show"){
        return state = "This is a sample text."
    }else if(action.type === "hide"){
        return state = ""
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
   return (
    <>
     <p>{state}</p>
      <button onClick={() => dispatch({type : "show"})}>Show</button>
      <button onClick={() => dispatch({type : "hide"})}>Hide</button>
    
    </>
    

   )


}


export default Reducer