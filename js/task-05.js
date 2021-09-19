// Поиск узлов

const refs = {
    input: document.querySelector('#name-input'),
    outputInsert: document.querySelector('span'),
    };
    
    console.log(refs.input)
    console.log(refs.outputInsert)
    
    
    refs.input.addEventListener('input', onInputChange);
    

        // Функция набирает  текст и подставляет его (возврат исходного значения)

    function onInputChange(event) {
        console.log(event.currentTarget.value);
        refs.outputInsert.textContent = event.currentTarget.value;
        
        if (event.currentTarget.value === '') {
            return (refs.outputInsert.textContent = 'незнакомец');
          }
         
        }