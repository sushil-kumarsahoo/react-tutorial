import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
let myObj = {
  userName:"sushil",
  age: 21
}
let newArray= [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>tailwind test</h1>
     <Card username="sushil" btnText="visit me"/>
     <Card/>
    </>
  )
}

export default App
