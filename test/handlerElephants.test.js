const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica se handlerElephants retorna undefined caso não seja passado um parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se handlerElephants só aceita strings como parâmetro', () => {
    expect(handlerElephants(32)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants(true)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se handlerElephants retorna null caso seja passada uma string incorreta', () => {
    expect(handlerElephants('dadafafa')).toBeNull();
    expect(handlerElephants('elephants')).toBeNull();
  });
  it('Verifica se handlerElephants retorna o valor correto de uma chave presente no objeto dos elefantes', () => {
    expect(handlerElephants('name')).toBe('elephants');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se handlerElephants retorna 4 se o parâmetro passado seja count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se handlerElephants retorna um array com todos os nomes dos elefantes, caso o parâmetro passado seja count', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se handlerElephants retorna 10.5, caso o parâmetro passado seja averageAge', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
