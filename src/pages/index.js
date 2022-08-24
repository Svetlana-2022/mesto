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

const popupForEdit = document.querySelector('.popup_for_edit');
const formElementForEdit = popupForEdit.querySelector('.form_for_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupForCard = document.querySelector('.popup_for_card');
const formElementForCard = popupForCard.querySelector('.form_for_card');
const avatar = document.querySelector('.profile__hover-avatar');
const formElementForAvatar = popupForCard.querySelector('.form_for_avatar');
const deleteButton = document.querySelector('.form__submit-button_for_delete');
const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-46/',
  headers: {
    authorization: '30876ae6-9c71-4f9d-a726-3e14bc235ea6',
    'Content-Type': 'application/json'
  }
}

//для попапов создаются экземпляры классов валидации
const popupForEditValid = new FormValidator(formElementForEdit, formSettings);
popupForEditValid.enableValidation();
const popupForCardValid = new FormValidator(formElementForCard, formSettings);
popupForCardValid.enableValidation();
//const popupForAvatarValid = new FormValidator(formElementForAvatar, formSettings);
//popupForAvatarValid.enableValidation();//ПРОБЛЕМА'querySelectorAll'--null

//экземпляр класса работы с сервером: Api
const api = new Api(config);

 //функция объединяющая промисолы карточек и информации о пользователе с сервера
 const allPromise = () => {
  Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([resUser, resCards]) => {
    console.log(resUser);
    let nameInput = resUser.name;
    let jobInput = resUser.about;
    let _id = resUser._id;
   userInfo.setUserInfo({nameInput, jobInput, _id});
   userInfo.setUserInfoAvatar(resUser);
   cardList.renderItems(resCards);
   
  }).catch((err) => console.log(err));
}  
allPromise();
//экземпляр класса для открытия попапа удаления
const popupForDel = new Popup('.popup_for_delete');

//обработчик слушателя avatar
avatar.addEventListener('click', handleAvatarClick);

//функция для открытия попапа avatar
function handleAvatarClick() {
  formSubmitAvatar.open();
  //popupForAvatarValid.resetValidation();//ПРОБЛЕМА--с 34
}
//для формы аватара экземпляр класса
const formSubmitAvatar = new PopupWithFormAvatar({
  popupSelector: '.popup_for_avatar',
  handleSubmit: ({avatar}) => {
    api.updateProfileAvatar({ avatar: avatar }).then((res) => {
      userInfo.setUserInfoAvatar({avatar: res.avatar});
    }).catch((err) => console.log(err)); 
  }
});
formSubmitAvatar.setEventListeners();

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
    console.log({nameInput, jobInput});
    api.updateProfileInfo({ name: nameInput, about: jobInput }).then((res) => {
      userInfo.setUserInfo({nameInput: res.name, jobInput: res.about});
    }).catch((err) => console.log(err));
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
//функция проверки владельца пользователя
const handleIsOwner = (el) => {
  return userInfo._id === el;
}

//функция возвращает готовую карточку
function createCard(item) {
  item.currentUser = userInfo;
  const card = new Card(item, '.element-template', 
  { handleCardClick, 
   handleDelClick: (data) => {
     popupForDel.open();
     popupForDel.setEventListeners();
     deleteButton.addEventListener('click', () =>{
       api.deleteCard(data._id).then(() =>{
          card.handleDeleteCard();
          popupForDel.close();
         }).catch(err => console.log(err));
     });
   }, 
  handleIsOwner,  
  handleLikesCard: (data) => {
    if(card.isLiked()) {
      console.log(card.isLiked());
      api.inLikeCard(data._id).then((res) => {
        card.deleteLike();
        card.setLike(res.likes);
      }).catch((err) => console.log(err));
    } else {
      console.log('cardId', data._id); 
      api.likeCard(data._id).then((res) => {
        card.addLike();
        card.setLike(res.likes);
      }).catch((err) => console.log(err));
    }
  } 
});
  const cardEl = card.generateCard();
  return cardEl;
}

//для каждой карточки создаётся экземпляр класса
const cardList = new Section({
  renderer: (cardItem) => {
    cardList.addItem(createCard(cardItem));
  }
},
'.groups__elements'
);
    
//создаём экземпляр формы для карточки
const formSubmitCard = new PopupWithForm({
  popupSelector: '.popup_for_card',
  handleSubmit: ({linkCard, nameCard}) => {
    api.addCard({link: linkCard, name: nameCard}).then((res) => {
      cardList.addItem(createCard(res));
    }).catch((err) => console.log(err));
    formSubmitCard.close();
  }
});
formSubmitCard.setEventListeners();  
    