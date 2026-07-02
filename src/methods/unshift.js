Array.prototype.customunshift = function (...values) {
  for (let i = this.length - 1; i >= 0; i--) {
    this[i + values.length] = this[i];
  }

  for (let j = 0; j < values.length; j++) {
    this[j] = values[j];
  }
  return this.length;
};

const arr = [3, 4, 5];

arr.customunshift(1, 2);
arr.customunshift(0);

console.log(arr);
