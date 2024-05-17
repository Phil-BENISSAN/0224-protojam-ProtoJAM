import React, { useState } from "react";
import PageBtn from "../components/PageBtn";
import DiceBtn from "../components/DiceBtn";
import "../Styles/WelcomePage.css";
import SearchBar from "../components/SearchBar";
import { Link, useNavigate } from "react-router-dom";

function WelcomePage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNextPage = () => {
    setStep(step + 1);
  };

  const handleDiceRoll = () => {
    navigate('/Loading');
  };

  return (
    <section>
      {/* Étape 1 */}
      {step === 0 && (
        
        <section className="containWelcomeText">
          <article className="banner"></article>
          <div>
            <h2 className="titleWelcome">Bienvenue sur YES TO DÉ !</h2>
            <p className="WelcomeText">
              Entrez dans l'univers de Yes to Dé! Votre guide d'aventure par
              excellence, Que vous soyez un citadin curieux, un amoureux de la
              nature ou un passionné de sport, Yes to Dé! vous propose une
              expérience unique. Après avoir choisi vos catégories préférées,
              laissez-vous surprendre par le lancer de dé qui vous mènera vers
              des aventures inattendues et palpitantes. Préparez-vous à dire oui
              à chaque nouvelle expérience, avec Yes to Dé! comme complice de
              vos escapades les plus mémorables !
            </p>
          </div>
          <article className="btnNext">
            <PageBtn
              text="START"
              onClick={handleNextPage}
              className="button-page"
            />
          </article>
        </section>
      )}

      {/* Étape 2 */}
      {step === 1 && (
        <section>
          <SearchBar />
          <article className="btnNext">
            <PageBtn
              text="SUIVANT"
              onClick={handleNextPage}
              className="button-page"
            />
          </article>
        </section>
      )}

      {/* Étape 3 */}
      {step === 2 && (
        <section className="containCategory containCategory2">
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
          <DiceBtn onClick={handleDiceRoll} />
        </section>
      )}

      {/* Étape 4 - Lancer de dé */}
      {step === 3 && (
        <section>
          <h2>Roll the Dice!</h2>
          <Dice />
          <article className="btnNext">
            <Link to="/Loading">
              <PageBtn
                text="FINISH"
                onClick={handleNextPage}
                className="button-page"
              />
            </Link>
          </article>
        </section>
      )}
    </section>
  );
}

export default WelcomePage;
