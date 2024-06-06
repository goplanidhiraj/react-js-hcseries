import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charsAllowed, setCharsAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passref = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)
      str += "0123456789"
    if(charsAllowed)
      str += "!@#$%^&*()_-+="

    for(let i=0; i < length; i++)
      pass += str.charAt(Math.floor(Math.random() * str.length));

    setPassword(pass)

  }, [length, numberAllowed, charsAllowed, setPassword])
  
  const passCopyToClipboard = useCallback(() => {    
    //To select the text we are copying to clipboard. Input field in this case
    passref.current?.select();
    passref.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => { passwordGenerator()}, [length, numberAllowed, charsAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' className='outline-none w-full py-1 px-3' value={password} placeholder='password' readOnly ref={passref} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={passCopyToClipboard}>copy</button>
        </div>
        <div className = 'flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'></div>
          <input type='range' min={6} max={100} value={length} className='cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}}></input>
          <label>Length: {length}</label>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} id='numberinput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}></input>
              <label htmlFor='numberinput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charsAllowed} id='charsinput'
              onChange={() => {
                setCharsAllowed((prev) => !prev);
              }}></input>
              <label htmlFor='charsinput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
