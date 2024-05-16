import React from 'react';

function WelcomePage() {
  return (
    <section>
      <h2>Welcome on YES,MAN !</h2>
      <p>Entrez dans l'univers de Yes,Man! Votre guide d'aventure par excellence, 
        Que vous soyez un citadin curieux, un amoureux de la nature ou un passionné de sport, 
        Yes,Man! vous propose une expérience unique. Après avoir choisi vos catégories préférées, 
        laissez-vous surprendre par le lancer de dés qui vous mènera vers des aventures inattendues et palpitantes. 
        Préparez-vous à dire oui à chaque nouvelle expérience, avec Yes,Man! comme complice de vos escapades les plus mémorables !</p>
      <button type="Button" onClick={handleNextPage}>Start</button>
    </section>
  );
}

function handleNextPage() {
  // Ajoutez ici le code pour la navigation vers la page suivante
}

export default WelcomePage;
