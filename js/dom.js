const knight = new Image();
knight.src = '../img/knight-svgrepo-com.svg';
const placeKnightButton = document.getElementById('place-knight');


function togglePlaceButton(){
    placeKnightButton.classList.toggle('active');
}

function fillSpace(target){
    console.log('called');
    target.appendChild(knight);
}

function placeKnight(position){
    let space = document.querySelector(`#r-${position[1]} > div:nth-child(${position[0] + 1})`);
    space.appendChild(knight);
}


export {placeKnight, togglePlaceButton, fillSpace};