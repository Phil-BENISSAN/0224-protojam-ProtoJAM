import React from 'react';
import '../Styles/PageBtn.css';


function PageBtn() {
  return (
    <div>
      <Button type="button" onClick={handleClick} className="button-page">Cliquez-moi</Button>
    </div>
  );
}

function handleClick() {
}

export default PageBtn;
