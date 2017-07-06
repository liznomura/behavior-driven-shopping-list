/*jshint esversion:6*/
let expect = chai.expect;
describe('ShoppingListItem', function() {

let testItem = new ShoppingListItem('Avocado', 'vegetable mayonnaise');

  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have the property name', function() {
    expect(testItem).to.have.a.property('name');
  });

  it('should have the property description', function() {
    expect(testItem).to.have.a.property('description');
  });

  it('should have the property is_done', function() {
    expect(testItem).to.have.a.property('is_done');
  });

  it('constructor method sets a name and description property on an instance', function() {
    expect(testItem.name).to.equal('Avocado');
    expect(testItem.description).to.equal('vegetable mayonnaise');
  });

  describe('check()', function() {
    before(function() {
      let testItem = new ShoppingListItem();
    });

    it('ShoppingListItem has a method named check()', function() {
      expect(testItem).to.respondTo('check');
    });

    it('should set the instances is_done property to true', function() {
      testItem.check();
      expect(testItem.is_done).to.be.true;
    });
  });

  describe('uncheck()', function() {
    before(function() {
      let testItem = new ShoppingListItem();
    });

    it('ShoppingListItem should have a method uncheck()', function() {
      expect(testItem).to.respondTo('uncheck');
    });

    it('should set the instances is_done method to false', function() {
      testItem.uncheck();
      expect(testItem.is_done).to.be.false;
    });
  });

  describe('render()', function() {
    it('ShoppingListItem should have a method render()', function() {
      expect(testItem).to.respondTo('render');
    });

    it('should return an html formatted string with the name and description as content', function() {
      const expected = `<li><span>${testItem.name}</span><span>${testItem.description}</span></li>`;
      expect(testItem.render()).to.equal(expected);
    });
  });

  describe('ShoppingList', function() {
    before(function() {
    let testList = new ShoppingList();
  });
    it('ShoppingList should be a function', function() {
      expect('ShoppingList').to.be.a('function)');
    });

    it('ShoppingList should have the property items', function() {
      expect(testList).to.have.a.property('items');
    });

    it('should have a constructor method that initializes items as an empty array', function() {
      expect(testList.items).to.deep.equal([]);
    });
  });
});