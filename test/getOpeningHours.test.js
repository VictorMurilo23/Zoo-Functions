const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Verifica se getOpeningHours retorna um objeto contendo todos os horários caso não seja passado um parâmetro', () => {
    const obj = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toMatchObject(obj);
  });

  it('Verifica se o parâmetro do horario de getOpeningHours representa um número dentro de uma string', () => {
    expect(() => {
      getOpeningHours('Sunday', 'dagwidga21wdg');
    }).toThrow('The hour should represent a number');
  });

  it('Verifica se getOpeningHours só aceita dias e horarios que existem', () => {
    // https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462 <-- me ajudou a fazer esse teste.
    expect(() => {
      getOpeningHours('dwadawdadw', '12:05-AM');
    }).toThrow('The day must be valid. Example: Monday');
    expect(() => {
      getOpeningHours('Sunday', '13:05-AM');
    }).toThrow('The hour must be between 0 and 12');
    expect(() => {
      getOpeningHours('Sunday', '05:71-PM');
    }).toThrow('The minutes must be between 0 and 59');
    expect(() => {
      getOpeningHours('Sunday', '12:05-ZM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Verifica se getOpeningHours retorna `The zoo is open` caso seja passado um horário que o zoologico esteja aberto', () => {
    expect(getOpeningHours('Sunday', '12:05-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Tuesday', '05:59-PM')).toBe('The zoo is open');
  });

  it('Verifica se getOpeningHours retorna `The zoo is closed` caso seja passado um horário ou dia em que o zoológico esteja fechado', () => {
    const closed = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '06:00-PM')).toBe(closed);
    expect(getOpeningHours('Thursday', '09:59-AM')).toBe(closed);
    expect(getOpeningHours('Monday', '04:00-PM')).toBe(closed);
  });
});
