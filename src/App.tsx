import { useEffect, useState } from 'react'
import './index.css'

function App() {

  type Card = {
    id: number;
    num: number;
  }

  const [gridSize, setgridSize] = useState(4)
  const [cards, setCards] = useState<Card[]>([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [won, setWon] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handleGridSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(e.target.value)
    if (size >= 2 && size <= 10) {
      setgridSize(size)
    }
  }

  const initializeGame = () => {
    const totalCards = gridSize * gridSize; //Initially 16
    const pairsCount = Math.floor(totalCards / 2) //Math.floor for numbers like 5*5 will be 25/2, so 12.5 will be 12
    const numberArr = [...Array(pairsCount).keys()].map(n => n + 1) //keys() is necessary to expand the iterator returned by .keys() into individual values so that they can be logged as an array of numbers.
    const shuffelCards: Card[] = [...numberArr, ...numberArr]
      .sort(() => Math.random() - 0.7)
      .map((num, idx) => ({ id: idx, num }))

    setCards(shuffelCards)
    //all states will get reset if a new game starts...
    setFlipped([])
    setSolved([])
    setWon(false)
  }

  useEffect(() => {
    initializeGame()
  }, [gridSize])

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

        {/*Game Board */}
        
        <div className={'grid gap-4 m-4'}
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0,1fr))`,
          width: `min(100, ${gridSize} * 60)rem`
        }}>
          {cards.map(card => {
            return <div 
            className='aspect-square flex justify-center items-center bg-slate-400 text-xl font-bold cursor-pointer 
            rounded-sm transition-all duration-300' 
            key={card.id}>
              {card.num}
            </div>
          })}
        </div>
      </div>



    </>
  )
}

export default App
