import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [colour, setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: colour}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button className='outline-none px-4 py-1 rounded-full bg-red-600 text-white shadow-lg' onClick={() => setColor('red')}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full bg-green-600 text-white shadow-lg' onClick={() => setColor('green')}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg' onClick={() => setColor('blue')}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full bg-black text-white shadow-lg' onClick={() => setColor('black')}>Black</button>
            <button className='outline-none px-4 py-1 rounded-full bg-gray-600 text-white shadow-lg' onClick={() => setColor('gray')}>Gray</button>
            <button className='outline-none px-4 py-1 rounded-full bg-yellow-400 text-white shadow-lg' onClick={() => setColor('yellow')}>Yellow</button>
            <button className='outline-none px-4 py-1 rounded-full bg-pink-600 text-white shadow-lg' onClick={() => setColor('#DB2777')}>Pink</button>
            <button className='outline-none px-4 py-1 rounded-full bg-white text-black shadow-lg' onClick={() => setColor('white')}>White</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
