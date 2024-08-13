"use strict";

const inputText = document.querySelector(`#validation-input`);
const minValue = 6;
const inputValue = inputText.value;
inputText.addEventListener("blur", () => {
    const inputValue = inputText.value;

    if (inputValue.length === minValue) {
        inputText.classList.remove("invalid"); 
        inputText.classList.add("valid"); 
    } else {
        inputText.classList.remove("valid"); 
        inputText.classList.add("invalid"); 
    }
});