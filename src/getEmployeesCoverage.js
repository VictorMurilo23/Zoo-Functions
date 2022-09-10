const data = require('../data/zoo_data');

function getSpecies(employeeObj) {
  const animals = [];
  for (let index = 0; index < employeeObj.responsibleFor.length; index += 1) {
    const actualAnimal = employeeObj.responsibleFor[index];
    const animalName = data.species.find((animal) => animal.id === actualAnimal).name;
    animals.push(animalName);
  }
  return animals;
}

function getLocations(employeeObj) {
  const localizacoes = [];
  for (let index = 0; index < employeeObj.responsibleFor.length; index += 1) {
    const actualAnimal = employeeObj.responsibleFor[index];
    const animalLocation = data.species.find((animal) => animal.id === actualAnimal).location;
    localizacoes.push(animalLocation);
  }
  return localizacoes;
}

function searchResult(employee) {
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee),
    locations: getLocations(employee),
  };
}

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    const allEmployees = [];
    for (let index = 0; index < data.employees.length; index += 1) {
      allEmployees.push(searchResult(data.employees[index]));
    }
    return allEmployees;
  }

  const employee = data.employees
    .find((element) => Object.values(element).includes(obj.name)
    || Object.values(element).includes(obj.id));

  try {
    return searchResult(employee);
  } catch (error) {
    throw error.message;
  }
}

module.exports = getEmployeesCoverage;
