import React, { useState } from "react";
import TopBar from "../atoms/TopBar";
import Divider from "@mui/material/Divider";
import Autocomplete from "../atoms/Autocomplete";
import Button from "@mui/material/Button";

function InfoPage() {
  const [filmNames, setFilmNames] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const handleSearch = (filmName) => {
    return new Promise((resolve, reject) => {
      if (filmName) {
        fetchActorsInFilm(filmName)
          .then((actorNames) => {
            fetchFilmsByActors(actorNames)
              .then(() => {
                resolve();
              })
              .catch((error) => {
                reject(error);
              });
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject("No film selected");
      }
    });
  };

  const fetchActorsInFilm = (filmName) => {
    return fetch("http://localhost:3030/ds/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `query=${encodeURIComponent(`
        PREFIX cinema: <http://www.semanticweb.org/33695/ontologies/2024/0/cinema#>
        SELECT DISTINCT ?acteur
        WHERE {
          cinema:${filmName} cinema:estJouéPar ?acteur .
        }
      `)}`,
    })
      .then((response) => response.json())
      .then((data) => {
        const actorNames = data.results.bindings.map((result) => {
          const uri = result.acteur.value;
          return uri.split("#")[1]; // Extraire le nom après le '#'
        });
        return actorNames;
      });
  };

  const fetchFilmsByActors = (actorNames) => {
    return fetch("http://localhost:3030/ds/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `query=${encodeURIComponent(`
        PREFIX cinema: <http://www.semanticweb.org/33695/ontologies/2024/0/cinema#>
        SELECT DISTINCT ?film
        WHERE {
          ?film cinema:estJouéPar ?acteur .
          VALUES ?acteur { ${actorNames.map((name) => `cinema:${name}`).join(" ")} }
          FILTER (?film != cinema:${selectedFilm})
        }
      `)}`,
    })
      .then((response) => response.json())
      .then((filmData) => {
        const films = filmData.results.bindings.map((result) => {
          const uri = result.film.value;
          return uri.split("#")[1]; // Extraire le nom après le '#'
        });
        setFilmNames(films);
      });
  };

  const handleSubmit = () => {
    handleSearch(selectedFilm)
      .then(() => {
        console.log("Requêtes terminées avec succès");
      })
      .catch((error) => {
        console.error("Erreur lors de la recherche :", error);
      });
  };

  return (
    <>
      <TopBar />
      <h1 style={{ textAlign: "center", color: "white", fontSize: "40px", marginTop: "5%" }}>
        {" "}
        Trouve ton film par recommandation !
      </h1>
      <Divider style={{ marginLeft: "40%", backgroundColor: "white", width: "20%" }} />
      <Autocomplete onSelect={(film) => setSelectedFilm(film)} />
      <Button
        onClick={handleSubmit}
        style={{ marginLeft: "44%", marginTop: "5%", color: "white", fontSize: "1.2rem", backgroundColor: "darkred", border: "2px solid black" }}
      >
        Search
      </Button>
      <ul>
        {filmNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default InfoPage;
