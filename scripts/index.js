const popup = document.querySelector('.popup');
const popupForEdit = document.querySelector('.popup_for_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseIcon = document.querySelector('.popup__close-icon');
const profileAddButton = document.querySelector('.profile__add-button');
const popupForCard = document.querySelector('.popup_for_card');
const popupCloseIconForCard = document.querySelector('.popup__close-icon_for_card');
const popupForImg = document.querySelector('.popup_for_img');
const popupCloseIconForImg = document.querySelector('.popup__close-icon_for_img');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const profileInfoTitle = document.querySelector('.profile__title');
const profileInfoSubtitle = document.querySelector('.profile__subtitle');
const groupElement = document.querySelector('.groups__elements');
const popupElImg = document.querySelector('.popup__el-img');
const popupElCaption = document.querySelector('.popup__el-caption');
const formElementForCard = document.querySelector('.form_for_card');
const titleInput = document.querySelector('.form__input_type_title');
const linkInput = document.querySelector('.form__input_type_link');

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
   
function createCard(card) {
  const elementTemplate = document.querySelector('.element-template').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const elMaskGroup = element.querySelector('.element__mask-group');
    elMaskGroup.src = card.link;
    const elTitle = element.querySelector('.element__title');
    elTitle.textContent = card.name;
    element.querySelector('.element__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__like_active');
    });
    element.querySelector('.element__trash').addEventListener('click', () => {
      element.remove();
    });
    elMaskGroup.addEventListener('click', (evt) => {
      openPopup(popupForImg);
      popupElImg.src = evt.target.src;
      popupElCaption.textContent = element.textContent;
    });
    return element;
}

function inserstCard(element) {
  const singleElement = createCard(element);
  groupElement.prepend(singleElement);  
}

initialCards.forEach(function(card){
  inserstCard(card);
});

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






