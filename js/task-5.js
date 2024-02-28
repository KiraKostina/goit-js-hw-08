function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", event => {
    const body = document.querySelector("body");
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    const spanColor = document.querySelector(".color");
    spanColor.textContent = color;
 })



