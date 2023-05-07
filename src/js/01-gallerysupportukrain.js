import { gallerysupport } from './gallery-supportukrain';
import Swiper from 'swiper';

const galleryEl = document.querySelector('.gallery-support');
const itemsGalleryEl = createItemsGallery(gallerysupport);
galleryEl.insertAdjacentHTML('beforeend', itemsGalleryEl);
// galleryEl.addEventListener('click', onImgClick);

function createItemsGallery(items) {
    return items
    .map(({ title, url, img }) => {
      return `<li class="gallery__item_support swiper-slide">
  <a class="gallery__link" href="${url}">
    <img
      class="gallery__image"
      src="${img}"
    />
  </a>
</li>`;
    })
    .join('');
};    

const mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 7,
  spaceBetween: 20,
  loop: true,
});
// setInterval(() => {
//   mySwiper.slideNext();
// }, 3000);

const slideNext = document.querySelector('#slide-next');
slideNext.addEventListener('click', () => {
  mySwiper.slideNext(300); // перемикання наступного слайда зі швидкістю 300 мс
});
