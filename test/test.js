var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var signIn = require('../routes/fakeroutes').signIn;
//var signIn = require('../routes/signIn');

describe("fakeroutes", function() {
describe("signin", function() {

      it("should respond", function() {
        var req,res,spy;

        req = {name: 'test@test.com',
        		password: 'test'};
        res = {};
        spy = res.send = sinon.spy();
//console.log(req);
        res = signIn(req, res);
        expect(spy.calledOnce).to.equal(true);
      });     

  });
});