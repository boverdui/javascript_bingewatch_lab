const assert = require('assert');
const BingeWatch = require('../bingewatch.js')
const Season = require('../season.js');
const TVShow = require('../tvshow.js');

describe('BingeWatch', function () {

  let season1, season2, season3, season4, season5, season6;
  let seasons;
  let tvShow;
  let bingeWatch;

  beforeEach(function() {
    season1 = new Season(1, 416);
    season2 = new Season(2, 416);
    season3 = new Season(3, 624);
    season4 = new Season(4, 624);
    season5 = new Season(5, 624);
    season6 = new Season(6, 624);
    seasons = [season1, season2, season3, season4, season5, season6]
    tvShow = new TVShow("Spiral", seasons);
    bingeWatch = new BingeWatch(tvShow, 6);
  });

  it('should be able to calculate the number of days', function () {
    const actual = bingeWatch.calculateDays();
    assert.strictEqual(actual, 10);
  });

});
