/*jshint esversion:6*/
(function() {
  const myList = new ShoppingList();
  const content = document.getElementById('content');
  const addButton = document.getElementById('add_shopping_list_item_button');

  const title = document.getElementById('title'); // grabs input from title box
  const description = document.getElementById('description'); // grabs input from description box

  appendToContent(myList.render());

  addButton.addEventListener('click', function(e) {
    e.preventDefault();

    const new_shopping_list_item = new ShoppingListItem(title.value, description.value);

    myList.addItem(new_shopping_list_item);

    appendToContent(myList.render());
  });

  function appendToContent(node) {
    if(content.children.length > 0) {
      content.replaceChild(node, content.children[0]);
    } else {
      content.appendChild(node);
    }
  }

  window.changeCheckedStatus = function(idx, checkbox) {

  };
})();