export function sliders() {
  if (document.querySelector('.views-main__slider')) {
    const swiper = new Swiper('.views-main__slider', {
      // Optional parameters
      slidesPerView: 4,
      rabCursor: true,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },

      navigation: {
        nextEl: '.views-main__button-next',
        prevEl: '.views-main__button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },

      slidesPerGroup: 1,
      slidesPerGroupSkip: 4,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        },

        // when window width is >= 640px
        767: {
          slidesPerView: 4,
        },
      },
    });
  }
}
