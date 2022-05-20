const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return data.employees.reduce((acc, cur) => {
    if (cur.firstName === employeeName || cur.lastName === employeeName) {
      return cur;
    }
    return acc;
  }, {});
}

module.exports = getEmployeeByName;
