'use strict';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');

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
let { key, q, image_type } = optionsAPI;

function getApiData(value) {
  q = value.replace(' ', '+');

  fetch(`https://pixabay.com/api/?key=${key}&q=${q}&${image_type}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(img => {
      const markup = img.hits
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
  <a class="gallery-link" href="${downloads}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
		
  </a>
	<p>Likes: ${likes}</p>
	<p>Views: ${views}</p>
	<p>Comments:${comments} </p>
</li>`;
        })
        .join('');

      gallery.insertAdjacentHTML('afterbegin', markup);
      lightbox.on('show.simplelightbox');
    });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  getApiData(e.target.elements.search.value);
});
