import { placeKnight, toggleButton, toggleSpace,  fillSpace } from "./dom.js";


class ChessBoard{
    constructor(x = null, y = null){
        this.Xposition = x;
        this.Yposition = y;
        this.desiredPosition = null;
    }

    getMoves(){
        return [-2,-1,1,2];
    }

    isActive(){
        if(this.Xposition && this.Yposition) return true;
        return false;
    }

    outOfBounds(desiredMoveArr){
        let horizontalMove = desiredMoveArr[0];
        let verticalMove = desiredMoveArr[1];
        if(horizontalMove < 0 || horizontalMove > 7) return false;
        if(verticalMove < 0 || verticalMove > 7) return false;
        return true;
    }

    randomPosition(){
        let randomX = Math.floor(Math.random() * 8);
        let randomY = Math.floor(Math.random() * 8);
        this.Xposition = randomX;
        this.Yposition = randomY;
        return [this.Xposition, this.Yposition];
    }

    knightMoves(currentPositon = [this.Xposition, this.Yposition], desiredPosition, path){

    }
}


let board = new ChessBoard();
let selectedEnd;
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
            board.Xposition = e.target.getAttribute('data-x');
            board.Yposition = e.target.getAttribute('data-y');
        }
        if(selectEndButton.classList.contains('active') && board.isActive()){
            toggleSpace(e.target);
            toggleButton(selectEndButton);
            let selectedCoordinates = [];
            selectedCoordinates.push(e.target.getAttribute('data-x'));
            selectedCoordinates.push(e.target.getAttribute('data-y'));
            console.log(selectedCoordinates);
        
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