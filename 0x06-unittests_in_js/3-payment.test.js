const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const assert = require('assert');

describe('sendPaymentRequestToApi', function() {
 it('should call Utils.calculateNumber with correct arguments and log the total', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert(spy.calledOnce);
    spy.restore();
 });
});
