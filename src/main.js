import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages, clearImages } from './js/render-functions';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more-btn');
const input = form.elements.search;

let searchQuery = '';

let page = 1;
const perPage = 15;

const render = async e => {
  try {
    e.preventDefault();
    searchQuery = input.value.trim();
    loaderCheck(false);
    loadMore.classList.add('is-hidden');

    if (searchQuery === '') {
      iziToast.error({
        title: 'Error',
        message: `❌ Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
      return;
    }

    page = 1;
    clearImages();

    const { data } = await fetchImages(searchQuery, page, perPage);
    console.log(data);
    if (data.hits.length === 0) {
      input.value = '';
      iziToast.error({
        title: 'Error',
        message: `❌ Sorry, there are no images matching your search query. Please enter the correct values!`,
        position: 'topRight',
      });
      clearImages();
      return;
    }

    renderImages(data.hits);
    loadMore.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  } finally {
    loaderCheck(true);
  }
};

form.addEventListener('submit', render);

const renderMore = async () => {
  try {
    page++;
    loaderCheck(false);
    const { data } = await fetchImages(searchQuery, page, perPage);
    renderImages(data.hits);

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 3,
      behavior: 'smooth',
    });

    if (page * perPage >= data.totalHits) {
      loadMore.classList.add('is-hidden');
      loadMore.removeEventListener('click', renderMore);
      iziToast.info({
        title: 'Info',
        message: `✅ You've reached the end of search results.`,
        position: 'topRight',
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    loaderCheck(true);
  }
};
loadMore.addEventListener('click', renderMore);

const loaderCheck = load =>
  (loader.style.display = load ? 'none' : 'inline-block');
