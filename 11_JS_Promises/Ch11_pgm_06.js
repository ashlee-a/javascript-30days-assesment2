const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    const catNames = data.map(breed => breed.name);
    console.log(catNames);
  })
  .catch(error => console.error('Error:', error));