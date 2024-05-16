import React, { useState } from 'react';
import PageBtn from '../components/PageBtn';
import DiceBtn from '../components/DiceBtn';
import '../Styles/WelcomePage.css';

function WelcomePage() {
  const [step, setStep] = useState(0);

  const handleNextPage = () => {
    setStep(step + 1);
  };

  return (
    <section>
      {/* Étape 1 */}
      {step === 0 && (
        <section>
          <h2>Welcome on YES,DICE !</h2>
          <p>Entrez dans l'univers de Yes to Dice! Votre guide d'aventure par excellence, 
            Que vous soyez un citadin curieux, un amoureux de la nature ou un passionné de sport, 
            Yes to Dice! vous propose une expérience unique. Après avoir choisi vos catégories préférées, 
            laissez-vous surprendre par le lancer de dés qui vous mènera vers des aventures inattendues et palpitantes. 
            Préparez-vous à dire oui à chaque nouvelle expérience, avec Yes to Dice! comme complice de vos escapades les plus mémorables !</p>
          <PageBtn text="Start" onClick={handleNextPage} className="button-page" />
        </section>
      )}

      {/* Étape 2 */}
      {step === 1 && (
        <section>
          <input type="text" placeholder="Enter city name" />
          <PageBtn text="➡️" onClick={handleNextPage} className="button-page" />
        </section>
      )}

      {/* Étape 3 */}
      {step === 2 && (
        <section>
          <h2>Step 3</h2>
          <div className="category-images">
            <label>Sélectionnez vos catégories :</label>
            <div>
              <div>
                <input type="checkbox" className="category1" name="category1" />
                <label htmlFor="category1">
                  <img src="../src/assets/air.jpeg" alt="Category 1" />
                  Catégorie 1
                </label>
              </div>
              <div>
                <input type="checkbox" className="category2" name="category2" />
                <label htmlFor="category2">
                  <img src="../src/assets/eau.jpeg" alt="Category 2" />
                  Catégorie 2
                </label>
              </div>
              <div>
                <input type="checkbox" className="category3" name="category3" />
                <label htmlFor="category3">
                  <img src="../src/assets/hiking.jpeg" alt="Category 3" />
                  Catégorie 3
                </label>
              </div>
              <div>
                <input type="checkbox" className="category3" name="category3" />
                <label htmlFor="category3">
                  <img src="../src/assets/category3.jpg" alt="Category 3" />
                  Catégorie 3
                </label>
              </div>
              <div>
                <input type="checkbox" className="category3" name="category3" />
                <label htmlFor="category3">
                  <img src="../src/assets/category3.jpg" alt="Category 3" />
                  Catégorie 3
                </label>
              </div>
              <div>
                <input type="checkbox" className="category3" name="category3" />
                <label htmlFor="category3">
                  <img src="../src/assets/category3.jpg" alt="Category 3" />
                  Catégorie 3
                </label>
              </div>
            </div>
          </div>
          <DiceBtn onClick={handleNextPage} />
        </section>
      )}
    </section>
  );
}

export default WelcomePage;

