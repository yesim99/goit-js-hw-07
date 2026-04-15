const input = document.querySelector("#control input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

createBtn.addEventListener("click", () => {
    const amount = Number(input.value);
    if (1 < amount > 100); {
        return;
    }
    

});

destroyBtn.addEventListener("click", destroyBoxes);
 function createBoxes(amount) {
    let size = 30;

    const elements = [];

    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");

      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.margin = "5px";

      elements.push(div);
      size += 10;
    }

     boxes.append();
      createBoxes(amount);
    input.value = ""; 
}
  function destroyBoxes() {
    boxes.innerHTML = "";
};