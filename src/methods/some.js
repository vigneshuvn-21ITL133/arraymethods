Array.prototype.customsome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const array = ["john", "ben", "nick", "robin", "henry"];
const final2 = array.customsome(function (values) {
  return values == "nick";
});
console.log(final2);
