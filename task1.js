const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

//První část
function checkCountry(country, countries) {
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return;
  }
  const index = countries.indexOf(country);
  if (index !== -1) {
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${index}.`
    );
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
  }
}

//checkCountry("Germany", countries);
//checkCountry("Japan", countries);
//checkCountry(1000, countries);

//Druhá část
function addCountry(country, countries) {
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return;
  }
  const index = countries.indexOf(country);
  if (index !== -1) {
    console.log(
      `Zadaná krajina ${country} se nachází v sezname krajin na indexu ${index}.`
    );
  } else {
    countries.push(country);
    const addedIndex = countries.indexOf(country);
    const numCountries = countries.length;
    console.log(
      `Zadaná krajina ${country} byla úspěšně přidána do seznamu krajin na indexu ${addedIndex}. Celkový počet krajin v seznamu je ${numCountries}.`
    );
  }
}

//addCountry("Vietnam", countries);
//addCountry("Mexico", countries);
//addCountry("Poland", countries);
//addCountry("", countries);

//Třetí část
function removeCountry(country, countries) {
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}.`);
    return;
  }

  const index = countries.indexOf(country);
  if (index !== -1) {
    countries.splice(index, 1);
    console.log(
      `Zadaná krajina ${country} byla odstraněna ze seznamu krajin na indexu ${index}. Aktuální počet krajin v seznamu je ${countries.length}.`
    );
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu.`);
  }
}

//removeCountry("", countries);
//removeCountry("Vietnam", countries);
//removeCountry("Laos", countries);
//removeCountry("Thailand", countries);
