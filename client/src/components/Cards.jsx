import "../Styles/cards.css";
import image from "../assets/6__1_.avif";

function Cards({ item }) {
  return (
    <div className="cards">
      <img src={item.image} alt={item.name} />
      <div className="rightContainer">
      <div className="textContainer">
        <h1 className="title">{item.nom}</h1>
        <p>{item.prix} / personnes</p>
      </div>
      <div className="buttonContainer">
        <button type="button" className="button">
          <a href={`https://www.babasport.fr${item.lien}`}>Go</a>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Cards;
