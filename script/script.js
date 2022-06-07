const editButton = document.querySelector(".editbutton");
const closeButton = document.querySelector(".popup__close-icon");
const popup = document.querySelector(".popup");
const inputName = document.querySelector(".popup__input-name");
const inputAbout = document.querySelector(".popup__input-about");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const popup__button = document.querySelector(".popup__button");
const likeButton = document.querySelectorAll(".likebutton");
const cardTemplate = document.querySelector(".cardTemplate").content;
const elements = document.querySelector(".elements");

function callPopup() {
  popup.classList.toggle("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileDescription.textContent;
}

function savePopup(evt) {
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputAbout.value;
  popup.classList.toggle("popup_opened");
  evt.preventDefault();
}

for (let i = 0; i < likeButton.length; i++) {
  likeButton[i].addEventListener("click", callLikeButton);
  function callLikeButton() {
    likeButton[i].classList.toggle("likebutton_active");
  }
}

editButton.addEventListener("click", callPopup);
closeButton.addEventListener("click", callPopup);
popup__button.addEventListener("click", savePopup);

const initialCards = [
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

initialCards.map(function (item) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__text").textContent = item.name;
  cardElement.querySelector(".card__image").src = item.link;
  elements.append(cardElement);
});
