import "../Styles/DiceBtn.css";
import { Link } from "react-router-dom";

function DiceBtn({ onClick }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div>
      <button type="button" onClick={handleClick} className="dice-Btn">
        <Link to="/activity">Lancer le dès</Link>
      </button>
    </div>
  );
}

export default DiceBtn;
