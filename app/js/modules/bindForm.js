import Validator from "./validator";

const bindForm = (form, callback) => {
    console.log(form)
    const postData = (body) => {
        return fetch('send.php', {
            body: body,
            method: 'POST',
        });
    };

    const formSender = (targetForm, validObject) => {
        const postData = (body) => {
            return fetch('send.php', {
                body: body,
                method: 'POST',
            });
        };
        targetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validObject.init()) {
                const name = e.target.dataset.name;
                const formData = new FormData(e.target);
                const data = {
                    'formName': name,
                };
                formData.forEach((item, index) => data[index] = item);
                postData(JSON.stringify(data))
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status not 200');
                        }
                        return response.text()
                    }).then((response) => {
                    form.reset();
                    if(callback){
                        callback();
                    }
                }).catch((error) => {
                    console.error(error);
                });

            } else {
                validObject.showErrors();
                validObject.cleanErrors();
            }


        });
    };
    /**
     * Привязываем формы
     */

        const phoneField = form.querySelector('.user-phone');
        const nameField = form.querySelector('.user-name');
        const message = form.querySelector('.user-message');
        const email = form.querySelector('.user-email');
        const initArray = [];
        if(phoneField){
            initArray.push({
                element: phoneField,
                pattern: new RegExp('[+375|8][(][0-9]{2,3}[)][0-9]{3}[-][0-9]{2}[-][0-9]{2}', ''),
            })
        }
        if(nameField){
            initArray.push({
                element: nameField,
                method: 'name'
            })
        }
        if(message){
            initArray.push({
                element: message,
                pattern: new RegExp('^[А-ЯЁA-Zа-яёa-z., ]*$', 'i')
            })
        }
        if(email){
            initArray.push({
                element: email,
                method: 'email'
            })
        }
        formSender(form, new Validator(form, initArray));
};
export default bindForm;