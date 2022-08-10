const sectionItems = document.querySelector('.items');
const itensDoCarrinho = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// abaixo criei a função para add ao carrinho
async function addAoCarrinho(sku) {
  const produto = await fetchItem(sku);
  const item = createCartItemElement({ 
    sku: produto.id, 
    name: produto.title, 
    salePrice: produto.price });
  itensDoCarrinho.appendChild(item);
  saveCartItems(itensDoCarrinho.innerHTML);
}

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  // section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', () => addAoCarrinho(sku)); // chamei a função de add ao carrinho
  section.appendChild(button);
  return section;
};

const createElementProducstInDom = async () => {
  const produtos = await fetchProducts('computador');
  sectionItems.innerHTML = '';
  produtos.results.map((produto) => {
    const products = { sku: produto.id, name: produto.title, image: produto.thumbnail };
    sectionItems.appendChild(createProductItemElement(products));
    return true;
  });
  return true;
};
 // abaixo criei a função para esvaziar o carrinho.
function esvaziarOCarrinho() {
  const button = document.querySelector('.empty-cart');
  button.addEventListener('click', () => {
    itensDoCarrinho.innerHTML = ''; 
  });
}

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = () => {
  createElementProducstInDom();
  esvaziarOCarrinho();
 };