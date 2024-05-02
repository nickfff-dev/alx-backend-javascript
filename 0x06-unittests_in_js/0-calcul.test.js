const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
const { describe, it } = require('mocha');

describe('calculateNumber', function() {
 it('should round and sum two numbers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
 });
   it('should round and sum two numbers', function() {
      assert.strictEqual(calculateNumber(1.4, 3.7), 5);
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
      assert.strictEqual(calculateNumber(1.6, 3.7), 6);
      assert.strictEqual(calculateNumber(-1.7, -1.6), -4);
   });
});


