const BingeWatch = function (tvShow, hours) {
  this.tvShow = tvShow;
  this.hours = hours;
}

BingeWatch.prototype.calculateDays = function () {
  const duration_minutes = this.tvShow.calculateTotalDuration();
  const duration_hours = duration_minutes / 60;
  const duration_days = Math.ceil(duration_hours / this.hours)
  return duration_days;
}

module.exports = BingeWatch;
