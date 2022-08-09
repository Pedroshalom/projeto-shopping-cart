require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof(fetchProducts)).tobe('function');
  });
  // fail('Teste vazio');
  it('Executando a funçao fetchProducts com o argumento "computador" teste se a função fetch foi chamada', async() => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Teste se, ao chamar a função fetchProducts com o argumento "computador" teste se a função fetch utiliza o endpoint',  async () =>{
    const resultado = await fetchProducts('computador');
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Teste se o retorno da função fetchProducts com o argumento "computador" é igual ao objeto "computador Search"', async () => {
    const resultado = await fetchProducts('computador');
    expect(resultado).toEqual(computadorSearch);
  });

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: you must provide an url', async () => {
    const requestFailed = await fetchProducts();
    expect(requestFailed).toEqual(new Error('You must provide an url'));
  })
});


