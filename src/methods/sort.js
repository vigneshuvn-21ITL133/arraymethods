Array.prototype.customsort = function (compare) {
  if (!compare) {
    compare = function (a, b) {
      return a - b;
    };
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (compare(this[i], this[j]) > 0) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }

  return this;
};

const arr = [10, 2, 4, 6, 7, 12, 45, 112];
arr.customsort();
console.log(arr);
