import CardsList from "./components/cards-list";
import {useState, useEffect} from "react";
import "./App.css";

function App() {
  
  const [showDeck, setShowDeck] = useState(false);
  const [cardsList, setCardsList] = useState([]);
  const [deck, setDeck] = useState('');


  const handleDeckRequest = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/")
      .then((res) => res.json())
      .then((res) => setDeck(res.deck_id));
  };


  const handleCardsRequest = (deckId) => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`)
      .then((res) => res.json())
      .then((res) => setCardsList([...res.cards]));
  };

  const handleShowDeck = () => {
    setShowDeck(true);
  };



  useEffect(() => {
    handleDeckRequest();
  }, []);

  useEffect(() => {
    if (deck) handleCardsRequest(deck);
  }, [deck]);

  console.log(deck)
  console.log(cardsList)

  return (
    <div className="main-container">
      <h1 className="main-title">Debugue para ver o baralho</h1>
      <button onClick={handleShowDeck} className="new-deck-button">
        Novo baralho
      </button>
      {showDeck && <CardsList cardsList={cardsList} />}
    </div>
  );
};

export default App
