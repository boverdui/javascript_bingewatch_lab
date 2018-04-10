const assert = require('assert');
const Season = require('../season.js');

describe('Season', function () {

  let season;

  beforeEach(function() {
    season1 = new Season(1, 416);
  });

  it('should have a number', function () {
    const actual = season1.number;
    assert.strictEqual(actual, 1);
  });

  it('should have a duration', function () {
    const actual = season1.duration;
    assert.strictEqual(actual, 416);
  });

});
