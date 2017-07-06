/*jshint esversion:6*/
(function() {
  const myList = new ShoppingList();
  const initialList = myList.render();
  const content = document.getElementById('content');

  content.innerHTML = initialList;

  const addButton = document.getElementById('add_shopping_list_item_button');

  const title = document.getElementById('title'); // grabs input from title box
  const description = document.getElementById('description'); // grabs input from description box


  addButton.addEventListener('click', function(e) {
    e.preventDefault();

    // grab inputs
    // make new shopping list item
    // add to shopping list item array
    // rerender shopping list

    const new_shopping_list_item = new ShoppingListItem(title.value, description.value);

    myList.addItem(new_shopping_list_item);

    content.innerHTML = myList.render();
  });
})();