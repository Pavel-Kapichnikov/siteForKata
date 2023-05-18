let swiper;

swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slidesPerView: 'auto',

    slidesOffsetBefore: 16,

    spaceBetween: 16,

    slidesOffsetAfter: 16,

    init: false,
});

if (window.innerWidth < 768) swiper.init();

const mediaQuery = '(min-width: 768px)';
const mediaQueryList = window.matchMedia(mediaQuery);

mediaQueryList.addEventListener('change', event => {
    console.log(window.innerWidth);

  if (event.matches) {
    console.log('ipad');
    swiper.destroy();

  } else {
    console.log('smartphone');

    swiper = new Swiper('.swiper', {

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        slidesPerView: 'auto',
    
        slidesOffsetBefore: 16,
    
        spaceBetween: 16,
    
        slidesOffsetAfter: 16,
    });
  }
})

function readMore() {
            
    let btn = document.querySelector('.readMore');
    let cardsList = document.querySelector('.supported-brands__list');

    if (btn.textContent === 'Показать все') {
        cardsList.style = 'height: auto; margin-bottom: 46px;';
        btn.classList.add('readMore--activ');
        btn.textContent = "Скрыть";
    } else {
        cardsList.style = 'height: 160px; margin-bottom: 24px;';
        btn.classList.remove('readMore--activ');
        btn.textContent = "Показать все";
    }
}
