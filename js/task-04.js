"use strict";

let counterValue = 0;
const decrementButton = document.querySelector(`[data-action="decrement"]`);
const incrementButton = document.querySelector(`[data-action="increment"]`);

function increment () {
counterValue++
 document.getElementById("value").textContent = counterValue;
};
function decrement() {
    counterValue--
    document.getElementById("value").textContent = counterValue
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);