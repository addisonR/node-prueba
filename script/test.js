var assert = require('chai').assert;
var app = require('../app.js');
 
describe('App', function() {
  it('app should return hello world', function() {
    assert.equal(app(),'hello world');
  });
});