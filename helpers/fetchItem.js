const fetchItem = async (MLB1615760527) => {
  // seu código aqui
  const response = await fetch(`https://api.mercadolibre.com/items/${MLB1615760527}`);
  const responseJson = await response.json();
  return responseJson;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
