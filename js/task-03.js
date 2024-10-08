const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainer = document.querySelector('.gallery');

images.forEach((image) => {
  const liTemplate = `
    <li>
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `;
  galleryContainer.insertAdjacentHTML('beforeend', liTemplate);
});

/* 
const gallery = document.querySelector(`.gallery`);

images.forEach(element => {
  const liItem = document.createElement(`li`);
  const imgElement = document.createElement('img');
  imgElement.src = element.url;
  imgElement.alt = element.alt;
    liItem.appendChild(imgElement);
  gallery.appendChild(liItem);

}) */