import React, { useState } from "react"
import TopBar from "../atoms/TopBar";
import Filters from "../molecules/Filters";
import Divider from '@mui/material/Divider';
import Search from "../atoms/search";

function FiltrePage() {
    const [searchResult, setSearchResult] = useState(null);

    // producer
    const [selectedProducer, setSelectedProducer] = useState(null);
    const [selectedProducerValue, setSelectedProducerValue] = useState(null);

    // language
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedLanguageValue, setSelectedLanguageValue] = useState(null);

    const handleSelectProducer = (producer) => {
        setSelectedProducer(producer);
        setSelectedProducerValue(producer);
    };

    const handleSelectLanguage = (language) => {
        setSelectedLanguage(language);
        setSelectedLanguageValue(language);
    };

    const handleSearch = () => {
      console.log('selectedProducerValue', selectedProducerValue);
      console.log('selectedLanguageValue', selectedLanguageValue);
      if (selectedProducerValue) {
          fetch('http://localhost:3030/ds/query', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: 'query=' + encodeURIComponent(`
                  PREFIX cinema: <http://www.semanticweb.org/33695/ontologies/2024/0/cinema#>
                  SELECT ?film
                  WHERE {
                      ?film cinema:estRéaliséePar cinema:${selectedProducerValue}.
                      ?film cinema:estDisponibleEn cinema:${selectedLanguageValue}.
                  }
              `),
          })
          .then(response => response.json())
          .then(data => {
              setSearchResult(data);
              console.log(data);
          })
          .catch(error => {
              console.error('Erreur lors de la requête SPARQL :', error);
          });
      }
  };

    const extractFilmNames = () => {
        if (searchResult) {
            return searchResult.results.bindings.map(result => {
                const uri = result.film.value;
                const parts = uri.split("#");
                return parts[1];
            });
        } else {
            return [];
        }
    };

    return (
        <>
            <TopBar />
            <h1 style={{ textAlign: 'center', color: 'white', fontSize: '40px', marginTop: '5%' }}> Trouve ton film par filtrage !</h1>
            <Divider style={{ marginLeft: '40%', backgroundColor: 'white', width: '20%' }} />
            <Filters onSelectProducer={handleSelectProducer} onSelectLanguage={handleSelectLanguage}/>
            <Search onSearch={handleSearch} />
            {searchResult && (
                <div style={{ backgroundColor: 'darkgrey', fontSize: '2rem', display: 'flex', textAlign: 'center', marginTop: '2rem', marginLeft: '5%', marginRight: '5%' }}>
                    <h2>Résultats de la recherche :</h2>
                    <ul style={{ paddingLeft: '30%' }}>
                        {extractFilmNames().map((filmName, index) => (
                            <li key={index}>{filmName}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default FiltrePage;
