import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(5)
  // let counter = 5
  const addValue = () => {
    if (counter < 20)
      counter++;
    setCount(counter);
    // console.log("value added ", counter)
  }

  const removeValue = () => {
    if (counter > 0)
      counter--;
    setCount(counter);
  }
  return (
    <>
      <h1>
        React js Series - Counter lesson
      </h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
