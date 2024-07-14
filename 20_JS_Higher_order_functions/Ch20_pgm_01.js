countries.forEach((country) => console.log(country));
names.forEach((name) => console.log(name));
numbers.forEach((number) => console.log(number));
const upperCaseCountries = countries.map((country) => country.toUpperCase());
console.log(upperCaseCountries);
const countryLengths = countries.map((country) => country.length);
console.log(countryLengths);
const squaredNumbers = numbers.map((number) => number ** 2);
console.log(squaredNumbers);
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames);
const prices = products.map((product) => product.price);
console.log(prices);
const countriesWithoutLand = countries.filter((country) =>!country.includes('land'));
console.log(countriesWithoutLand);
const countriesWithSixCharacters = countries.filter((country) => country.length === 6);
console.log(countriesWithSixCharacters);
const countriesWithSixOrMoreCharacters = countries.filter((country) => country.length >= 6);
console.log(countriesWithSixOrMoreCharacters);
const countriesNotStartingWithE = countries.filter((country) =>!country.startsWith('E'));
console.log(countriesNotStartingWithE);
const pricesWithValues = products.filter((product) => product.price!== '');
console.log(pricesWithValues);
function getStringLists(arr) {
  return arr.filter((item) => typeof item === 'tring');
}

const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum);

const sentence = countries.reduce((acc, current, index) => {
  if (index === 0) return current;
  if (index === countries.length - 1) return `${acc} and ${current}`;
  return `${acc}, ${current}`;
}, '');
console.log(`${sentence} are north European countries`);

const hasLongName = names.some((name) => name.length > 7);
console.log(hasLongName);

const allCountriesContainLand = countries.every((country) => country.includes('land'));
console.log(allCountriesContainLand);