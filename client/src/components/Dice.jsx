import React, { useState, useEffect } from 'react';
import '../Styles/dice.css';

const Dice = ({ autoRoll }) => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const getRandom = (max, min) => {
    return (Math.floor(Math.random() * (max - min)) + min) * 90;
  };

  const handleClick = () => {
    const xRand = getRandom(24, 1);
    const yRand = getRandom(24, 1);
    setTransform({ x: xRand, y: yRand });
  };

  useEffect(() => {
    if (autoRoll) {
      handleClick();
    }
  }, [autoRoll]);

  return (
    <section className="container">
      <div
        id="cube"
        onClick={handleClick}
        style={{
          webkitTransform: `rotateX(${transform.x}deg) rotateY(${transform.y}deg)`,
          transform: `rotateX(${transform.x}deg) rotateY(${transform.y}deg)`,
          transition: 'transform 3s',
        }}
      >
        <div className="front">
          <span className="dot dot1"></span>
        </div>
        <div className="back">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
        </div>
        <div className="right">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
        </div>
        <div className="left">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
        </div>
        <div className="top">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
          <span className="dot dot5"></span>
        </div>
        <div className="bottom">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
          <span className="dot dot5"></span>
          <span className="dot dot6"></span>
        </div>
      </div>
    </section>
  );
};

export default Dice;
