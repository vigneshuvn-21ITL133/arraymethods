Array.prototype.customfind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

const even = [1, 2, 4, 5, 6, 8, 9, 10];

const display1 = even.customfind((num) => {
  return num % 3 == 0;
});

console.log(display1);
