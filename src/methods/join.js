Array.prototype.customjoin = function (separator) {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += this[i];

    if (i < this.length) {
      result += separator;
    }
  }
  return result;
};

const names = ["john", "ben", "nick", "robert"];

console.log(names.customjoin(" "));
console.log(names.customjoin("|"));
