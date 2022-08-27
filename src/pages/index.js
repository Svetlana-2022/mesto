import './index.css';
import { Api } from '../components/Api.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';

const formSettings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
const popupForEdit = document.querySelector('.popup_for_edit');
const formElementForEdit = popupForEdit.querySelector('.form_for_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupForCard = document.querySelector('.popup_for_card');
const formElementForCard = popupForCard.querySelector('.form_for_card');
const avatar = document.querySelector('.profile__hover-avatar');
const popupForAvatar = document.querySelector('.popup_for_avatar');
const formElementForAvatar = popupForAvatar.querySelector('.form_for_avatar');
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
const popupForAvatarValid = new FormValidator(formElementForAvatar, formSettings);
popupForAvatarValid.enableValidation();


//экземпляр класса работы с сервером: Api
const api = new Api(config);

 //функция объединяющая промисолы карточек и информации о пользователе с сервера
 const allPromise = () => {
  Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([resUser, resCards]) => {
    const nameInput = resUser.name;
    const jobInput = resUser.about;
    const avatar = resUser.avatar;
    const _id = resUser._id;
   userInfo.setUserInfo({nameInput, jobInput, _id});
   userInfo.setUserInfoAvatar({ avatar });
   cardList.renderItems(resCards);
   
  }).catch((err) => console.log(err));
}  
allPromise();
//экземпляр класса для открытия попапа удаления
const popupForDel = new PopupWithConfirmation('.popup_for_delete');

//обработчик слушателя avatar
avatar.addEventListener('click', handleAvatarClick);

//функция для открытия попапа avatar
function handleAvatarClick() {
  formSubmitAvatar.open();
  popupForAvatarValid.resetValidation();
}
//для формы аватара экземпляр класса
const formSubmitAvatar = new PopupWithForm({
  popupSelector: '.popup_for_avatar',
  handleSubmit: ({avatar}) => {//ПРОБЛЕМА
    api.updateProfileAvatar({ avatar: avatar }).then((res) => {
      userInfo.setUserInfoAvatar({avatar: res.avatar});
      formSubmitAvatar.close();
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      formSubmitAvatar.setLoading(false);
    });
    
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
  handleSubmit: ({nameInput, jobInput}) => {//ПРОБЛЕМА
    api.updateProfileInfo({ name: nameInput, about: jobInput }).then((res) => {
      userInfo.setUserInfo({nameInput: res.name, jobInput: res.about});
      formSubmitProfile.close();
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      formSubmitProfile.setLoading(false);
    });
    
  },
});
formSubmitProfile.setEventListeners();
//обработчик слушателя пользователя
profileEditButton.addEventListener('click', () => {
  formSubmitProfile.open();
  formSubmitProfile.setInputValues(userInfo.getUserInfo());
  popupForEditValid.resetValidation();
});
//экземпляр для просмотра картинки
const popupImage = new PopupWithImage('.popup_for_img');
popupImage.setEventListeners();
//функция для открытия просмотра попапа картинки
function handleCardClick (link, name) {
  popupImage.open({data: {link, name} });
}
//функция проверки владельца пользователя
// const handleIsOwner = (el) => {
//   return userInfo.id === el;
// }

//функция возвращает готовую карточку
function createCard(item) {
  item.currentUser = userInfo.id;
  const card = new Card(item, '.element-template', 
  { handleCardClick, 
  handleDelClick: (data) => {//ПРОБЛЕМА
    popupForDel.open();
    popupForDel.setEventListeners();
    deleteButton.addEventListener('click', () =>{
      api.deleteCard(data._id).then(() =>{
        //console.log(data);
        card.handleDeleteCard(data);
        popupForDel.close();
      }).catch(err => console.log(err));
    }); 
  },   
  handleLikesCard: (data) => {
    if(card.isLiked()) {
      api.inLikeCard(data._id).then((res) => {
        card.deleteLike();
        card.setLike(res.likes);
      }).catch((err) => console.log(err));
    } else { 
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
      formSubmitCard.close();
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      formSubmitCard.setLoading(false);
    });
    
  }
});
formSubmitCard.setEventListeners();  

