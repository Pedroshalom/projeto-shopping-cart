const fetchProducts = async (produto) => {
  // seu código aqui
  if (produto === undefined) {
    throw new Error('você deve fornecer uma URL');
  }

  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  console.log(URL);

  const result = await fetch(URL);
  const data = await result.json();
  return data;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
