Array.prototype.customstring = function () {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += this[i];
  }
  return result;
};

const values = ["vigneshu ", "vn ", "informationtechnology"];

console.log(values.customstring());
