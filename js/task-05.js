// Поиск узлов

const refs = {
    input: document.querySelector('#name-input'),
    outputInsert: document.querySelector('span'),
    };
    
    console.log(refs.input)
    console.log(refs.outputInsert)
    
    
    refs.input.addEventListener('input', onInputChange);
    

    