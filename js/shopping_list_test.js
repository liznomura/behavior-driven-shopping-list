/*jshint esversion:6*/
let expect = require('chai').expect;

describe('ShoppingListItem', function() {

  it('should be a class', function() {
    expect('ShoppingListItem').to.be.a('class');
  });

  it('should have the property, name', function() {
    expect('ShoppingListItem').to.have.a.property('name');
  });

  it('should have the property, description', function() {
    expect('ShoppingListItem').to.have.a.property('description');
  });

  it('should have the property, is_done', function() {
    expect('ShoppingListItem').to.have.a.property('is_done');
  });
});