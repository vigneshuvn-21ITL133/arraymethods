Array.prototype.customforEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const names = ["nick", "ben", "john", "benny", "raj"];

names.customforEach(function (value, index) {
  console.log(value + " " + index);
});
