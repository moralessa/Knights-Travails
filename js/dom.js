const knight = new Image();
knight.src = '../img/knight-svgrepo-com.svg';

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


export {placeKnight, toggleButton, toggleSpace, fillSpace};