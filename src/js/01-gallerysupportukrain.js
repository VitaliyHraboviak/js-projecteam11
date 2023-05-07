import { gallerysupport } from './gallery-supportukrain';

const galleryEl = document.querySelector('.gallery-support');
const itemsGalleryEl = createItemsGallery(gallerysupport);
galleryEl.insertAdjacentHTML('beforeend', itemsGalleryEl);
galleryEl.addEventListener('click', onImgClick);

function createItemsGallery(items) {
    return items
    .map(({ title, url, img }) => {
      return `<li class="gallery__item_support">
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

var slider = document.querySelector('.gallery-support');
console.log(slider);
var slides = slider.querySelectorAll('.gallery__item_support');
console.log(slides);
var slideCount = slides.length;
console.log(slideCount);
var visibleSlides = 6;
var currentSlide = 0;

function showSlides() {
    for (var i = 0; i < slideCount; i++) {
        slides[i].style.display = 'none';
    }
    for (var i = currentSlide; i < currentSlide + visibleSlides; i++) {
     
        if (slides[i]) {
            slides[i].style.display = 'flex';
            
        }
     
    }
}

showSlides();


const carusel = document.querySelector('.carousel-button-next');

    carusel.addEventListener('click', function () {
    if (currentSlide > 0) {
        currentSlide++;
        showSlides();
        } 
});


