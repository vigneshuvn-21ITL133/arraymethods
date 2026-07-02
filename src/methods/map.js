Array.prototype.custommap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
  
  const arr = [1, 2, 3, 4, 5, 6];
  
  const result = arr.custommap((num) => num * 2);
  
  console.log(result);
  
  