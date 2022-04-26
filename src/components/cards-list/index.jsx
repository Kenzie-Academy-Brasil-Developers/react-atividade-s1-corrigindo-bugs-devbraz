import { useState } from "react";
import Card from "../card";
import "./style.css";

function CardsList({cardsList}) {

  const [suitFilter, setSuitFilter] = useState(false);

  const handleSuitFilter = (e) => {
    if (e.target.id === suitFilter) {
      setSuitFilter(true);
      e.target.checked = false;
    } else {
      setSuitFilter(e.target.id)
    }
  };

  return (
    <div className="filter-container">
      <p>Filtrar por naipe</p>
      <div>
        <input
          onChange={(e) => handleSuitFilter(e)}
          type="checkbox"
          id="SPADES"
          name="suit"
        />
        <label htmlFor="SPADES">Espadas</label>

        <input
          onChange={(e) => handleSuitFilter(e)}
          type="checkbox"
          id="HEARTS"
          name="suit"
        />
        <label htmlFor="HEARTS">Copas</label>

        <input
          onChange={(e) => handleSuitFilter(e)}
          type="checkbox"
          id="CLUBS"
          name="suit"
        />
        <label htmlFor="CLUBS">Paus</label>

        <input
          onChange={(e) => handleSuitFilter(e)}
          type="checkbox"
          id="DIAMONDS"
          name="suit"
        />
        <label htmlFor="DIAMONDS">Ouros</label>
      </div>
      <div>
     
        {suitFilter?
          <>
              {cardsList
                .filter((actual) => actual.suit === suitFilter)
                .map((actual, index) => {
                  return <Card actual={actual} card={actual} key={index} />;
                })
              }
          </>
        :
          <>
              {cardsList.map((actual, index) => {
                return <Card actual={actual} card={actual} key={index} />;
              })}
          </>
        }

      </div>
    </div>
    

  );
};

export default CardsList

