export const createImagesMarkup = (arr) => {
  return arr
    .map((el) => {
      const {
        preview: previewUrl,
        original: originalUrl,
        description: alt,
      } = el;
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${originalUrl}">
                <img
                class="gallery__image"
                src="${previewUrl}"
                data-source="${originalUrl}"
                alt="${alt}"
                />
            </a>
        </li>
        `;
    })
    .join("");
};

export const addImagesOnGallery = (gallery, galleryItems) => {
  /*
    gallery - це те куди ми вставляємо наші картинки
    galleryItems - це звідки ми беремо наші картинки.
    */
  gallery.innerHTML = createImagesMarkup(galleryItems);
};

export const preventDefaultImageLinks = (refs = {}) => {
  refs.imageLinks = document.querySelectorAll(".gallery__link");
  refs.imageLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
};
