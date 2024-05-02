const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const expect  = require('chai').expect;

describe('sendPaymentRequestToApi', function() {
 it('should call Utils.calculateNumber with correct arguments and log the total', function() {
   const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
   const consoleSpy = sinon.spy(console, 'log');

   sendPaymentRequestToApi(100, 20);

   expect(stub.calledOnce).to.be.true;
   expect(stub.calledWith('SUM', 100, 20)).to.be.true;
   expect(consoleSpy.calledOnce).to.be.true;
   expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

   stub.restore();
   consoleSpy.restore();
 });
});
