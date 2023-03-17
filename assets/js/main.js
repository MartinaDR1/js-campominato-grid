// Seleziono elementi della DOM
const btnSend = document.querySelector('button');
const containerEl = document.querySelector('.container');

// Rendo il bottone cliccabile e creo la tabella

let maxCells = 100;

btnSend.addEventListener('click', function(){

    for(let i=1; i <= maxCells; i++){
        const cellDom = `<div class="cell">${i}</div>`
        containerEl.innerHTML += cellDom

    }
})


