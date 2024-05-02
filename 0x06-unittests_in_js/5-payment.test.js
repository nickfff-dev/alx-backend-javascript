const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

 beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
 });

 afterEach(function() {
    consoleSpy.restore();
 });

 it('should log the total when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
 });

 it('should log the total when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
 });
});