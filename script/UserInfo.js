export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    const name = this._name.textContent;
    const description = this._description.textContent;
    return { name, description };
  }

  setUserInfo(newName, newDescription) {
    this._name.textContent = newName;
    this._description.textContent = newDescription;
  }
}
