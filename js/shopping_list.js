/* jshint esversion: 6 */
class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    console.log('ex')
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
}