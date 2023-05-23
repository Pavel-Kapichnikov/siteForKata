let swiper;

function initSwiper() {
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

if (matchMedia) {
    let screen = window.matchMedia('(max-width: 767px)');
    screen.addListener(changes);
    changes(screen);
}

function changes (screen) {
    if (screen.matches) {
        initSwiper();
    } else if (swiper) {
        swiper.destroy();
    }
}

function readMore() {
            
    let btn = document.getElementById('readMore');
    let cardsList = document.querySelector('.supported-brands__list');

    if (btn.textContent === 'Показать все') {
        cardsList.classList.add('supported-brands__list--activ');
        btn.classList.add('readMore--activ');
        btn.textContent = "Скрыть";
    } else {
        cardsList.classList.remove('supported-brands__list--activ');
        btn.classList.remove('readMore--activ');
        btn.textContent = "Показать все";
    }
}
