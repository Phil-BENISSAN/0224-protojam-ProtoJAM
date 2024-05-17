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
        <section className="containCategory">
          <h2>Step 3</h2>
          <div className="category-images">
            <h2>Sélectionnez vos catégories :</h2>
            <div>
              <div>
                <input type="checkbox" className="category1" name="category1" />
                <label htmlFor="category1">
                  <h3>Catégorie 1</h3>
                  <img src="../src/assets/air.jpeg" alt="Category 1" />
                </label>
              </div>
              <div>
                <input type="checkbox" className="category2" name="category2" />
                <label htmlFor="category2">
                  <h3>Catégorie 2</h3>
                  <img src="../src/assets/eau.jpeg" alt="Category 2" />
                </label>
              </div>
              <div>
                <input type="checkbox" className="category3" name="category3" />
                <label htmlFor="category3">
                  <h3>Catégorie 3</h3>
                  <img src="../src/assets/hiking.jpeg" alt="Category 3" />
                </label>
              </div>
              <div>
                <input type="checkbox" className="category3" name="category3" />
                <label htmlFor="category3">
                  <h3>Catégorie 4</h3>
                  <img src="../src/assets/hiking.jpeg" alt="Category 3" />
                </label>
              </div>
              <div>
                <input type="checkbox" className="category3" name="category3" />
                <label htmlFor="category3">
                  <h3>Catégorie 5</h3>
                  <img src="../src/assets/hiking.jpeg" alt="Category 3" />
                </label>
              </div>
              <div>
                <input type="checkbox" className="category3" name="category3" />
                <label htmlFor="category3">
                  <h3>Catégorie 6</h3>
                  <img src="../src/assets/hiking.jpeg" alt="Category 3" />
                </label>
              </div>
            </div>
          </div>
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
