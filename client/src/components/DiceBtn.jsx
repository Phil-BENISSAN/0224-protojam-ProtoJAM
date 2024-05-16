import React from 'react';
import '../Styles/PageBtn.css';


function PageBtn() {
  return (
    <div>
      <Button type="button" onClick={handleClick} className="dice-Btn">Lancer le dès</Button>
    </div>
  );
}

function handleClick() {
}

export default PageBtn;