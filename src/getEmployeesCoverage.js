const data = require('../data/zoo_data');

function getSpecies(objeto) {
  const animaisResponsaveis = [];
  objeto.responsibleFor.forEach((element) => {
    const atual = data.species.find((animal) => animal.id === element).name;
    animaisResponsaveis.push(atual);
  });
  return animaisResponsaveis;
}

function getLocation(objeto) {
  const localizacoes = [];
  objeto.responsibleFor.forEach((element) => {
    const atual = data.species.find((animal) => animal.id === element).location;
    localizacoes.push(atual);
  });
  return localizacoes;
}

function result(empre) {
  if (empre === undefined) {
    throw new Error('Informações inválidas');
  }
  return { id: empre.id,
    fullName: `${empre.firstName} ${empre.lastName}`,
    species: getSpecies(empre),
    locations: getLocation(empre) };
}

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    const arr = [];
    data.employees.forEach((element) => {
      arr.push(result(element));
    });
    return arr;
  }
  const empregado = data.employees.find((element) => {
    if (element.firstName === obj.name || element.lastName === obj.name || element.id === obj.id) {
      return element;
    }
    return undefined;
  });
  try {
    return result(empregado);
  } catch (error) {
    throw error.message;
  }
}

module.exports = getEmployeesCoverage;
