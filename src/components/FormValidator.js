 export class FormValidator {
    constructor(formElement, settings) {
        this._formElement = formElement;
        this._settings = settings;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
    }
    //приватные методы
    //проверяет все инпуты
    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }
    //проверяет поля формы при открытие попапа
    resetValidation() {
      this._toggleButtonState();
      
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });

    }
    //переключает кнопку
    _toggleButtonState() {
        if(this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._settings.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
          } else {
            this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
          }
    }
    
    //показывает элемент ошибки
    _showInputError (inputElement, errorMessage) {
      this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._settings.inputErrorClass);
      this._errorElement.textContent = errorMessage;
      this._errorElement.classList.add(this._settings.errorClass);  
    }
      //скрывает элемент ошибки
    _hideInputError (inputElement) {
      this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._settings.inputErrorClass);
      this._errorElement.classList.remove(this._settings.errorClass);
      this._errorElement.textContent = '';
    }
        //проверяет валидацию
    _isValid (inputElement) {
      if(!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      } 
    }
    //обработчик всех полей
    _setEventListeners () {
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._isValid(inputElement);
          this._toggleButtonState();
        });
      });
    }
    //публичный метод который включает валидацию формы
    enableValidation() {
        this._setEventListeners();
    }  
}



