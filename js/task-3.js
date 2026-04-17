"use strict";
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", newFunction);
function newFunction(event) {
    const value = event.currentTarget.value.trim();
    if (value === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = value;

    }
};
//output.textContent = newFunction;kod olarak görülür fonk. yazdırılır.