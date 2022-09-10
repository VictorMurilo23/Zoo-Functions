const data = require('../data/zoo_data');

function findAnimalsBySex(animais, sorted, sex) {
  return animais.reduce((acc, cur) => {
    const todosOsNomes = cur.residents.filter((element) => element.sex === sex)
      .map((element) => element.name);
    if (sorted) {
      acc.push({ [cur.name]: todosOsNomes.sort() });
    } else {
      acc.push({ [cur.name]: todosOsNomes });
    }
    return acc;
  }, []);
}

function findAnimais(animais, sorted, sex) {
  if (sex === 'male' || sex === 'female') {
    return findAnimalsBySex(animais, sorted, sex);
  }
  return animais.reduce((acc, cur) => {
    const allNames = cur.residents.map((element) => element.name);
    if (sorted) {
      acc.push({ [cur.name]: allNames.sort() });
    } else {
      acc.push({ [cur.name]: allNames });
    }
    return acc;
  }, []);
}

function animalsNE(obj, booNames, booSorted, animalSex) {
  const param = obj;
  const normal = data.species.filter((animal) => animal.location === 'NE');
  if (booNames) {
    param.NE = findAnimais(normal, booSorted, animalSex);
  } else {
    param.NE = normal.map((animal) => animal.name);
  }
}

function animalsNW(obj, booNames, booSorted, animalSex) {
  const param = obj;
  const normal = data.species.filter((animal) => animal.location === 'NW');
  if (booNames) {
    param.NW = findAnimais(normal, booSorted, animalSex);
  } else {
    param.NW = normal.map((animal) => animal.name);
  }
}

function animalsSE(obj, booNames, booSorted, animalSex) {
  const param = obj;
  const normal = data.species.filter((animal) => animal.location === 'SE');
  if (booNames) {
    param.SE = findAnimais(normal, booSorted, animalSex);
  } else {
    param.SE = normal.map((animal) => animal.name);
  }
}

function animalsSW(obj, booNames, booSorted, animalSex) {
  const param = obj;
  const normal = data.species.filter((animal) => animal.location === 'SW');
  if (booNames) {
    param.SW = findAnimais(normal, booSorted, animalSex);
  } else {
    param.SW = normal.map((animal) => animal.name);
  }
}
function getAnimalMap(options = undefined) {
  const obj = {};
  if (options === undefined) {
    animalsNE(obj); animalsNW(obj); animalsSE(obj); animalsSW(obj);
  } else if (options) {
    animalsNE(obj, options.includeNames, options.sorted, options.sex);
    animalsNW(obj, options.includeNames, options.sorted, options.sex);
    animalsSE(obj, options.includeNames, options.sorted, options.sex);
    animalsSW(obj, options.includeNames, options.sorted, options.sex);
  }
  return obj;
}

module.exports = getAnimalMap;
