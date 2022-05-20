const data = require('../data/zoo_data');
/* Gerentes:
stephanieId
burlId
olaId
b0dc644a-5335-489b-8a2c-4e086c7819a2 (Emery Elser)
*/
function isManager(id) {
  return data.employees.reduce((acc, cur) => {
    if (cur.managers.some((element) => element === id)) {
      return true;
    }
    return acc;
  }, false);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.reduce((acc, cur) => {
      if (cur.managers.some((element) => element === managerId)) {
        acc.push(`${cur.firstName} ${cur.lastName}`);
      }
      return acc;
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
