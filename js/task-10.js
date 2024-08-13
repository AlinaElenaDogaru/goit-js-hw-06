function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputNumber = document.querySelectorAll(`input[type = "number"]`);
const buttonCreate = document.querySelector(`button[data-create]`);
const buttonDestroy = document.querySelector('button[data-destroy]');

function createBoxes(amount) {

const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = `10px`;
    box.style.marginLeft = `auto`;
    box.style.marginRight = `auto`;
    box.style.borderRadius = `5px`;
    box.style.boxShadow = '0px 8px 8px #000';
    boxesContainer.appendChild(box);
    boxSize += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}



buttonCreate.addEventListener("click", () => {
  const inpuntAmount = document.querySelector("input");
  const amount = parseInt(inpuntAmount.value);
  createBoxes(amount);
});

buttonDestroy.addEventListener("click", destroyBoxes);