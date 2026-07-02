Array.prototype.customfilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const even = [1, 2, 4, 5, 6, 8, 9, 10];

const display = even.customfilter((num) => {
  return num % 2 === 0;
});

console.log(display);
