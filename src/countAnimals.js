const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
  }

  const selectedAnimal = data.species.find((element) => element.name === animal.specie);

  if (animal.specie && animal.sex) {
    return selectedAnimal.residents.filter((element) => element.sex === animal.sex).length;
  }

  return selectedAnimal.residents.length;
}

module.exports = countAnimals;
