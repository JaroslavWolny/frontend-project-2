const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];

const populationTotal = 8000000000;

//Funkce pro výpočet procenta
function percentageOfPopulation(population, totalPopulation) {
  const percentage = (population / totalPopulation) * 100;
  return parseFloat(percentage.toFixed(2));
}

//Kopie pole
const copyCountries = countriesPopulation.slice();

//Seřazení podle populace
copyCountries.sort((a, b) => a.population - b.population);

//Přidání id
copyCountries.forEach((country, index) => {
  const id = country.country.slice(0, 3) + index;
  country.id = id;
});

//Projetí s použitím .forEach
copyCountries.forEach((country) => {
  const percentage = percentageOfPopulation(
    country.population,
    populationTotal
  );
  country.percentage = percentage;
});

//Vytvoření nového pole
const filteredCountries = copyCountries.filter(
  (country) =>
    country.country.length > 4 &&
    country.country.length <= 8 &&
    country.percentage > 1.5 &&
    country.percentage < 10
);

//Výsledek
console.log(filteredCountries);
