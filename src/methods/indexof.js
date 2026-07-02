Array.prototype.customindexof = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return undefined;
};

const arr1 = ["john", "jack", "ben", "nick"];

arr1.push("robert", "stew", "steve");

console.log(arr1);
const finalresult = arr1.customindexof((find) => {
  return find === "steve";
});

console.log(finalresult);
