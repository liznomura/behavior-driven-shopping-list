/*jshint esversion:6*/
(function() {
const myList = new ShoppingList();
const initialList = myList.render();
const content = document.getElementById('content');

content.insertAdjacentHTML('beforeend', initialList);
})();