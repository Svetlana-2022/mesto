const popup = document.querySelector('.popup');
const popupForEdit = document.querySelector('.popup_for_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseIcon = document.querySelector('.popup__close-icon');
const profileAddButton = document.querySelector('.profile__add-button');
const popupForCard = document.querySelector('.popup_for_card');
const popupCloseIconForCard = document.querySelector('.popup__close-icon_for_card');
const popupForImg = document.querySelector('.popup_for_img');
const popupCloseIconForImg = document.querySelector('.popup__close-icon_for_img');


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
popupCloseIconForImg.addEventListener('click', () =>{
  closeIconPopup(popupForImg);
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
    let elImg = element.querySelector('.element__mask-group').src = card.link;
    element.querySelector('.element__title').textContent = card.name;
    element.querySelector('.element__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__like_active');
    });
    element.querySelector('.element__trash').addEventListener('click', () => {
      element.remove();
    });
groupsElements.prepend(element);
});

let formElementForCard = document.querySelector('.form_for_card');
let titleInput = document.querySelector('.form__input_type_title');
let linkInput = document.querySelector('.form__input_type_link');

// Обработчик «отправки» формы,
function formForCardSubmitHandler (evt) {
    evt.preventDefault();
    const newElementTemplate = document.querySelector('.element-template').content;
    const newElement = newElementTemplate.querySelector('.element').cloneNode(true);
    newElement.querySelector('.element__mask-group').src = linkInput.value;
    newElement.querySelector('.element__title').textContent = titleInput.value;
    newElement.querySelector('.element__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__like_active');
    });
    newElement.querySelector('.element__trash').addEventListener('click', () => {
      newElement.remove();
    });
    groupsElements.prepend(newElement);
    closeIconPopup(popupForCard);

}

formElementForCard.addEventListener('submit', formForCardSubmitHandler);

let popupElImg = document.querySelector('.popup__el-img');
let popupElCaption = document.querySelector('.popup__el-caption');

groupsElements.addEventListener('click', (evt) => {
  openPopup(popupForImg);
  popupElImg.src = evt.target.src;
  popupElCaption.textContent = evt.target.textContent;
  console.log(evt.target);
});




