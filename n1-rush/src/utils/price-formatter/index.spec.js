import priceFormatter from '.';

describe(`Deve testar a função "priceFormatter"`, () => {
  it('Deve retornar "Valor não informado" quando receber um argumento que não seja um Number', () => {
    expect(priceFormatter('250')).toBe('Valor não informado');
  });

  it('Deve retornar "Valor não informado" quando não for passado nenhum argumento', () => {
    expect(priceFormatter()).toBe('Valor não informado');
  });

  it('Deve retornar o preço com formatação BR quando receber um argumento válido', () => {
    expect(priceFormatter(250)).toBe('R$ 2,50');
  });
});
