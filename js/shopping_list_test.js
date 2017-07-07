/*jshint esversion:6*/
let expect = chai.expect;

/* ShoppingListItem */
describe('ShoppingListItem', function() {
  const name = 'Avocado';
  const description = 'vegetable mayonnaise';

  let testItem = new ShoppingListItem(name, description);

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
    testItem = new ShoppingListItem(name, description);
    expect(testItem.name).to.equal(name);
    expect(testItem.description).to.equal(description);
  });

  it('must at least provide a name to constructor', function() {
    expect(() => new ShoppingListItem()).to.throw(Error);
  });

  /*** check() ***/
  describe('check()', function() {
    before(function() {
      testItem = new ShoppingListItem(name, description);
    });

    it('ShoppingListItem has a method named check()', function() {
      expect(testItem).to.respondTo('check');
    });

    it('should set the instances is_done property to true', function() {
      testItem.check();
      expect(testItem.is_done).to.be.true;
    });
  });

  /*** uncheck() ***/
  describe('uncheck()', function() {
    before(function() {
      testItem = new ShoppingListItem(name, description);
    });

    it('ShoppingListItem should have a method uncheck()', function() {
      expect(testItem).to.respondTo('uncheck');
    });

    it('should set the instances is_done method to false', function() {
      testItem.check();
      testItem.uncheck();
      expect(testItem.is_done).to.be.false;
    });
  });


  /*** render() ***/
  describe('render()', function() {
    let renderedItem;

    before(function() {
      testItem = new ShoppingListItem(name, description);
      renderedItem = testItem.render();
    });

    it('ShoppingListItem should have a method render()', function() {
      expect(testItem).to.respondTo('render');
    });

    it('should be a single <li>', function() {
      expect(renderedItem.nodeName).to.equal('LI');
    });

    it('<li> should have two <span>', function() {
      expect(renderedItem.children[0].nodeName).to.equal('SPAN');
      expect(renderedItem.children[1].nodeName).to.equal('SPAN');
    });

    it('innerText of <span>s should correspond to name and description', function() {
      expect(renderedItem.children[0].innerText).to.equal('Avocado');
      expect(renderedItem.children[1].innerText).to.equal('vegetable mayonnaise');
    });

    it('should have a checkbox', function() {
      expect(renderedItem.children[2].nodeName).to.equal('INPUT');
      expect(renderedItem.children[2].type).to.equal('checkbox');
    });

    it('checkbox should have an onchange handler', function() {
      expect(renderedItem.children[2].onchange).to.be.a('function');
    });
  });
});


/*** ShoppingList ***/
describe('ShoppingList', function() {
  let testList = new ShoppingList();
  let avo = new ShoppingListItem('Avocado', 'vegetable mayonnaise');
  let eggu = new ShoppingListItem('Eggs', 'very fresh');


  it('ShoppingList should be a function', function() {
    expect(ShoppingList).to.be.a('function');
  });

  it('ShoppingList should have the property items', function() {
    expect(testList).to.have.a.property('items');
  });

  it('should have a constructor method that initializes items as an empty array', function() {
    expect(testList.items).to.deep.equal([]);
  });

  /*** addItem ***/
  describe('addItem()', function() {
    before(function() {
      testList = new ShoppingList();
    });

    it('accepts a single ShoppingListItem argument, adds it to the items array', function() {
      testList.addItem(avo);

      expect(testList.items).to.deep.equal([{name: 'Avocado', description: 'vegetable mayonnaise', is_done: false}]);
    });

    it('immediately throw an Error if item is not an instanceof ShoppingListItem', function() {
      expect(() => testList.addItem(1)).to.throw();
      expect(() => testList.addItem('')).to.throw();
      expect(() => testList.addItem({name: 'Avocado', description: 'vegetable mayonnaise', is_done: false})).to.throw();
    });
  });

  /*** removeItem ***/
  describe('removeItem()', function() {

    beforeEach(function() {
      testList = new ShoppingList();
    });

    it('should be a method on ShoppingList', function(){
      expect(testList.removeItem).to.be.a('function');
      expect(ShoppingList).to.respondTo('removeItem');
    });

    it('should remove the item from items list', function() {
      testList.addItem(avo);
      testList.removeItem(avo);

      expect(testList.items).to.not.include(avo);
    });

    it('should remove last item on items list if no parameter passed in', function() {
      testList.addItem(avo);
      testList.addItem(eggu);
      testList.removeItem();

      expect(testList.items).to.not.include(eggu);
    });

    it('should throw an error if item passed in is not a ShoppingListItem object', function() {
      expect(() => testList.removeItem(1)).to.throw(Error);
      expect(() => testList.removeItem('cat')).to.throw(Error);
      expect(() => testList.removeItem("")).to.throw(Error);
    });
  });

  /*** render ***/
  describe('render()', function() {
    let renderedList;

    before(function() {
      testList = new ShoppingList();
      testList.addItem(avo);
      testList.addItem(eggu);

      renderedList = testList.render();
    });

    it('should return a <ul> node', function() {
      expect(renderedList.nodeName).to.equal('UL');
    });

    it('should return a <ul> node containing each item in the instances item array', function() {
      expect(renderedList.children).to.have.a.lengthOf(2);
    });
  });
});