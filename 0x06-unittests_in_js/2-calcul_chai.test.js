// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');
const { describe, it } = require('mocha');

describe('calculateNumber', function() {
 describe('SUM', function() {
    it('should round and sum two numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
 });

 describe('SUBTRACT', function() {
    it('should round and subtract two numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
 });

 describe('DIVIDE', function() {
    it('should round and divide two numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
 });
});
