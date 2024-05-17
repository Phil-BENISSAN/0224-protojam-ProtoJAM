import SearchBar from "../components/SearchBar";
import DiceBtn from "../components/DiceBtn"
import { useState } from "react";

    function HomePage() {
      
  return <section>
   <SearchBar />
   <div className="category-images">
            <label>Sélectionnez vos catégories :</label>
            <div>
              <div>
                <input type="checkbox" className="category1" name="category1" />
                <label htmlFor="category1">
                  <img src="../src/assets/air.jpeg" alt="Category 1" />
                  Air
                </label>
              </div>
              <div>
                <input type="checkbox" className="category2" name="category2" />
                <label htmlFor="category2">
                  <img src="../src/assets/eau.jpeg" alt="Category 2" />
                  Aquatique
                </label>
              </div>
              <div>
                <input type="checkbox" className="category3" name="category3" />
                <label htmlFor="category3">
                  <img src="../src/assets/hiking.jpeg" alt="Category 3" />
                  Marche
                </label>
              </div>
              <div>
                <input type="checkbox" className="category4" name="Activités urbaines" />
                <label htmlFor="Activités urbaines">
                  <img src="../src/assets/Brickwall en gros plan.jpg" alt="Activités urbaines" />
                  Urbain
                </label>
              </div>
              <div>
                <input type="checkbox" className="category5" name="category5" />
                <label htmlFor="category5">
                  <img src="../src/assets/Voiture de course sur le parcours.jpg" alt="Category 5" />
                  Automobile
                </label>
              </div>
              <div>
                <input type="checkbox" className="category6" name="category6" />
                <label htmlFor="category6">
                  <img src="../src/assets/Visite insolite Île Nantes.webp" alt="Category 6" />
                  Insolite
                </label>
              </div>
            </div>
          </div>
  <DiceBtn/>
      </section>
}

export default HomePage;