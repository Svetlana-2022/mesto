import './index.css';
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

//обработчик слушателя карточки
profileAddButton.addEventListener('click', () => {
  formSubmitCard.open();
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
//экземпляр для просмотра картинки
const popupImage = new PopupWithImage('.popup_for_img');
//функция для открытия просмотра попапа картинки
function handleCardClick (link, name) {
  popupImage.open({data: {link, name} });
  popupImage.setEventListeners();
}
//функция возвращает готовую карточку
function createCard(item) {
  const card = new Card(item, '.element-template', handleCardClick);
  const cardEl = card.generateCard();
  return cardEl;
}
  //для каждой карточки создаётся экземпляр класса
const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    cardList.addItem(createCard(cardItem));
  }
},
'.groups__elements'
);
cardList.renderItems();

//создаём экземпляр формы для карточки
const formSubmitCard = new PopupWithForm({
  popupSelector: '.popup_for_card',
  handleSubmit: ({linkCard, nameCard}) => {
    console.log(createCard({link: linkCard, name: nameCard}));
    cardList.addItem(createCard({link: linkCard, name: nameCard}));
    formSubmitCard.close();
  }
});
formSubmitCard.setEventListeners();