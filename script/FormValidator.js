//Copiei do MalconX

export default class FormValidator {
  constructor(configObject, formElement) {
    this._inputSelector = configObject.inputSelector;
    this._submitButtonSelector = configObject.submitButtonSelector;
    this._inactiveButtonClass = configObject.inactiveButtonClass;
    this._inputErrorClass = configObject.inactiveButtonClass;
    this._errorClass = configObject.errorClass;
    this._form = formElement;
  }

  isValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }

  showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.errorClass);
  }

  hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  setEventListeners(/*formElement*/) {
    const inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector),
    );
    const buttonElement = this._form.querySelector(this._submitButtonSelector);
    this.toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.isValid(this._form, inputElement);
        this.toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this.setEventListeners();
  }

  hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState(inputList, buttonElement) {
    if (this.hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute("disabled", "");
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute("disabled", "");
    }
  }
}
