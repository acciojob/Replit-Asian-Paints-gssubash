//your JS code here. If required.
const grid = document.querySelector('#grid-container');
const form = document.querySelector('#form');
const resetBtn = document.querySelector('#Reset'); 
let previousSelectedCell = null;

function removePreviousColor() {
  if (previousSelectedCell) {
    previousSelectedCell.style.backgroundColor = "transparent";
  }
}

for (let i = 1; i <= 9; i++){
  const gridChild = document.createElement('div');
  gridChild.innerText = i;
  gridChild.id = i;  
  gridChild.className = 'grid-item';
  grid.appendChild(gridChild);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let id = form.inputid.value;
  let color = form.colorid.value;

  const cellElement = document.getElementById(id);
  cellElement.style.backgroundColor = color;

  removePreviousColor();

  previousSelectedCell = cellElement;
  form.reset();
});

resetBtn.addEventListener('click',removePreviousColor);