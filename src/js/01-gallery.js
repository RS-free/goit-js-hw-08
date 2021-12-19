// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryBlock = document.querySelector('.gallery');

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
    </a></div>`,
  )
  .join('');

galleryBlock.insertAdjacentHTML('beforeend', markupGallery);

let galOptions = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
  scrollZoomFactor: 0.5,
  captionPosition: 'bottom',
});

console.log(galleryItems);
