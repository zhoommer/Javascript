const fruits = [];

fruits.push("banana", "apple", "peach");

console.log("Fruits array length is: ", fruits.length);

fruits[5] = "mango";

console.log("Fruits array keys are: ", Object.keys(fruits));
console.log("Fruits array length is now: ", fruits.length);

const colors = ["red", "yellow", "blue"];
console.log("Colors: ", colors);
colors[5] = "purple";
colors.forEach((color, index) => {
  console.log(`${index}: ${color}`);
});

const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
};
