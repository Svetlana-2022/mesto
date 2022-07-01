import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { formSettings } from './FormValidator.js';
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
//const forms = document.querySelectorAll('.form');
//const popupForEditValid = new FormValidator(formElementForEdit, formSettings);
//popupForEditValid.enableValidation();
//const popupForCardValid = new FormValidator(formElementForCard, formSettings);
//popupForCardValid.enableValidation();


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
  const popupForEditValid = new FormValidator(formElementForEdit, formSettings);
  popupForEditValid.enableValidation();
  popupForEditValid.isFormValid([nameInput, jobInput], buttonForCard);
});

profileAddButton.addEventListener('click', () => {
  linkInput.value = '';
  titleInput.value = '';
  openPopup(popupForCard);
  //TODO
  const popupForCardValid = new FormValidator(formElementForCard, formSettings);
  popupForCardValid.enableValidation();
  popupForCardValid.isFormValid([linkInput, titleInput], buttonForEdit);
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

//функция для открытия просмотра попапа картинки
export function openImage (link, name) {
  openPopup(popupForImg);
  popupElImg.src = link;
  popupElImg.alt = name;
  popupElCaption.textContent = name;
}
  //для каждой карточки создаётся экземпляр класса
initialCards.forEach((item) => {
  const card = new Card(item.link, item.name, '.element-template');
  const cardElement = card.generateCard();
  groupElement.prepend(cardElement);
});

// Обработчик «отправки» формы, для карточки
function formForCardSubmitHandler (evt) {
    evt.preventDefault();
    const cardNew = new Card(linkInput.value, titleInput.value, '.element-template');
    const cardElementNew = cardNew.generateCard();
    groupElement.prepend(cardElementNew);
    
    closeIconPopup(popupForCard);
}

formElementForCard.addEventListener('submit', formForCardSubmitHandler);