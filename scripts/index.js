const popups = document.querySelectorAll('.popup');
const popupForEdit = document.querySelector('.popup_for_edit');
const formElementForEdit = popupForEdit.querySelector('.form_for_edit');
const nameInput = formElementForEdit.querySelector('.form__input_type_name');
const jobInput = formElementForEdit.querySelector('.form__input_type_job');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseIconForEdit = popupForEdit.querySelector('.popup__close-icon_for_edit');
const buttonForEdit = formElementForEdit.querySelector('.form__submit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupForCard = document.querySelector('.popup_for_card');
const formElementForCard = popupForCard.querySelector('.form_for_card');
const titleInput = formElementForCard.querySelector('.form__input_type_title');
const linkInput = formElementForCard.querySelector('.form__input_type_link');
const popupCloseIconForCard = popupForCard.querySelector('.popup__close-icon_for_card');
const buttonForCard = formElementForCard.querySelector('.form__submit-button');
const popupForImg = document.querySelector('.popup_for_img');
const popupCloseIconForImg = popupForImg.querySelector('.popup__close-icon_for_img');
const popupElImg = popupForImg.querySelector('.popup__el-img');
const popupElCaption = popupForImg.querySelector('.popup__el-caption');
const profileInfoTitle = document.querySelector('.profile__title');
const profileInfoSubtitle = document.querySelector('.profile__subtitle');
const groupElement = document.querySelector('.groups__elements');
const elementTemplate = document.querySelector('.element-template').content;
//const templateSelector = document.querySelector('.element-template');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', haldeEscKeydown);    
}

function closeIconPopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',haldeEscKeydown);
}

const haldeEscKeydown = (evt) => {
  if(evt.key ==="Escape") {
    closeIconPopup(document.querySelector('.popup_opened'));
  }
}

const haldeOverlay = (evt) => {
  if(evt.target === evt.currentTarget) {
    closeIconPopup(evt.target);
  }
}
popups.forEach((popup) => {
  popup.addEventListener('click', haldeOverlay);
});

popupCloseIconForEdit.addEventListener('click', () => {
  closeIconPopup(popupForEdit);
});
popupCloseIconForCard.addEventListener('click', () =>{
  closeIconPopup(popupForCard);
});
popupCloseIconForImg.addEventListener('click', () =>{
  closeIconPopup(popupForImg);
});

profileEditButton.addEventListener('click', () => {
  openPopup(popupForEdit);
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoSubtitle.textContent;
  isFormValid([nameInput, jobInput], formElementForEdit, buttonForEdit, formSettings);
});

profileAddButton.addEventListener('click', () => {
  linkInput.value = '';
  titleInput.value = '';
  openPopup(popupForCard);
  isFormValid([linkInput, titleInput], formElementForCard, buttonForCard, formSettings);
});

// Обработчик «отправки» формы,
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    closeIconPopup(popupForEdit);
    
}
formElementForEdit.addEventListener('submit', formSubmitHandler);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

import { Card } from './Card.js';
  //для каждой карточки создаётся экземпляр класса
initialCards.forEach((item) => {
  const card = new Card(item);
  const cardElement = card.generateCard();
  document.querySelector('.groups__elements').prepend(cardElement);
});
//функция для открытия просмотра попапа картинки
function openImage(link, name) {
  popupElImg.src = link;
  popupElImg.alt = name;
  popupElCaption.textContent = name;
}   






  //function createCard(card) {
    //const element = elementTemplate.querySelector('.element').cloneNode(true);
    //const elMaskGroup = element.querySelector('.element__mask-group');
    //elMaskGroup.src = card.link;
    //elMaskGroup.alt = card.name;
    //const elTitle = element.querySelector('.element__title');
    //elTitle.textContent = card.name;
    //element.querySelector('.element__like').addEventListener('click', function(evt) {
      //evt.target.classList.toggle('element__like_active');
    //});
    //element.querySelector('.element__trash').addEventListener('click', () => {
      //element.remove();
    //});
    //elMaskGroup.addEventListener('click', (evt) => {
      //openPopup(popupForImg);
      //popupElImg.src = evt.target.src;
      //popupElImg.alt = element.textContent;
      //popupElCaption.textContent = element.textContent;
    //});
    //return element;
//}


//function inserstCard(element) {
  //groupElement.prepend(createCard(element));  
//}

//initialCards.forEach(function(card){
  //inserstCard(card);
//});

// Обработчик «отправки» формы,
function formForCardSubmitHandler (evt) {
    evt.preventDefault();
    const card = {};
    card.link = linkInput.value;
    card.name = titleInput.value;
    inserstCard(card);
    closeIconPopup(popupForCard);
}

formElementForCard.addEventListener('submit', formForCardSubmitHandler);

