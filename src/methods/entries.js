Array.prototype.customentries = function () {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(i, this[i]);
  }
  return result;
};

const names = ["john", "nick", "angel", "diane"];

console.log(names.customentries());
