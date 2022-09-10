const data = require('../data/zoo_data');

function allSchedules() {
  const daysOfTheWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const scheduleObject = {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
  for (let index = 0; index < daysOfTheWeek.length; index += 1) {
    const dayOfWeek = daysOfTheWeek[index];
    const dayData = data.hours[daysOfTheWeek[index]];
    const animalOnThatDay = data.species
      .filter((element) => element.availability.includes(dayOfWeek)).map((animal) => animal.name);
    scheduleObject[dayOfWeek] = {
      officeHour: `Open from ${dayData.open}am until ${dayData.close}pm`,
      exhibition: animalOnThatDay,
    };
  }
  return scheduleObject;
}

function getSchedule(scheduleTarget) {
  const selectedAnimal = data.species.find((element) => element.name === scheduleTarget);
  if (selectedAnimal) {
    return selectedAnimal.availability;
  }
  const selectedDay = Object.keys(data.hours).includes(scheduleTarget);
  if (scheduleTarget === undefined || selectedDay === false) {
    return allSchedules();
  }
  return { [scheduleTarget]: allSchedules()[scheduleTarget] };
}

module.exports = getSchedule;
