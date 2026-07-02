Array.prototype.custompop = function () {
  const lastvalue = this[this.length - 1];
  this.length = this.length - 1;
  return lastvalue;
};

const arrpop = [1, 2, 3, 4, 5];

const last = arrpop.custompop();

console.log(last);
console.log(arrpop);
