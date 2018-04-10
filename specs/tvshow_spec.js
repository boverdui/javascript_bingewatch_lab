const assert = require('assert');
const Season = require('../season.js');
const TVShow = require('../tvshow.js');

describe('TVShow', function () {

  let season1, season2, season3, season4, season5, season6;
  let seasons;
  let tvShow;

  beforeEach(function() {
    season1 = new Season(1, 416);
    season2 = new Season(2, 416);
    season3 = new Season(3, 624);
    season4 = new Season(4, 624);
    season5 = new Season(5, 624);
    season6 = new Season(6, 624);
    seasons = [season1, season2, season3, season4, season5, season6]
    tvShow = new TVShow("Spiral", seasons);
  });

  it('should have a name', function () {
    const actual = tvShow.name;
    assert.strictEqual(actual, "Spiral");
  });

  it('should have seasons', function () {
    const actual = tvShow.seasons;
    assert.strictEqual(actual, seasons);
  });

  it('should be able to calculate the total duration', function () {
    const actual = tvShow.calculateTotalDuration();
    assert.strictEqual(actual, 3328);
  })

});
