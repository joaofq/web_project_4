import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { closePopup } from "./utils.js";
import Section from "./Section.js";

const popupEditProfile = document.querySelector(".popup-editprofile");
const formEditProfile = document.forms.formEditProfile;
const formAddCard = document.forms.formAddCard;
const inputName = formEditProfile.elements.name;
const inputAbout = formEditProfile.elements.about;
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const elements = document.querySelector(".elements");
const popupAddCard = document.querySelector(".popup-addcard");
const inputCardTitle = formAddCard.elements.title;
const inputCardLink = formAddCard.elements.link;

//1. Render cards

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
    },
  },
  ".elements",
);

/*
function renderCards() {
  elements.innerHTML = "";
  initialCards.map(function (item, index) {
    const newCard = new Card(item.name, item.link, ".cardTemplate", index);
    elements.append(newCard.generateCard());
  });
}
*/

//4 SAVE POPUPS DATA

//4.1. Edit Profile

formEditProfile.addEventListener("submit", function (evt) {
  saveProfileInputs();
  closePopup(popupEditProfile);
  evt.preventDefault();
});

function saveProfileInputs() {
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputAbout.value;
}

//4.2. AddCards + Push initialCards list

formAddCard.addEventListener("submit", addCard);

function addCard(evt) {
  const newCard = {
    name: inputCardTitle.value,
    link: inputCardLink.value,
  };
  initialCards.unshift(newCard);
  renderCards();
  closePopup(popupAddCard);
  evt.preventDefault();
}

//Enable form validations

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
cardList.handleRenderer();
//renderCards();

export {
  popupEditProfile,
  profileName,
  profileDescription,
  inputName,
  inputAbout,
  popupAddCard,
  formAddCard,
  formAddCardValidator,
  formEditProfileValidator,
};
