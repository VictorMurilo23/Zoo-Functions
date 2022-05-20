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
// console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));
// find((element) => element.id === ids[0])
module.exports = getSpeciesByIds;
