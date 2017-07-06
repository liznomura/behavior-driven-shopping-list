/*jshint esversion:6*/
let expect = chai.expect;
describe('ShoppingListItem', function() {

let testItem = new ShoppingListItem('Avocado', 'vegetable mayonnaise');

  it('should be a class', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have the property, name', function() {
    expect(testItem).to.have.a.property('name');
  });

  it('should have the property, description', function() {
    expect(testItem).to.have.a.property('description');
  });

  it('should have the property, is_done', function() {
    expect(testItem).to.have.a.property('is_done');
  });

  it('constructor method sets a name and description property on an instance', function() {
    expect(testItem.name).to.equal('Avocado');
    expect(testItem.description).to.equal('vegetable mayonnaise');
  });
});