const popup = document.querySelector('.popup');
const popupForEdit = document.querySelector('.popup_for_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseIcon = document.querySelector('.popup__close-icon');
const profileAddButton = document.querySelector('.profile__add-button');
const popupForCard = document.querySelector('.popup_for_card');
const popupCloseIconForCard = document.querySelector('.popup__close-icon_for_card');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closeIconPopup(popup) {
  popup.classList.remove('popup_opened');
}

popupCloseIcon.addEventListener('click', () => {
  closeIconPopup(popupForEdit);
});
popupCloseIconForCard.addEventListener('click', () =>{
  closeIconPopup(popupForCard);
});

profileEditButton.addEventListener('click', () => {
  openPopup(popupForEdit);
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoSubtitle.textContent;
});

profileAddButton.addEventListener('click', () => {
  openPopup(popupForCard);
});

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let profileInfoTitle = document.querySelector('.profile__title');
let profileInfoSubtitle = document.querySelector('.profile__subtitle');

// Обработчик «отправки» формы,
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    closeIconPopup(popupForEdit);

}

formElement.addEventListener('submit', formSubmitHandler);

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
const groupsElements = document.querySelector('.groups__elements');
initialCards.forEach(function(card){
    const elementTemplate = document.querySelector('.element-template').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__mask-group').src = card.link;
    element.querySelector('.element__title').textContent = card.name;
    element.querySelector('.element__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__like_active');
      console.log(evt.target);
    });
groupsElements.prepend(element);
})

let formElementForCard = document.querySelector('.form_for_card');
let titleInput = document.querySelector('.form__input_type_title');
let linkInput = document.querySelector('.form__input_type_link');
let elementContaner = document.querySelector('.element__container');

// Обработчик «отправки» формы,
function formForCardSubmitHandler (evt) {
    evt.preventDefault();
    const newElementTemplate = document.querySelector('.element-template').content;
    const newElement = newElementTemplate.querySelector('.element').cloneNode(true);
    newElement.querySelector('.element__mask-group').src = linkInput.src;
    newElement.querySelector('.element__title').textContent = titleInput.value;
    newElement.querySelector('.element__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__like_active');
      console.log(evt.target);
    });
    groupsElements.prepend(newElement);
    
    closeIconPopup(popupForCard);

}

formElementForCard.addEventListener('submit', formForCardSubmitHandler);