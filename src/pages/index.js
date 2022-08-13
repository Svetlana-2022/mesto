import './index.css';
import { Api } from '../components/Api.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithFormAvatar from '../components/PopupWithFormAvatar.js';
import UserInfo from '../components/UserInfo.js';
import { FormValidator, formSettings } from '../components/FormValidator.js';
import { initialCards } from '../components/initial-cards.js';

const popupForEdit = document.querySelector('.popup_for_edit');
const formElementForEdit = popupForEdit.querySelector('.form_for_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupForCard = document.querySelector('.popup_for_card');
const formElementForCard = popupForCard.querySelector('.form_for_card');
const elementTrash = document.querySelector('.element__trash');
const popupDel = document.querySelector('.popup_for_delete');
const avatar = document.querySelector('.profile__avatar');

//экземпляр класса для открытия попапа удаления
const popupForDel = new Popup('.popup_for_delete');
//функция для открытия попапа удаления
function handleDelClick() {
  popupForDel.open();
  popupForDel.setEventListeners();
}

avatar.addEventListener('click', handleAvatarClick);
//экземпляр класса для открытия попапа avatar
//const popupForAvatar = new Popup('.popup_for_avatar');
//функция для открытия попапа avatar
function handleAvatarClick() {
  formSubmitAvatar.open();
  //popupForAvatar.open();
   //popupForAvatar.setEventListeners();
}
//для формы аватара экземпляр класса
const formSubmitAvatar = new PopupWithFormAvatar({
  popupSelector: '.popup_for_avatar',
  handleSubmit: ({avatar}) => {
    userInfo.setUserInfoAvatar({avatar});
  }
});
formSubmitAvatar.setEventListeners();

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
const userInfo = new UserInfo({nameSelector: '.profile__title', jobSelector: '.profile__subtitle', avatarSelector: '.profile__avatar'});
    
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
  const card = new Card(item, '.element-template', handleCardClick, handleDelClick, api);
  const cardEl = card.generateCard();
  return cardEl;
}
const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-46/',
  headers: {
    authorization: '30876ae6-9c71-4f9d-a726-3e14bc235ea6',
    'Content-Type': 'application/json'
  }
}
const api = new Api(config);

api.getInitialCards().then((items) => {
  return items;//массив карточек,  которые я пытаюсь передать в экземпляр класса??

  console.log(items);
  }).catch((err) => console.log(err));
  
  //для каждой карточки создаётся экземпляр класса
  const cardList = new Section({
  items: items,
    renderer: (cardItem) => {
      cardList.addItem(createCard(cardItem));
    }
  },
  '.groups__elements',
  api
  );
  cardList.renderItems();
//создаём экземпляр формы для карточки
const formSubmitCard = new PopupWithForm({
  popupSelector: '.popup_for_card',
  handleSubmit: ({linkCard, nameCard}) => {
    cardList.addItem(createCard({link: linkCard, name: nameCard}));
    formSubmitCard.close();
  }
});
formSubmitCard.setEventListeners();

 api.userInfo().then((result) => {
   let nameInput = result.name;
   let jobInput = result.about;
   let avatar = result.avatar;
   userInfo.setUserInfo({nameInput, jobInput});
   userInfo.setUserInfoAvatar({avatar});
   console.log(result);
 }).catch((err) => console.log(err));
 api.profileInfo({ name: 'Marie Skłodowska Curie', about: 'Physicist and Chemist' }).catch((err) => console.log(err));

//  fetch('https://nomoreparties.co/v1/cohort-46/users/me', {
//    headers: {
//      authorization: '30876ae6-9c71-4f9d-a726-3e14bc235ea6'
//    }
//  })
//    .then(res => res.json())
//    .then((result) => {
//      let nameInput = result.name;
//      let jobInput = result.about;
//      let avatar = result.avatar;
//      userInfo.setUserInfo({nameInput, jobInput});
//      userInfo.setUserInfoAvatar({avatar});
//      console.log(result);
//    });
  
  // fetch('https://mesto.nomoreparties.co/v1/cohort-46/cards', {
  //   headers: {
  //     authorization: '30876ae6-9c71-4f9d-a726-3e14bc235ea6'
  //   }
  // })
  //   .then(res => res.json())
  //   .then((result) => {
  //     const cardList = new Section({
  //       items: result,
  //       renderer: (cardItem) => {
  //         cardList.addItem(createCard(cardItem));
  //       }
  //     },
  //     '.groups__elements'
  //     );
  //     cardList.renderItems();
  //     console.log(result);
  //   });

    // fetch('https://mesto.nomoreparties.co/v1/cohort-46/users/me', {
    //   method: 'PATCH',
    //   headers: {
    //     authorization: '30876ae6-9c71-4f9d-a726-3e14bc235ea6',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: 'Marie Skłodowska Curie',
    //     about: 'Physicist and Chemist'
    //   })
    // });

    // fetch('https://mesto.nomoreparties.co/v1/cohort-46/cards', {
    //   method: 'POST',
    //   headers: {
    //     authorization: '30876ae6-9c71-4f9d-a726-3e14bc235ea6',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: 'Камчатка',
    //     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    //   })
    // });
    