Array.prototype.customconcat = function (...arrays) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(this[i]);
  }
  for (let arr of arrays) {
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
    }
  }
  return result;
};

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [9, 10, 11, 12];
const arr4 = [13, 14, 15, 16];

const final = arr1.customconcat(arr2, arr3, arr4);

console.log(final);
