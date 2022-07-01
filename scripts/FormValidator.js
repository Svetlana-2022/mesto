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
    //TODO
     //проверяет поля формы при открытие попапа
     isFormValid (inputList, buttonElement) {
      inputList.forEach((inputElement) => {
        inputElement.classList.contains(this._settings.inputErrorClass) && this._hideInputError(inputElement);
          this._toggleButtonState(buttonElement);
      });
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
      const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
      this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
      this._toggleButtonState();
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._isValid(inputElement);
          this._toggleButtonState();
        });
      });
    }
    //публичный метод который включает валидацию формы
    enableValidation() {
        this._formElement.querySelector(this._settings.formSelector);
        this._setEventListeners();
    }  
}
export const formSettings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
//для каждой проверяемой формы создаётся экземпляр классса
const forms = Array.from(document.querySelectorAll('.form'));
forms.forEach((formElement) => {
const form = new FormValidator(formElement, formSettings);
form.enableValidation();
});

