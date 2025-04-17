// Concatenating two arrays
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log("Concatenating two arrays: ", array3);

// Concatenating three arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);
console.log("Concatenating three arrays: ", numbers);

// Concatenating values to an array

const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric);

// Concatenating nested arrays

const arr1 = [[1]];
const arr2 = [2, [3]];

const arr3 = arr1.concat(arr2);
console.log("Concatenating nested arrays: ", arr3);
