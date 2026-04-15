const formButton = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


formButton.addEventListener("click", () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    spanColor.textContent = newColor;
})