import knightIcon from '../img/knight-svgrepo-com.svg'
const knight = new Image();
knight.src = knightIcon;


function clearDomPath(){
    let previousMoves = document.querySelectorAll('div.move');
    let previousFinalMove = document.querySelector('div.final-move');
    if(previousMoves.length){
        previousMoves.forEach(move =>{
            move.classList.remove('move');
            move.textContent = '';
        })
        previousFinalMove.classList.remove('final-move');
        previousFinalMove.classList.remove('selected');
        previousFinalMove.textContent = '';
    }
}

function animateSpace(space, numMove, lastSpace){
    if(lastSpace){
        space.classList.add('final-move');
    }else{
        space.classList.add('move');
    }
    space.textContent = numMove;
    return;
}

function animateDomPath(path){
    let elementList = [];
    for(let i = 1; i < path.length; i++){
        let coordinates = path[i];
        let space = document.querySelector(`div[data-x="${coordinates[0]}"][data-y="${coordinates[1]}"]`);
        elementList.push(space);
    }
    
    let count = 0;
    let animatonTImer = setInterval(()=>{
        if(count === elementList.length - 1){
            animateSpace(elementList[count], count + 1, true);
            clearInterval(animatonTImer);
        }else{
            animateSpace(elementList[count], count + 1, false);
            count++;
        }
    }, 500)
}

function toggleSpace(target){
    let selected = document.querySelectorAll('.selected');
    selected.forEach(selection =>{
        if(selection !== target){
            selection.classList.remove('selected');
        }
    })
    target.classList.toggle('selected');
}

function toggleButton(targetButton){
    let buttons = document.querySelectorAll('.active');
    buttons.forEach(btn =>{
        if(btn !== targetButton){
            btn.classList.remove('active');
        }
    })
    targetButton.classList.toggle('active');
}

function fillSpace(target){
    target.appendChild(knight);
}

function placeKnight(position){
    let space = document.querySelector(`div[data-x="${position[0]}"][data-y="${position[1]}"`);
    space.appendChild(knight);
}


export {placeKnight, toggleButton, toggleSpace, fillSpace, animateDomPath, clearDomPath};