//const body = document.querySelector('.page');
const toggleButtonState = (inputList, buttonElement) => {
    if(hasInvalidInput(inputList)) {
      buttonElement.classList.add('form__submit-button_disabled');
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove('form__submit-button_disabled');
      buttonElement.removeAttribute('disabled');
    }
  }//проверяет все инпуты на валидность
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  //показывает элемент ошибки
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
    placeholderError(inputElement);  
  }
  //скрывает элемент ошибки
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  }
  //показывает ошибку в инпуте url
  const placeholderError = (inputElement) => {
    if(inputElement.id === "link-card") {
      inputElement.value =  inputElement.nextElementSibling.textContent;
    }
  }
  //проверяет валидацию
  const isValid = (formElement, inputElement) => {
    if(!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    } 
  }
   //обработчик всех полей
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.form__submit-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function() {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }
  //все формы
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  }
  enableValidation();

  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });