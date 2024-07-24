import { useState, useEffect } from "react";

import Singlecard from "../components/Singlecard";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choicOne, setChoiceOne] = useState(null);
  const [choicTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice

  const handleChoice = (card) => {
    choicOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //  compare 2 selected cards
  useEffect(() => {
    if (choicOne && choicTwo) {
      setDisabled(true);
      if (choicOne.src === choicTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choicOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        console.log("Those cards do not match");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choicOne, choicTwo]);

  //  reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <div className="font-sans text-white">
        <div className="text-center p-4">
          <h1 className="mx-auto font-bold text-4xl p-2 mt-6 tracking-widest uppercase">
            Magic Match
          </h1>
          <button
            className="text-xl mt-5 p-2 border-2 rounded tracking-wider
              hover:border-violet-400 hover:text-violet-400 hover:font-bold"
            onClick={shuffleCards}
          >
            New Game
          </button>
        </div>

        <div className="mx-auto max-w-2xl mt-15 grid grid-cols-4 gap-2">
          {cards.map((card) => (
            <Singlecard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choicOne || card === choicTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p className="text-center p-4 text-xl">Turns : {turns}</p>
      </div>
    </>
  );
}

export default App;
