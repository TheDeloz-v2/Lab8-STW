import React, { useState } from "react";
import Card from "./Card";
import { cardsData } from "../cards";
import Counter from "./Counter"; // Importar el componente Counter

function Game() {
  // states
  let [cardsState, setCardsState] = useState(cardsData);
  let [firstCard, setFirstCard] = useState(null);
  let [secondClick, setSecondClick] = useState(false);
  let [wait, setWait] = useState(false);
  let [count, setCount] = useState(0);
  let [gameOver, setGameOver] = useState(false); // Agregar el estado gameOver

  // functions
  const checker = async (card) => {
    if (card.name === firstCard.name) {
      card["passed"] = true;
      firstCard["passed"] = true;
      changeCardStatusHandler(card);
      changeCardStatusHandler(firstCard);
    } else {
      setWait(true);
      setTimeout(() => {
        changeCardStatusHandler(card);
        changeCardStatusHandler(firstCard);
        setWait(false);
      }, 1500);
    }
    setCount(count + 1);
    checkGameStatus(); // Llamar a la función checkGameStatus después de cada movimiento
  };

  const changeCardStatusHandler = async (clickedCard) => {
    if (!clickedCard.passed) clickedCard.isFlipped = !clickedCard.isFlipped;
    let index = cardsState.findIndex((card) => card.id === clickedCard.id);
    let newState = [...cardsState];
    newState.splice(index, 1, clickedCard);
    await setCardsState(newState);
  };

  const handleClick = async (e, clickedCard) => {
    if (wait || clickedCard.passed || gameOver) { // Agregar la condición gameOver en el if
      return;
    }
    if (!secondClick) {
      await setFirstCard(clickedCard);
      await setSecondClick(true);
      changeCardStatusHandler(clickedCard);
    } else {
      await setSecondClick(false);
      changeCardStatusHandler(clickedCard);
      checker(clickedCard);
      setFirstCard(null);
    }
  };

  const checkGameStatus = () => {
    let allPassed = true;
    cardsState.forEach((card) => {
      if (!card.passed) allPassed = false;
    });
    if (allPassed) {
      setGameOver(true);
    }
  };

  return (
    <>
      {gameOver ? (
        <div className="game-over-message">¡Felicidades, has ganado!</div>
      ) : (
        <>
          <section className="memory-game">
            {cardsState?.map((card) => {
              return (
                <Card
                  key={card.id}
                  card={card}
                  onClick={(e) => handleClick(e, card)}
                />
              );
            })}
          </section>
          <section className="counter">
            <Counter
              count={count}
              style={{ position: "absolute", bottom: "0" }} /> {/* Agregar el componente Counter */}
          </section></>
        )}
    </>
  );
}

export default Game;