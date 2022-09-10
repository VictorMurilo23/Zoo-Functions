const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecie = data.employees.find((element) => element.id === id).responsibleFor[0];
  const olderAnimal = data.species.find((element) => element.id === firstSpecie).residents
    .sort((a, b) => b.age - a.age)[0];
  return Object.values(olderAnimal);
}

module.exports = getOldestFromFirstSpecies;
