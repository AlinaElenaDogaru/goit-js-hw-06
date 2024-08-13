"use strict";

const inputScroll = document.querySelector(`#font-size-control`);
const textChanging = document.querySelector(`#text`);
inputScroll.addEventListener("change", ()=>{
    textChanging.style.fontSize = `${inputScroll.value}px`; 
});