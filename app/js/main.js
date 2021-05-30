import  modalInstance  from "./modules/modal";
import  slidersInit  from "./modules/slidersInit";
import  menuToggle  from "./modules/menuToggle";
import  formListener  from "./modules/formListener";
import maskInputs from "./modules/maskInput";
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/swiper-bundle.css';
import AOS from 'aos';
// import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
    //bind popup
    const modalPopup = document.querySelector('.modal');
    const modal = modalInstance({
        modal: modalPopup,
    });



    //init toggle menu
    menuToggle();

    //init send form
    formListener();

    maskInputs();
    AOS.init();
    //init sliders
    slidersInit();
});

