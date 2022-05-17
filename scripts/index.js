const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseIcon = document.querySelector('.popup__close-icon');


function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileInfoTitle.textContent;
    jobInput.value = profileInfoSubtitle.textContent;
}
function closeIconPopup() {
    popup.classList.remove('popup_opened');
}
popupCloseIcon.addEventListener('click', closeIconPopup);
profileEditButton.addEventListener('click', openPopup);

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
    closeIconPopup();

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

const elementTemplate = document.querySelector('#element').content;
const groupsElements = document.querySelector('.groups__elements');
const element = elementTemplate.querySelector('.element').cloneNode(true);
initialCards.forEach(function(card){
  element.querySelector('.element__mask-group').src = card.link;
element.querySelector('.element__title').textContent = card.name;
element.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('.element__like_active');
});
groupsElements.prepend(element);
})

