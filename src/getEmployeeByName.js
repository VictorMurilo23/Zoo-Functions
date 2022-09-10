const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  for (let index = 0; index < data.employees.length; index += 1) {
    const employee = data.employees[index];
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return employee;
    }
  }
  return {};
}

module.exports = getEmployeeByName;
