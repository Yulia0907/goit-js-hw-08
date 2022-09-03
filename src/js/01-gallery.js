import { galleryItems } from './gallery-items.js';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const galleryCard = document.querySelector('.gallery');
const galleryImageCard = galleryImageCardMarkup(galleryItems);

galleryCard.insertAdjacentHTML('beforeend', galleryImageCard);

function galleryImageCardMarkup(galleryItems) {
	return galleryItems
	.map(({ preview, original, description}) => {
		return `
  <a class="gallery__link" href = "${original}" >
    <img
      class="gallery__image"
      src= "${preview}"
      alt = "${description}" />
  </a>`;
	})
	.join('');
}

new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
});

console.log(galleryItems);

