const radious = [3, 2, 1];
const calculationArea = function (radious) {
  const output = [];
  for (let i = 0; i < radious.length; i++) {
    output.push(Math.PI * radious[i] * radious[i]);
  }
  return output;

  //   console.log(output, "OUTPUT");
};
console.log(calculationArea(radious), "calculation");

///higher order function
const Area = function (x) {
  return Math.PI * x * x;
};

const Commoncalc = function (radious, logic) {
  const output = [];
  for (let i = 0; i < radious.length; i++) {
    output.push(logic(radious[i]));
  }
  return output;
};
console.log("COMMON", Commoncalc(radious, Area));

const arr = [2, 3, 4, 55];
const double = function (x) {
  return 2 * x;
};
const data = arr.map(double);
console.log("data", data);

////frilter
const filter = arr.filter((x) => x > 3);
console.log("filter", filter);

////reducer
const sum = arr.reduce(function (acc, cur) {
  acc = acc + cur;
  return acc;
}, 0);
console.log("sum", sum);

const maxValue = arr.reduce(function (max, curr) {
  if (max < curr) {
    max = curr;
  }
  return max;
}, 0);
console.log("max", maxValue);

const array = [
  { name: "jas", age: 10, job:"doctor" },
  { name: "ssas", age: 20 ,job:"Eng"},
  { name: "Nas", age: 40,job:"Dancer" },
];

const ageAbove = array.filter((x) => x.age > 10);
console.log("age", ageAbove);