import React from "react";

function RestartButton() {

    function handleClick() {
        window.location.reload();
      }

  return (
    <button className="restart-button" onClick={handleClick}>
      Reiniciar
    </button>
  );
}

export default RestartButton;