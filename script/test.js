var chai = require('chai');
var assert = chai.assert;
var app = require('../app.js');
 
describe('App', function() {
  it('app should return hello world', function(done) {
    assert.equal(app(),'hello world');
	done();
  });
});