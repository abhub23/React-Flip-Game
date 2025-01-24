import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [gridSize, setgridSize] = useState(4)
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [won, setWon] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handleGridSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(e.target.value)
    if(size >= 2 && size <= 10){
      setgridSize(size)
    }
  }

  const initializeGame = () => {
    const totalCards = gridSize * gridSize; //Initially 16
    const pairsCount = Math.floor(totalCards / 2) //Math.floor isn't necessary
    const numberArr = [...Array(pairsCount).keys()].map(n => n+1) //keys() is necessary to expand the iterator returned by .keys() into individual values so that they can be logged as an array of numbers.
    const shuffelCards = [...numberArr,...numberArr]
    .sort(() => Math.random() - 0.7)
    .map((num,idx) => ({id: idx, num}))
    console.log(shuffelCards);
    

    setCards(shuffelCards)
    setFlipped([])
    setSolved([])
    setWon(false)
  }

  useEffect(()=>{
    initializeGame()
  },[gridSize])
  
  return (
    <>
      <div className='flex flex-col min-h-screen bg-red-50 items-center justify-center p-4'>
        <h1 className='mb-6 text-xl'>MEMORY GAME</h1>
        <div className='font-thin'>
          <label htmlFor="gridSize" className='mr-2'>Select Size: (Max 10) </label>
          <input type="number"
            id='gridSize'
            min="2"
            max={10}
            value={gridSize}
            className='px-2 py-1 border border-1 border-black rounded'
            onChange={handleGridSize}
          />
        </div>
      </div>

      {/*Game Board */}
      

    </>
  )
}

export default App
