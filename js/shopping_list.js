/* jshint esversion: 6 */
class ShoppingList {
  constructor() {
    this.items = [];
    this.changeCheckStatus.bind(this);
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

  changeCheckStatus(index) {
    let item = this.items[index];

    if(item.checked) {
      item.uncheck();
    } else {
      item.check();
    }
  }

  render() {
    const list = document.createElement('ul');

    const items = this.items.map(function(item, index) {
      let node = item.render();

      node.onchange = this.changeCheckStatus.bind(this, index);

      return node;
    }.bind(this))
    .forEach(function(item) {
      list.appendChild(item);
    });

    return list;
  }

}