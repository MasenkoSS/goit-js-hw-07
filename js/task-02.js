const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEll = products => {
  const productsItem = document.createElement('li');
  productsItem.textContent = products;
  return productsItem;
};
console.log(listEll);

const productItem = ingredients.map(products => listEll(products));
console.log(productItem);
const productsEll = document.querySelector('#ingredients');
console.log(productsEll);
productsEll.append(...productItem);



