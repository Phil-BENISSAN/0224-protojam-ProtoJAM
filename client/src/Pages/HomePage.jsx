import SearchBar from "../components/SearchBar";
import DiceBtn from "../components/DiceBtn";
import "../Styles/homePage.css";

function HomePage() {
  return (
    <section>
      <SearchBar />
<ul>
  <li>
    <input type="checkbox" id="myCheckbox1" />
    <label htmlFor="myCheckbox1"><img src="../src/assets/air.jpeg" className="selection"/></label>
    <h2 className="titleCat">Air</h2>
  </li>
  <li>

    <input type="checkbox" id="myCheckbox2" />
    <label htmlFor="myCheckbox2"><img src="../src/assets/eau.jpeg" className="selection"/></label>
    <h2 className="titleCat">Aquatique</h2>
  </li>
  <li>

    <input type="checkbox" id="myCheckbox3" />
    <label htmlFor="myCheckbox3"><img src="../src/assets/hiking.jpeg" className="selection"/></label>
    <h2 className="titleCat">Marche</h2>
  </li>
  <li>

    <input type="checkbox" id="myCheckbox4" />
    <label htmlFor="myCheckbox4"><img src="../src/assets/Brickwall en gros plan.jpg" className="selection"/></label>
    <h2 className="titleCat">Urbain</h2>
  </li>
  <li>

    <input type="checkbox" id="myCheckbox5" />
    <label htmlFor="myCheckbox5"><img src="../src/assets/Voiture de course sur le parcours.jpg" className="selection"/></label>
    <h2 className="titleCat">Automobile</h2>
  </li>
  <li>

    <input type="checkbox" id="myCheckbox6" />
    <label htmlFor="myCheckbox6"><img src="../src/assets/Visite insolite Île Nantes.webp" className="selection"/></label>
    <h2 className="titleCat">Insolite</h2>
  </li>
</ul>
      <DiceBtn />
    </section>
  );
}

export default HomePage;
