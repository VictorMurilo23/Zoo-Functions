const data = require('../data/zoo_data');

function achaAnimaisPorSexo(animais, sorted, sex) {
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

function achaAnimais(animais, sorted, sex) {
  if (sex === 'male' || sex === 'female') {
    return achaAnimaisPorSexo(animais, sorted, sex);
  }
  return animais.reduce((acc, cur) => {
    const todosOsNomes = cur.residents.map((element) => element.name);
    if (sorted) {
      acc.push({ [cur.name]: todosOsNomes.sort() });
    } else {
      acc.push({ [cur.name]: todosOsNomes });
    }
    return acc;
  }, []);
}

function animaisNE(obj, booNames, booSorted, animalSex) {
  const param = obj;
  const normal = data.species.filter((animal) => animal.location === 'NE');
  if (booNames) {
    param.NE = achaAnimais(normal, booSorted, animalSex);
  } else {
    param.NE = normal.map((animal) => animal.name);
  }
}

function animaisNW(obj, booNames, booSorted, animalSex) {
  const param = obj;
  const normal = data.species.filter((animal) => animal.location === 'NW');
  if (booNames) {
    param.NW = achaAnimais(normal, booSorted, animalSex);
  } else {
    param.NW = normal.map((animal) => animal.name);
  }
}

function animaisSE(obj, booNames, booSorted, animalSex) {
  const param = obj;
  const normal = data.species.filter((animal) => animal.location === 'SE');
  if (booNames) {
    param.SE = achaAnimais(normal, booSorted, animalSex);
  } else {
    param.SE = normal.map((animal) => animal.name);
  }
}

function animaisSW(obj, booNames, booSorted, animalSex) {
  const param = obj;
  const normal = data.species.filter((animal) => animal.location === 'SW');
  if (booNames) {
    param.SW = achaAnimais(normal, booSorted, animalSex);
  } else {
    param.SW = normal.map((animal) => animal.name);
  }
}
function getAnimalMap(options = undefined) {
  const obj = {};
  if (options === undefined) {
    animaisNE(obj); animaisNW(obj); animaisSE(obj); animaisSW(obj);
  } else if (options) {
    animaisNE(obj, options.includeNames, options.sorted, options.sex);
    animaisNW(obj, options.includeNames, options.sorted, options.sex);
    animaisSE(obj, options.includeNames, options.sorted, options.sex);
    animaisSW(obj, options.includeNames, options.sorted, options.sex);
  }
  return obj;
}

module.exports = getAnimalMap;
