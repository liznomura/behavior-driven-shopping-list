/*jshint esversion:6*/
class ShoppingListItem {
  constructor(name, description) {
    if(!name) throw new Error('must give a name')
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    const singleLi = document.createElement('li');
    const firstSpan = document.createElement('span');
    const secondSpan = document.createElement('span');

    singleLi.className = `completed_${this.is_done}`;
    firstSpan.innerText = this.name;
    secondSpan.innerText = this.description;

    singleLi.appendChild(firstSpan);
    singleLi.appendChild(secondSpan);

    return singleLi;
  }

}