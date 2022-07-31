import Popup from "./Popup.js";
import { resetValidation } from "../index.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector("form");
  }

  _getInputValues() {
    const inputList = this._popup.querySelectorAll(".popup__input");
    return inputList;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFunction();
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
    resetValidation();
  }
}
