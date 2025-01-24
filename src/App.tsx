import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex min-h-screen bg-gray-100 items-center justify-center p-4'>
        <h1>MEMORY GAME</h1>
      </div>
        
    </>
  )
}

export default App
