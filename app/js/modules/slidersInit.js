import Swiper from 'swiper';
export const slidersInit = () => {
    const hotelSwiper = new Swiper('.hotel-slider__container', {
        // Optional parameters
        loop: true,

    });
    const hotelSliderButtonNext = document.querySelector('.hotel-slider__arrow--next');
    if(hotelSliderButtonNext){
        hotelSliderButtonNext.addEventListener('click', (e) => {
            hotelSwiper.slideNext(500);
        });
    }
    const hotelSliderButtonPrev = document.querySelector('.hotel-slider__arrow--next');
    if(hotelSliderButtonPrev){
        hotelSliderButtonPrev.addEventListener('click', (e) => {
            hotelSwiper.slidePrev(500);
        });
    }

    const reviewsSwiper = new Swiper('.reviews-slider__container', {
        // Optional parameters
        loop: true,

        centeredSlides: true,
        slidesPerView: 1,
        speed: 500,
    });
    const reviewsSliderButtonNext = document.querySelector('.reviews-slider__button--next');
    if(reviewsSliderButtonNext){
        reviewsSliderButtonNext.addEventListener('click', (e) => {
            reviewsSwiper.slideNext(500);
        });
    }
    const reviewsSliderButtonPrev = document.querySelector('.reviews-slider__button--prev');
    if(reviewsSliderButtonPrev){
        reviewsSliderButtonPrev.addEventListener('click', (e) => {
            reviewsSwiper.slidePrev(500);
        });
    }

};
export default slidersInit;