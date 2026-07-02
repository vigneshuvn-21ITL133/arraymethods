Array.prototype.customReverse = function () {
  const reverse = [];
  for (let i = this.length - 1; i >= 0; i--) {
    reverse.push(this[i]);
  }
  return reverse;
};

const reversearray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const finalresult = reversearray.customReverse();

console.log(finalresult);
