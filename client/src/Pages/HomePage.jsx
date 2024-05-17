import SearchBar from "../components/SearchBar";
import DiceBtn from "../components/DiceBtn";
import "../Styles/homePage.css";

function HomePage() {
  return (
    <section>
      <SearchBar />
      {/* <div className="category-images">
            <label>Sélectionnez vos catégories :</label>
            <div >
              <div>
                <input type="checkbox" className="category1" name="category1" />
                <label htmlFor="category1">
                  <img src="../src/assets/air.jpeg" alt="Category 1" className="imgCategory"/>
                  Air
                </label>
              </div>
              <div>
                <input type="checkbox" className="category2" name="category2" />
                <label htmlFor="category2">
                  <img src="../src/assets/eau.jpeg" alt="Category 2" className="imgCategory"/>
                  Aquatique
                </label>
              </div>
              <div>
                <input type="checkbox" className="category3" name="category3" />
                <label htmlFor="category3">
                  <img src="../src/assets/hiking.jpeg" alt="Category 3" className="imgCategory"/>
                  Marche
                </label>
              </div>
              <div>
                <input type="checkbox" className="category4" name="Activités urbaines" />
                <label htmlFor="Activités urbaines">
                  <img src="../src/assets/Brickwall en gros plan.jpg" alt="Activités urbaines" className="imgCategory" />
                  Urbain
                </label>
              </div>
              <div>
                <input type="checkbox" className="category5" name="category5" />
                <label htmlFor="category5">
                  <img src="../src/assets/Voiture de course sur le parcours.jpg" alt="Category 5" className="imgCategory"/>
                  Automobile
                </label>
              </div>
              <div>
                <input type="checkbox" className="category6" name="category6" />
                <label htmlFor="category6">
                  <img src="../src/assets/Visite insolite Île Nantes.webp" alt="Category 6" className="imgCategory"/>
                  Insolite
                </label>
              </div>
            </div>
          </div> */}
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
