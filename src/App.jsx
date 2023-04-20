import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RulesHook from './components/RulesHook'
import UseStateArray from './components/UseStateArray'
import UseStateObject from './components/UseStateObject'
// import Counter from './components/Counter'
import ToDoList from './components/ToDoList'
import BasicForms from './components/BasicForms'
import NewCounter from './components/NewCounter'
import UseEffect from './useEffect/UseEffect'
import CleanUpEffect from './useEffect/CleanUpEffect'
import EffectAPI from './useEffect/EffectAPI'
import AutoCounter from './useEffect/AutoCounter'
import UseRef from './useRef/UseRef'
import ButtonHandlers from './practice/ButtonHandlers'
import GreetForm from './practice/GreetForm'
import ParseList from './practice/ParseList'
import Reducer from './useReducer/Reducer'
function App() {
  // var msg = "This is something plain"
  // console.log(useState())
  // const [msg, setmsg]=useState('Prashant Bisht');
  //  //toggling states
  // const changeName = () => { 
  //       if(msg == 'Mojito'){
  //         setmsg("Prashant Bisht")
  //       }else if( msg == 'Prashant Bisht'){
  //             setmsg("Mojito")
  //       }
  // }  
  
 
  // const resetName = () => {
  //   msg = "This is something plain"
  //   console.log(msg)
  // }
  // console.log(msg)
  return (
    <div className="App">
      {/* <RulesHook /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <Counter /> */}
      {/* <ToDoList /> */}
      {/* <BasicForms /> */}
      {/* <NewCounter /> */}
      {/* <UseEffect /> */}
      {/* <CleanUpEffect /> */}
      {/* <EffectAPI /> */}
      {/* <AutoCounter /> */}
      {/* <UseRef /> */}
      {/* <ButtonHandlers /> */}
      {/* <GreetForm /> */}
      {/* <ParseList /> */}
      <Reducer />
         {/* <h1>{ msg }</h1>
         <button className="btn" onClick={changeName}>Click Me pls</button> */}
         {/* <button className='rst-btn' onClick={resetName}>Reset</button> */}
    </div>
  )
}

export default App
