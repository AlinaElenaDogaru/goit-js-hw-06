function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyHtml = document.getElementsByTagName(`body`)[0];
const spanColor = document.getElementsByClassName(`color`)[0];
const button = document.getElementsByClassName(`change-color`)[0];


button.addEventListener("click", () => {
  bodyHtml.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
})