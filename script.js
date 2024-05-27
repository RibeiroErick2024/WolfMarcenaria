
// ===================== SLIDE =============//
var slideshows = document.querySelectorAll('[data-component="slideshow"]');

slideshows.forEach(initSlideShow)

function initSlideShow(slideshow) {

  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`)

  var index = 0, time = 2500
  slides[index].classList.add('active')

  setInterval(() => {
    slides[index].classList.remove('active')

   
    index++

   
    if (index === slides.length) index = 0

    slides[index].classList.add('active')

  }, time)
}
// ===================== FIM SLIDE =============//

// ===================== SLIDE CONTATO =============//

var swiper = new Swiper('.clients-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true, 
  autoplay: {
      delay: 5000, 
      disableOnInteraction: false, 
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});
// ===================== FIM SLIDE CONTATO =============//
