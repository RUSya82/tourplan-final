/**
 * Класс валидатор формы
 * передается id формы и массив объектов вида
 * {
            selector: 'form3-phone',
            method: 'phone',
            pattern:'//'
   },
 если pattern существует, то будет применен он, если нет, а передано имя метода (e-mail) например,
 то поле будет валидироваться встроенным методом
 */
export class Validator {
    constructor(form, elements = []) {
        this.form = form;
        this.elements = elements;
        this.errors = new Set();
    }

    init() {

        this.elements.forEach((item) => {
            this.checkIt(item);
        });
        if (!this.getErrorsCount()) {
            return false;
        } else {
            this.showErrors();
            return this.getErrors();
        }

    }
    getErrors(){
        return this.errors;
    }
    cleanErrors(){
        this.errors.clear();
    }
    getErrorsCount(){
        return this.errors.size;
    }
    showErrors(){
        this.errors.forEach(item => {
            item.element.style.border = '1px solid red';
            let message = item.element.parentNode.querySelector('.error-message');
            message.style.display = 'block';
            setTimeout(() => {
                item.element.style.border = '';
                message.style.display = 'none';
            }, 2000);
        });
    }

    checkIt({element, pattern, method, type = 'text'}) {
        if(type === 'text'){
            if(pattern){
                const value = element.value;
                if(!pattern.test(value)){
                    this.errors.add({
                        element: element,
                        pattern: pattern,
                        method: method
                    });
                }
            }else if(method){
                const value = element.value;
                if(this.getPattern(method) && !this.getPattern(method).test(value)){
                    this.errors.add({
                        element: element,
                        pattern: pattern,
                        method: method
                    });
                }
            }
        } else if (type === 'checkbox'){
            if(!element.checked){
                this.errors.add({
                    element: element,
                })
            }
        }

    }

    getPattern(pattern) {
        const patterns = {
            email: new RegExp('^([a-z0-9\-_.]{2,30}@[a-z]{2,10}\.[a-z]{2,5})$','i'),
            phone: new RegExp('^[\+]?[0-9)(]{7,11}$', 'i'),
            name: new RegExp('^[А-ЯЁA-Zа-яёa-z]{2,20}$', 'i'),
            message: new RegExp('[а-яё0-9.,:!?; \-]', 'ig'),
        };
        return patterns[pattern];
    }
}
export default Validator;