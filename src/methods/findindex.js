Array.prototype.customFindindex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return undefined;
};
const arrindex = ["nick", "ben", "john", "benny", "raj"];
const finalindex = arrindex.customFindindex(function (values) {
  return values == "raj";
});
console.log(finalindex);
