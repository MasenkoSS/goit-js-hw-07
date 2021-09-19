
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.

const counterRef = document.querySelector('#counter');
const counterValRef = document.querySelector('#value');
const decrementbtnRef = document.querySelector('[data-action="decrement"]');
const incrementbtnRef = document.querySelector('[data-action="increment"]');

// Создай функции increment и decrement для увеличения и уменьшения значения счетчика

let counterVal = 0;

decrementbtnRef.addEventListener('click', decrement);
incrementbtnRef.addEventListener('click', increment);


// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

function decrement() {
    counterVal -= 1;
    counterValRef.textContent = counterVal;
  }

function increment() {
    counterVal += 1;
    counterValRef.textContent = counterVal;
  }








