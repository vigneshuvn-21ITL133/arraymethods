Array.prototype.customEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i.this)) {
      return false;
    }
  }
  return true;
};

const even = [2, 4, 6, 8, 10];
const final = even.customEvery(function (values) {
  return values % 2 == 0;
});
console.log(final);
