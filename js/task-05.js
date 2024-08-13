"use strict";
const inputName = document.querySelector(`#name-input`);
let greetName = document.querySelector(`#name-output`);
inputName.addEventListener("input", () => {
    const newName = inputName.value;
    greetName.textContent = newName || "Anonymous";
});