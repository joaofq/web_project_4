const editButton = document.querySelector(".editbutton");
const closeButton = document.querySelectorAll(".popup__close-icon");
const popupEditProfile = document.querySelector(".popup-editprofile");
const inputName = document.querySelector(".popup__input-name");
const inputAbout = document.querySelector(".popup__input-about");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const saveButtonEdit = document.querySelector(".popup__button-edit");
const saveButtonAddCard = document.querySelector(".popup__button-addcard");
const cardTemplate = document.querySelector(".cardTemplate").content;
const elements = document.querySelector(".elements");
const addButton = document.querySelector(".addbutton");
const popupAddCard = document.querySelector(".popup-addcard");
const inputCardTitle = document.querySelector(".popup__input-title");
const inputCardLink = document.querySelector(".popup__input-link");

//1 ABERTURA DE POPUPS

//1.2. Popup edit profile - puxa dados iniciais

function callPopup() {
  popupEditProfile.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileDescription.textContent;
}

editButton.addEventListener("click", callPopup); //Jogar pro final

//1.3. Popup addCard

function callPopupAddCard() {
  popupAddCard.classList.add("popup_opened");
}

addButton.addEventListener("click", callPopupAddCard); //Jogar pro final

//2 FECHA AMBOS OS POPUPS

closeButton.forEach(function (item) {
  item.addEventListener("click", function closePopup() {
    popupAddCard.classList.remove("popup_opened");
    popupEditProfile.classList.remove("popup_opened");
  });
});

//3 SALVA OS POPUPS

saveButtonEdit.addEventListener("click", function (evt) {
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputAbout.value;
  popupEditProfile.classList.remove("popup_opened");
  evt.preventDefault();
});

saveButtonAddCard.addEventListener("click", addCard);

function addCard() {
  let cardTitle = inputCardTitle.value;
  let cardLink = inputCardLink.value;
  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__text").textContent = cardTitle;
  cardElement.querySelector(".card__image").src = cardLink;
  cardElement.querySelector(".card__image").alt = "Image of " + cardTitle;
  elements.prepend(cardElement);
  popupAddCard.classList.remove("popup_opened");
  inputCardLink.value = "";
  inputCardTitle.value = "";
  event.preventDefault();
}

//4. GERA OS 6 CARDS INICIAIS

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
  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__text").textContent = item.name;
  cardElement.querySelector(".card__image").src = item.link;
  cardElement.querySelector(".card__image").alt = "Image of " + item.name;
  elements.append(cardElement);
});

//5. BOTÃO CURTIR

//const likeButton = document.querySelectorAll(".likebutton");

/*function liked() {
  item.classList.toggle("likebutton_active");
}


/*for (let i = 0; i < likeButton.length; i++) {
  likeButton[i].addEventListener("click", callLikeButton);
  function callLikeButton() {
    likeButton[i].classList.toggle("likebutton_active");
  }
}*/
