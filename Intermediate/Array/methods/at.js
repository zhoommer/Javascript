// NOTE: The "at" method of Array instances takes an integer value and returns
// the item at that index, allowing for positive and negative integers.
// Negative integers count back from the last item in the array.


const array = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array.at(index)}`);

// Return the last value of an array

const cart = ["apple", "banana", "pear"];

function returnLast(arr) {
  return arr.at(-1);
}

const item = returnLast(cart);
console.log("Array's last item is: ", item);

cart.push("orange");
const item2 = returnLast(cart);
console.log("Array's last item is now: ", item2);

// Comparing methods

const colors = ["red", "green", "blue"];

// Using length property
const lengthWay = colors[colors.length - 2];
console.log("This is lengthWay: ", lengthWay);

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1);
console.log("This is sliceWay: ", sliceWay[0]);

// Using at() method
const atWay = colors.at(-2);
console.log("This is atWay: ", atWay);

