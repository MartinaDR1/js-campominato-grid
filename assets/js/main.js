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

    //Seleziono tutte le celle
    const cells = document.querySelectorAll('.cell');

    // Seleziono ogni cella
    for (let i = 0; i < cells.length; i++) {
        
        const thisCell = cells[i];

        //Aggiungo un event listener al click
        thisCell.addEventListener('click', function() {
            thisCell.classList.toggle('bg_active');
            console.log(`hai cliccato la casella ${thisCell.innerHTML}`);
        })
    }

})
