function initSlider() {
  new Swiper('.swiper', {
    loop: true,
    sped: 2400,
    slidesPerGroup: 3,
    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 1025px
      1025: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: false,
      }
    }
  });
  }
  
  initSlider();