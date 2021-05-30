import bindForm from "./bindForm";
import modalInstance from "./modal";

const formListener = () => {
    const feedBackForm = document.querySelector('.feedback-form');
    const subscribeForm = document.querySelector('.subscribe-form');
    const modalForm = document.querySelector('.modal-form');
    const modalPopup = document.querySelector('.modal');
    const modal = modalInstance({
        modal: modalPopup,
    });
    if (feedBackForm){
        bindForm(feedBackForm, () => {
            window.location.assign('thanks.html');
        });
    }
    if(subscribeForm){
        bindForm(subscribeForm, () => {
            window.location.assign('thanks.html');
        });
    }
    if(modalForm){
        bindForm(modalForm, () => {
            window.location.assign('thanks.html');
            modal.closeModal();
        });
    }

};
export default formListener;