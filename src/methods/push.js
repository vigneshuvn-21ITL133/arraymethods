Array.prototype.custompush = function (value) {
  this[this.length] = value;
  return this[i];
};

const values = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(values.custompush(9));

console.log(values);
