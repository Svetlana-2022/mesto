import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmit }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._inputList = this._popupElement.querySelectorAll('.form__input');
        Array.from(this._inputList);
        this._buttonSubmit = this._popupElement.querySelector('.form__submit-button');
        this._buttonTextSubmit = this._buttonSubmit.textContent;
    }
    setLoading(isLoading) {
        if (isLoading) {
            this._buttonSubmit.textContent = 'Сохранение...';   
        } else {
            this._buttonSubmit.textContent = this._buttonTextSubmit;
        } 
    }
    //собирает данные всех полей
    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[ input.name ] = input.value;
        });
        return formValues; 
    }
    setInputValues(data) {
        this._inputList.forEach(input => {
            input.value = data[ input.name ];
        });
    }
          
    //и добавляет обработчик сабмита формы
    setEventListeners() {
        super.setEventListeners();
        this._form = this._popupElement.querySelector('.form');
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.setLoading(true);
            this._handleSubmit(this._getInputValues());
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