Array.prototype.customfindlast = function (callback) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

const arr = [2, 4, 6, 8, 10];

const result = arr.customfindlast((value) => {
  return value > 9;
});

console.log(result);
