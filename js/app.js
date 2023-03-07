import { placeKnight, toggleButton, toggleSpace,  fillSpace } from "./dom.js";
import { ChessBoard } from "./chessboard.js";

let board = new ChessBoard();
const placeKnightButton = document.getElementById('place-knight');
const randomKnightButton = document.getElementById('random-knight');
const selectEndButton = document.getElementById('select-end');
const travailButton = document.getElementById('travail');
const clearButton = document.getElementById('clear');
const spaces = document.querySelectorAll('.space');

placeKnightButton.addEventListener('click', (e)=>{toggleButton(e.target)});

spaces.forEach(space =>{
    space.addEventListener('click', (e)=>{
        if(placeKnightButton.classList.contains('active')){
            toggleButton(placeKnightButton);
            fillSpace(e.target);
            let x = parseInt(e.target.getAttribute('data-x'));
            let y = parseInt(e.target.getAttribute('data-y'));
            board.setStartingPostion([x,y]);
            console.log(board.startingPosition);
        }
        if(selectEndButton.classList.contains('active') && board.hasStartingPosition()){
            toggleSpace(e.target);
            toggleButton(selectEndButton);
            let x = parseInt(e.target.getAttribute('data-x'));
            let y = parseInt(e.target.getAttribute('data-y'));
            board.setDesiredPosition([x,y]);
            console.log(board.desiredPosition);
        }
    })
})

randomKnightButton.addEventListener('click', ()=>{
    placeKnight(board.randomPosition());
})

selectEndButton.addEventListener('click', (e)=>{
    toggleButton(e.target);
})

clearButton.addEventListener('click', ()=>{
    location.reload();
})

travailButton.addEventListener('click', ()=>{
    if(board.isActive()){
        board.knightMoves();
    }
});