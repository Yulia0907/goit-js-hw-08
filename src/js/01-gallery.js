import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryCard = document.querySelector('.gallery');
const galleryImageCard = galleryImageCardMarkup(galleryItems);


galleryCard.insertAdjacentHTML('beforeend', galleryImageCard);
galleryCard.addEventListener('click', onGalleryShowClick);


function galleryImageCardMarkup(galleryItems) {
	return galleryItems
	.map(({ preview, original, description}) => {
		return `
<div class="gallery__item">
  <a class="gallery__link" href = "${original}" >
    <img
      class="gallery__image"
      src= "${preview}"
      data-source = "${original}"
      alt = "${description}" />
  </a>
</div>`;
	})
	.join('');
}


function onGalleryShowClick (event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
		return
	}
  const imageSource = event.target.getAttribute('data-source');
  console.log(imageSource);

  
const instance = basicLightbox.create(` 
  <img src = "${imageSource}" >
  `)

instance.show(() => console.log('Відкриття модального вікна по кліку'));

window.addEventListener('keydown', onGalleryCloseEsc);

function onGalleryCloseEsc(event) {
    const KEY_ESC = "Escape";
    if (event.key === 'Escape') {
      instance.close(() => console.log('Закриття модального вікна по Esc'));
      window.removeEventListener('keydown', onGalleryCloseEsc);
    }
  }
}

