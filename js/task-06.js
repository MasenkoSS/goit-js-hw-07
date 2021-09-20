// Поиск узлов

const inputString = document.querySelector('#validation-input');
console.log(inputString);


inputString.addEventListener('blur', onInputBlur);

// Функция проверки (event.currentTarget используется, 
// когда один и тот же обработчик события присваивается нескольким элементам.)

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputString.dataset.length)) {
        inputString.classList.add('valid');
        inputString.classList.remove('invalid');
    }
    else {
        inputString.classList.add('invalid');
    }
}