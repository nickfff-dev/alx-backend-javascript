const calculateNumber = require('./2-calcul_chai.js');
const expect  = require("chai").expect;

describe('calculateNumber', function() {
 describe('SUM', function() {
    it('should round and sum two numbers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
 });

 describe('SUBTRACT', function() {
    it('should round and subtract two numbers', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
 });

 describe('DIVIDE', function() {
    it('should round and divide two numbers', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by zero', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
 });
});
