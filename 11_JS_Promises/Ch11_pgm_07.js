const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Task 1: Find the average weight of cat in metric unit
fetch(catsAPI)
 .then(response => response.json())
 .then(data => {
    const weights = data.map(breed => breed.weight.metric);
    const sum = weights.reduce((a, b) => a + b, 0);
    const averageWeight = sum / weights.length;
    console.log(`Average weight of cat in metric unit: ${averageWeight} kg`);
  })
 .catch(error => console.error('Error:', error));

// Task 2: Find the 10 largest countries
fetch(countriesAPI)
 .then(response => response.json())
 .then(data => {
    const largestCountries = data.sort((a, b) => b.area - a.area).slice(0, 10);
    console.log('10 largest countries:');
    largestCountries.forEach(country => console.log(`${country.name} - ${country.area} km²`));
  })
 .catch(error => console.error('Error:', error));

// Task 3: Count total number of languages in the world used as officials
fetch(countriesAPI)
 .then(response => response.json())
 .then(data => {
    const languages = data.reduce((acc, country) => {
      country.languages.forEach(lang => {
        if (!acc.includes(lang.iso639_1)) {
          acc.push(lang.iso639_1);
        }
      });
      return acc;
    }, []);
    console.log(`Total number of languages in the world used as officials: ${languages.length}`);
  })
 .catch(error => console.error('Error:', error));