Array.prototype.customshift = function () {
  const firstvalue = this[0];
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  this.length = this.length - 1;
  return firstvalue;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.customshift();
arr.customshift();

console.log(arr);
