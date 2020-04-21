var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add numbers', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 5);

  })

  it('it can substract', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 3);

  })

  it('it can multiply', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 15);
  })

  it('it can divide', function(){
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 3);
  })

  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick(2)
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 23);
  })

  it('it can chain multiple operations together', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 12);
  })

  it(' it can clear the running total without affecting the calculation', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 6);
  })
});
