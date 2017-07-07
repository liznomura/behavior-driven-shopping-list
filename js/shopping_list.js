/* jshint esversion: 6 */
class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if(!(item instanceof ShoppingListItem)) {
      throw new Error('Must be a ShoppingListItem!');
    }

    this.items.push(item);
  }

  removeItem(item) {
    if(!(item instanceof ShoppingListItem) && item !== undefined) {
      throw new Error('Must be a ShoppingListItem');
    }

    if(!item) {
      this.items.pop();
    } else {
       const index = this.items.indexOf(item);

       if(index >= 0) {
        this.items.splice(index, 1);
      }
    }
  }

  render() {
    const list = document.createElement('ul');

    const items = this.items.map(function(item) {
      return item.render();
    })
    .forEach(function(item) {
      list.appendChild(item);
    });

    return list;
  }

}