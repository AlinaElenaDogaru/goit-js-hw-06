const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(element => {
  const list = document.querySelector(`#ingredients`);
  const createElement = document.createElement(`li`);
  createElement.textContent = element;
  createElement.classList.add('item');
  list.appendChild(createElement);
});