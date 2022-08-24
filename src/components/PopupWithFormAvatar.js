import Popup from "./Popup.js";
export default class PopupWithFormAvatar extends Popup {
    constructor({ popupSelector, handleSubmit, }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._inputList = this._popupSelector.querySelectorAll('.form__input');
         Array.from(this._inputList);
         this._buttonSubmit = this._popupSelector.querySelector('.form__submit-button');
         this._buttonTextSubmit = this._buttonSubmit.textContent;
    }
    //собирает данные всех полей
    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => {
           formValues[ input.name ] = input.value;
           console.log(formValues);
        });
        return formValues;
    }
    setLoading(isLoading) {
        if (isLoading) {
            this._buttonSubmit.textContent = 'Сохранение...';   
        } else {
            this._buttonSubmit.textContent = this._buttonTextSubmit;
        } 
    }
          
    //и добавляет обработчик сабмита формы
    setEventListeners() {
        super.setEventListeners();
        this._form = this._popupSelector.querySelector('.form');
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