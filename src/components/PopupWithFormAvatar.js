import Popup from "./Popup.js";
export default class PopupWithFormAvatar extends Popup {
    constructor({ popupSelector, handleSubmit, }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        // this._inputList = this._popupSelector.querySelectorAll('.form__input');
        // Array.from(this._inputList);
        // console.log(this._inputList);
        // this.input = this._popupSelector.querySelector('.form__input');
        // console.log(this._input);
    }
    //собирает данные всех полей
    _getInputValues() {
        // const formValues = {};
        // this._inputList.forEach(input => {
        //     formValues[ input.name ] = input.value;
        //     console.log(formValues);
        // });
        //  return formValues;
         const input = this._popupSelector.querySelector('.form__input');
         input[name] = input.value;
         console.log(input.name);
         console.log(input[name]);
         console.log(input);
         return input;
    }
          
    //и добавляет обработчик сабмита формы
    setEventListeners() {
        super.setEventListeners();
        this._form = this._popupSelector.querySelector('.form');
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
            this.close();
        })
    }
    open() {
        super.open();
    }
    close() {
        super.close();
        this._form.reset();
    }
}