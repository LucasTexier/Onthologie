// InfoPage.jsx
import React, { useState } from "react";
import TopBar from "../atoms/TopBar";
import Divider from "@mui/material/Divider";
import Autocomplete from "../atoms/Autocomplete";
import BasicButton from "../atoms/search2";
import Autocomplete2 from "../atoms/Autocomplete2";

function InfoPage() {
  const [actors, setActors] = useState([]);
  const [filmsByActor, setFilmsByActor] = useState([]);

  const handleSearchForActorsInFilm = (filmName) => {
    if (!filmName) {
      console.error("No film selected");
      return;
    }

    fetchActorsInFilm(filmName)
      .then((actorNames) => {
        setActors(actorNames);
        console.log("Actors in film:", actorNames);
      })
      .catch((error) => {
        console.error("Error searching for actors in film:", error);
      });
  };

  const handleSearchForFilmsByActor = (actorName) => {
    if (!actorName) {
      console.error("No actor selected");
      return;
    }

    fetchFilmsByActor(actorName)
      .then((films) => {
        setFilmsByActor(films);
        console.log("Films played by actor:", films);
      })
      .catch((error) => {
        console.error("Error searching for films by actor:", error);
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

  const fetchFilmsByActor = (actorName) => {
    return fetch("http://localhost:3030/ds/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `query=${encodeURIComponent(`
        PREFIX cinema: <http://www.semanticweb.org/33695/ontologies/2024/0/cinema#>
        SELECT DISTINCT ?film
        WHERE {
          ?film cinema:estJouéPar cinema:${actorName} .
        }
      `)}`,
    })
      .then((response) => response.json())
      .then((data) => {
        const films = data.results.bindings.map((result) => {
          const uri = result.film.value;
          return uri.split("#")[1]; // Extraire le nom après le '#'
        });
        return films;
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
      <Autocomplete onSelect={handleSearchForActorsInFilm} />
      <BasicButton onClick={() => handleSearchForActorsInFilm()} />
      <h2 style={{ textAlign: "center", color: "white", fontSize: "25px", marginTop: "2%" }}>
        {" "}
        Acteurs dans le film :
        <ul>
          {actors.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </h2>
      <Autocomplete2 onSelectActor={handleSearchForFilmsByActor} />
      <h2 style={{ textAlign: "center", color: "white", fontSize: "25px", marginTop: "2%" }}>
        {" "}
        Films joués par l'acteur/ice :
        <ul>
          {filmsByActor.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ul>
      </h2>
    </>
  );
}

export default InfoPage;
