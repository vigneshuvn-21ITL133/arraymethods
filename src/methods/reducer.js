Array.prototype.customreducer = function (callback, iv) {
  let acc = iv;
  let startindex = 0;

  if (acc == undefined) {
    acc = this[0];
    startindex = 1;
  }

  for (let i = startindex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const accarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result1 = accarr.customreducer((acc, cv) => acc + cv, 0);

console.log(result1);

const values = [
  { name: "messi", category: "football", gender: "male" },
  { name: "cr7", category: "football", gender: "male" },
  { name: "viratk_kohil", category: "cricket", gender: "male" },
  { name: "prabajan", category: "kabadi", gender: "male" },
  { name: "P.V. Sindhu", category: "badminton", gender: "female" },
];

const finaloutput = values.reduce((acc, cv) => {
  const key = cv.category;
  if (!acc[key]) acc[key] = [];
  acc[key].push(cv);
  return acc;
}, {});

console.log(finaloutput);

Array.prototype.customgroupby = function (callback) {
  const acc = [];
  for (let i = 0; i < this.length; i++) {
    const key = callback(this[i], i, this);

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(this[i]);
  }
  return acc;
};

const values1 = [
  { name: "messi", category: "football", gender: "male" },
  { name: "cr7", category: "football", gender: "male" },
  { name: "viratk_kohil", category: "cricket", gender: "male" },
  { name: "prabajan", category: "kabadi", gender: "male" },
  { name: "P.V. Sindhu", category: "badminton", gender: "female" },
];

const display = values1.customgroupby((value) =>
  value.gender === "male" ? "male" : "female"
);

console.log(display);
