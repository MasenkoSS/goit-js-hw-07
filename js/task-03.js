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

const galleryItem = document.querySelector('#gallery');
galleryItem.classList.add('js-gallery');
console.log(galleryItem);

const newGallery = images.map(
  image =>
    (image = `<li class="js-gallery__link"><img width=460px alt="${image.alt}" src="${image.url}" class="js-gallery__img"></li>`),
);
console.log(newGallery);

galleryItem.insertAdjacentHTML('beforeend', newGallery.join('*'));



