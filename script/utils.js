import {
  popupEditProfile,
  inputName,
  profileName,
  profileDescription,
  inputAbout,
  popupAddCard,
  formAddCard,
} from "./script.js";

const editButton = document.querySelector(".editbutton");
const popup = document.querySelectorAll(".popup");
const closePopupIcon = document.querySelectorAll(".popup__close-icon");
const addButton = document.querySelector(".addbutton");

//2 ABERTURA DE POPUPS

//2.1. Popup edit profile - puxa dados iniciais

function callPopupEditProfile() {
  popupEditProfile.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileDescription.textContent;
}

editButton.addEventListener("click", callPopupEditProfile);

//2.2. Popup addCard

function callPopupAddCard() {
  popupAddCard.classList.add("popup_opened");
}

addButton.addEventListener("click", callPopupAddCard);

//2.3. Popup Image

//3 FECHA OS POPUPS

closePopupIcon.forEach(function (item) {
  item.addEventListener("click", function () {
    closePopup(item.closest(".popup"));
  });
});

function closePopup(item) {
  item.classList.remove("popup_opened");
  formAddCard.reset();
}

popup.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    if (!evt.target.closest(".popup__container")) {
      closePopup(item);
    }
  });
});

popup.forEach(function (item) {
  document.addEventListener("keydown", function (evt) {
    if (item.classList.contains("popup_opened") && evt.key === "Escape") {
      closePopup(item);
    }
  });
});

export { closePopup };
