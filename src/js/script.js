'use strict';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const spinner = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const optionsAPI = {
  key: '42045393-d503a5a54b8da83761f9aabf4',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};
let { key, q } = optionsAPI;

function createGalleryImg(arr) {
  const markup = arr
    .map(img => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = img;

      return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source=""
      alt="${tags}"
    />
		
  </a>
  <ul class="image-info">
    <li class="info-item">
    <p>Likes</p>
    ${likes}
    </li>
    <li class="info-item"><p>Views</p>
    ${views}
    </li>
    <li class="info-item">
    <p>Comments</p>
    ${comments}
    </li>
    <li class="info-item"><p>Downloads</p>
    ${downloads}
    </li>
  </ul> 
	
</li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('afterbegin', markup);
  document.querySelector('.gallery-link').addEventListener('click', e => {
    e.preventDefault();
  });
  lightbox.refresh();
  lightbox.on('show.simplelightbox');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  spinner.style.display = 'inline-block';

  q = e.target.elements.search.value.replace(' ', '+');

  fetch(`https://pixabay.com/api/?key=${key}&q=${q}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(img => {
      spinner.style.display = 'none';
      if (img.hits.length !== 0) {
        gallery.innerHTML = '';
        createGalleryImg(img.hits);
      } else {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    })
    .catch(error => console.log('Error:', error));
});
