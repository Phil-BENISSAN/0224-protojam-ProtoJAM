import React from 'react';
import '../Styles/diceBtn.css';

function DiceBtn({ onClick }) {
    const handleClick = () => {
      onClick();
    };
  
    return (
      <div>
        <button type="button" onClick={handleClick} className="dice-Btn">Lancer le dès</button>
      </div>
    );
  }
  
  export default DiceBtn;
