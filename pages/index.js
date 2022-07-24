//import './index.css';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { FormValidator, formSettings } from '../components/FormValidator.js';
import { initialCards } from '../components/initial-cards.js';

const popupForEdit = document.querySelector('.popup_for_edit');
const formElementForEdit = popupForEdit.querySelector('.form_for_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupForCard = document.querySelector('.popup_for_card');
const formElementForCard = popupForCard.querySelector('.form_for_card');

//для попапов создаются экземпляры классов
const popupForEditValid = new FormValidator(formElementForEdit, formSettings);
popupForEditValid.enableValidation();
const popupForCardValid = new FormValidator(formElementForCard, formSettings);
popupForCardValid.enableValidation();
//для закрытия, открытия попапов экземпляры классов
const forEditPopup = new Popup('.popup_for_edit');
forEditPopup.setEventListeners();
const forCardPopup = new Popup('.popup_for_card');
forCardPopup.setEventListeners();
//обработчик слушателя карточки
profileAddButton.addEventListener('click', () => {
  forCardPopup.open();
  formElementForCard.reset();
  popupForCardValid.resetValidation();
});
//экземпляр класса для профиля
const userInfo = new UserInfo({nameSelector: '.profile__title', jobSelector: '.profile__subtitle'});
    
//для формы профиля экземпляр класса
const formSubmitProfile = new PopupWithForm({
  popupSelector: '.popup_for_edit',
  handleSubmit: ({nameInput, jobInput}) => {
    userInfo.setUserInfo({nameInput, jobInput});
  },
  handleFormPreFill: (inputs) => {
    const values = userInfo.getUserInfo();
    inputs.forEach(input => input.value = values[ input.name ])
  }
});
formSubmitProfile.setEventListeners();
//обработчик слушателя пользователя
profileEditButton.addEventListener('click', () => {
  formSubmitProfile.open();
  popupForEditValid.resetValidation();
});


//для закрытия попапов картинки экземпляр класса
const forImagePopup = new Popup('.popup_for_img');
forImagePopup.setEventListeners();

//функция для открытия просмотра попапа картинки
function handleCardClick (link, name) {
  const popupImage = new PopupWithImage('.popup_for_img', { 
    data: {link, name} });
  popupImage.open();
}
  //для каждой карточки создаётся экземпляр класса
const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, '.element-template', handleCardClick);
    const cardEl = card.generateCard();
    cardList.addItem(cardEl);
  }
},
'.groups__elements'
);
cardList.renderItems();

//создаём экземпляр формы для карточки
const formSubmitCard = new PopupWithForm({
  popupSelector: '.popup_for_card',
  handleSubmit: ({linkCard, nameCard}) => {
    const cardNew = new Card({link: linkCard, name: nameCard}, '.element-template', handleCardClick);
    const cardElNew = cardNew.generateCard();
    cardList.addItem(cardElNew);
    formSubmitCard.close();
  }
});
formSubmitCard.setEventListeners();