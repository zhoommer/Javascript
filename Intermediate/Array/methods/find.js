// The find() method of Array instances returns the first element in the
// provided array that satisfied the provided testing function. If no values
// satisfy the testing function, undefined is returned.

const arr1 = [5, 12, 8, 130, 44];
const found = arr1.find((element) => element > 10);
console.log("Founded element is: ", found);

// Find an object in an array by one of its properties
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));

