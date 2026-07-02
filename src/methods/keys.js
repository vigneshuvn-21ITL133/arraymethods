Array.prototype.customkeys = function () {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(i);
  }
  return result;
};

const area = ["kovai", "erode", "salem", "karur"];

console.log(area.customkeys());
