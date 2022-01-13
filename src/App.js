import { useState } from "react";
import "./App.css";

const cardImgs = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImgs, ...cardImgs]
      // returns num between 0 and 1, subtracting 0.5 gives either neg or pos num
      .sort(() => Math.random() - 0.5)
      // spreads all properties of the card, adds an id to each card 
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Memory Match</h1>
      <button onClick={shuffleCards}>New Game!</button>
    </div>
  );
}

export default App;
