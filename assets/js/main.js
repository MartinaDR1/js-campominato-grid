// Seleziono elementi della DOM
const btnSend = document.querySelector('button');
const containerEl = document.querySelector('.container');
const selectEl = document.querySelector('.select')
// Rendo il bottone cliccabile e creo la tabella

/*let maxCells = 100;*/

btnSend.addEventListener('click', function(){

    if(selectEl == 'easy'){
        cellContainer (100, 'easy')
    } else if (selectEl == 'medium'){
        cellContainer(81, 'medium')
    } else {
        cellContainer (49, 'hard')
    }
})

function cellContainer (maxCells, difficulty){
    
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
}