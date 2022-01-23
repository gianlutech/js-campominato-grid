console.log('js ok');

/*
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const play = () => {
    // cambio testo bottone
    playButton.innerText = 'Ricomincia';

    // elimino griglia precedente
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    // # FASE PREPARATORIA

    const level = document.getElementById('level').value;

    let totalCells;
    let cellsPerRow;

    switch (level) {
        case 'easy':
            totalCells = 100;
            break;
        case 'hard':
            totalCells = 49;
            break;
        default:
            totalCells = 81;
    }
    cellsPerRow = Math.sqrt(totalCells);



    // # funzioni

    // GENERO LA CELLA

    const generateCell = (number, cellsPerRow) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = number;
        cell.innerText = number;
        const sideLength = `calc(100% / ${cellsPerRow})`;
        cell.style.width = sideLength;
        cell.style.height = sideLength;
        return cell;
    };

    // GENERO LA GRIGLIA

    const generateGrid = (cellsNumber, cellsPerRow) => {
        for (let i = 1; i <= cellsNumber; i++) {
            const cell = generateCell(i, cellsPerRow);

            grid.appendChild(cell)
        }
    }

    // ! ESECUZIONE

    generateGrid(totalCells, cellsPerRow);

}

// # FASE INIZIALE
const playButton = document.getElementById('play');
playButton.addEventListener('click', play);