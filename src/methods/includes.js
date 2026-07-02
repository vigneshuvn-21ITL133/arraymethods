Array.prototype.customincludes = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == value) {
      return true;
    }
  }
  return false;
};

const name = ["nick", "ben", "john", "robert"];

console.log(name.customincludes("john"));
