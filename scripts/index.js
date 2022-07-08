import { Card } from './Card.js';
import { FormValidator, formSettings } from './FormValidator.js';
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

//для попапов создаются экземпляры классов
const popupForEditValid = new FormValidator(formElementForEdit, formSettings);
popupForEditValid.enableValidation();
const popupForCardValid = new FormValidator(formElementForCard, formSettings);
popupForCardValid.enableValidation();

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscKeydown);    
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',handleEscKeydown);
}

const handleEscKeydown = (evt) => {
  if(evt.key ==="Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
}

const handleOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
}
}
popups.forEach((popup) => {
  popup.addEventListener('mousedown', handleOverlay);
});

popupCloseIconForEdit.addEventListener('click', () => {
  closePopup(popupForEdit);
});
popupCloseIconForCard.addEventListener('click', () =>{
  closePopup(popupForCard);
});
popupCloseIconForImg.addEventListener('click', () =>{
  closePopup(popupForImg);
});

profileEditButton.addEventListener('click', () => {
  openPopup(popupForEdit);
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoSubtitle.textContent;
  popupForEditValid.resetValidation();
});

profileAddButton.addEventListener('click', () => {
  openPopup(popupForCard);
  formElementForCard.reset();
  popupForCardValid.resetValidation();
});

// Обработчик «отправки» формы,
function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    console.log('word');
    closePopup(popupForEdit);
    
}
formElementForEdit.addEventListener('submit', handleProfileFormSubmit);

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


//функция для открытия просмотра попапа картинки
 function handleCardClick (link, name) {
  openPopup(popupForImg);
  popupElImg.src = link;
  popupElImg.alt = name;
  popupElCaption.textContent = name;
}
  //для каждой карточки создаётся экземпляр класса

function createCard(item) {
  const card = new Card(
    item.link, 
    item.name, 
    '.element-template', 
    handleCardClick
  );
  const cardEl = card.generateCard();
  return cardEl;
}
//функция вставки карточки
function renderCard(item) {
  groupElement.prepend(createCard(item));
}


// Обработчик «отправки» формы, для карточки

function handleForCardFormSubmit (evt) {
  evt.preventDefault();
  const item = {};
  item.link = linkInput.value;
  item.name = titleInput.value;

  renderCard(item);
  closePopup(popupForCard);
}

initialCards.forEach((item) => {
  renderCard(item); 
});

formElementForCard.addEventListener('submit', handleForCardFormSubmit);

