const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    return data.species.filter((element) => element.id === ids[0]);
  }
  const species = [];
  for (let index = 0; index < ids.length; index += 1) {
    const findSpecieById = data.species.find((element) => element.id === ids[index]);
    species.push(findSpecieById);
  }
  return species;
}

module.exports = getSpeciesByIds;
