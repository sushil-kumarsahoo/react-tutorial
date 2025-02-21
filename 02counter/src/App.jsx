import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

     //let counter = 15

     const addValue = () => {
     //counter = counter+1
     if(counter<20){
      setCounter(prevCounter => prevCounter+1) //prevcounter is just a name which returns last updated state   
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      //setCounter(counter+1)

     }
      
     }
     const removeValue = () =>{
     if(counter > 0){
      setCounter(counter-1)
     }
     }

  return (
    <>
      <h1>counter project</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
