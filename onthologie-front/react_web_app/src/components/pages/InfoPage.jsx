import React, { useEffect } from "react";

function InfoPage() {

  useEffect(() => {
    // Appel à l'API SPARQL
    fetch('http://localhost:3030/ds/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'query=' + encodeURIComponent(`
        PREFIX cinema: <http://www.semanticweb.org/33695/ontologies/2024/0/cinema#>
        SELECT ?realisateur ?film
        WHERE {
          ?realisateur cinema:estRéalisateurDe ?film .
        }
      `),
    })
    .then(response => response.json())
    .then(data => {
      // Affichage des données dans la console
      console.log(data);
    })
    .catch(error => {
      console.error('Erreur lors de la requête SPARQL :', error);
    });
  }, []); // Le tableau vide en tant que dépendance signifie que cet effet ne s'exécute qu'une seule fois, après le montage du composant.

  return <div>HERE WE WILL DISPLAY THE INFO</div>;
}

export default InfoPage;
