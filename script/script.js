import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
const editButton = document.querySelector(".editbutton");
const addButton = document.querySelector(".addbutton");
const formEditProfile = document.forms.formEditProfile;
const formAddCard = document.forms.formAddCard;
const inputName = formEditProfile.elements.name;
const inputAbout = formEditProfile.elements.about;

//1. RENDER ELEMENTS

//1.1. Render cards

export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const cardList = new Section(
  {
    items: initialCards,
    renderer: (item, index) => {
      const newCard = new Card(item.name, item.link, ".cardTemplate", index);
      const cardElement = newCard.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".elements",
);

//1.2. Render user info

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__description",
});

//2 POPUP WITH FORMS

//2.1. Popup edit profile

//Save function on submit
const saveProfileInputs = () => {
  const profileName = document.querySelector(".profile__name");
  const profileDescription = document.querySelector(".profile__description");
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputAbout.value;
};

//create instance
const popupEditProfile = new PopupWithForm(
  ".popup-editprofile",
  saveProfileInputs,
);
popupEditProfile.setEventListeners();

//open opoup
editButton.addEventListener("click", () => {
  popupEditProfile.open();
  const userObj = userInfo.getUserInfo();
  inputName.value = userObj.name;
  inputAbout.value = userObj.description;
});

//2.2. Popup addCard

const addCard = () => {
  const inputCardTitle = formAddCard.elements.title;
  const inputCardLink = formAddCard.elements.link;
  const newCard = {
    name: inputCardTitle.value,
    link: inputCardLink.value,
  };
  initialCards.unshift(newCard);
  cardList.renderItems();
};

const popupAddCard = new PopupWithForm(".popup-addcard", addCard);
popupAddCard.setEventListeners();

addButton.addEventListener("click", () => {
  popupAddCard.open();
});

const defaultConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_visible",
};

const formAddCardValidator = new FormValidator(defaultConfig, formAddCard);

const formEditProfileValidator = new FormValidator(
  defaultConfig,
  formEditProfile,
);

formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();
cardList.renderItems();

//renderCards();

function resetValidation(item) {
  formAddCardValidator.resetValidation();
  formEditProfileValidator.resetValidation();
}

export {
  inputName,
  inputAbout,
  formAddCard,
  formAddCardValidator,
  formEditProfileValidator,
  resetValidation,
};
