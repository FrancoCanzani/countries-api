import { Router } from 'express';
import fs from 'fs';

const router = Router();

fs.readFile('src/data/countriesData.json', 'utf-8', (error, data) => {
  if (error) {
    throw error;
  }

  const countries = JSON.parse(data);

  // Create an endpoint to get all countries
  router.get('/countries', (req, res) => {
    if (countries) {
      res.send(countries);
    } else {
      res.status(404).send('Countries not found');
    }
  });

  // endpoint to get a specific country by name
  router.get('/countries/:countryName', (req, res) => {
    const countryName = req.params.countryName;

    const country = countries.find(
      (country) =>
        country.name.common.toLowerCase() === countryName.toLowerCase()
    );

    if (country) {
      res.send(country);
    } else {
      res.status(404).send('Country not found');
    }
  });

  // endpoint to get countries by continent
  router.get('/countries/continent/:continentName', (req, res) => {
    const continentName = req.params.continentName;

    const countriesInContinent = countries.filter((country) =>
      country.continents.includes(continentName)
    );

    if (countriesInContinent.length > 0) {
      res.send(countriesInContinent);
    } else {
      res.status(404).send('Countries in this continent not found');
    }
  });

  // endpoint to get countries by language
  router.get('/countries/language/:languageName', (req, res) => {
    const languageName = req.params.languageName;

    const countriesWithLanguage = countries.filter((country) =>
      Object.values(country.languages).includes(languageName)
    );

    if (countriesWithLanguage.length > 0) {
      res.send(countriesWithLanguage);
    } else {
      res.status(404).send('Countries with this language not found');
    }
  });

  // endpoint to get countries by population
  router.get('/countries/population/:populationSize', (req, res) => {
    const populationSize = parseInt(req.params.populationSize); // Parse the population size as an integer

    const countriesWithPopulationOverPopulationSize = countries.filter(
      (country) => country.population >= populationSize
    );

    if (countriesWithPopulationOverPopulationSize.length > 0) {
      res.send(countriesWithPopulationOverPopulationSize);
    } else {
      res
        .status(404)
        .send('Countries with population over this size not found');
    }
  });
});

export default router;
