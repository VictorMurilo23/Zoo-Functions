const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const primeiraEspecie = data.employees.find((element) => element.id === id).responsibleFor[0];
  const animalMaisVelho = data.species.find((element) => element.id === primeiraEspecie).residents
    .sort((a, b) => b.age - a.age)[0];
  return [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
}

module.exports = getOldestFromFirstSpecies;
