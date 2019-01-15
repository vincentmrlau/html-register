const assert = require('assert')

describe('require(.html) should be allow', () => {
  require('./../html-register')
  it('require exports should be the same string', () => {
    const base = require('./hello-world.html')
    assert(base === '<p>hello world</p>')
  });
});