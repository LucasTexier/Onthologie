// API call with a fetch request : general function

export const getDataFromAPI = (apiUrl) => {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        // la requête a échoué
        return response.status;
      }
      return response.json(); // Convertir la réponse JSON en objet JavaScript
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {});
};
