const TVShow = function (name, seasons) {
  this.name = name;
  this.seasons = seasons;
}

TVShow.prototype.calculateTotalDuration = function () {
  let total_duration = 0;
  for (season of this.seasons) {
    total_duration += season.duration;
  }
  return total_duration;
}

module.exports = TVShow;
