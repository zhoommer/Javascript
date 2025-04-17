// NOTE: The every() method of Array instances tests whether all elements in
// the array pass the test implemented by the provided function. It returns a
// Boolean value.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));

// Testing size of all array elements
function isBigEnough(element, index, array) {
  return element >= 10;
}

const arr1 = [12, 5, 8, 130, 44];
const arr2 = [12, 54, 18, 130, 44];

console.log("Arr1 elements bigger than 10", arr1.every(isBigEnough));
console.log("Arr2 elements bigger than 10", arr2.every(isBigEnough));


// Check if one array is a subset of another array
const isSubset = (a1, a2) => a2.every((element) => a1.includes(element));

console.log("Arr2 is subset of Arr1: ", isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));
console.log("Arr2 is subset of Arr1: ", isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]));
