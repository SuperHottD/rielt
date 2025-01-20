const swiper = new Swiper('.first-swiper', {
    loop: true,
    slidesPerView: 2, // Показывать 2 слайда
    spaceBetween: 50, // Отступ между слайдами
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        830: {
            slidesPerView: 2, 
        },
        375: {
            slidesPerView: 1,                
        }
    }
});

    const swiper2 = new Swiper('.second-swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        slidesPerView: 4,
        spaceBetween: 49,
        loop: true,

        breakpoints: {
            1265: {
                slidesPerView: 4, 
            },
            965: {
                slidesPerView: 3, 
            },
            640: {
                slidesPerView: 2, 
            },
            375: {
                slidesPerView: 1,                
            }
        },
    });