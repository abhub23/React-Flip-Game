import { useEffect } from "react";
import {
  useCards,
  useDisabled,
  useFlipped,
  useGridsize,
  useSolved,
  useWon,
} from "../store/store";
import {
  SunIcon,
  MoonIcon,
} from '@radix-ui/react-icons';
import Footer from "../components/Footer";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
const Game = () => {

  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light')
  }
  type Card = {
    id: number;
    num: number;
  };
  const { gridSize, handleGridSize } = useGridsize();
  const { cards, setCards } = useCards();
  const { flipped, setFlipped } = useFlipped();
  const { solved, setSolved } = useSolved();
  const { won, setWon } = useWon();
  const { disabled, setDisabled } = useDisabled()

  const initializeGame = () => {
    const totalCards = gridSize * gridSize; //Initially 16
    const pairsCount = Math.floor(totalCards / 2); //Math.floor for numbers like 5*5 will be 25/2, so 12.5 will be 12
    const numberArr = [...Array(pairsCount).keys()].map((n) => n + 1); //keys() is necessary to expand the iterator returned by .keys() into individual values so that they can be logged as an array of numbers.
    const shuffelCards: Card[] = [...numberArr, ...numberArr]
      .sort(() => Math.random() - 0.7)
      .map((num, idx) => ({ id: idx, num }));

    setCards(shuffelCards);
    //all states will get reset if a new game starts...
    setFlipped([]);
    setSolved([]);
    setWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, [gridSize]);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true)
    }
  }, [solved])

  const Solved = (secondId: number) => {
    const firstId = flipped[0]  // getting first id from flipped array
    if (cards[firstId].num === cards[secondId].num) {
      setSolved([...solved, firstId, secondId])
      setFlipped([])
      setDisabled(false)
    } else {
      setTimeout(() => {
        setFlipped([])
        setDisabled(false)
      }, 1000);
    }
  }

  const handleClick = (id: number) => {
    if (disabled || won) {
      return
    }

    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }

    if (flipped.length === 1) {
      setDisabled(true)
      if (id != flipped[0]) {
        setFlipped([...flipped, id])
        Solved(id)
      } else {
        setDisabled(false)
      }
    }
  }

  const isFlipped = (id: number) => flipped.includes(id) || solved.includes(id)
  const isSolved = (id: number) => solved.includes(id)

  return (
    <>
      <div>
        <div className={`flex flex-col min-h-screen bg-red-50 dark:bg-zinc-950 items-center justify-center p-4 font-mono`}>
          <div className="fixed mb-2 flex justify-center items-end">
            <h1 className='fixed top-6 mb-2 lg:text-[24px] text-[18px] text-black dark:text-white'>MEMORY GAME</h1>
            <p className="fixed lg:right-10 right-4 top-6 lg:h-[24px] h-[20px] dark:text-white mb-2" onClick={handleTheme}>{theme == 'light' ? <MoonIcon className="h-[20px] w-[30px] cursor-pointer" /> : <SunIcon className="h-[20px] w-[30px] cursor-pointer" />}</p>
          </div>

          <div className="fixed top-[60px] font-thin flex items-center justify-center">
            <label htmlFor="gridSize" className='mr-2 lg:text-xl text-14px text-black dark:text-white'>
              Select Size: ({gridSize} x {gridSize}){" "}
            </label>
            <input
              type="number"
              id="gridSize"
              value={gridSize}
              className='px-2 py-1 border-2 w-20 dark:text-white rounded border-black dark:border-zinc-700'
              onChange={handleGridSize}
              step={2}
              min={2}
              max={10}
            />
          </div>

          {/*Game Board */}

          <motion.div

            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={"grid gap-4  lg:mt-[60px] "}
            style={{
              gridTemplateColumns: `repeat(${gridSize}, minmax(0,1fr))`,
              width: `min(100, ${gridSize} * 60)rem`,
            }}
          >
            {cards.map((card) => {
              return (
                <div
                  className={`aspect-square h-[30px] flex justify-center shadow-lg shadow-rose-300 border-black 
              border-[1px] items-center text-black  text-md font-thin cursor-pointer 
              rounded-sm transition-all duration-300 font-mono ${isFlipped(card.id) ? isSolved(card.id) ? 'bg-green-300' : 'bg-blue-300' : 'bg-slate-200'}`}
                  key={card.id}
                  onClick={() => {
                    handleClick(card.id)
                  }}
                >
                  {isFlipped(card.id) ? card.num : '?'}
                </div>
              );
            })}
          </motion.div>

          {won && <div className="lg:p-[2px] p-[2px] lg:h-[40px] h-[30px] lg:mt-[24px] mt-[14px] lg:text-[32px] text-[20px] font-semibold text-green-500 animate-bounce"> You won </div>}

          {<motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:p-[4px] p-[4px] lg:px-[18px] px-[10px] lg:h-[40px] h-[30px] lg:mt-[28px] mt-[14px] lg:mb-[14px] mb-[6px] text-white bg-black dark:text-black dark:bg-white  border-1 border-black rounded-[6px] dark:border-white lg:text-[22px] text-[14px] font-semibold cursor-pointer"
            onClick={initializeGame}>{won ? 'Play again' : 'Reset'}
          </motion.button>}
          <Footer />
        </div>
      </div>

    </>
  );
};

export default Game;
