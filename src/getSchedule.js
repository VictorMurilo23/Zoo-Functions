const data = require('../data/zoo_data');

function apareceNaTerca() {
  const todos = data.species.filter((element) => element.availability.includes('Tuesday'));
  return todos.map((element) => element.name);
}

function apareceNaQuarta() {
  const todos = data.species.filter((element) => element.availability.includes('Wednesday'));
  return todos.map((element) => element.name);
}

function apareceNaQuinta() {
  const todos = data.species.filter((element) => element.availability.includes('Thursday'));
  return todos.map((element) => element.name);
}

function apareceNaSexta() {
  const todos = data.species.filter((element) => element.availability.includes('Friday'));
  return todos.map((element) => element.name);
}

function apareceNoSabado() {
  const todos = data.species.filter((element) => element.availability.includes('Saturday'));
  return todos.map((element) => element.name);
}

function apareceNoDomingo() {
  const todos = data.species.filter((element) => element.availability.includes('Sunday'));
  return todos.map((element) => element.name);
}
// "Monday": Object {
//   -     "exhibition": "The zoo will be closed!",
//   -     "officeHour": "CLOSED",
//   -   },
// function apareceNaSegunda() {
//   return [Monday: {}]
// }

function objetoComHorarios() {
  const todasAsFuncoes = [apareceNaTerca(), apareceNaQuarta(),
    apareceNaQuinta(), apareceNaSexta(), apareceNoSabado(), apareceNoDomingo()];
  const object = {};
  for (let i = 0; i < Object.keys(data.hours).length; i += 1) {
    const atual = Object.values(data.hours)[i];
    object[Object.keys(data.hours)[i]] = {
      officeHour: `Open from ${atual.open}am until ${atual.close}pm`,
      exhibition: todasAsFuncoes[i] };
  }
  object.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return object;
}

function getSchedule(scheduleTarget) {
  const animalSelecionado = data.species.find((element) => element.name === scheduleTarget);
  if (animalSelecionado !== undefined) {
    return animalSelecionado.availability;
  }
  const diaSelecionado = Object.keys(data.hours).includes(scheduleTarget);
  if (scheduleTarget === undefined || diaSelecionado === false) {
    return objetoComHorarios();
  }
  return { [scheduleTarget]: objetoComHorarios()[scheduleTarget] };
}

module.exports = getSchedule;
