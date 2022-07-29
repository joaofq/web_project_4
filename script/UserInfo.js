/*A classe UserInfo é responsável por renderizar a informação sobre o usuário na página. Esta classe deve:
Pegar um objeto com o seletor de dois elementos no construtor: um contendo o nome do usuário e o outro contendo o trabalho do usuário.
Armazenar um método público chamado getUserInfo() que retorna um objeto com informação sobre o usuário. Esse método será útil para casos em que é necessário exibir os dados do usuário no formulário aberto.
Armazenar um método público chamado setUserInfo() que pega novos dados do usuário e adiciona na página.*/

export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._name = nameSelector;
    this._description = descriptionSelector;
  }

  getUserInfo() {
    const name = document.querySelector(this._name).textContent;
    const description = document.querySelector(this._description).textContent;
    return { name, description };
  }

  setUserInfo(newName, newDescription) {
    this._name.value = newName;
    this._description = newDescription;
  }
}
