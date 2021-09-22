

// Поиск в DOM querySelector

const inputEl = document.querySelector('#font-size-control');
const spanElText = document.querySelector('#text');

// Создаем функцию, и присваиваем для текста в span размер в px

const changeFontSize = () => {
    spanElText.style.fontSize = `${Number(inputEl.value)}px`;
};

inputEl.addEventListener('input', changeFontSize);