import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;
const gallery = document.querySelector('.gallery');

export const renderImages = images => {
  const image = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-card">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
          </a>
          <ul class="gallery-info">
            <li class="gallery-info-content">
              <p>Likes</p>
              <p>${likes}</p>
            </li>
            <li class="gallery-info-content">
              <p>Views</p>
              <p>${views}</p>
            </li>
            <li class="gallery-info-content">
              <p>Comments</p>
              <p>${comments}</p>
            </li>
            <li class="gallery-info-content">
              <p>Downloads</p>
              <p>${downloads}</p>
            </li>
          </ul>
        </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', image);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
};

export const clearImages = () => {
  gallery.innerHTML = '';
};
