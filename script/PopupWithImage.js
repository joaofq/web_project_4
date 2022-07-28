import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
  }

  open(name, link) {
    const popupImageView = document.querySelector(".popup__image-view");
    const popupCaption = document.querySelector(".popup__caption");
    popupImageView.src = link;
    popupImageView.alt = name;
    popupCaption.textContent = name;
    super.open();
  }
}
