const data = require('../data/zoo_data');

function isManager(id) {
  for (let index = 0; index < data.employees.length; index += 1) {
    const employee = data.employees[index];
    if (employee.managers.some((element) => element === id)) {
      return true;
    }
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employees = data.employees.filter((element) => element.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
    return employees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
