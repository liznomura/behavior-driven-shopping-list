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
}