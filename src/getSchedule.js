const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  return data.species.find((element) => element.name === scheduleTarget).availability;
}

module.exports = getSchedule;
