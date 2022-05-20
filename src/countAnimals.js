const data = require('../data/zoo_data');
// total animais 9
function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
  }

  const animalSelecionado = data.species.find((element) => element.name === animal.specie);
  if (animal.sex === undefined) {
    return animalSelecionado.residents.reduce((acc) => acc + 1, 0);
  }

  return animalSelecionado.residents.reduce((acc, cur) => {
    if (cur.sex === animal.sex) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

module.exports = countAnimals;
