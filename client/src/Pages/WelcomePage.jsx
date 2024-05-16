import React, { useState } from 'react';
import PageBtn from '../components/PageBtn';
import DiceBtn from '../components/DiceBtn';


function WelcomePage() {
  const [step, setStep] = useState(0);

  const handleNextPage = () => {
    setStep(step + 1);
  };

  // Structure de données pour les catégories
  const categories = [
    { name: 'Catégorie 1', image: "" },
    { name: 'Catégorie 2', image: "" },
    { name: 'Catégorie 3', image: "" },
    // Ajoutez les autres catégories ici
  ];

  return (
    <section>
      {/* Étape 1 */}
      {step === 0 && (
        <section>
          <h2>Welcome on YES,MAN !</h2>
          <p>Entrez dans l'univers de Yes,Man! Votre guide d'aventure par excellence, 
            Que vous soyez un citadin curieux, un amoureux de la nature ou un passionné de sport, 
            Yes,Man! vous propose une expérience unique. Après avoir choisi vos catégories préférées, 
            laissez-vous surprendre par le lancer de dés qui vous mènera vers des aventures inattendues et palpitantes. 
            Préparez-vous à dire oui à chaque nouvelle expérience, avec Yes,Man! comme complice de vos escapades les plus mémorables !</p>
          <PageBtn text="Start" onClick={handleNextPage} className="button-page" />
        </section>
      )}

      {/* Étape 2 */}
      {step === 1 && (
        <section>
          <h2>Step 2</h2>
          <input type="text" placeholder="Enter city name" />
          <PageBtn text="➡️" onClick={handleNextPage} className="button-page" />
        </section>
      )}

      {/* Étape 3 */}
      {step === 2 && (
        <section>
          <h2>Step 3</h2>
          <div>
            <label>Sélectionnez vos catégories :</label>
            <div>
              {categories.map((category, index) => (
                <div key={index}>
                  <input type="checkbox" id={`category${index}`} name={`category${index}`} />
                  <label htmlFor={`category${index}`}>
                    <img src={category.image} alt={category.name} />
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <DiceBtn onClick={handleNextPage} />
        </section>
      )}
    </section>
  );
}

export default WelcomePage;
