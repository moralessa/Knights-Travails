import { placeKnight, togglePlaceButton, fillSpace } from "./dom.js";

class ChessBoard{
    constructor(x = null, y = null){
        this.Xposition = x;
        this.Yposition = y;
    }

    getMoves(){
        return [-2,-1,1,2];
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

    knightMoves(currentPositon = [this.Xposition, this.Yposition], desiredPosition, vis){

    }
}

const placeKnightButton = document.getElementById('place-knight');
const randomKnightButton = document.getElementById('random-knight');
const selectEndButton = document.getElementById('select-end');
const travailButton = document.getElementById('travail');
const clearButton = document.getElementById('clear');
const spaces = document.querySelectorAll('.space');

placeKnightButton.addEventListener('click', togglePlaceButton);

spaces.forEach(space =>{
    space.addEventListener('click', (e)=>{
        if(placeKnightButton.classList.contains('active')){
            togglePlaceButton();
            fillSpace(e.target);
        }
    })
})

placeKnight([2,2]);
