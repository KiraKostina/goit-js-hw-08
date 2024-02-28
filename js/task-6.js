const inputAmount = document.querySelector('#controls > input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const color = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener("click", (event) => {
  if (inputAmount.value > 0 && inputAmount.value <= 100) {
    createBoxes(inputAmount.value)
  }
  else { alert("З такою кількістю не працює!") }
})

let boxsize;
let newDiv;
function createBoxes(amount) {
  boxes.innerHTML = "";
 boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}

destroyBtn.addEventListener("click", (event) => { 
  inputAmount.value = ""
boxes.innerHTML = ""
})



