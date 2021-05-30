import Swiper from 'swiper';
export const slidersInit = () => {
    const hotelSwiper = new Swiper('.hotel-slider__container', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        // navigation: {
        //     nextEl: '.hotel-slider__arrow--next',
        //     prevEl: '.hotel-slider__arrow--prev',
        // },
        // keyboard: {
        //     enable: true,
        //     onlyInViewport: true
        // },
    });
    document.querySelector('.hotel-slider__arrow--next').addEventListener('click', (e) => {
        hotelSwiper.slideNext(500);
    });
    document.querySelector('.hotel-slider__arrow--prev').addEventListener('click', (e) => {
        hotelSwiper.slidePrev(500);
    });
    console.log(hotelSwiper);
    const reviewsSwiper = new Swiper('.reviews-slider__container', {
        // Optional parameters
        loop: true,

        centeredSlides: true,
        slidesPerView: 1,
        speed: 500,
        // Navigation arrows
        // navigation: {
        //     nextEl: '.reviews-slider__button--next',
        //     prevEl: '.reviews-slider__button--prev',
        // },
        // keyboard: {
        //     enable: true,
        //     onlyInViewport: true
        // },
    });
    document.querySelector('.reviews-slider__button--next').addEventListener('click', (e) => {
        reviewsSwiper.slideNext(500);
    });
    document.querySelector('.reviews-slider__button--prev').addEventListener('click', (e) => {
        reviewsSwiper.slidePrev(500);
    });
};
export default slidersInit;