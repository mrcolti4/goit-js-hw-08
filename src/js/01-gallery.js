import { galleryItems } from './gallery-items.js';
import { addImagesOnGallery, preventDefaultImageLinks } from './common.js';
import { refs } from './refs.js';
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
// Functions definition

addImagesOnGallery(refs.gallery, galleryItems);
preventDefaultImageLinks(refs);
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
