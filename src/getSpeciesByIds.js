const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    return [data.species.find((element) => element.id === ids[0])];
  }
  const especies = [];
  ids.forEach((idAtual) => especies.push(data.species.find((element) => element.id === idAtual)));
  return especies;
}

module.exports = getSpeciesByIds;
