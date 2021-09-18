const categoryEl = document.querySelectorAll('.item');
console.log(`В списке ${categoryEl.length} категории.`);

categoryEl.forEach(unit => {
  const categoryTitleRef = unit.querySelector('h2');
  const categoryEll = unit.querySelectorAll('li');
  return console.log(
    `Категория: ${categoryTitleRef.textContent}\nКоличество элементов: ${categoryEll.length}`,
  );
});