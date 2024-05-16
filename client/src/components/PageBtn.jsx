import React from 'react';
import "../Styles/pageBtn.css";


function PageBtn({ text, onClick, className }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div>
      <button type="button" onClick={handleClick} className={className}>{text}</button>
    </div>
  );
}

export default PageBtn;

